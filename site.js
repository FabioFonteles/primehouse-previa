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
const logo=(extra='')=>`<a class="brand brand-image ${extra}" href="index.html" aria-label="Prime House — página inicial"><img src="img/prime-house-logo.webp" alt="Prime House — Casas Belém Ananindeua" width="768" height="512"></a>`;

// ---------- cabeçalho, rodapé, WhatsApp flutuante ----------
const header=`<header class="wrap"><div class="nav">${logo()}<nav><a href="index.html#casas">Encontre sua casa</a><a href="condominios.html">Conheça os condomínios</a><a href="index.html#busca">Busca personalizada</a></nav><a class="btn secondary" href="${wa('Olá, procuro uma casa em condomínio fechado.')}" target="_blank" rel="noreferrer">${I.msg} Fale com um especialista</a></div></header>`;
const footer=`<footer class="footer"><div class="wrap footer-inner">${logo('footer-brand')}<div>Fábio Fonteles · CRECI 9493<br>WhatsApp <a href="${wa('Olá, Fábio! Procuro uma casa em condomínio fechado.')}" target="_blank" rel="noreferrer">(91) 98010-1026</a><br>Exija o CRECI</div><div>Belém · Ananindeua · Marituba<br><a href="privacidade.html">Privacidade</a><br><button type="button" data-cadastro style="background:none;border:0;padding:0;font-size:13px;color:inherit">Meu cadastro</button></div></div></footer><a class="floating-whatsapp" href="${wa('Olá, Fábio! Procuro uma casa em condomínio fechado.')}" target="_blank" rel="noopener noreferrer" aria-label="Falar com Fábio pelo WhatsApp" title="Fale comigo no WhatsApp">${I.waLogo}</a>`;
document.body.insertAdjacentHTML('afterbegin',header);


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
 let t=`Olá, Fábio! Meu nome é ${n}.${w?` Meu WhatsApp: ${w}.`:''} Quero ajuda para encontrar uma casa em condomínio fechado.`;
 if(c)t+=' Quero receber novidades sobre imóveis pelo WhatsApp.';
 window.open(wa(t),'_blank','noopener');ss('ph-balao','0');bub.hidden=true;closeReg();bub.hidden=true});
if(!ss('ph-convite')&&!document.body.dataset.noinvite)setTimeout(openReg,900);else if(ss('ph-balao')!=='0')bub.hidden=false;

};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ready);else ready();
// ---------- utilitários de dados ----------
const houses=()=>(typeof CASAS!=='undefined'?CASAS:[]);
const condName=c=>c.cond;
const condList=()=>{const base=(typeof CONDS!=='undefined'?CONDS:[]).map(c=>({...c,_houses:houses().filter(h=>h.cid===c.id)}));
 const ids=new Set(base.map(c=>c.id));const extra={};
 houses().filter(h=>!ids.has(h.cid)).forEach(h=>{const k=h.cond;(extra[k]=extra[k]||{id:null,nome:h.cond,cidade:h.cidade,resumo:'',_houses:[]})._houses.push(h)});
 return [...base,...Object.values(extra)].sort((a,b)=>b._houses.length-a._houses.length||a.nome.localeCompare(b.nome,'pt-BR'))};
const cardHTML=c=>`<article class="card"><a class="card-media" href="casa.html?id=${encodeURIComponent(c.id)}"><img src="${esc(c.img[0])}" alt="Fachada da casa no ${esc(c.cond)}" loading="lazy"><span class="tag">${esc(c.cond)}</span></a><div class="card-body"><div class="location">${esc(c.cidade)}${c.bairro&&c.bairro!=='Centro'?' · '+esc(c.bairro):''}</div><h3>${esc(c.cond)} · ${c.q} quartos</h3><div class="specs">${c.area?`<span>${I.area}${m2(c.area)} m²</span>`:''}<span>${I.bed}${suites(c)}</span><span>${I.car}${vagas(c)}</span></div><div class="card-bottom"><div class="price">${brl(c.valor)}</div><a href="casa.html?id=${encodeURIComponent(c.id)}" class="text-link">Conhecer a casa</a></div></div></article>`;
const condoHTML=c=>{const n=c._houses.length,cn=n?c._houses[0].cond:c.nome;const title=c.id?`<a href="condominio.html?id=${c.id}">${esc(c.nome)}</a>`:esc(c.nome);
 return `<article class="condo"><div class="location">${esc(c.cidade)}</div><h3>${title}</h3><p>${esc(c.resumo||(n?`Casas à venda no ${c.nome}, em ${c.cidade}.`:'Registre seu interesse para receber atendimento e buscar uma casa neste condomínio.'))}</p>${n?`<a class="btn secondary" href="index.html?condominio=${encodeURIComponent(cn)}#casas">Casas disponíveis aqui · ${n}</a>`:`<p>Sem casas no nosso catálogo no momento.</p><a class="btn secondary" href="${wa(`Olá, Fábio! Quero uma casa no condomínio ${c.nome}.`)}" target="_blank" rel="noreferrer">Quero uma casa aqui</a>`}${c.resumo?'<p style="font-size:12px">Informações do material dos imóveis.</p>':''}</article>`};
window.PH={vagas,wa,I,esc,brl,m2,suites,cardHTML,condoHTML,condList,houses};
})();
