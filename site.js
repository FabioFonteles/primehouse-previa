// Prime House — layout e textos copiados de primehousebelem.com.br (site estático)
(function(){
const WA='5591980101026';
const wa=t=>`https://wa.me/${WA}?text=${encodeURIComponent(t)}`;
const I={
 msg:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>',
 search:'<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>',
 area:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3H5a2 2 0 0 0-2 2v3"></path><path d="M21 8V5a2 2 0 0 0-2-2h-3"></path><path d="M3 16v3a2 2 0 0 0 2 2h3"></path><path d="M16 21h3a2 2 0 0 0 2-2v-3"></path></svg>',
 bed:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"></path><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"></path><path d="M12 4v6"></path><path d="M2 18h20"></path></svg>',
 car:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"></path><path d="M7 14h.01"></path><path d="M17 14h.01"></path><rect width="18" height="8" x="3" y="10" rx="2"></rect><path d="M5 18v2"></path><path d="M19 18v2"></path></svg>',
 heart:'<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>',
 cmp:'<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="10" width="5" height="11" rx="0.5"></rect><rect x="10" y="3" width="5" height="18" rx="0.5"></rect><rect x="17" y="13" width="5" height="8" rx="0.5"></rect></svg>',
 waLogo:'<svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.87 11.87 0 0 0 12.04 0C5.46 0 .1 5.35.1 11.93c0 2.1.55 4.15 1.59 5.96L0 24l6.27-1.64a11.93 11.93 0 0 0 5.77 1.47h.01c6.58 0 11.94-5.35 11.95-11.93a11.86 11.86 0 0 0-3.48-8.42ZM12.05 21.8a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.72.97.99-3.63-.24-.37a9.88 9.88 0 0 1-1.52-5.25c0-5.47 4.46-9.92 9.93-9.92a9.85 9.85 0 0 1 7.02 2.91 9.86 9.86 0 0 1 2.91 7.02c0 5.47-4.46 9.92-9.97 9.86Zm5.45-7.42c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.88.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z"></path></svg>'
};
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const brl=v=>'R$ '+Number(v).toLocaleString('pt-BR',{maximumFractionDigits:0});
const m2=a=>String(a).replace('.',',');
const suites=c=>`${c.s} suíte${c.s>1?'s':''}`;const vagas=c=>c.vagas?`${c.vagas} vaga${c.vagas>1?'s':''}`:'';
const logo=(extra='')=>`<a class="brand brand-image ${extra}" href="index.html" aria-label="Prime House — página inicial"><img src="img/logo-prime-house-letreiro.png" alt="Prime House" width="1202" height="121"></a>`;

// ---------- cabeçalho, rodapé, WhatsApp flutuante ----------
const header=`<header class="site-header"><div class="wrap header-inner"><div class="header-brand-row">${logo()}<button class="nav-toggle" type="button" aria-label="Abrir menu" aria-controls="site-nav" aria-expanded="false"><span></span><span></span><span></span></button></div><div class="header-rule" aria-hidden="true"></div><nav id="site-nav" class="site-nav"><a href="index.html#filtros">Encontre sua casa</a><a href="index.html#mapa">Mapa</a><a href="condominios.html">Conheça os condomínios</a><a class="nav-offer" href="anuncie.html" title="Traga sua casa para o nosso portfólio"><span class="nav-full">Traga sua casa para o nosso portfólio</span><span class="nav-short">Traga sua casa</span></a><a class="nav-cta" href="${wa('Olá, procuro uma casa em condomínio fechado.')}" target="_blank" rel="noreferrer">Fale com o corretor</a></nav></div></header>`;
const footer=`<footer class="footer"><div class="wrap footer-inner">${logo('footer-brand')}<div class="footer-meta"><div>Fale com o corretor · CRECI 9493<br>WhatsApp <a href="${wa('Olá! Procuro uma casa em condomínio fechado.')}" target="_blank" rel="noreferrer">(91) 98010-1026</a><br>Exija o CRECI</div><div>Belém · Ananindeua · Marituba<br><a href="privacidade.html">Privacidade</a> · <button type="button" data-cadastro class="footer-cadastro">Meu cadastro</button></div></div></div></footer><a class="floating-whatsapp" href="${wa('Olá! Procuro uma casa em condomínio fechado.')}" target="_blank" rel="noopener noreferrer" aria-label="Fale com o corretor pelo WhatsApp" title="Fale com o corretor no WhatsApp">${I.waLogo}</a>`;
document.body.insertAdjacentHTML('afterbegin',header);
(function(){
 const path0=(location.pathname.split('/').pop()||'index.html');
 if(path0===''||path0==='index.html') document.body.classList.add('page-home');
 const hdr=document.querySelector('.site-header');
 const slot=document.createElement('div');
 slot.className='site-header-slot';
 hdr.parentNode.insertBefore(slot,hdr);
 slot.appendChild(hdr);
 const measureSlot=()=>{
  const wasCompact=hdr.classList.contains('is-compact');
  const wasOpen=hdr.classList.contains('is-open');
  if(wasCompact)hdr.classList.remove('is-compact');
  if(wasOpen)hdr.classList.remove('is-open');
  const h=Math.ceil(hdr.getBoundingClientRect().height);
  if(h>0)slot.style.height=h+'px';
  if(wasCompact)hdr.classList.add('is-compact');
  if(wasOpen)hdr.classList.add('is-open');
 };
 const tog=document.querySelector('.nav-toggle');
 const nav=document.getElementById('site-nav');
 const setOpen=on=>{
  hdr.classList.toggle('is-open',on);
  tog.setAttribute('aria-expanded',on?'true':'false');
  tog.setAttribute('aria-label',on?'Fechar menu':'Abrir menu');
 };
 tog.addEventListener('click',()=>setOpen(!hdr.classList.contains('is-open')));
 nav.addEventListener('click',e=>{if(e.target.closest('a'))setOpen(false)});
 document.addEventListener('keydown',e=>{if(e.key==='Escape')setOpen(false)});
 let compact=false,lockUntil=0,lockTimer=0;
 let setHeaderOffset=()=>{};
 const enterY=()=>window.matchMedia('(max-width:800px)').matches?180:220;
 const EXIT_Y=12,LOCK_MS=250;
 const onScroll=()=>{
  const now=performance.now();
  if(now<lockUntil)return;
  const y=window.scrollY||0;
  const next=compact?y>EXIT_Y:y>enterY();
  if(next!==compact){
   compact=next;
   hdr.classList.toggle('is-compact',compact);
   if(compact)setOpen(false);
   lockUntil=now+LOCK_MS;
   clearTimeout(lockTimer);
   lockTimer=setTimeout(onScroll,LOCK_MS+16);
  }
  if(typeof setHeaderOffset==='function')setHeaderOffset();
 };
 const onResize=()=>{
  if(window.matchMedia('(min-width:801px)').matches)setOpen(false);
  measureSlot();
  onScroll();
  if(typeof setHeaderOffset==='function')setHeaderOffset();
 };
 measureSlot();
 onScroll();
 window.addEventListener('scroll',onScroll,{passive:true});
 window.addEventListener('resize',onResize);
 if(document.readyState==='complete')measureSlot();
 else window.addEventListener('load',measureSlot);
 setHeaderOffset=()=>{
  const h=Math.ceil(hdr.getBoundingClientRect().height)||80;
  document.documentElement.style.setProperty('--header-offset',(h+20)+'px');
 };
 const headerOffset=()=>Math.ceil(hdr.getBoundingClientRect().height)+20;
 const jumpTo=(top)=>{
  const html=document.documentElement;
  const prev=html.style.scrollBehavior;
  html.style.scrollBehavior='auto';
  html.scrollTop=top;
  if(document.body)document.body.scrollTop=top;
  window.scrollTo(0,top);
  html.style.scrollBehavior=prev;
 };
 const scrollToEl=(el,smooth)=>{
  if(!el)return;
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const dest=()=>Math.max(0,Math.round(el.getBoundingClientRect().top+window.scrollY-headerOffset()));
  const tentative=window.scrollY+el.getBoundingClientRect().top-80;
  if(tentative>enterY()&&!compact){
   compact=true;
   hdr.classList.add('is-compact');
   setOpen(false);
  }
  setHeaderOffset();
  const far=()=>Math.abs(dest()-window.scrollY)>1800;
  const useSmooth=smooth&&!reduce&&!far();
  requestAnimationFrame(()=>{
   requestAnimationFrame(()=>{
    setHeaderOffset();
    const top=dest();
    if(useSmooth){
     window.scrollTo({top,behavior:'smooth'});
     setTimeout(()=>{setHeaderOffset();jumpTo(dest())},520);
    }else{
     jumpTo(top);
     setTimeout(()=>{setHeaderOffset();jumpTo(dest())},80);
    }
   });
  });
 };
 const onNavClick=e=>{
  const a=e.target.closest('a[href]');
  if(!a||a.target==='_blank'||a.classList.contains('nav-cta'))return;
  const url=new URL(a.href,location.href);
  if(url.origin!==location.origin||!url.hash)return;
  const here=(location.pathname.split('/').pop()||'index.html');
  const there=(url.pathname.split('/').pop()||'index.html');
  const same=(there===''||there==='index.html')&&(here===''||here==='index.html');
  if(!same)return;
  const el=document.getElementById(url.hash.slice(1));
  if(!el)return;
  e.preventDefault();
  history.pushState(null,'',url.hash);
  scrollToEl(el,true);
  mark();
 };
 document.addEventListener('click',onNavClick);
 const mark=()=>{
  const path=(location.pathname.split('/').pop()||'index.html');
  const hash=location.hash;
  nav.querySelectorAll('a[href]').forEach(a=>{
   if(a.classList.contains('nav-cta'))return;
   const href=a.getAttribute('href')||'';
   let on=false;
   if(path==='condominios.html'||path==='condominio.html') on=href.indexOf('condominios.html')!==-1;
   else if(path==='anuncie.html') on=href.indexOf('anuncie.html')!==-1;
   else if(path==='casa.html') on=href.indexOf('#filtros')!==-1;
   else if(path==='index.html'||path===''){
    if(hash==='#mapa') on=href.indexOf('#mapa')!==-1;
    else if(hash==='#filtros'||hash==='#casas'||hash==='') on=href.indexOf('#filtros')!==-1;
   }
   if(on)a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current');
  });
 };
 mark();
 window.addEventListener('hashchange',()=>{mark();const el=document.getElementById((location.hash||'').slice(1));if(el)scrollToEl(el,false)});
 const fixHash=()=>{const el=document.getElementById((location.hash||'').slice(1));if(el)scrollToEl(el,false)};
 requestAnimationFrame(()=>requestAnimationFrame(fixHash));
 window.addEventListener('load',fixHash);
 setHeaderOffset();
})();


// ---------- cadastro para favoritos + balão de convite ----------
const LS_LEAD='primehouse_lead_profile';
const getLeadProfile=()=>{
  try{
    const o=JSON.parse(localStorage.getItem(LS_LEAD)||'null');
    return o&&typeof o==='object'&&typeof o.name==='string'?o:null;
  }catch(e){return null}
};
const hasLeadProfile=()=>{
  const o=getLeadProfile();
  if(!o)return false;
  const tel=String(o.tel||'').replace(/\D/g,'');
  return String(o.name||'').trim().length>=2&&tel.length>=8;
};
const saveLeadProfile=p=>{
  const prev=getLeadProfile()||{};
  const next={
    name:String(p.name||'').trim(),
    tel:String(p.tel||'').trim(),
    savedAt:p.savedAt||prev.savedAt||new Date().toISOString()
  };
  try{localStorage.setItem(LS_LEAD,JSON.stringify(next))}catch(e){}
  return next;
};
const leadFirstName=()=>{
  const n=(getLeadProfile()||{}).name||'';
  return n.trim().split(/\s+/)[0]||n.trim();
};

let pendingFav=null, regMode='convite', regSource='convite';
let openReg=null, closeReg=null;
const attachLeadAPI=()=>{if(!window.PH)return;PH.openReg=openReg;PH.closeReg=closeReg;PH.getLeadProfile=getLeadProfile;PH.hasLeadProfile=hasLeadProfile;PH.saveLeadProfile=saveLeadProfile;PH.leadFirstName=leadFirstName;PH.LS_LEAD=LS_LEAD};

const ready=()=>{document.body.insertAdjacentHTML('beforeend',footer);
const modal=`<div class="reg-overlay" id="reg" role="dialog" aria-modal="true" aria-labelledby="reg-t"><div class="reg-modal"><button class="reg-close" type="button" aria-label="Fechar" data-regclose>×</button><h2 id="reg-t">Salve suas casas favoritas</h2><p class="side" id="reg-side">Informe seu nome e WhatsApp para guardar suas casas favoritas.</p><form id="reg-f" autocomplete="on"><label for="reg-n">Nome completo</label><input id="reg-n" type="text" name="name" autocomplete="name" required minlength="2" placeholder="Seu nome"><label for="reg-w">WhatsApp com DDD</label><input id="reg-w" type="tel" name="tel" autocomplete="tel" inputmode="tel" required placeholder="(91) 99999-9999"><button class="btn" type="submit" id="reg-submit">Salvar nos favoritos</button><button class="btn secondary" type="button" data-regclose id="reg-skip">Agora não</button></form></div></div>`;
const bubble=`<div class="registration-bubble" id="bub" hidden><button class="registration-bubble-content" type="button" data-cadastro>${I.msg.replace('width="16" height="16"','width="20" height="20"')}<span><span class="registration-bubble-title">Encontre sua casa com nossa ajuda</span><span>Cadastre-se para uma busca mais personalizada.</span><span class="registration-bubble-action">Quero me cadastrar →</span></span></button><button class="registration-bubble-close" type="button" aria-label="Fechar convite" id="bubx">×</button></div>`;
document.body.insertAdjacentHTML('beforeend',modal+bubble);
const reg=document.getElementById('reg'),bub=document.getElementById('bub');
const ss=(k,v)=>{try{return v===undefined?sessionStorage.getItem(k):sessionStorage.setItem(k,v)}catch(e){return null}};
const introOn=()=>document.documentElement.classList.contains('ph-px-intro')||!!document.querySelector('.ph-open');
let bubHideT=0;
const showBub=()=>{
  if(hasLeadProfile())return;
  if(ss('ph-balao')==='0'||document.body.dataset.noinvite)return;
  if(reg.classList.contains('on'))return;
  clearTimeout(bubHideT);
  bub.hidden=false;
  requestAnimationFrame(()=>requestAnimationFrame(()=>bub.classList.add('is-in')));
};
const hideBub=(immediate)=>{
  bub.classList.remove('is-in');
  const finish=()=>{bub.hidden=true;bub.removeEventListener('transitionend',onEnd);clearTimeout(bubHideT)};
  const onEnd=e=>{if(!e||e.propertyName==='opacity'||e.propertyName==='transform')finish()};
  if(immediate||window.matchMedia('(prefers-reduced-motion: reduce)').matches){finish();return}
  bub.addEventListener('transitionend',onEnd);
  clearTimeout(bubHideT);
  bubHideT=setTimeout(finish,1100);
};
const fillRegForm=()=>{
  const o=getLeadProfile()||{};
  const set=(id,v)=>{const el=document.getElementById(id);if(el)el.value=v||''};
  set('reg-n',o.name);set('reg-w',o.tel);
};
const paintReg=()=>{
  const t=document.getElementById('reg-t');
  const side=document.getElementById('reg-side');
  const sub=document.getElementById('reg-submit');
  const skip=document.getElementById('reg-skip');
  const subTxt='Informe seu nome e WhatsApp para guardar suas casas favoritas.';
  if(regMode==='favoritos'){
    const fromCasa=regSource==='casa';
    if(t)t.textContent=fromCasa?'Salve esta casa nos seus favoritos':'Salve suas casas favoritas';
    if(side)side.textContent=subTxt;
    if(sub)sub.textContent='Salvar nos favoritos';
    if(skip)skip.hidden=true;
  }else if(regMode==='editar'){
    if(t)t.textContent='Atualizar seus dados';
    if(side)side.textContent='Atualize seu nome e WhatsApp.';
    if(sub)sub.textContent='Salvar alterações';
    if(skip){skip.hidden=false;skip.textContent='Fechar'}
  }else{
    if(t)t.textContent='Salve suas casas favoritas';
    if(side)side.textContent=subTxt;
    if(sub)sub.textContent='Salvar nos favoritos';
    if(skip){skip.hidden=false;skip.textContent='Agora não'}
  }
};
openReg=(opts={})=>{
  regSource=opts.source||'convite';
  regMode=opts.mode||(hasLeadProfile()?'editar':'convite');
  pendingFav=opts.pendingFav||null;
  if(pendingFav&&!hasLeadProfile())regMode='favoritos';
  if(pendingFav&&hasLeadProfile())regMode=opts.mode||'favoritos';
  fillRegForm();
  paintReg();
  reg.classList.add('on');
  hideBub();
  setTimeout(()=>{const n=document.getElementById('reg-n');if(n)n.focus()},50);
};
closeReg=()=>{
  reg.classList.remove('on');
  pendingFav=null;
  ss('ph-convite','1');
  if(!hasLeadProfile()&&ss('ph-balao')!=='0')showBub();
};
document.addEventListener('click',e=>{
  if(e.target.closest('[data-cadastro]')){
    e.preventDefault();
    openReg({mode:hasLeadProfile()?'editar':'convite'});
  }
  if(e.target.closest('[data-regclose]')||e.target===reg)closeReg();
});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&reg.classList.contains('on'))closeReg()});
document.getElementById('bubx').onclick=()=>{ss('ph-balao','0');hideBub()};
document.getElementById('reg-f').addEventListener('submit',e=>{
  e.preventDefault();
  const n=document.getElementById('reg-n').value.trim();
  const w=document.getElementById('reg-w').value.trim();
  if(n.length<2||w.replace(/\D/g,'').length<8)return;
  const wasNew=!hasLeadProfile();
  const toSave=pendingFav;
  saveLeadProfile({name:n,tel:w});
  ss('ph-balao','0');
  hideBub(true);
  const mode=regMode;
  pendingFav=null;
  reg.classList.remove('on');
  if(toSave&&window.PH&&typeof PH.toggleFav==='function')PH.toggleFav(toSave, {force:true, added:true, silent:true});
  if(window.PH&&typeof PH.onLeadSaved==='function')PH.onLeadSaved({wasNew,savedHouse:toSave,mode});
  else if(window.PH&&typeof PH.toast==='function'){
    PH.toast(toSave&&wasNew?'Cadastro concluído! Casa salva nos seus favoritos.':(mode==='editar'?'Dados atualizados.':'Cadastro concluído!'));
  }
});
if(!document.body.dataset.noinvite&&ss('ph-balao')!=='0'&&!hasLeadProfile()){
  const kick=()=>{if(!reg.classList.contains('on'))showBub()};
  const waitIntro=()=>{if(introOn()){requestAnimationFrame(waitIntro);return}setTimeout(kick,800)};
  if(introOn())waitIntro();
  else setTimeout(kick,1100);
}
attachLeadAPI();

};

if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ready);else ready();

// ---------- utilitários de dados ----------
const houses=()=>(typeof CASAS!=='undefined'?CASAS:[]);
const condName=c=>c.cond;
const photoList=c=>Array.isArray(c.img)?c.img.filter(Boolean):[];
const photoAttr=c=>photoList(c).map(encodeURIComponent).join(' ');
const cardDots=c=>{const n=photoList(c).length;return n>1?`<span class="card-dots" aria-hidden="true">${Array.from({length:n},(_,i)=>`<i${i===0?' class="on"':''}></i>`).join('')}</span>`:''};
const cardMedia=c=>`<a class="card-media" href="casa.html?id=${encodeURIComponent(c.id)}" data-photos="${photoAttr(c)}"><span class="card-shots"><img class="card-shot is-on" src="${esc(photoList(c)[0]||'')}" alt="Fachada da casa no ${esc(c.cond)}" loading="lazy"><img class="card-shot" alt="" aria-hidden="true"></span><span class="tag">${esc(c.cond)}</span>${cardDots(c)}</a>`;
const cardActions=c=>`<div class="card-actions"><button type="button" class="card-act card-fav" data-fav="${esc(c.id)}" aria-label="Salvar nos favoritos" aria-pressed="false" title="Salvar nos favoritos">${I.heart}</button><button type="button" class="card-act card-cmp" data-cmp="${esc(c.id)}" aria-label="Comparar esta casa" aria-pressed="false" title="Comparar">${I.cmp}<span>Comparar</span></button></div>`;
const cardHTML=c=>`<article class="card" data-id="${esc(c.id)}">${cardMedia(c)}${cardActions(c)}<div class="card-body"><div class="location">${esc(c.cidade)}${c.bairro&&c.bairro!=='Centro'?' · '+esc(c.bairro):''}</div><h3>${esc(c.cond)} · ${c.q} quartos</h3><div class="specs">${c.area?`<span>${I.area}${m2(c.area)} m²</span>`:''}<span>${I.bed}${suites(c)}</span><span>${I.car}${vagas(c)}</span></div><div class="card-bottom"><div class="price">${brl(c.valor)}</div><a href="casa.html?id=${encodeURIComponent(c.id)}" class="text-link">Conhecer a casa</a></div></div></article>`;

const starsRow=(c)=>{
 if(typeof c.googleRating!=='number'||!c.googleReviewsCount)return '';
 const r=c.googleRating, n=Math.round(r), label=String(r).replace('.',',');
 let s='';
 for(let i=1;i<=5;i++) s+=i<=n?'★':'☆';
 const q=c.googleReviewsCount===1?'avaliação':'avaliações';
 return `<div class="g-rating" title="Avaliações no Google"><span class="g-stars" aria-hidden="true">${s}</span><strong>${label}</strong><span class="g-count">${c.googleReviewsCount.toLocaleString('pt-BR')} ${q} no Google</span></div>`;
};
const reviewCard=r=>{
 const n=Math.round(Number(r.estrelas)||0);
 let s='';
 for(let i=1;i<=5;i++) s+=i<=n?'★':'☆';
 return `<figure class="g-review"><div class="g-review-top"><strong>${esc(r.nome)}</strong><span class="g-stars" aria-label="${n} de 5 estrelas">${s}</span></div><blockquote>${esc(r.texto)}</blockquote></figure>`;
};
const reviewsBlock=c=>{
 if(typeof c.googleRating!=='number'||!c.googleReviewsCount)return `<section class="g-reviews"><h3>Avaliações no Google</h3><p>Não encontramos avaliações acessíveis deste condomínio no Google.</p></section>`;
 const list=(c.googleReviews||[]).map(reviewCard).join('');
 const nota=c.googleReviewsNota?`<p class="g-note">${esc(c.googleReviewsNota)}</p>`:'';
 const empty=!list?`<p>A nota média está disponível, mas não localizamos comentários de visitantes que pudéssemos reproduzir com nome e texto fiéis.</p>`:'';
 return `<section class="g-reviews"><h3>Avaliações no Google</h3>${starsRow(c)}${c.googlePlace?`<p class="g-place">Referente ao lugar “${esc(c.googlePlace)}” no Google.</p>`:''}${list?`<div class="g-review-list">${list}</div>`:empty}${nota}<p class="g-note">Comentários reais de visitantes no Google, reproduzidos fielmente. A nota média considera o total de avaliações do lugar.</p></section>`;
};
const amenityBlock=(title,arr)=>arr&&arr.length?`<div class="amenity-col"><h3>${esc(title)}</h3><ul class="amenity-list">${arr.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>`:'';
const photosBlock=c=>{
 const fotos=c.fotosAreasComuns||[];
 if(!fotos.length)return '';
 return `<div class="condo-photos">${fotos.map((f,i)=>`<button type="button" data-lx="${i}" aria-label="${esc(f.legenda||'Ampliar foto')}"><img src="${esc(f.src)}" alt="${esc(f.legenda||('Área comum do '+c.nome))}" loading="lazy"><span>${esc(f.legenda||'')}</span></button>`).join('')}</div>`;
};
const openCondoLightbox=(fotos,start)=>{
 let i=start||0;
 const box=document.createElement('div');
 box.className='lightbox on';
 box.setAttribute('role','dialog');
 box.setAttribute('aria-modal','true');
 const img=document.createElement('img');
 const cap=document.createElement('p');
 cap.className='lx-cap';
 const show=()=>{img.src=fotos[i].src;img.alt=fotos[i].legenda||'';cap.textContent=fotos[i].legenda||'';};
 const close=()=>{box.remove();document.removeEventListener('keydown',onKey);};
 const onKey=e=>{if(e.key==='Escape')close();if(e.key==='ArrowRight'){i=(i+1)%fotos.length;show()}if(e.key==='ArrowLeft'){i=(i-1+fotos.length)%fotos.length;show()}};
 box.innerHTML='<button class="lx" type="button" aria-label="Fechar">×</button><button class="lp" type="button" aria-label="Anterior">‹</button><button class="ln" type="button" aria-label="Seguinte">›</button>';
 box.appendChild(img);box.appendChild(cap);
 box.querySelector('.lx').onclick=close;
 box.querySelector('.lp').onclick=()=>{i=(i-1+fotos.length)%fotos.length;show()};
 box.querySelector('.ln').onclick=()=>{i=(i+1)%fotos.length;show()};
 box.addEventListener('click',e=>{if(e.target===box)close()});
 document.addEventListener('keydown',onKey);
 document.body.appendChild(box);
 show();
};

const condList=()=>{const H=houses();const used=new Set();
 const base=(typeof CONDS!=='undefined'?CONDS:[]).map(c=>{const hs=H.filter(h=>(c.casas||[]).includes(h.cond)).sort((a,b)=>a.valor-b.valor);hs.forEach(h=>used.add(h.id));return {...c,_houses:hs}});
 const extra={};H.filter(h=>!used.has(h.id)).forEach(h=>{(extra[h.cond]=extra[h.cond]||{id:null,nome:h.cond,cidade:h.cidade,bairro:h.bairro,resumo:'',_houses:[]})._houses.push(h)});
 const ord={'Belém':0,'Ananindeua':1,'Marituba':2};
 return [...base,...Object.values(extra)].sort((a,b)=>(b._houses.length>0)-(a._houses.length>0)||(ord[a.cidade]??9)-(ord[b.cidade]??9)||b._houses.length-a._houses.length||a.nome.localeCompare(b.nome,'pt-BR'))};
const houseLine=h=>{const d=String(h.nome||'').split(' · ').slice(1).join(' · ')||`casa de ${h.q} quartos`;return `<li><a href="casa.html?id=${encodeURIComponent(h.id)}"><span>${esc(h.cond)} · ${esc(d)}</span><strong>${brl(h.valor)}</strong></a></li>`};
const condoHTML=(c,full)=>{const n=c._houses.length,cn=n?c._houses[0].cond:c.nome,lim=full?n:4;const title=c.id?`<a href="condominio.html?id=${c.id}">${esc(c.nome)}</a>`:esc(c.nome);
 const cover=(c.fotosAreasComuns&&c.fotosAreasComuns[0])?`<a class="condo-cover" href="condominio.html?id=${c.id}"><img src="${esc(c.fotosAreasComuns[0].src)}" alt="${esc(c.fotosAreasComuns[0].legenda||('Área comum do '+c.nome))}" loading="lazy"></a>`:'';
 const list=n?`<div class="condo-houses-t">Casas disponíveis aqui · ${n}</div><ul class="condo-houses">${c._houses.slice(0,lim).map(houseLine).join('')}</ul>${n>lim?`<a class="text-link" href="condominio.html?id=${c.id}">Ver as ${n} casas</a>`:''}`:`<p>Sem casas no nosso catálogo no momento.</p><a class="btn secondary" href="${wa(`Olá! Quero uma casa no condomínio ${c.nome}.`)}" target="_blank" rel="noreferrer">Quero uma casa aqui</a>`;
 return `<article class="condo">${cover}<div class="condo-body"><div class="location">${esc(c.cidade)}${c.bairro?' · '+esc(c.bairro):''}</div><h3>${title}</h3>${starsRow(c)}<p>${esc(c.resumo||'Registre seu interesse para receber atendimento e buscar uma casa neste condomínio.')}</p>${list}<div class="condo-links">${c.maps?`<a class="text-link" href="${c.maps}" target="_blank" rel="noreferrer">Ver no Google Maps</a>`:''}${c.id?`<a class="text-link" href="condominio.html?id=${c.id}">Conhecer o condomínio</a>`:''}</div>${c.resumo?'<p style="font-size:12px">Informações do material dos imóveis.</p>':''}</div></article>`};
// ---------- mapa (Leaflet, no estilo do HomeTrack, paleta Prime House) ----------
const curtoPreco=v=>{
  if(v>=1e6){const n=v/1e6;let s;if(n>=10)s=String(Math.round(n));
    else if(Math.abs(n-Math.round(n*10)/10)<0.02)s=(Math.round(n*10)/10).toFixed(1).replace('.',',').replace(/,0$/,'');
    else s=(Math.round(n*100)/100).toFixed(2).replace('.',',').replace(/0$/,'');
    return 'R$ '+s+' mi';}
  return 'R$ '+Math.round(v/1e3)+' mil';
};
const houseDetalhe=h=>{const d=String(h.nome||'').split(' · ').slice(1).join(' · ');return d||`casa de ${h.q} quartos`;};
const condoOf=h=>(typeof CONDS!=='undefined'?CONDS:[]).find(c=>(c.casas||[]).includes(h&&h.cond))||null;
const coordsOf=t=>{
  if(!t)return null;
  if(typeof t.lat==='number'&&typeof t.lng==='number')return t;
  const c=t.cond?condoOf(t):null;
  return (c&&typeof c.lat==='number'&&typeof c.lng==='number')?c:null;
};
const leafletTiles=m=>L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',{maxZoom:19,attribution:'Tiles &copy; Esri'}).addTo(m);
const pinIcon=(label,n)=>L.divIcon({className:'map-pin-wrap',html:`<div class="map-pin">${n>1?`<span class="map-pin-n">${n}</span>`:''}<span>${esc(label)}</span></div>`,iconSize:[0,0],iconAnchor:[0,0]});
const popupNota=c=>c&&c.coordPrecisao==='via'?'Localização aproximada (avenida do condomínio).':c&&c.coordPrecisao==='complexo'?'Localização aproximada do complexo.':c&&c.coordPrecisao==='bairro'?'Localização aproximada (bairro do condomínio).':'Localização aproximada do condomínio.';
const popupHTML=(c,hs)=>{
  const loc=`${esc(hs[0].cidade)}${hs[0].bairro&&hs[0].bairro!=='Centro'?' · '+esc(hs[0].bairro):''}`;
  const nota=popupNota(c);
  if(hs.length===1){const h=hs[0];
    return `<div class="map-card"><strong>${esc(h.cond)}</strong><span class="map-card-det">${esc(houseDetalhe(h))}</span><span class="map-card-loc">${loc}</span><span class="map-card-preco">${brl(h.valor)}</span><a href="casa.html?id=${encodeURIComponent(h.id)}">Ver a casa →</a><small>${nota}</small></div>`;}
  const lis=hs.map(h=>`<li><a href="casa.html?id=${encodeURIComponent(h.id)}"><span>${esc(houseDetalhe(h))}</span><strong>${brl(h.valor)}</strong></a></li>`).join('');
  return `<div class="map-card"><strong>${esc(hs[0].cond)}</strong><span class="map-card-loc">${loc}</span><span class="map-card-det">${hs.length} casas neste condomínio</span><ul class="map-card-list">${lis}</ul><small>${nota}</small></div>`;
};
let _vitrineMap,_vitrineLayer;
const initVitrineMap=()=>{
  if(_vitrineMap||typeof L==='undefined')return _vitrineMap;
  const el=document.getElementById('mapa-canvas');if(!el)return null;
  _vitrineMap=L.map('mapa-canvas',{scrollWheelZoom:false}).setView([-1.36,-48.43],11);
  leafletTiles(_vitrineMap);_vitrineLayer=L.layerGroup().addTo(_vitrineMap);
  const fix=()=>_vitrineMap&&_vitrineMap.invalidateSize();
  setTimeout(fix,200);window.addEventListener('resize',fix);
  if('IntersectionObserver'in window)new IntersectionObserver(es=>{if(es.some(e=>e.isIntersecting))fix()},{threshold:.1}).observe(el);
  return _vitrineMap;
};
const pintaMapa=houses=>{
  if(!initVitrineMap()||!_vitrineLayer)return;
  _vitrineLayer.clearLayers();
  const groups=new Map();
  (houses||[]).forEach(h=>{const c=coordsOf(h);if(!c)return;const k=c.id||(c.lat+','+c.lng);const g=groups.get(k)||{coords:c,houses:[]};g.houses.push(h);groups.set(k,g)});
  const pts=[];
  groups.forEach(g=>{
    const hs=g.houses.slice().sort((a,b)=>a.valor-b.valor);
    const label=hs.length===1?curtoPreco(hs[0].valor):(hs.length+' casas');
    L.marker([g.coords.lat,g.coords.lng],{icon:pinIcon(label,0),alt:`${hs[0].cond}, ${label}`,riseOnHover:true})
      .addTo(_vitrineLayer)
      .bindPopup(popupHTML(g.coords,hs),{maxWidth:340,className:'map-pop'});
    pts.push([g.coords.lat,g.coords.lng]);
  });
  if(pts.length===1) _vitrineMap.setView(pts[0],14);
  else if(pts.length){
    const lats=pts.map(p=>p[0]).sort((a,b)=>a-b), lngs=pts.map(p=>p[1]).sort((a,b)=>a-b);
    const mid=lats[Math.floor(lats.length/2)];
    const core=pts.filter(p=>Math.abs(p[0]-mid)<0.08);
    const use=core.length>=Math.max(2,pts.length-1)?core:pts;
    _vitrineMap.fitBounds(use,{padding:[36,36],maxZoom:13});
  }else _vitrineMap.setView([-1.36,-48.43],12);
  setTimeout(()=>_vitrineMap.invalidateSize(),180);
};
const mountMiniMap=(elId,target)=>{
  const el=document.getElementById(elId),c=coordsOf(target);
  if(!el||!c||typeof L==='undefined'){if(el&&el.parentElement)el.parentElement.hidden=true;return null;}
  const m=L.map(elId,{scrollWheelZoom:false}).setView([c.lat,c.lng],14);
  leafletTiles(m);
  L.circle([c.lat,c.lng],{radius:c.coordPrecisao==='via'||c.coordPrecisao==='complexo'||c.coordPrecisao==='bairro'?400:320,color:'#cfb681',weight:2,fillColor:'#cfb681',fillOpacity:.22}).addTo(m);
  setTimeout(()=>m.invalidateSize(),200);
  return m;
};

/* ---- filtros: faixa de investimento e itens da casa (não do condomínio) ---- */
const foldTxt=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const houseBlob=h=>[h.nome,h.desc,...(h.dif||[])].map(foldTxt).join(' | ');
const houseHasItem=(h,key)=>{
  const blob=houseBlob(h);
  const desc=foldTxt(h.desc);
  const tags=(h.dif||[]).map(foldTxt);
  const nome=foldTxt(h.nome);
  if(key==='piscina'){
    const t=nome+' | '+desc+' | '+tags.join(' | ');
    if(/piscina privativa/.test(t)||/piscina com deck/.test(t))return true;
    if(/voltada para a piscina/.test(desc))return true;
    if(/gourmet com churrasqueira e piscina/.test(desc))return true;
    return false;
  }
  if(key==='sauna')return /\bsaunas?\b/.test(blob);
  if(key==='closet')return /\bclosets?\b/.test(blob);
  if(key==='semi')return /semi[\s-]?mobiliad/.test(blob);
  if(key==='mobiliado'){
    if(/semi[\s-]?mobiliad/.test(blob))return false;
    return /\bmobiliad/.test(blob);
  }
  if(key==='solar'){
    return /(?:placas?|painel|paineis)[\s-]+solar(?:es)?|energia[\s-]+solar|fotovoltaic/.test(blob);
  }
  return false;
};
const INVEST=(()=>{const vals=(typeof CASAS!=="undefined"?CASAS:[]).map(c=>+c.valor).filter(v=>v>0);if(!vals.length)return{min:690000,max:9200000,step:5000};return{min:Math.min(...vals),max:Math.max(...vals),step:5000};})();
const curtoFaixa=v=>{
  v=Math.round(+v||0);
  if(v>=1e6){
    const n=v/1e6;
    return 'R$ '+n.toLocaleString('pt-BR',{maximumFractionDigits:3,minimumFractionDigits:0})+' mi';
  }
  return 'R$ '+Math.round(v/1000).toLocaleString('pt-BR')+' mil';
};
const faixaLabel=(a,b)=>curtoFaixa(a)+' – '+curtoFaixa(b);

window.PH=Object.assign(window.PH||{},{houseLine,vagas,wa,I,esc,brl,m2,suites,cardHTML,cardMedia,cardActions,photoList,condoHTML,condList,houses,coordsOf,pintaMapa,initVitrineMap,mountMiniMap,curtoPreco,starsRow,reviewsBlock,amenityBlock,photosBlock,openCondoLightbox,houseHasItem,INVEST,curtoFaixa,faixaLabel,LS_LEAD,getLeadProfile,hasLeadProfile,saveLeadProfile,leadFirstName});
attachLeadAPI();

/* ---- vitrine: parallax no hover + troca suave de fotos ao permanecer ---- */
(()=>{
  const canHover=()=>window.matchMedia('(hover:hover) and (pointer:fine)').matches&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const photosOf=media=>(media.getAttribute('data-photos')||'').split(/\s+/).filter(Boolean).map(decodeURIComponent);
  const preload=src=>{if(!src)return;const im=new Image();im.src=src};
  const dots=(media,idx)=>media.querySelectorAll('.card-dots i').forEach((d,i)=>d.classList.toggle('on',i===idx));
  const applyShift=(media,nx,ny)=>{
    const tx=(nx*16).toFixed(2),ty=(ny*12).toFixed(2);
    media.querySelectorAll('.card-shot').forEach(img=>{img.style.transform=`translate3d(${tx}px,${ty}px,0) scale(1.2)`});
  };
  const showIdx=(media,st,idx)=>{
    const photos=st.photos; if(!photos.length)return;
    idx=(idx+photos.length)%photos.length;
    const shots=[...media.querySelectorAll('.card-shot')];
    if(shots.length<2){if(shots[0])shots[0].src=photos[idx];st.idx=idx;dots(media,idx);return}
    const on=shots.find(s=>s.classList.contains('is-on'))||shots[0];
    const off=shots.find(s=>s!==on)||shots[1];
    if(off.getAttribute('src')===photos[idx]&&off.classList.contains('is-on')){st.idx=idx;dots(media,idx);return}
    const flip=()=>{
      off.classList.add('is-on');
      on.classList.remove('is-on');
      st.idx=idx;
      dots(media,idx);
      preload(photos[(idx+1)%photos.length]);
    };
    off.src=photos[idx];
    if(off.complete)flip();
    else off.onload=()=>{off.onload=null;flip()};
  };
  const enter=(media)=>{
    if(media._ph)return;
    const photos=photosOf(media);
    const st={photos,idx:0,dwell:0,cycle:0,raf:0,nx:0,ny:0};
    media._ph=st;
    media.classList.add('is-hovering');
    if(photos[1])preload(photos[1]);
    if(photos.length>1){
      st.dwell=setTimeout(()=>{
        if(!media._ph)return;
        showIdx(media,st,1);
        st.cycle=setInterval(()=>showIdx(media,st,st.idx+1),1200);
      },520);
    }
  };
  const leave=(media)=>{
    const st=media._ph; if(!st)return;
    clearTimeout(st.dwell); clearInterval(st.cycle);
    media._ph=null;
    media.classList.add('is-leaving');
    media.classList.remove('is-hovering');
    const on=media.querySelector('.card-shot.is-on');
    const cover=st.photos[0];
    if(cover&&on&&on.getAttribute('src')!==cover) showIdx(media,{photos:st.photos,idx:1},0);
    else dots(media,0);
    media.querySelectorAll('.card-shot').forEach(img=>{img.style.transform=''});
    setTimeout(()=>media.classList.remove('is-leaving'),500);
  };
  const move=(media,e)=>{
    if(!media._ph)enter(media);
    const r=media.getBoundingClientRect();
    const nx=((e.clientX-r.left)/Math.max(r.width,1))*2-1;
    const ny=((e.clientY-r.top)/Math.max(r.height,1))*2-1;
    applyShift(media,Math.max(-1,Math.min(1,nx)),Math.max(-1,Math.min(1,ny)));
  };
  document.addEventListener('pointerover',e=>{
    if(e.pointerType&&e.pointerType!=='mouse')return;
    if(!canHover())return;
    const media=e.target.closest&&e.target.closest('.card-media');
    if(!media||media._ph)return;
    enter(media);
  },true);
  document.addEventListener('pointermove',e=>{
    if(e.pointerType&&e.pointerType!=='mouse')return;
    if(!canHover())return;
    const media=e.target.closest&&e.target.closest('.card-media');
    if(media)move(media,e);
  },true);
  document.addEventListener('pointerout',e=>{
    const media=e.target.closest&&e.target.closest('.card-media');
    if(!media||!media._ph)return;
    const to=e.relatedTarget;
    if(to&&media.contains(to))return;
    leave(media);
  },true);
})();

/* ---- formulário Traga sua casa para o nosso portfólio ---- */
const bindOfferForm=()=>{
  const form=document.getElementById('offer-form');
  if(!form||form.dataset.bound)return;
  form.dataset.bound='1';
  const list=document.getElementById('offer-photos');
  const input=document.getElementById('offer-files');
  const drop=document.getElementById('offer-drop');
  const count=document.getElementById('offer-count');
  const done=document.getElementById('offer-done');
  const doneMsg=document.getElementById('offer-done-msg');
  const MAX=12, MAX_MB=8;
  let files=[];
  const render=()=>{
    if(count)count.textContent=files.length?`${files.length} ${files.length===1?'foto selecionada':'fotos selecionadas'}`:'Nenhuma foto selecionada';
    if(!list)return;
    list.innerHTML=files.map((f,i)=>`<li><img src="${f.url}" alt=""><button type="button" data-rm="${i}" aria-label="Remover foto">×</button></li>`).join('');
  };
  const add=listIn=>{
    [...listIn].forEach(file=>{
      if(!file.type||file.type.indexOf('image/')!==0)return;
      if(files.length>=MAX)return;
      if(file.size>MAX_MB*1024*1024){alert(`A foto “${file.name}” passa de ${MAX_MB} MB. Escolha um arquivo menor.`);return}
      files.push({file,url:URL.createObjectURL(file),name:file.name});
    });
    render();
  };
  if(input)input.addEventListener('change',e=>{add(e.target.files||[]);input.value=''});
  if(list)list.addEventListener('click',e=>{
    const btn=e.target.closest('[data-rm]'); if(!btn)return;
    const i=+btn.getAttribute('data-rm');
    if(!files[i])return;
    URL.revokeObjectURL(files[i].url);
    files.splice(i,1);
    render();
  });
  if(drop){
    ;['dragenter','dragover'].forEach(ev=>drop.addEventListener(ev,e=>{e.preventDefault();drop.classList.add('is-over')}));
    ;['dragleave','drop'].forEach(ev=>drop.addEventListener(ev,e=>{e.preventDefault();drop.classList.remove('is-over')}));
    drop.addEventListener('drop',e=>add(e.dataTransfer&&e.dataTransfer.files||[]));
    drop.addEventListener('click',()=>input&&input.click());
    drop.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();input&&input.click()}});
  }
  const val=id=>(form.elements[id]&&form.elements[id].value||'').trim();
  form.addEventListener('submit',async e=>{
    e.preventDefault();
    const required=['condominio','cidade','valor','descricao','nome','whatsapp'];
    let ok=true;
    required.forEach(id=>{
      const el=form.elements[id];
      if(!el)return;
      const empty=!el.value.trim();
      el.setAttribute('aria-invalid',empty?'true':'false');
      if(empty)ok=false;
    });
    if(!ok){form.reportValidity?form.reportValidity():alert('Preencha os campos obrigatórios para enviar à avaliação.');return}
    const nFotos=files.length;
    const lines=[
      'Olá! Gostaria de submeter uma casa para avaliação no portfólio Prime House.',
      '',
      'Imóvel',
      `• Condomínio: ${val('condominio')}`,
      `• Cidade/Bairro: ${val('cidade')}`,
      `• Valor pretendido: ${val('valor')}`,
      val('area')||val('terreno')?`• Área construída: ${val('area')||'—'}${val('terreno')?` · Terreno: ${val('terreno')}`:''}`:null,
      (val('quartos')||val('suites'))?`• Quartos: ${val('quartos')||'—'} · Suítes: ${val('suites')||'—'}`:null,
      val('vagas')?`• Vagas de garagem: ${val('vagas')}`:null,
      '',
      'Descrição',
      val('descricao'),
      '',
      'Contato (em sigilo, não publicar no site)',
      `• Nome: ${val('nome')}`,
      `• WhatsApp: ${val('whatsapp')}`,
      val('email')?`• E-mail: ${val('email')}`:null,
      '',
      nFotos?`Fotos: separei ${nFotos} ${nFotos===1?'imagem':'imagens'} e vou enviá-las em seguida nesta mesma conversa.`:'Fotos: ainda não anexei imagens; posso enviá-las nesta conversa.'
    ].filter(x=>x!==null);
    const text=lines.join('\n');
    const blobs=files.map(f=>f.file);
    let shared=false;
    try{
      if(nFotos&&navigator.canShare&&navigator.canShare({files:blobs})){
        await navigator.share({title:'Casa para o portfólio Prime House',text,files:blobs});
        shared=true;
      }
    }catch(err){if(err&&err.name==='AbortError')return;shared=false}
    if(!shared){
      window.open(wa(text),'_blank','noopener');
    }
    form.hidden=true;
    if(done){
      done.hidden=false;
      if(doneMsg){
        doneMsg.textContent=shared
          ?'O resumo e as fotos foram oferecidos no compartilhamento do seu aparelho. Se a conversa com o corretor abriu, confira se as imagens foram anexadas.'
          :(nFotos
            ?`A conversa com o corretor foi aberta no WhatsApp com os dados da casa. Envie agora as ${nFotos} ${nFotos===1?'foto selecionada':'fotos selecionadas'} nesta mesma conversa para completar o pedido de avaliação.`
            :'A conversa com o corretor foi aberta no WhatsApp com os dados da casa. Se quiser, envie as fotos nesta mesma conversa para a avaliação.');
      }
      done.scrollIntoView({block:'start',behavior:'smooth'});
    }
  });
};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',bindOfferForm);
else bindOfferForm();
})();
