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
 waLogo:'<svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.87 11.87 0 0 0 12.04 0C5.46 0 .1 5.35.1 11.93c0 2.1.55 4.15 1.59 5.96L0 24l6.27-1.64a11.93 11.93 0 0 0 5.77 1.47h.01c6.58 0 11.94-5.35 11.95-11.93a11.86 11.86 0 0 0-3.48-8.42ZM12.05 21.8a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.72.97.99-3.63-.24-.37a9.88 9.88 0 0 1-1.52-5.25c0-5.47 4.46-9.92 9.93-9.92a9.85 9.85 0 0 1 7.02 2.91 9.86 9.86 0 0 1 2.91 7.02c0 5.47-4.46 9.92-9.97 9.86Zm5.45-7.42c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.88.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z"></path></svg>'
};
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const brl=v=>'R$ '+Number(v).toLocaleString('pt-BR',{maximumFractionDigits:0});
const m2=a=>String(a).replace('.',',');
const suites=c=>`${c.s} suíte${c.s>1?'s':''}`;const vagas=c=>`${c.vagas} vaga${c.vagas>1?'s':''}`;
const logo=(extra='')=>`<a class="brand brand-image ${extra}" href="index.html" aria-label="Prime House — página inicial"><img src="img/logo-prime-house-letreiro.png" alt="Prime House" width="1202" height="121"></a>`;

// ---------- cabeçalho, rodapé, WhatsApp flutuante ----------
const header=`<header class="site-header"><div class="wrap header-inner"><div class="header-brand-row">${logo()}<button class="nav-toggle" type="button" aria-label="Abrir menu" aria-controls="site-nav" aria-expanded="false"><span></span><span></span><span></span></button></div><div class="header-rule" aria-hidden="true"></div><nav id="site-nav" class="site-nav"><a href="index.html#casas">Encontre sua casa</a><a href="index.html#mapa">Mapa</a><a href="condominios.html">Conheça os condomínios</a><a href="index.html#busca">Busca personalizada</a><a class="nav-cta" href="${wa('Olá, procuro uma casa em condomínio fechado.')}" target="_blank" rel="noreferrer">Fale com o corretor</a></nav></div></header>`;
const footer=`<footer class="footer"><div class="wrap footer-inner">${logo('footer-brand')}<div class="footer-meta"><div>Fale com o corretor · CRECI 9493<br>WhatsApp <a href="${wa('Olá! Procuro uma casa em condomínio fechado.')}" target="_blank" rel="noreferrer">(91) 98010-1026</a><br>Exija o CRECI</div><div>Belém · Ananindeua · Marituba<br><a href="privacidade.html">Privacidade</a> · <button type="button" data-cadastro class="footer-cadastro">Meu cadastro</button></div></div></div></footer><a class="floating-whatsapp" href="${wa('Olá! Procuro uma casa em condomínio fechado.')}" target="_blank" rel="noopener noreferrer" aria-label="Fale com o corretor pelo WhatsApp" title="Fale com o corretor no WhatsApp">${I.waLogo}</a>`;
document.body.insertAdjacentHTML('afterbegin',header);
(function(){
 const path0=(location.pathname.split('/').pop()||'index.html');
 if(path0===''||path0==='index.html') document.body.classList.add('page-home');
 const hdr=document.querySelector('.site-header');
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
 window.addEventListener('resize',()=>{if(window.matchMedia('(min-width:801px)').matches)setOpen(false)});
 let compact=false;
 const onScroll=()=>{
  const y=window.scrollY||0;
  const next=compact?y>16:y>56;
  if(next!==compact){compact=next;hdr.classList.toggle('is-compact',compact)}
 };
 onScroll();
 window.addEventListener('scroll',onScroll,{passive:true});
 const mark=()=>{
  const path=(location.pathname.split('/').pop()||'index.html');
  const hash=location.hash;
  nav.querySelectorAll('a[href]').forEach(a=>{
   if(a.classList.contains('nav-cta'))return;
   const href=a.getAttribute('href')||'';
   let on=false;
   if(path==='condominios.html'||path==='condominio.html') on=href.indexOf('condominios.html')!==-1;
   else if(path==='casa.html') on=href.indexOf('#casas')!==-1;
   else if(path==='index.html'||path===''){
    if(hash==='#busca') on=href.indexOf('#busca')!==-1;
    else if(hash==='#mapa') on=href.indexOf('#mapa')!==-1;
    else on=href.indexOf('#casas')!==-1;
   }
   if(on)a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current');
  });
 };
 mark();
 window.addEventListener('hashchange',mark);
})();


const ready=()=>{document.body.insertAdjacentHTML('beforeend',footer);
// ---------- convite de cadastro (modal + balão), como no modelo ----------
const modal=`<div class="reg-overlay" id="reg" role="dialog" aria-modal="true" aria-labelledby="reg-t"><div class="reg-modal"><button class="reg-close" type="button" aria-label="Fechar" data-regclose>×</button><div><h2 id="reg-t">Vamos encontrar sua casa?</h2><form id="reg-f"><label for="reg-n">Seu nome</label><input id="reg-n" autocomplete="name" required minlength="2"><label for="reg-w">WhatsApp com DDD</label><input id="reg-w" inputmode="tel" autocomplete="tel" placeholder="(91) 99999-9999"><label class="checkrow"><input type="checkbox" id="reg-c"> Quero receber novidades sobre imóveis pelo WhatsApp.</label><p class="fine">Salvaremos seus interesses para atender sua busca. Você pode solicitar correção ou exclusão pelo nosso WhatsApp.</p><button class="btn" type="submit">Salvar e continuar</button><button class="btn secondary" type="button" data-regclose>Continuar sem cadastro</button></form></div><p class="side">O cadastro é opcional. Deixe seu nome e WhatsApp para salvar seus interesses e receber nossa ajuda na busca.</p></div></div>`;
const bubble=`<div class="registration-bubble" id="bub" hidden><button class="registration-bubble-content" type="button" data-cadastro>${I.msg.replace('width="16" height="16"','width="20" height="20"')}<span><span class="registration-bubble-title">Encontre sua casa com nossa ajuda</span><span>Cadastre-se para uma busca mais personalizada.</span><span class="registration-bubble-action">Quero me cadastrar →</span></span></button><button class="registration-bubble-close" type="button" aria-label="Fechar convite" id="bubx">×</button></div>`;
document.body.insertAdjacentHTML('beforeend',modal+bubble);
const reg=document.getElementById('reg'),bub=document.getElementById('bub');
const ss=(k,v)=>{try{return v===undefined?sessionStorage.getItem(k):sessionStorage.setItem(k,v)}catch(e){return null}};
const openReg=()=>{reg.classList.add('on');bub.hidden=true;setTimeout(()=>document.getElementById('reg-n').focus(),50)};
const closeReg=()=>{reg.classList.remove('on');ss('ph-convite','1');if(ss('ph-balao')!=='0')bub.hidden=false};
document.addEventListener('click',e=>{if(e.target.closest('[data-cadastro]')){e.preventDefault();openReg()}if(e.target.closest('[data-regclose]')||e.target===reg)closeReg()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&reg.classList.contains('on'))closeReg()});
document.getElementById('bubx').onclick=()=>{bub.hidden=true;ss('ph-balao','0')};
document.getElementById('reg-f').addEventListener('submit',e=>{e.preventDefault();
 const n=document.getElementById('reg-n').value.trim(),w=document.getElementById('reg-w').value.trim(),c=document.getElementById('reg-c').checked;
 let t=`Olá! Meu nome é ${n}.${w?` Meu WhatsApp: ${w}.`:''} Quero ajuda para encontrar uma casa em condomínio fechado.`;
 if(c)t+=' Quero receber novidades sobre imóveis pelo WhatsApp.';
 window.open(wa(t),'_blank','noopener');ss('ph-balao','0');bub.hidden=true;closeReg();bub.hidden=true});
if(!document.body.dataset.noinvite&&ss('ph-balao')!=='0')setTimeout(()=>{if(!reg.classList.contains('on'))bub.hidden=false},900);

};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ready);else ready();
// ---------- utilitários de dados ----------
const houses=()=>(typeof CASAS!=='undefined'?CASAS:[]);
const condName=c=>c.cond;
const cardHTML=c=>`<article class="card"><a class="card-media" href="casa.html?id=${encodeURIComponent(c.id)}"><img src="${esc(c.img[0])}" alt="Fachada da casa no ${esc(c.cond)}" loading="lazy"><span class="tag">${esc(c.cond)}</span></a><div class="card-body"><div class="location">${esc(c.cidade)}${c.bairro&&c.bairro!=='Centro'?' · '+esc(c.bairro):''}</div><h3>${esc(c.cond)} · ${c.q} quartos</h3><div class="specs">${c.area?`<span>${I.area}${m2(c.area)} m²</span>`:''}<span>${I.bed}${suites(c)}</span><span>${I.car}${vagas(c)}</span></div><div class="card-bottom"><div class="price">${brl(c.valor)}</div><a href="casa.html?id=${encodeURIComponent(c.id)}" class="text-link">Conhecer a casa</a></div></div></article>`;
const condList=()=>{const H=houses();const used=new Set();
 const base=(typeof CONDS!=='undefined'?CONDS:[]).map(c=>{const hs=H.filter(h=>(c.casas||[]).includes(h.cond)).sort((a,b)=>a.valor-b.valor);hs.forEach(h=>used.add(h.id));return {...c,_houses:hs}});
 const extra={};H.filter(h=>!used.has(h.id)).forEach(h=>{(extra[h.cond]=extra[h.cond]||{id:null,nome:h.cond,cidade:h.cidade,bairro:h.bairro,resumo:'',_houses:[]})._houses.push(h)});
 const ord={'Belém':0,'Ananindeua':1,'Marituba':2};
 return [...base,...Object.values(extra)].sort((a,b)=>(b._houses.length>0)-(a._houses.length>0)||(ord[a.cidade]??9)-(ord[b.cidade]??9)||b._houses.length-a._houses.length||a.nome.localeCompare(b.nome,'pt-BR'))};
const houseLine=h=>{const d=String(h.nome||'').split(' · ').slice(1).join(' · ')||`casa de ${h.q} quartos`;return `<li><a href="casa.html?id=${encodeURIComponent(h.id)}"><span>${esc(h.cond)} · ${esc(d)}</span><strong>${brl(h.valor)}</strong></a></li>`};
const condoHTML=(c,full)=>{const n=c._houses.length,cn=n?c._houses[0].cond:c.nome,lim=full?n:4;const title=c.id?`<a href="condominio.html?id=${c.id}">${esc(c.nome)}</a>`:esc(c.nome);
 const list=n?`<div class="condo-houses-t">Casas disponíveis aqui · ${n}</div><ul class="condo-houses">${c._houses.slice(0,lim).map(houseLine).join('')}</ul>${n>lim?`<a class="text-link" href="condominio.html?id=${c.id}">Ver as ${n} casas</a>`:''}`:`<p>Sem casas no nosso catálogo no momento.</p><a class="btn secondary" href="${wa(`Olá! Quero uma casa no condomínio ${c.nome}.`)}" target="_blank" rel="noreferrer">Quero uma casa aqui</a>`;
 return `<article class="condo"><div class="location">${esc(c.cidade)}${c.bairro?' · '+esc(c.bairro):''}</div><h3>${title}</h3><p>${esc(c.resumo||'Registre seu interesse para receber atendimento e buscar uma casa neste condomínio.')}</p>${list}<div class="condo-links">${c.maps?`<a class="text-link" href="${c.maps}" target="_blank" rel="noreferrer">Ver no Google Maps</a>`:''}${c.id?`<a class="text-link" href="condominio.html?id=${c.id}">Conhecer o condomínio</a>`:''}</div>${c.resumo?'<p style="font-size:12px">Informações do material dos imóveis.</p>':''}</article>`};
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
window.PH={houseLine,vagas,wa,I,esc,brl,m2,suites,cardHTML,condoHTML,condList,houses,coordsOf,pintaMapa,initVitrineMap,mountMiniMap,curtoPreco};
})();
