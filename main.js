const H=`<header id="hd"><a class="logo" href="index.html">PRIME <b>HOUSE</b></a><button class="burger" onclick="document.querySelector('nav').classList.toggle('on')">☰</button><nav><a href="index.html">Início</a><a href="colecao.html">Coleção</a><a href="condominios.html">Condomínios</a><a href="sobre.html">Sobre o Fábio</a><a href="contato.html">Contato</a></nav></header>`;
const F=`<footer><div class="wrap"><div class="cols"><div><div class="logo" style="color:#f6f3ee">PRIME <b>HOUSE</b></div><p style="margin-top:18px;max-width:380px">Casas de médio e alto padrão à venda em Belém e Ananindeua. Curadoria pessoal, atendimento discreto.</p></div><div><h4>Contato</h4><p><a href="${wa('Olá, Fábio! Vim pelo site da Prime House.')}">WhatsApp (91) 98010-1026</a></p><p>Belém e Ananindeua · PA</p></div><div><h4>Corretor</h4><p>Fábio Fonteles</p><p>CRECI 9493</p></div></div><div class="bottom"><span>© 2026 Prime House · Fábio Fonteles · CRECI 9493 · WhatsApp (91) 98010-1026</span><span>Prévia — imóveis e fotos meramente ilustrativos</span></div></div></footer><a class="wa" href="${wa('Olá, Fábio! Vim pelo site da Prime House.')}" aria-label="WhatsApp">WA</a>`;
document.body.insertAdjacentHTML("afterbegin",H);document.body.insertAdjacentHTML("beforeend",F);
const hd=document.getElementById("hd");const solid=document.body.dataset.solid;
const sc=()=>hd.classList.toggle("solid",!!solid||scrollY>60);addEventListener("scroll",sc);sc();
const io=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add("in")),{threshold:.12});
window.reveal=()=>document.querySelectorAll(".reveal:not(.in)").forEach(el=>io.observe(el));reveal();
// Movimento copiado do HomeTrack (radar-imoveis-site/js/common.js initTilt) + brilho de vidro
window.initTilt=(root=document)=>root.querySelectorAll('.tilt').forEach(c=>{if(c._t)return;c._t=1;
 if(!c.querySelector('.glass'))c.insertAdjacentHTML('beforeend','<span class="glass"></span>');
 c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
  c.style.transform=`perspective(900px) rotateY(${x*10}deg) rotateX(${-y*10}deg) translateY(-8px) scale(1.02)`;c.style.setProperty('--gx',(x+.5)*100+'%');c.style.setProperty('--gy',(y+.5)*100+'%')});
 c.addEventListener('mouseleave',()=>{c.style.transform=''})});
const _rv=window.reveal;window.reveal=()=>{document.querySelectorAll('.card .ph').forEach(p=>p.classList.add('tilt'));_rv();initTilt()};reveal();
// fade ao trocar de página
document.addEventListener('click',e=>{const a=e.target.closest('a');if(!a||a.target||e.ctrlKey||e.metaKey)return;const h=a.getAttribute('href');
 if(!h||h.startsWith('#')||/^(https?:|mailto:|tel:)/.test(h))return;e.preventDefault();document.querySelector('nav').classList.remove('on');document.body.classList.add('out');setTimeout(()=>location.href=h,450)});
addEventListener('pageshow',e=>{if(e.persisted)document.body.classList.remove('out')});
// troca suave de conteúdo (filtros)
window.fadeSwap=(el,html)=>{el.classList.add('fadeable','hide');setTimeout(()=>{el.innerHTML=html;reveal();el.classList.remove('hide')},400)};
let _mq;new MutationObserver(()=>{clearTimeout(_mq);_mq=setTimeout(reveal,30)}).observe(document.body,{childList:true,subtree:true});
