/**
 * Modular (optional) version of search logic extracted from theme.js
 * Use if you later build a Rollup / ES module bundle.
 */

export function initSearch(options){
  const {
    overlaySel='[data-search-overlay]',
    triggerSel='[data-search-open]',
    closeSel='[data-search-close]',
    inputSel='[data-search-input]',
    resultsSel='[data-search-results]',
    useWorker=false,
    apiKey='API_KEY_PLACEHOLDER'
  } = options || {};

  const overlay = document.querySelector(overlaySel);
  const trigger = document.querySelector(triggerSel);
  const closeBtn = overlay ? overlay.querySelector(closeSel) : null;
  const input = overlay ? overlay.querySelector(inputSel) : null;
  const results = overlay ? overlay.querySelector(resultsSel) : null;

  if(!overlay || !trigger) return;

  const SEARCH_URL = useWorker
    ? '/search-index'
    : `/ghost/api/content/posts/?key=${apiKey}&limit=400&fields=title,slug,excerpt,published_at,primary_tag&order=published_at%20desc`;

  const state = { fuse:null, posts:[], loaded:false, fetching:false };

  trigger.addEventListener('click', open);
  closeBtn && closeBtn.addEventListener('click', close);
  document.addEventListener('keydown', e=>{
    if(e.key==='/' && overlay.hidden){
      if(document.activeElement.tagName !== 'INPUT'){
        e.preventDefault(); open();
      }
    }
    if(e.key==='Escape' && !overlay.hidden){
      close();
    }
  });
  input && input.addEventListener('input', debounce(handleInput, 180));
  overlay.addEventListener('click', e=>{
    if(e.target===overlay) close();
  });

  function open(){
    overlay.hidden=false;
    overlay.setAttribute('aria-hidden','false');
    document.body.classList.add('no-scroll');
    if(!state.loaded && !state.fetching){
      loadIndex();
    }
    setTimeout(()=> input && input.focus(),20);
  }
  function close(){
    overlay.hidden=true;
    overlay.setAttribute('aria-hidden','true');
    document.body.classList.remove('no-scroll');
    trigger.focus();
  }
  function loadIndex(){
    state.fetching=true;
    fetch(SEARCH_URL)
      .then(r=>r.json())
      .then(json=>{
        state.posts = json.posts || [];
        return import('https://cdn.jsdelivr.net/npm/fuse.js@6.6.2/dist/fuse.esm.min.js');
      })
      .then(mod=>{
        const Fuse = mod.default;
        state.fuse = new Fuse(state.posts,{
          keys:['title','excerpt','primary_tag.name'],
          threshold:0.32,
          ignoreLocation:true,
          minMatchCharLength:2
        });
        state.loaded=true;
      })
      .catch(()=> results && (results.innerHTML='<p>Error loading index.</p>'))
      .finally(()=> state.fetching=false);
  }
  function handleInput(){
    if(!results||!input) return;
    const q=input.value.trim();
    if(!q){
      results.innerHTML='<p class="vf-search-hint">Start typing to explore the archive…</p>';
      return;
    }
    if(!state.fuse){
      results.innerHTML='<p class="vf-search-hint">Index loading…</p>';
      return;
    }
    const matches=state.fuse.search(q).slice(0,20);
    if(!matches.length){results.innerHTML='<p>No results.</p>';return;}
    results.innerHTML=matches.map(m=>{
      const p=m.item;
      return `<article class="vf-search-hit">
        <a href="/${p.slug}/">
          <strong class="vf-search-title">${escapeHTML(p.title)}</strong>
          ${p.primary_tag?`<span class="vf-search-tag">${escapeHTML(p.primary_tag.name)}</span>`:''}
          <span class="vf-search-date">${formatDate(p.published_at)}</span>
          <span class="vf-search-excerpt">${escapeHTML((p.excerpt||'').slice(0,120))}…</span>
        </a>
      </article>`;
    }).join('');
  }

  function debounce(fn,wait){let t;return (...a)=>{clearTimeout(t);t=setTimeout(()=>fn.apply(this,a),wait);};}
  function formatDate(str){try{return new Date(str).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});}catch{return str;}}
  function escapeHTML(s){return (s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}

  return { open, close };
}