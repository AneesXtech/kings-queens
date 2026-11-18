/* find your signature: scroll-driven tabs */
(function(){
  const root=document.getElementById('find-your-signature');if(!root)return;
  const items=[...root.querySelectorAll('.fs-item')],tabs=[...root.querySelectorAll('.fs-tab')],imgs=[...root.querySelectorAll('.fs-img img')];
  const track=document.getElementById('fs-track'),stage=root.querySelector('.fs-stage'),box=root.querySelector('.fs-img'),big=document.getElementById('fs-big'),N=tabs.length;
  let cur=-1,tick=false;
  function sel(i,focus){
    if(i===cur){if(focus)tabs[i].focus({preventScroll:true});return}
    cur=i;
    items.forEach((it,k)=>it.classList.toggle('on',k===i));
    tabs.forEach((t,k)=>{const on=k===i;t.setAttribute('aria-selected',on);t.tabIndex=on?0:-1});
    imgs.forEach((m,k)=>{if(k===i&&m.loading==='lazy')m.loading='eager';m.classList.toggle('on',k===i)});
    box.style.setProperty('--tint',items[i].dataset.c);
    if(big)big.textContent='0'+(i+1);
    if(focus)tabs[i].focus({preventScroll:true});
  }
  function geo(){
    const top=parseFloat(getComputedStyle(stage).top)||0,r=track.getBoundingClientRect(),total=Math.max(1,track.offsetHeight-stage.offsetHeight);
    return{total,abs:r.top+window.scrollY-top,p:(top-r.top)/total};
  }
  function onScroll(){tick=false;const p=Math.min(1,Math.max(0,geo().p));sel(Math.min(N-1,Math.floor(p*N)))}
  function goTo(i){
    const g=geo(),html=document.documentElement,prev=html.style.scrollBehavior;
    html.style.scrollBehavior='auto';window.scrollTo(0,g.abs+g.total*((i+.5)/N));
    requestAnimationFrame(()=>{html.style.scrollBehavior=prev});
  }
  addEventListener('scroll',()=>{if(!tick){tick=true;requestAnimationFrame(onScroll)}},{passive:true});
  addEventListener('resize',onScroll);
  tabs.forEach((t,i)=>{
    t.addEventListener('click',()=>{sel(i);goTo(i)});
    t.addEventListener('keydown',e=>{
      let n=null;
      if(e.key==='ArrowRight'||e.key==='ArrowDown')n=(i+1)%N;
      else if(e.key==='ArrowLeft'||e.key==='ArrowUp')n=(i-1+N)%N;
      else if(e.key==='Home')n=0;else if(e.key==='End')n=N-1;
      if(n!==null){e.preventDefault();sel(n,true);goTo(n)}
    });
  });
  sel(0);onScroll();
})();