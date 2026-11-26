/* Prime House — favoritos, comparador, simulador, visita e SEO dinâmico */
(function(){
  const PH=window.PH||{};
  const SITE='https://primehousebelem.com.br';
  const LS_FAV='ph-favs';
  const LS_CMP='ph-compare';
  const $=id=>document.getElementById(id);
  const houses=()=> (PH.houses?PH.houses():(typeof CASAS!=='undefined'?CASAS:[]));
  const byId=id=>houses().find(h=>h.id===id);
  const esc=PH.esc||(s=>String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])));
  const brl=PH.brl||(v=>'R$ '+Number(v).toLocaleString('pt-BR',{maximumFractionDigits:0}));
  const m2=PH.m2||(v=>Number(v).toLocaleString('pt-BR',{maximumFractionDigits:2}));
  const wa=PH.wa||(t=>'https://wa.me/5591980101026?text='+encodeURIComponent(t));
  const I=PH.I||{};

  const casaAbs=id=>SITE+'/casa/'+encodeURIComponent(id)+'/';
  const condoAbs=id=>SITE+'/condominio/'+encodeURIComponent(id)+'/';

  const houseBrief=h=>{
    if(!h)return '';
    const bits=[];
    if(h.s) bits.push(h.s+' suíte'+(h.s>1?'s':''));
    else if(h.q) bits.push(h.q+' quarto'+(h.q>1?'s':''));
    if(h.area) bits.push(m2(h.area)+' m²');
    return bits.join(' · ');
  };
  const houseCity=h=>[h.cidade,h.bairro&&h.bairro!=='Centro'?h.bairro:''].filter(Boolean).join(', ');
  const houseLineTxt=h=>`Casa no ${h.cond}, em ${houseCity(h)} — ${houseBrief(h)} · ${brl(h.valor)}`;
  const terrenoOf=h=>{
    const blob=[h.nome,h.desc,...(h.dif||[])].join(' ');
    const m=blob.match(/terreno(?:\s+de)?\s+(\d+(?:[.,]\d+)?)\s*m/i);
    return m?m[1].replace('.',',')+' m²':'';
  };
  const CONDO_TAG=/portaria|playground|quadra(?! de t[eê]nis no)|guarita|piscina para crian|no condom[ií]nio|sal[aã]o de festas|sal[aã]o com jogos|mercadinho|marina para/i;
  const houseHighlights=h=>{
    const out=[];
    const seen=new Set();
    const add=(label)=>{const k=label.toLowerCase(); if(seen.has(k))return; seen.add(k); out.push(label)};
    if(PH.houseHasItem&&PH.houseHasItem(h,'piscina')) add('Piscina');
    if(PH.houseHasItem&&PH.houseHasItem(h,'closet')) add('Closet');
    if(PH.houseHasItem&&PH.houseHasItem(h,'sauna')) add('Sauna');
    if(PH.houseHasItem&&PH.houseHasItem(h,'mobiliado')) add('Mobiliado');
    if(PH.houseHasItem&&PH.houseHasItem(h,'semi')) add('Semi mobiliado');
    (h.dif||[]).forEach(d=>{
      const t=String(d||'').trim(); if(!t)return;
      if(CONDO_TAG.test(t))return;
      if(/^piscina$/i.test(t)||/piscina privativa|piscina com deck/i.test(t))return;
      if(/closet/i.test(t))return;
      add(t.charAt(0).toUpperCase()+t.slice(1));
    });
    return out.slice(0,8);
  };

  const load=key=>{try{const a=JSON.parse(localStorage.getItem(key)||'[]');return Array.isArray(a)?a.filter(id=>!!byId(id)):[]}catch(e){return []}};
  const save=(key,a)=>{try{localStorage.setItem(key,JSON.stringify(a))}catch(e){}};
  let favs=load(LS_FAV);
  let cmps=load(LS_CMP);

  const toast=msg=>{
    let el=$('ph-toast');
    if(!el){el=document.createElement('div');el.id='ph-toast';el.className='ph-toast';el.setAttribute('role','status');document.body.appendChild(el)}
    el.textContent=msg;
    el.classList.add('on');
    clearTimeout(toast._t);
    toast._t=setTimeout(()=>el.classList.remove('on'),3200);
  };

  const setPressed=(sel,on)=>{
    document.querySelectorAll(sel).forEach(b=>{
      b.setAttribute('aria-pressed',on?'true':'false');
      b.classList.toggle('is-on',on);
    });
  };
  const syncButtons=()=>{
    document.querySelectorAll('[data-fav]').forEach(b=>{
      const on=favs.indexOf(b.getAttribute('data-fav'))!==-1;
      b.setAttribute('aria-pressed',on?'true':'false');
      b.classList.toggle('is-on',on);
      const lab=on?'Remover dos favoritos':'Salvar nos favoritos';
      b.setAttribute('aria-label',lab);
      b.setAttribute('title',lab);
    });
    document.querySelectorAll('[data-cmp]').forEach(b=>{
      const on=cmps.indexOf(b.getAttribute('data-cmp'))!==-1;
      b.setAttribute('aria-pressed',on?'true':'false');
      b.classList.toggle('is-on',on);
    });
    const nav=$('nav-fav');
    if(nav){
      nav.hidden=favs.length<1;
      const badge=nav.querySelector('.nav-fav-n');
      if(badge)badge.textContent=String(favs.length);
      nav.setAttribute('aria-label',favs.length===1?'Meus favoritos, 1 casa':'Meus favoritos, '+favs.length+' casas');
    }
    document.body.classList.toggle('has-compare-bar',cmps.length>=1);
    renderBar();
  };

  const toggleFav=id=>{
    if(!byId(id))return;
    const i=favs.indexOf(id);
    if(i===-1)favs.push(id); else favs.splice(i,1);
    save(LS_FAV,favs);
    syncButtons();
    if($('ph-favs')&&$('ph-favs').classList.contains('on'))renderFavs();
  };
  const toggleCmp=id=>{
    if(!byId(id))return;
    const i=cmps.indexOf(id);
    if(i!==-1){cmps.splice(i,1);save(LS_CMP,cmps);syncButtons();return}
    if(cmps.length>=3){toast('Você já escolheu 3 casas para comparar. Remova uma para incluir outra.');return}
    cmps.push(id);
    save(LS_CMP,cmps);
    syncButtons();
  };

  const injectChrome=()=>{
    const row=document.querySelector('.header-brand-row');
    if(row&&!$('nav-fav')){
      row.insertAdjacentHTML('beforeend',`<button type="button" class="nav-fav" id="nav-fav" hidden aria-haspopup="dialog">${I.heart||''}<span class="nav-fav-n">0</span></button>`);
      $('nav-fav').addEventListener('click',()=>openFavs());
    }
    if(!$('ph-cmp-bar')){
      document.body.insertAdjacentHTML('beforeend',`
        <div class="ph-cmp-bar" id="ph-cmp-bar" hidden>
          <div class="ph-cmp-thumbs" id="ph-cmp-thumbs"></div>
          <div class="ph-cmp-actions">
            <button type="button" class="btn-clear" id="ph-cmp-clear">Limpar</button>
            <button type="button" class="btn" id="ph-cmp-go" disabled>Comparar</button>
          </div>
        </div>
        <div class="ph-overlay" id="ph-cmp-ov" hidden>
          <div class="ph-modal ph-cmp-modal" role="dialog" aria-modal="true" aria-labelledby="ph-cmp-title">
            <button type="button" class="ph-modal-x" id="ph-cmp-x" aria-label="Fechar comparação">×</button>
            <div class="eyebrow">LADO A LADO</div>
            <h2 id="ph-cmp-title">Compare as casas</h2>
            <div class="ph-cmp-grid" id="ph-cmp-grid"></div>
            <div class="ph-modal-cta" id="ph-cmp-cta"></div>
          </div>
        </div>
        <div class="ph-overlay" id="ph-favs" hidden>
          <div class="ph-modal ph-fav-modal" role="dialog" aria-modal="true" aria-labelledby="ph-fav-title">
            <button type="button" class="ph-modal-x" id="ph-fav-x" aria-label="Fechar favoritos">×</button>
            <div class="eyebrow">SUA SELEÇÃO</div>
            <h2 id="ph-fav-title">Meus Favoritos</h2>
            <div id="ph-fav-list"></div>
            <div class="ph-modal-cta" id="ph-fav-cta"></div>
          </div>
        </div>`);
      $('ph-cmp-clear').addEventListener('click',()=>{cmps=[];save(LS_CMP,cmps);syncButtons()});
      $('ph-cmp-go').addEventListener('click',()=>openCompare());
      $('ph-cmp-x').addEventListener('click',()=>closeModal('ph-cmp-ov'));
      $('ph-fav-x').addEventListener('click',()=>closeModal('ph-favs'));
      $('ph-cmp-ov').addEventListener('click',e=>{if(e.target===$('ph-cmp-ov'))closeModal('ph-cmp-ov')});
      $('ph-favs').addEventListener('click',e=>{if(e.target===$('ph-favs'))closeModal('ph-favs')});
    }
  };

  const renderBar=()=>{
    const bar=$('ph-cmp-bar'); if(!bar)return;
    if(cmps.length<1){bar.hidden=true;return}
    bar.hidden=false;
    const thumbs=$('ph-cmp-thumbs');
    thumbs.innerHTML=cmps.map(id=>{
      const h=byId(id); if(!h)return '';
      const img=esc((h.img&&h.img[0])||'');
      return `<figure class="ph-cmp-thumb"><img src="${img}" alt="Casa no ${esc(h.cond)}"><figcaption>${esc(h.cond)}</figcaption><button type="button" data-cmp-rm="${esc(id)}" aria-label="Remover ${esc(h.cond)} da comparação">×</button></figure>`;
    }).join('');
    const go=$('ph-cmp-go');
    go.disabled=cmps.length<2;
    go.textContent=cmps.length<2?'Comparar':'Comparar ('+cmps.length+')';
  };

  const openModal=id=>{
    const el=$(id); if(!el)return;
    el.hidden=false;
    requestAnimationFrame(()=>el.classList.add('on'));
    document.body.classList.add('ph-lock');
  };
  const closeModal=id=>{
    const el=$(id); if(!el)return;
    el.classList.remove('on');
    setTimeout(()=>{el.hidden=true},200);
    if(!document.querySelector('.ph-overlay.on'))document.body.classList.remove('ph-lock');
  };

  const waCompare=list=>{
    const lines=['Olá! Gostaria de comparar estas casas da Prime House e agendar uma visita:','',...list.map(h=>'• '+houseLineTxt(h)+'\n  '+casaAbs(h.id)),'','Pode me ajudar a conhecê-las?'];
    return wa(lines.join('\n'));
  };
  const waFavs=list=>{
    const lines=['Olá! Separei estas casas nos meus favoritos da Prime House e gostaria de agendar uma visita:','',...list.map(h=>'• '+houseLineTxt(h)+'\n  '+casaAbs(h.id)),'','Pode me orientar?']
    return wa(lines.join('\n'));
  };

  const openCompare=()=>{
    if(cmps.length<2)return;
    const list=cmps.map(byId).filter(Boolean);
    const grid=$('ph-cmp-grid');
    const row=(label,fn)=>`<tr><th>${label}</th>${list.map(h=>`<td>${fn(h)}</td>`).join('')}</tr>`;
    const highlights=h=> {
      const xs=houseHighlights(h);
      return xs.length?`<ul class="ph-chips">${xs.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:'—';
    };
    grid.innerHTML=`<div class="ph-cmp-table-wrap"><table class="ph-cmp-table"><thead><tr><th></th>${list.map(h=>`<td><a class="ph-cmp-photo" href="casa.html?id=${encodeURIComponent(h.id)}"><img src="${esc(h.img[0])}" alt="Fachada da casa no ${esc(h.cond)}"></a><strong>Casa no ${esc(h.cond)}</strong></td>`).join('')}</tr></thead><tbody>
      ${row('Condomínio',h=>esc(h.cond))}
      ${row('Cidade / Bairro',h=>esc(houseCity(h)))}
      ${row('Valor',h=>brl(h.valor))}
      ${row('Área construída',h=>h.area?m2(h.area)+' m²':'—')}
      ${row('Terreno',h=>terrenoOf(h)||'—')}
      ${row('Quartos',h=>String(h.q||'—'))}
      ${row('Suítes',h=>String(h.s||'—'))}
      ${row('Vagas',h=>String(h.vagas||'—'))}
      ${row('Itens de destaque',highlights)}
      ${row('',h=>`<a class="text-link" href="casa.html?id=${encodeURIComponent(h.id)}">Ver casa</a>`)}
    </tbody></table></div>`;
    $('ph-cmp-cta').innerHTML=`<a class="btn" href="${waCompare(list)}" target="_blank" rel="noreferrer">${I.msg||''} Agendar visita</a>`;
    openModal('ph-cmp-ov');
  };

  const openFavs=()=>{
    renderFavs();
    openModal('ph-favs');
  };
  const renderFavs=()=>{
    const list=favs.map(byId).filter(Boolean);
    const box=$('ph-fav-list');
    if(!box)return;
    if(!list.length){
      box.innerHTML='<p class="ph-empty">Nenhuma casa salva no momento.</p>';
      $('ph-fav-cta').innerHTML='';
      return;
    }
    box.innerHTML=list.map(h=>`<article class="ph-fav-item">
      <a href="casa.html?id=${encodeURIComponent(h.id)}"><img src="${esc(h.img[0])}" alt="Fachada da casa no ${esc(h.cond)}"></a>
      <div><a href="casa.html?id=${encodeURIComponent(h.id)}"><strong>Casa no ${esc(h.cond)}</strong></a>
      <small>${esc(houseCity(h))} · ${esc(houseBrief(h))}</small>
      <div class="price">${brl(h.valor)}</div></div>
      <button type="button" class="btn-clear" data-fav-rm="${esc(h.id)}">Remover</button>
    </article>`).join('');
    $('ph-fav-cta').innerHTML=`<a class="btn" id="ph-fav-wa" href="${waFavs(list)}" target="_blank" rel="noreferrer">${I.msg||''} Enviar meus favoritos no WhatsApp</a>`;
  };

  const setMeta=(attr,key,val)=>{
    if(!val)return;
    let el=document.querySelector(`meta[${attr}="${key}"]`);
    if(!el){el=document.createElement('meta');el.setAttribute(attr,key);document.head.appendChild(el)}
    el.setAttribute('content',val);
  };
  const setLink=(rel,href)=>{
    let el=document.querySelector(`link[rel="${rel}"]`);
    if(!el){el=document.createElement('link');el.rel=rel;document.head.appendChild(el)}
    el.href=href;
  };
  const setJsonLd=(id,data)=>{
    let el=document.getElementById(id);
    if(!el){el=document.createElement('script');el.type='application/ld+json';el.id=id;document.head.appendChild(el)}
    el.textContent=JSON.stringify(data);
  };
  const applySeo=({title,desc,url,image,type,jsonld})=>{
    if(title)document.title=title;
    if(desc)setMeta('name','description',desc);
    if(url){setLink('canonical',url);setMeta('property','og:url',url)}
    if(title)setMeta('property','og:title',title);
    if(desc)setMeta('property','og:description',desc);
    if(image){setMeta('property','og:image',image);setMeta('name','twitter:image',image)}
    setMeta('property','og:type',type||'website');
    setMeta('property','og:locale','pt_BR');
    setMeta('property','og:site_name','Prime House');
    setMeta('name','twitter:card','summary_large_image');
    if(jsonld)setJsonLd('ph-jsonld',jsonld);
  };

  const currentCasaId=()=>{
    if(window.PH_CASA_ID)return window.PH_CASA_ID;
    const q=new URLSearchParams(location.search).get('id');
    if(q)return q;
    const m=location.pathname.match(/\/casa\/([^/]+)\/?$/);
    return m?decodeURIComponent(m[1]):'';
  };
  const currentCondoId=()=>{
    if(window.PH_CONDO_ID)return window.PH_CONDO_ID;
    const q=new URLSearchParams(location.search).get('id')||new URLSearchParams(location.search).get('slug');
    if(q)return q;
    const m=location.pathname.match(/\/condominio\/([^/]+)\/?$/);
    return m?decodeURIComponent(m[1]):'';
  };

  /* ---------- Financiamento ---------- */
  const pmtPrice=(pv,aa,years)=>{
    const n=years*12,i=(aa/100)/12;
    if(i===0)return pv/n;
    const f=Math.pow(1+i,n);
    return pv*i*f/(f-1);
  };
  const sacFirstLast=(pv,aa,years)=>{
    const n=years*12,i=(aa/100)/12,amort=pv/n;
    return {first:amort+pv*i,last:amort+(amort*i)};
  };
  const financeHTML=h=>`
    <section class="finance-box" id="simulador">
      <div class="eyebrow">PLANEJE COM CALMA</div>
      <h2>Simule seu financiamento</h2>
      <p class="finance-lead">Uma estimativa inicial para conversar com o corretor. Os valores finais dependem da análise do banco.</p>
      <div class="finance-price"><small>Valor do imóvel</small><strong>${brl(h.valor)}</strong></div>
      <div class="finance-row">
        <div class="finance-head"><label for="fin-down">Entrada</label><strong id="fin-down-lab"></strong></div>
        <input type="range" id="fin-down" min="20" max="80" step="1" value="20" aria-valuemin="20" aria-valuemax="80">
      </div>
      <div class="finance-row">
        <div class="finance-head"><label for="fin-years">Prazo</label><strong id="fin-years-lab"></strong></div>
        <input type="range" id="fin-years" min="5" max="35" step="1" value="30">
      </div>
      <div class="finance-row">
        <div class="finance-head"><label for="fin-rate">Taxa estimada (a.a.)</label><strong id="fin-rate-lab"></strong></div>
        <input type="range" id="fin-rate" min="8" max="14" step="0.1" value="10.5">
      </div>
      <div class="finance-sys" role="group" aria-label="Sistema de amortização">
        <button type="button" class="filter-chip is-on" data-sys="price" aria-pressed="true">Price</button>
        <button type="button" class="filter-chip" data-sys="sac" aria-pressed="false">SAC</button>
      </div>
      <div class="finance-result" id="fin-result"></div>
      <p class="finance-note">Simulação estimativa, apenas para referência. A parcela e as condições estão sujeitas à análise de crédito do banco escolhido.</p>
      <a class="btn" id="fin-wa" target="_blank" rel="noreferrer">${I.msg||''} Falar com o corretor sobre financiamento</a>
    </section>`;
  const bindFinance=h=>{
    const down=$('fin-down'), years=$('fin-years'), rate=$('fin-rate');
    if(!down)return;
    let sys='price';
    const paint=()=>{
      const pct=+down.value, y=+years.value, aa=+rate.value;
      const entrada=h.valor*(pct/100);
      const pv=h.valor-entrada;
      $('fin-down-lab').textContent=pct+'% · '+brl(entrada);
      $('fin-years-lab').textContent=y+' ano'+(y>1?'s':'');
      $('fin-rate-lab').textContent=aa.toLocaleString('pt-BR',{minimumFractionDigits:1,maximumFractionDigits:1})+'% a.a.';
      down.style.setProperty('--p',((pct-20)/60*100)+'%');
      years.style.setProperty('--p',((y-5)/30*100)+'%');
      rate.style.setProperty('--p',((aa-8)/6*100)+'%');
      down.setAttribute('aria-valuenow',String(pct));
      let parcelaTxt='', extra='';
      if(sys==='sac'){
        const s=sacFirstLast(pv,aa,y);
        parcelaTxt=`<div><small>1ª parcela estimada</small><strong>${brl(Math.round(s.first))}</strong></div>
                    <div><small>Última parcela estimada</small><strong>${brl(Math.round(s.last))}</strong></div>`;
      }else{
        const p=pmtPrice(pv,aa,y);
        parcelaTxt=`<div class="finance-pmt"><small>Parcela estimada</small><strong>${brl(Math.round(p))}</strong><span>por mês, no sistema Price</span></div>`;
      }
      $('fin-result').innerHTML=`<div class="finance-stats"><div><small>Valor financiado</small><strong>${brl(Math.round(pv))}</strong></div>${parcelaTxt}</div>`;
      const pRound=sys==='sac'?Math.round(sacFirstLast(pv,aa,y).first):Math.round(pmtPrice(pv,aa,y));
      const sysLab=sys==='sac'?'SAC (1ª parcela)':'Price';
      const msg=`Olá! Gostaria de falar sobre financiamento desta casa:
${houseLineTxt(h)}
${casaAbs(h.id)}

Simulação estimativa:
• Entrada: ${pct}% (${brl(Math.round(entrada))})
• Prazo: ${y} anos
• Taxa estimada: ${aa.toLocaleString('pt-BR',{minimumFractionDigits:1,maximumFractionDigits:1})}% a.a.
• Sistema: ${sysLab}
• Valor financiado: ${brl(Math.round(pv))}
• Parcela estimada: ${brl(pRound)}

Sei que é uma simulação e que o valor final depende da análise do banco. Pode me orientar?`;
      $('fin-wa').href=wa(msg);
    };
    [down,years,rate].forEach(el=>el.addEventListener('input',paint));
    document.querySelectorAll('.finance-sys [data-sys]').forEach(b=>b.addEventListener('click',()=>{
      sys=b.getAttribute('data-sys');
      document.querySelectorAll('.finance-sys [data-sys]').forEach(x=>{
        const on=x===b; x.classList.toggle('is-on',on); x.setAttribute('aria-pressed',on?'true':'false');
      });
      paint();
    }));
    paint();
  };

  /* ---------- Agendar visita ---------- */
  const weekday=['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
  const nextVisitDays=()=>{
    const out=[]; const d=new Date();
    for(let i=0;i<16 && out.length<6;i++){
      const x=new Date(d.getFullYear(),d.getMonth(),d.getDate()+i);
      if(x.getDay()===0)continue; // pulamos o domingo
      out.push(x);
    }
    return out;
  };
  const fmtDay=d=>weekday[d.getDay()].slice(0,3)+' '+String(d.getDate()).padStart(2,'0')+'/'+String(d.getMonth()+1).padStart(2,'0');
  const isoDay=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
  const visitHTML=h=>{
    const days=nextVisitDays();
    return `<div class="visit-box" id="agendar-visita">
      <h3>Agendar visita</h3>
      <p>Escolha o melhor dia e o turno. Confirmamos o horário com o corretor pelo WhatsApp.</p>
      <div class="visit-label">Melhor dia</div>
      <div class="filter-chips visit-days" role="group" aria-label="Melhor dia">
        ${days.map((d,i)=>`<button type="button" class="filter-chip" data-day="${isoDay(d)}" data-day-lab="${esc(fmtDay(d))}" aria-pressed="${i===0?'true':'false'}">${esc(fmtDay(d))}</button>`).join('')}
        <button type="button" class="filter-chip" data-day="outro" data-day-lab="Outro dia" aria-pressed="false">Outro dia</button>
      </div>
      <div class="visit-label">Turno</div>
      <div class="filter-chips visit-turns" role="group" aria-label="Turno">
        <button type="button" class="filter-chip" data-turn="Manhã" aria-pressed="false">Manhã</button>
        <button type="button" class="filter-chip is-on" data-turn="Tarde" aria-pressed="true">Tarde</button>
        <button type="button" class="filter-chip" data-turn="Flexível" aria-pressed="false">Flexível</button>
      </div>
      <a class="btn" id="visit-wa" target="_blank" rel="noreferrer">${I.msg||''} Confirmar pedido de visita no WhatsApp</a>
    </div>`;
  };
  const bindVisit=h=>{
    const root=$('agendar-visita'); if(!root)return;
    const selected=(sel,attr)=>{
      const on=root.querySelector(sel+' [aria-pressed="true"]');
      return on?on.getAttribute(attr):'';
    };
    const paint=()=>{
      const dayLab=selected('.visit-days','data-day-lab')||'A combinar';
      const turn=selected('.visit-turns','data-turn')||'Flexível';
      const msg=`Olá! Gostaria de agendar uma visita a esta casa:
${houseLineTxt(h)}
${casaAbs(h.id)}

Melhor dia: ${dayLab}
Turno: ${turn}

Pode me confirmar um horário?`;
      $('visit-wa').href=wa(msg);
    };
    root.querySelectorAll('.visit-days .filter-chip').forEach((b,i)=>{
      if(i===0){b.classList.add('is-on');b.setAttribute('aria-pressed','true')}
      b.addEventListener('click',()=>{
        root.querySelectorAll('.visit-days .filter-chip').forEach(x=>{const on=x===b;x.classList.toggle('is-on',on);x.setAttribute('aria-pressed',on?'true':'false')});
        paint();
      });
    });
    root.querySelectorAll('.visit-turns .filter-chip').forEach(b=>{
      b.addEventListener('click',()=>{
        root.querySelectorAll('.visit-turns .filter-chip').forEach(x=>{const on=x===b;x.classList.toggle('is-on',on);x.setAttribute('aria-pressed',on?'true':'false')});
        paint();
      });
    });
    paint();
  };

  const mountCasaPage=()=>{
    const id=currentCasaId();
    const c=byId(id);
    const el=$('det');
    if(!el)return;
    if(!c){
      el.innerHTML='<a class="text-link" href="index.html#casas">Voltar às casas</a><div class="empty" style="margin-top:30px">Esta casa não está mais disponível. <a class="text-link" href="index.html#casas">Ver as casas</a></div>';
      return;
    }
    const url=casaAbs(c.id);
    const imgAbs=SITE+'/'+String(c.img[0]||'').replace(/^\//,'');
    const desc=(c.desc||`Casa no condomínio ${c.cond}, em ${houseCity(c)}. ${houseBrief(c)}. ${brl(c.valor)}.`).slice(0,180);
    applySeo({
      title:`Casa no ${c.cond} · ${houseBrief(c)} · ${brl(c.valor)} · Prime House`,
      desc,
      url,
      image:imgAbs,
      type:'article',
      jsonld:{
        '@context':'https://schema.org',
        '@type':['Residence','Product'],
        name:`Casa no ${c.cond}`,
        description:c.desc||desc,
        image:imgAbs,
        url,
        address:{'@type':'PostalAddress',addressLocality:c.cidade,addressRegion:'PA',addressCountry:'BR',addressArea:c.bairro||undefined},
        floorSize:c.area?{'@type':'QuantitativeValue',value:c.area,unitCode:'MTK'}:undefined,
        numberOfRooms:c.q,
        offers:{'@type':'Offer',price:c.valor,priceCurrency:'BRL',availability:'https://schema.org/InStock',url},
        brand:{'@type':'RealEstateAgent',name:'Prime House',url:SITE+'/'}
      }
    });
    const msg=`Olá! Gostaria de perguntar sobre esta casa:\n${houseLineTxt(c)}\n${url}`;
    const msg2=`Olá! Tenho interesse nesta casa:\n${houseLineTxt(c)}\n${url}`;
    const stats=[c.area&&[m2(c.area)+' m²','Construção'],[c.q,'Quartos'],[c.s,'Suítes privativas'],[c.vagas,'Vagas cobertas']].filter(Boolean);
    const dif=(c.dif||[]).map(d=>d.charAt(0).toUpperCase()+d.slice(1));
    const coords=PH.coordsOf?PH.coordsOf(c):null;
    el.innerHTML=`<a class="text-link" href="index.html#casas">Voltar às casas</a>
      <div class="detail-top"><div><div class="eyebrow">${esc(c.cidade)}${c.bairro&&c.bairro!=='Centro'?' · '+esc(c.bairro):''}</div><h1 style="font-size:clamp(34px,4vw,56px)">Casa no ${esc(c.cond)}</h1></div>
      <div class="detail-top-side"><div class="price">${brl(c.valor)}</div>
      <div class="detail-acts">
        <button type="button" class="card-act card-fav" data-fav="${esc(c.id)}" aria-label="Salvar nos favoritos" aria-pressed="false" title="Salvar nos favoritos">${I.heart||''}<span>Favoritar</span></button>
        <button type="button" class="card-act card-cmp" data-cmp="${esc(c.id)}" aria-label="Comparar esta casa" aria-pressed="false" title="Comparar">${I.cmp||''}<span>Comparar</span></button>
      </div></div></div>
      <img class="detail-photo" id="ph" src="${esc(c.img[0])}" alt="Casa no ${esc(c.cond)}, foto 1">
      <div class="thumbs" id="th">${c.img.map((s,i)=>`<button type="button" class="${i?'':'active'}" aria-label="Ver foto ${i+1}" data-i="${i}"><img src="${esc(s)}" alt="" loading="lazy"></button>`).join('')}</div>
      <div class="detail-layout"><div>
        <h2>Espaço para viver bem.</h2>
        <div class="stats" style="--n:${stats.length}">${stats.map(s=>`<div class="stat"><strong>${s[0]}</strong><small>${s[1]}</small></div>`).join('')}</div>
        <p>${esc(c.desc)}</p>
        ${dif.length?`<h3>Diferenciais da casa</h3><ul>${dif.map(d=>`<li>${esc(d)}</li>`).join('')}</ul>`:''}
        <p>Valores e disponibilidade sujeitos à confirmação no atendimento.</p>
        ${financeHTML(c)}
      </div>
      <aside class="contact-box">
        <div class="eyebrow">ATENDIMENTO PRIME HOUSE</div>
        <h3>Vamos conhecer esta casa?</h3>
        <p>Fale com o corretor e combine sua visita.</p>
        <a class="btn" href="${wa(msg)}" target="_blank" rel="noreferrer">${I.msg||''} Pergunte ao corretor sobre essa casa</a>
        <a class="btn secondary" href="${wa(msg2)}" target="_blank" rel="noreferrer">${I.heart||''} Tenho interesse nesta casa</a>
        ${visitHTML(c)}
        <p style="font-size:13px">CRECI 9493 · Exija o CRECI</p>
      </aside></div>
      <section class="map-detail" id="mapa-casa"${coords?'':' hidden'}><h2>Localização aproximada</h2><p>Ponto do condomínio ${esc(c.cond)}, em ${esc(c.cidade)}${c.bairro&&c.bairro!=='Centro'?' · '+esc(c.bairro):''}. A localização da casa não é exibida.</p><div id="mapa-canvas" class="map-canvas map-canvas-detail" role="region" aria-label="Mapa do condomínio"></div></section>`;
    const photo=$('ph'),bs=[...document.querySelectorAll('#th button')];let cur=0;
    const show=i=>{cur=(i+c.img.length)%c.img.length;photo.classList.add('fade');setTimeout(()=>{photo.src=c.img[cur];photo.alt=`Casa no ${c.cond}, foto ${cur+1}`;photo.classList.remove('fade')},150);bs.forEach((b,k)=>b.classList.toggle('active',k===cur));if(bs[cur])bs[cur].scrollIntoView({block:'nearest',inline:'nearest',behavior:'smooth'})};
    bs.forEach(b=>b.onclick=()=>show(+b.dataset.i));
    if(photo)photo.onclick=()=>show(cur+1);
    document.addEventListener('keydown',e=>{
      const reg=$('reg');
      if(reg&&reg.classList.contains('on'))return;
      if(document.querySelector('.ph-overlay.on'))return;
      if(e.key==='ArrowRight')show(cur+1);
      if(e.key==='ArrowLeft')show(cur-1);
      if(e.key==='Escape'){closeModal('ph-cmp-ov');closeModal('ph-favs')}
    });
    if(PH.mountMiniMap)PH.mountMiniMap('mapa-canvas',c);
    bindFinance(c);
    bindVisit(c);
    syncButtons();
  };

  const mountCondoPage=()=>{
    const {esc:e=esc,wa:w=wa,cardHTML,condList,houseLine,I:Ic=I,mountMiniMap,starsRow,reviewsBlock,amenityBlock,photosBlock,openCondoLightbox}=PH;
    const id=currentCondoId();
    const c=(condList?condList():[]).find(x=>x.id===id);
    const el=$('det');
    if(!el)return;
    if(!c){el.innerHTML='<a class="text-link" href="condominios.html">Voltar aos condomínios</a><div class="empty" style="margin-top:30px">Condomínio não encontrado.</div>';return}
    const n=c._houses.length;
    const url=condoAbs(c.id);
    const img=c.fotosAreasComuns&&c.fotosAreasComuns[0]&&c.fotosAreasComuns[0].src
      ? SITE+'/'+String(c.fotosAreasComuns[0].src).replace(/^\//,'')
      : SITE+'/img/og-prime-house.jpg';
    const desc=(c.resumo||`Condomínio ${c.nome}, em ${c.cidade}${c.bairro?' · '+c.bairro:''}. Casas selecionadas com a Prime House.`).slice(0,200);
    applySeo({
      title:`${c.nome} · ${c.cidade} · Prime House`,
      desc,
      url,
      image:img,
      type:'website',
      jsonld:{
        '@context':'https://schema.org',
        '@type':n?'ItemList':'Place',
        name:c.nome,
        description:desc,
        url,
        image:img,
        address:{'@type':'PostalAddress',addressLocality:c.cidade,addressRegion:'PA',addressCountry:'BR'},
        numberOfItems:n||undefined,
        itemListElement:n?c._houses.map((h,i)=>({'@type':'ListItem',position:i+1,url:casaAbs(h.id),name:'Casa no '+h.cond})):undefined
      }
    });
    const infra=(c.lazer&&c.lazer.length)||(c.seg&&c.seg.length)?`<div class="amenity-block"><h2>O que há nas áreas comuns</h2><div class="amenity-grid">${amenityBlock('Lazer e convivência',c.lazer||[])}${amenityBlock('Segurança',c.seg||[])}</div></div>`:'';
    const fotos=c.fotosAreasComuns||[];
    const galeria=fotos.length?`<section class="condo-gallery"><h2>Áreas comuns</h2>${photosBlock(c)}</section>`:(c.googleReviewsNota&&!fotos.length&&/fotos públicas/.test(c.googleReviewsNota)?`<p class="g-note">${e(c.googleReviewsNota)}</p>`:'');
    el.innerHTML=`<a class="text-link" href="condominios.html">Voltar aos condomínios</a><div class="detail-top"><div><div class="eyebrow">${e(c.cidade)}${c.bairro?' · '+e(c.bairro):''}</div><h1 style="font-size:clamp(34px,4vw,56px)">${e(c.nome)}</h1>${starsRow?starsRow(c):''}</div>${n?`<a class="btn secondary" href="index.html?condominio=${encodeURIComponent(c._houses[0].cond)}#casas">Casas disponíveis aqui · ${n}</a>`:''}</div>
<div class="detail-layout" style="margin-top:0"><div><h2>Escolha onde viver.</h2><p>${e(c.resumo)}</p>
${galeria}
${infra}
${reviewsBlock?reviewsBlock(c):''}
<h3>Endereço</h3><p>${e(c.local)}<br><a class="text-link" href="${c.maps}" target="_blank" rel="noreferrer">Ver no Google Maps</a></p>
${c.construtora?`<h3>Construtora</h3><p>${e(c.construtora)}</p>`:''}${c.tamanho?`<h3>Lotes</h3><p>${e(c.tamanho)}</p>`:''}
<h3>Casas disponíveis aqui · ${n}</h3>${n?`<ul class="condo-houses">${c._houses.map(houseLine).join('')}</ul>`:'<p>Sem casas no nosso catálogo no momento.</p>'}
<p style="font-size:12px">Informações do material dos imóveis. Fotos das áreas comuns e avaliações foram reunidas de fontes públicas (construtoras, anúncios e Google).</p></div>
<aside class="contact-box"><div class="eyebrow">ATENDIMENTO PRIME HOUSE</div><h3>Quer uma casa aqui?</h3><p>Fale com o corretor e encontre sua casa neste condomínio.</p><a class="btn" href="${w('Olá! Quero uma casa no condomínio '+c.nome+'.')}" target="_blank" rel="noreferrer">${Ic.msg||''} Quero uma casa aqui</a><p style="font-size:13px">CRECI 9493 · Exija o CRECI</p></aside></div>
${c.lat?`<section class="map-detail" id="mapa-condo"><h2>Localização aproximada</h2><p>${e(c.local)}. A localização das casas não é exibida.</p><div id="mapa-canvas" class="map-canvas map-canvas-detail" role="region" aria-label="Mapa do condomínio"></div></section>`:''}
${n?`<section class="section"><div class="section-head"><div><div class="eyebrow">NOSSA SELEÇÃO</div><h2>Casas neste condomínio.</h2></div><small>${n} ${n===1?'imóvel':'imóveis'} na seleção</small></div><div class="grid">${c._houses.map(cardHTML).join('')}</div></section>`:''}`;
    if(c.lat&&mountMiniMap)mountMiniMap('mapa-canvas',c);
    if(fotos.length){
      el.querySelectorAll('.condo-photos [data-lx]').forEach(btn=>{
        btn.addEventListener('click',()=>openCondoLightbox(fotos, Number(btn.getAttribute('data-lx'))||0));
      });
    }
    syncButtons();
  };

  /* ---------- events ---------- */
  document.addEventListener('click',e=>{
    const rm=e.target.closest&&e.target.closest('[data-cmp-rm]');
    if(rm){e.preventDefault();toggleCmp(rm.getAttribute('data-cmp-rm'));return}
    const frm=e.target.closest&&e.target.closest('[data-fav-rm]');
    if(frm){e.preventDefault();toggleFav(frm.getAttribute('data-fav-rm'));return}
    const fav=e.target.closest&&e.target.closest('[data-fav]');
    if(fav){e.preventDefault();e.stopPropagation();toggleFav(fav.getAttribute('data-fav'));return}
    const cmp=e.target.closest&&e.target.closest('[data-cmp]');
    if(cmp){e.preventDefault();e.stopPropagation();toggleCmp(cmp.getAttribute('data-cmp'));return}
  },true);

  document.addEventListener('keydown',e=>{
    if(e.key!=='Escape')return;
    closeModal('ph-cmp-ov');closeModal('ph-favs');
  });

  const boot=()=>{
    injectChrome();
    syncButtons();
    const path=(location.pathname.split('/').pop()||'index.html');
    const isCasa=!!currentCasaId()&&$('det')&&(path==='casa.html'||/\/casa\//.test(location.pathname)||window.PH_CASA_ID);
    const isCondo=$('det')&&(path==='condominio.html'||/\/condominio\//.test(location.pathname)||window.PH_CONDO_ID);
    // mount only if the page didn't already? pages call mount explicitly.
  };

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);
  else boot();

  const mo=new MutationObserver(()=>{clearTimeout(mo._t);mo._t=setTimeout(syncButtons,60)});
  const startMo=()=>{if(document.body)mo.observe(document.body,{childList:true,subtree:true})};
  document.addEventListener('DOMContentLoaded',()=>{syncButtons();startMo()});

  window.PH=Object.assign(PH,{
    casaAbs,condoAbs,houseBrief,houseLineTxt,houseHighlights,terrenoOf,
    mountCasaPage,mountCondoPage,applySeo,toggleFav,toggleCmp,openCompare,openFavs,
    SITE
  });
})();
