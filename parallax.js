/* Parallax editorial da Prime House: rAF + scroll passivo, só translate3d e opacity.
   Abertura: tela preta, logo no centro, descrição maior; espera clique/tecla/roda no
   computador ou arraste para cima no celular; a logo encaixa no cabeçalho e o site esmaece. */
(()=>{
  const reduceMq=window.matchMedia('(prefers-reduced-motion: reduce)');
  const mobileMq=window.matchMedia('(max-width:800px)');
  const coarseMq=window.matchMedia('(pointer: coarse)');
  const root=document.documentElement;
  const INTRO_KEY='ph-px-intro';
  const SWIPE_UP=40;
  const layers=[];
  let hero,photo,copy,ticking=false,io,mo;
  let introActive=false,introT0=null;
  let openLayer,openBg,openLogo,openCap,openLine,openDesc,flyFrom=null,flyTo=null,handed=false;
  let flying=false,flyT0=null,readyToEnter=false,pendingEnter=false;
  let swipeY=null,swipeX=null,boundEnter=false;

  /* Abertura no ritmo de trailer: respiro no preto, logo lenta, filete, texto; o voo só começa após a interação. */
  const T_LOGO=350, T_LOGO_END=2750, T_LINE=3300, T_LINE_END=4200, T_DESC=3500, T_DESC_END=4900;
  const T_FLY_DUR=1250, T_CAP_FADE=420, T_BG_DELAY=200;

  const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
  const lerp=(a,b,t)=>a+(b-a)*t;
  const isMobile=()=>mobileMq.matches;
  const isMobileIntro=()=>coarseMq.matches||mobileMq.matches;
  const restScale=()=>isMobile()?1.14:1.18;
  const ss=(k,v)=>{try{return v===undefined?sessionStorage.getItem(k):sessionStorage.setItem(k,v)}catch(e){return null}};

  const easeOut=(function(x1,y1,x2,y2){
    const cx=3*x1,bx=3*(x2-x1)-cx,ax=1-cx-bx;
    const cy=3*y1,by=3*(y2-y1)-cy,ay=1-cy-by;
    const sx=t=>((ax*t+bx)*t+cx)*t, dx=t=>(3*ax*t+2*bx)*t+cx, sy=t=>((ay*t+by)*t+cy)*t;
    return t=>{
      t=clamp(t,0,1); let x=t;
      for(let i=0;i<6;i++){const d=dx(x);if(Math.abs(d)<1e-6)break;x-=(sx(x)-t)/d}
      return sy(x);
    };
  })(.16,1,.3,1);
  const easeCine=(function(x1,y1,x2,y2){
    const cx=3*x1,bx=3*(x2-x1)-cx,ax=1-cx-bx;
    const cy=3*y1,by=3*(y2-y1)-cy,ay=1-cy-by;
    const sx=t=>((ax*t+bx)*t+cx)*t, dx=t=>(3*ax*t+2*bx)*t+cx, sy=t=>((ay*t+by)*t+cy)*t;
    return t=>{
      t=clamp(t,0,1); let x=t;
      for(let i=0;i<6;i++){const d=dx(x);if(Math.abs(d)<1e-6)break;x-=(sx(x)-t)/d}
      return sy(x);
    };
  })(.22,.08,.22,1);
  const easeFly=(function(x1,y1,x2,y2){
    const cx=3*x1,bx=3*(x2-x1)-cx,ax=1-cx-bx;
    const cy=3*y1,by=3*(y2-y1)-cy,ay=1-cy-by;
    const sx=t=>((ax*t+bx)*t+cx)*t, dx=t=>(3*ax*t+2*bx)*t+cx, sy=t=>((ay*t+by)*t+cy)*t;
    return t=>{
      t=clamp(t,0,1); let x=t;
      for(let i=0;i<6;i++){const d=dx(x);if(Math.abs(d)<1e-6)break;x-=(sx(x)-t)/d}
      return sy(x);
    };
  })(.22,.8,.24,1);

  const wrapDetail=()=>{
    const img=document.querySelector('.detail-photo');
    if(!img||img.closest('.ph-px-detail'))return img;
    const wrap=document.createElement('div');
    wrap.className='ph-px-detail';
    img.parentNode.insertBefore(wrap,img);
    wrap.appendChild(img);
    return img;
  };

  const collectLayers=()=>{
    layers.length=0;
    document.querySelectorAll('.card-media img').forEach(img=>{
      img.classList.add('ph-px-layer');
      layers.push({el:img,kind:'card',media:img.closest('.card-media')||img.parentElement});
    });
    const detail=document.querySelector('.ph-px-detail .detail-photo, .detail-photo');
    if(detail){
      const media=detail.closest('.ph-px-detail')||detail.parentElement;
      detail.classList.add('ph-px-layer');
      layers.push({el:detail,kind:'detail',media});
    }
  };

  const markReveal=(el,fadeOnly)=>{
    if(!el||el.classList.contains('ph-px-reveal')||el.classList.contains('ph-px-reveal-fade'))return;
    el.classList.add(fadeOnly?'ph-px-reveal-fade':'ph-px-reveal');
  };

  const prepareReveals=()=>{
    document.querySelectorAll('.filters, #casas .section-head, .card, .search-panel, #condominios .section-head, .detail-top, .ph-px-detail, .thumbs, .detail-layout').forEach(el=>markReveal(el,false));
    document.querySelectorAll('#mapa, .map-detail, .condo').forEach(el=>markReveal(el,true));
    document.querySelectorAll('.ph-px-reveal, .ph-px-reveal-fade').forEach((el,i)=>{
      if(!el.classList.contains('ph-px-reveal-fade')&&el.classList.contains('card')){
        el.style.transitionDelay=(i%2)*70+'ms';
      }
    });
    document.querySelectorAll('.ph-px-reveal, .ph-px-reveal-fade').forEach(el=>{
      const r=el.getBoundingClientRect();
      const vh=window.innerHeight||1;
      if(r.top<vh*0.92&&r.bottom>0)el.classList.add('ph-px-in');
    });
    if(io)io.disconnect();
    io=new IntersectionObserver(entries=>{
      entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('ph-px-in')});
    },{threshold:0.12,rootMargin:'0px 0px -8% 0px'});
    document.querySelectorAll('.ph-px-reveal:not(.ph-px-in), .ph-px-reveal-fade:not(.ph-px-in)').forEach(el=>io.observe(el));
  };

  const realLogo=()=>document.querySelector('.site-header a.brand-image img, .site-header .brand-image img');
  const boxOf=el=>{
    const r=el.getBoundingClientRect();
    return {l:r.left,t:r.top,w:r.width,h:r.height};
  };

  const placeCenter=()=>{
    if(!openLogo)return null;
    const vw=window.innerWidth, vh=window.innerHeight;
    const w=isMobile()?Math.min(vw*0.90,360):Math.min(vw*0.72,1040);
    const h=w*(121/1202);
    const l=(vw-w)/2;
    const t=vh*0.40-h/2;
    openLogo.style.left=l+'px';
    openLogo.style.top=t+'px';
    openLogo.style.width=w+'px';
    if(openCap)openCap.style.top=(t+h+(isMobile()?24:34))+'px';
    return {l,t,w,h};
  };

  const startFly=(now)=>{
    if(flying||handed||!introActive)return;
    flying=true;
    flyT0=now!=null?now:performance.now();
    flyFrom=placeCenter();
    const target=realLogo();
    if(target)flyTo=boxOf(target);
    requestTick();
  };

  const requestEnter=()=>{
    if(!introActive||handed||flying)return;
    if(!readyToEnter){pendingEnter=true;return}
    startFly();
  };

  const onPointerDown=(e)=>{
    if(isMobileIntro())return;
    if(e&&e.button!=null&&e.button!==0)return;
    requestEnter();
  };
  const onKeyDown=(e)=>{
    if(isMobileIntro())return;
    if(!e)return;
    if(e.ctrlKey||e.metaKey||e.altKey)return;
    if(e.key==='Tab'||e.key==='Shift'||e.key==='Control'||e.key==='Meta'||e.key==='Alt')return;
    if(/^F\d{1,2}$/.test(e.key))return;
    e.preventDefault();
    requestEnter();
  };
  const onWheel=(e)=>{
    if(isMobileIntro())return;
    if(e)e.preventDefault();
    requestEnter();
  };
  const onTouchStart=(e)=>{
    if(!isMobileIntro()||!e.touches||!e.touches.length)return;
    swipeY=e.touches[0].clientY;
    swipeX=e.touches[0].clientX;
  };
  const onTouchMove=(e)=>{
    if(!isMobileIntro()||swipeY==null||!e.touches||!e.touches.length)return;
    const y=e.touches[0].clientY;
    const x=e.touches[0].clientX;
    const dy=swipeY-y;
    const dx=x-swipeX;
    if(dy>=SWIPE_UP&&dy>=Math.abs(dx)){
      swipeY=null;swipeX=null;
      if(e.cancelable)e.preventDefault();
      requestEnter();
    }
  };
  const onTouchEnd=(e)=>{
    if(!isMobileIntro()||swipeY==null){swipeY=null;swipeX=null;return}
    let y,x;
    if(e.changedTouches&&e.changedTouches.length){
      y=e.changedTouches[0].clientY;
      x=e.changedTouches[0].clientX;
    }
    const dy=y!=null?swipeY-y:0;
    const dx=x!=null?x-swipeX:0;
    swipeY=null;swipeX=null;
    if(dy>=SWIPE_UP&&dy>=Math.abs(dx))requestEnter();
  };

  const bindEnter=()=>{
    if(boundEnter)return;
    boundEnter=true;
    const opts={capture:true};
    const wheelOpts={capture:true,passive:false};
    const touchOpts={capture:true,passive:false};
    window.addEventListener('pointerdown',onPointerDown,opts);
    window.addEventListener('keydown',onKeyDown,opts);
    window.addEventListener('wheel',onWheel,wheelOpts);
    window.addEventListener('touchstart',onTouchStart,touchOpts);
    window.addEventListener('touchmove',onTouchMove,touchOpts);
    window.addEventListener('touchend',onTouchEnd,opts);
    window.addEventListener('touchcancel',onTouchEnd,opts);
  };
  const unbindEnter=()=>{
    if(!boundEnter)return;
    boundEnter=false;
    window.removeEventListener('pointerdown',onPointerDown,true);
    window.removeEventListener('keydown',onKeyDown,true);
    window.removeEventListener('wheel',onWheel,true);
    window.removeEventListener('touchstart',onTouchStart,true);
    window.removeEventListener('touchmove',onTouchMove,true);
    window.removeEventListener('touchend',onTouchEnd,true);
    window.removeEventListener('touchcancel',onTouchEnd,true);
    swipeY=null;swipeX=null;
  };

  const applyOpen=(now)=>{
    if(!introActive||!openLogo)return;
    if(introT0==null)return;

    if(!flying){
      const ms=now-introT0;
      const p=ms<T_LOGO?0:easeCine(clamp((ms-T_LOGO)/(T_LOGO_END-T_LOGO),0,1));
      openLogo.style.opacity=String(p);
      openLogo.style.transformOrigin='50% 50%';
      openLogo.style.transform=`translate3d(0,0,0) scale(${(0.94+0.06*p).toFixed(4)})`;
      if(openCap)openCap.style.opacity='1';
      const lineP=ms<T_LINE?0:easeCine(clamp((ms-T_LINE)/(T_LINE_END-T_LINE),0,1));
      if(openLine){
        openLine.style.transform=`scaleX(${lineP.toFixed(4)})`;
        openLine.style.opacity=String((0.95*lineP).toFixed(3));
      }
      const d=ms<T_DESC?0:easeCine(clamp((ms-T_DESC)/(T_DESC_END-T_DESC),0,1));
      if(openDesc)openDesc.style.opacity=String(d);
      if(openBg)openBg.style.opacity='1';
      if(ms>=T_DESC_END)readyToEnter=true;
      if(readyToEnter&&pendingEnter)startFly(now);
      if(!flying)return;
    }

    if(!flyFrom)flyFrom=placeCenter();
    const target=realLogo();
    if(target)flyTo=boxOf(target);
    const ms=now-(flyT0||now);
    if(!flyFrom||!flyTo||flyTo.w<2){
      if(ms>=T_FLY_DUR)finishOpen();
      return;
    }

    const p=easeFly(clamp(ms/T_FLY_DUR,0,1));
    const cap=1-easeOut(clamp(ms/T_CAP_FADE,0,1));
    if(openCap)openCap.style.opacity=String(Math.max(0,cap));
    const bg=ms<T_BG_DELAY?1:1-easeOut(clamp((ms-T_BG_DELAY)/(T_FLY_DUR-T_BG_DELAY),0,1));
    if(openBg)openBg.style.opacity=String(Math.max(0,bg));

    const dx=flyTo.l-flyFrom.l, dy=flyTo.t-flyFrom.t, sc=flyTo.w/flyFrom.w;
    openLogo.style.left=flyFrom.l+'px';
    openLogo.style.top=flyFrom.t+'px';
    openLogo.style.width=flyFrom.w+'px';
    openLogo.style.opacity='1';
    openLogo.style.transformOrigin='0 0';
    openLogo.style.transform=`translate3d(${(dx*p).toFixed(2)}px,${(dy*p).toFixed(2)}px,0) scale(${(lerp(1,sc,p)).toFixed(5)})`;

    if(p>=1)finishOpen();
  };

  const finishOpen=()=>{
    if(handed)return;
    handed=true;
    unbindEnter();
    /* Encaixa no mesmo pixel: mostra a logo real e só então remove o overlay. */
    const target=realLogo();
    if(target&&openLogo){
      flyTo=boxOf(target);
      if(flyFrom&&flyTo.w>2){
        const dx=flyTo.l-flyFrom.l, dy=flyTo.t-flyFrom.t, sc=flyTo.w/flyFrom.w;
        openLogo.style.transformOrigin='0 0';
        openLogo.style.transform=`translate3d(${dx.toFixed(2)}px,${dy.toFixed(2)}px,0) scale(${sc.toFixed(5)})`;
      }
    }
    root.classList.remove('ph-px-intro');
    if(target)target.style.opacity='';
    requestAnimationFrame(()=>{
      if(openLayer&&openLayer.parentNode)openLayer.parentNode.removeChild(openLayer);
      openLayer=openBg=openLogo=openCap=openLine=openDesc=null;
      root.classList.remove('ph-px-open-on','ph-px-intro-in');
      document.documentElement.style.overflow='';
      document.body.style.overflow='';
      introActive=false;
      flying=false;
    });
  };

  const mountOpen=()=>{
    if(openLayer)return;
    const layer=document.createElement('div');
    layer.className='ph-open';
    layer.setAttribute('aria-hidden','true');
    layer.innerHTML='<div class="ph-open-bg"></div><img class="ph-open-logo" src="img/logo-prime-house-letreiro.png" alt="" width="1202" height="121"><div class="ph-open-cap"><div class="ph-open-line"></div><p class="ph-open-desc">Casas selecionadas nos principais condomínios fechados de Belém, Ananindeua e Marituba</p></div>';
    document.body.appendChild(layer);
    openLayer=layer;
    openBg=layer.querySelector('.ph-open-bg');
    openLogo=layer.querySelector('.ph-open-logo');
    openCap=layer.querySelector('.ph-open-cap');
    openLine=layer.querySelector('.ph-open-line');
    openDesc=layer.querySelector('.ph-open-desc');
    openLogo.style.opacity='0';
    if(openCap)openCap.style.opacity='1';
    if(openLine){openLine.style.opacity='0';openLine.style.transform='scaleX(0)'}
    if(openDesc)openDesc.style.opacity='0';
    placeCenter();
    root.classList.add('ph-px-open-on');
    document.documentElement.style.overflow='hidden';
    document.body.style.overflow='hidden';
  };

  const beginIntro=()=>{
    introActive=true;introT0=null;flyFrom=null;flyTo=null;handed=false;
    flying=false;flyT0=null;readyToEnter=false;pendingEnter=false;
    root.classList.add('ph-px-intro');
    try{ss(INTRO_KEY,'1')}catch(e){}
    mountOpen();
    bindEnter();
    const kick=()=>requestAnimationFrame(()=>requestAnimationFrame(()=>{
      introT0=performance.now();
      placeCenter();
      requestTick();
    }));
    /* A logo da abertura não depende da foto da capa; a revelação do site espera a foto, sem atrasar a cena preta. */
    kick();
  };

  const applyHero=(y,intensity)=>{
    if(!hero||!photo)return;
    const rect=hero.getBoundingClientRect();
    const h=Math.max(rect.height,1);
    const p=clamp(-rect.top/h,0,1);
    const scale=restScale();
    const slack=(h*(scale-1)/2)*0.82;
    const shift=clamp(y*0.42*intensity,0,slack);
    photo.style.transform=`translate3d(0,${shift.toFixed(2)}px,0) scale(${scale.toFixed(4)})`;
    if(copy){
      const copyShift=y*0.14*intensity;
      const fade=clamp(1-Math.max(0,p-0.06)*1.15,0,1);
      if(y<12||(copyShift<0.4&&fade>0.995)){
        copy.style.transform='';
        copy.style.opacity='';
      }else{
        copy.style.transform=`translate3d(0,${copyShift.toFixed(2)}px,0)`;
        copy.style.opacity=fade.toFixed(3);
      }
    }
  };

  const applyLayers=(intensity)=>{
    const vh=window.innerHeight||1;
    layers.forEach(layer=>{
      const box=layer.media||layer.el;
      const r=box.getBoundingClientRect();
      if(r.bottom<-80||r.top>vh+80)return;
      const scale=isMobile()?1.12:1.16;
      const slack=(Math.max(box.offsetHeight||r.height,1)*(scale-1)/2)*0.8;
      const t=(vh/2-(r.top+r.height/2))/vh;
      const shift=clamp(t*56*intensity,-slack,slack);
      layer.el.style.transform=`translate3d(0,${shift.toFixed(2)}px,0) scale(${scale})`;
    });
  };

  const update=()=>{
    ticking=false;
    if(reduceMq.matches)return;
    const now=performance.now();
    if(introActive)applyOpen(now);
    const y=window.scrollY||0;
    const intensity=isMobile()?0.6:1;
    applyHero(y,intensity);
    applyLayers(intensity);
    if(introActive)requestTick();
  };

  const requestTick=()=>{
    if(ticking)return;
    ticking=true;
    requestAnimationFrame(update);
  };

  const clearMotion=()=>{
    introActive=false;introT0=null;handed=true;flying=false;
    unbindEnter();
    if(openLayer&&openLayer.parentNode)openLayer.parentNode.removeChild(openLayer);
    openLayer=openBg=openLogo=openCap=openLine=openDesc=null;
    root.classList.remove('ph-px-ready','ph-px-intro','ph-px-intro-in','ph-px-open-on');
    root.classList.add('ph-px-reduced');
    document.documentElement.style.overflow='';
    document.body.style.overflow='';
    const target=realLogo();
    if(target)target.style.opacity='';
    if(photo){photo.style.transform='';photo.style.willChange='auto'}
    if(copy){copy.style.transform='';copy.style.opacity=''}
    layers.forEach(l=>{l.el.style.transform=''});
    document.querySelectorAll('.ph-px-reveal, .ph-px-reveal-fade').forEach(el=>{
      el.classList.add('ph-px-in');
      el.style.transitionDelay='';
    });
  };

  const start=()=>{
    hero=document.querySelector('.hero');
    photo=document.querySelector('.hero-photo');
    copy=document.querySelector('.hero-copy');
    wrapDetail();
    collectLayers();
    if(reduceMq.matches){clearMotion();return}
    root.classList.remove('ph-px-reduced');
    const playIntro=!!(hero&&!ss(INTRO_KEY));
    if(playIntro)beginIntro();
    else{
      root.classList.remove('ph-px-intro','ph-px-intro-in','ph-px-open-on');
      document.documentElement.style.overflow='';
      document.body.style.overflow='';
    }
    root.classList.add('ph-px-ready');
    prepareReveals();
    update();
    const grid=document.getElementById('grid');
    if(grid&&!mo){
      mo=new MutationObserver(()=>{
        collectLayers();
        prepareReveals();
        requestTick();
      });
      mo.observe(grid,{childList:true});
    }
  };

  window.addEventListener('scroll',requestTick,{passive:true});
  window.addEventListener('resize',()=>{
    if(introActive&&!handed&&openLogo){
      if(!flying)flyFrom=placeCenter();
      else{const t=realLogo();if(t)flyTo=boxOf(t)}
    }
    requestTick();
  },{passive:true});
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)requestTick()});
  const onReduce=()=>{if(reduceMq.matches)clearMotion();else start()};
  if(reduceMq.addEventListener)reduceMq.addEventListener('change',onReduce);
  else if(reduceMq.addListener)reduceMq.addListener(onReduce);

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);
  else start();
})();
