const H=`<header id="hd"><a class="logo" href="index.html">PRIME <b>HOUSE</b></a><button class="burger" onclick="document.querySelector('nav').classList.toggle('on')">☰</button><nav><a href="index.html">Início</a><a href="colecao.html">Coleção</a><a href="condominios.html">Conheça os condomínios</a><a href="contato.html">Contato</a></nav></header>`;
const F=`<footer><div class="wrap"><div class="cols"><div><div class="logo" style="color:#f6f3ee">PRIME <b>HOUSE</b></div><p style="margin-top:18px;max-width:380px">As melhores casas da região, à venda em Belém e Ananindeua. Arquitetura, fino acabamento e qualidade em todos os detalhes.</p></div><div><h4>Contato</h4><p><a href="${wa('Olá! Vim pelo site da Prime House e gostaria de falar com o corretor.')}">WhatsApp (91) 98010-1026</a></p><p>Belém e Ananindeua · PA</p></div><div><h4>Corretor</h4><p>Fale com o corretor</p><p>CRECI 9493</p></div></div><div class="bottom"><span>© 2026 Prime House · Fale com o corretor · CRECI 9493 · WhatsApp (91) 98010-1026</span><span>Prévia do site</span></div></div></footer><a class="wa" href="${wa('Olá! Vim pelo site da Prime House e gostaria de falar com o corretor.')}" aria-label="WhatsApp">WA</a>`;
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
// ===== Sons suaves (Web Audio API, sem arquivos) =====
(()=>{let ctx=null,on=localStorage.getItem('ph-som')!=='0',last=0;
const tone=(f,d=.18,g=.025,t='sine',delay=0)=>{if(!ctx||!on)return;const n=ctx.currentTime+delay,o=ctx.createOscillator(),v=ctx.createGain();o.type=t;o.frequency.value=f;v.gain.setValueAtTime(0,n);v.gain.linearRampToValueAtTime(g,n+.015);v.gain.exponentialRampToValueAtTime(.0001,n+d);o.connect(v).connect(ctx.destination);o.start(n);o.stop(n+d+.05)};
const air=(d=.35,g=.02)=>{if(!ctx||!on)return;const n=ctx.currentTime,b=ctx.createBuffer(1,ctx.sampleRate*d,ctx.sampleRate),a=b.getChannelData(0);for(let i=0;i<a.length;i++)a[i]=(Math.random()*2-1)*Math.sin(Math.PI*i/a.length);const s=ctx.createBufferSource(),f=ctx.createBiquadFilter(),v=ctx.createGain();f.type='bandpass';f.frequency.setValueAtTime(800,n);f.frequency.linearRampToValueAtTime(2400,n+d);v.gain.value=g;s.buffer=b;s.connect(f).connect(v).connect(ctx.destination);s.start(n)};
window.SOM={hover:()=>{const t=Date.now();if(t-last<180)return;last=t;tone(1568,.22,.012);tone(2349,.3,.006,'sine',.03)},click:()=>tone(880,.12,.02,'triangle'),
 page:()=>{tone(523,.6,.012);tone(659,.6,.01,'sine',.06);tone(784,.7,.008,'sine',.12)},gal:()=>{air(.35,.025);tone(1175,.25,.008,'sine',.1)}};
const unlock=()=>{if(!ctx){try{ctx=new (window.AudioContext||window.webkitAudioContext)()}catch(e){}}if(ctx&&ctx.state==='suspended')ctx.resume()};
['pointerdown','keydown','touchstart'].forEach(e=>addEventListener(e,unlock,{capture:true,passive:true}));
document.body.insertAdjacentHTML('beforeend','<button class="som" id="som" aria-label="Som ligado/desligado" title="Som"></button>');
const btn=document.getElementById('som'),paint=()=>{btn.textContent=on?'♪ som':'♪ mudo';btn.classList.toggle('off',!on)};paint();
btn.onclick=e=>{e.stopPropagation();on=!on;localStorage.setItem('ph-som',on?'1':'0');paint();unlock();if(on)SOM.click()};
document.addEventListener('mouseover',e=>{const t=e.target.closest('.tilt');if(t&&!t.contains(e.relatedTarget))SOM.hover()});
document.addEventListener('click',e=>{if(e.target.closest('#som'))return;const a=e.target.closest('a');if(a&&!a.target&&/\.html/.test(a.getAttribute('href')||''))SOM.page();else if(e.target.closest('a,button,select,.ph'))SOM.click()},true);
document.addEventListener('change',e=>{if(e.target.matches('select'))SOM.click()});
})();
