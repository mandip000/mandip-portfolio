(()=>{
const $=s=>document.querySelector(s),RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
const esc=t=>String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const GH='https://github.com/mandip000';
const skills=[
['Programming',['Python','Java','SQL','JavaScript'],'Core languages for applications, data work and backend logic.'],
['Artificial Intelligence',['Machine Learning','AI Fundamentals','NLP','Generative AI'],'Learning how models are trained, evaluated and applied.'],
['Computer Vision',['OpenCV','Deep Learning Concepts','Object Detection','Image Processing'],'Working with images and video to extract useful signals.'],
['Web Development',['HTML','CSS','JavaScript','Flask','REST APIs'],'Interfaces and backends that connect cleanly.'],
['Data',['Pandas','NumPy','Matplotlib','Data Cleaning','Data Analysis'],'Preparing, exploring and visualising datasets.'],
['Tools',['Git','GitHub','VS Code','Jupyter Notebook','MySQL'],'Everyday tooling for building and versioning projects.']];
const projects=[
{n:'Aquarius AI',cat:'Generative AI · Web App',d:'An AI-powered assistant focused on conversational interaction, coding assistance, research, productivity and AI workflows.',t:['Python','Flask','AI APIs','Generative AI','REST APIs'],gh:null,live:null,
 p:'Bring conversation, coding help, research and productivity tasks into one assistant.',a:'Python and Flask backend that connects to AI APIs and serves a web interface.',f:['Conversational interaction','Coding assistance','Research support','AI-powered workflows'],l:'Integrating AI APIs and structuring a Flask application around them.'},
{n:'Face Emotion Detection Dashboard',cat:'Computer Vision',d:'A computer vision project that analyses facial expressions and presents results in an interactive dashboard.',t:['Python','OpenCV','Computer Vision','Deep Learning'],gh:GH+'/face-emotion-detection-dashboard',live:'https://mandip000.github.io/face-emotion-detection-dashboard/',
 p:'Make facial-expression analysis easy to see and explore.',a:'Computer vision techniques feeding an interactive dashboard.',f:['Facial expression analysis','Interactive dashboard'],l:'Applying computer vision concepts to a visual, user-facing project.'},
{n:'WeatherInsight',cat:'API Integration · Web App',d:'A weather application that presents useful weather information through a clean interface.',t:['Python','API Integration','Flask','HTML','CSS','JavaScript'],gh:GH+'/WeatherInsight',live:'https://mandip000.github.io/WeatherInsight/',
 p:'Present weather data clearly without clutter.',a:'Fetch data from a weather API and render it in a simple interface.',f:['Weather data from an API','Clean user interface'],l:'Working with external APIs and presenting data clearly.'}];
const certs=[['AWS Academy Graduate','Generative AI Foundations','assets/certificates/generative-ai-foundations.png','assets/certificates/generative-ai-foundations.pdf','Introduces generative AI concepts, common use cases, responsible AI considerations, and how generative models can support real-world workflows.','Generative AI · AI fundamentals · Responsible AI'],['AWS Academy Graduate','Machine Learning for Natural Language Processing','assets/certificates/machine-learning-nlp.png','assets/certificates/machine-learning-nlp.pdf','Covers the relationship between machine learning and language data, including how NLP tasks can be approached with ML methods.','Natural language processing · Machine learning · Text data'],['AWS Academy Graduate','Machine Learning Foundations','assets/certificates/machine-learning-foundations.png','assets/certificates/machine-learning-foundations.pdf','Builds foundational understanding of machine learning concepts, typical workflows, model training, and evaluating predictive systems.','ML fundamentals · Model workflow · Evaluation'],['AWS Academy Graduate','Cloud Foundations','assets/certificates/cloud-foundations.png','assets/certificates/cloud-foundations.pdf','Introduces cloud computing concepts, core cloud services, security basics, and the value of cloud infrastructure for modern applications.','Cloud computing · AWS fundamentals · Cloud security'],['GPPC','Course'],['Anugami Program','Object Detection Car / Robotics'],['Strength','Teamwork'],['Strength','Leadership'],['Strength','Problem Solving'],['Strength','Time Management'],['Strength','Quick Learner']];
const svcs=[['Python Development','Python applications, automation and software development.'],['Flask Web Development','Clean and scalable Flask applications.'],['AI & Machine Learning','AI/ML project development and integration.'],['Computer Vision','Computer vision and image-processing projects.'],['API Integration','REST API integration and backend connectivity.'],['Data Processing','Pandas, NumPy, data cleaning and analysis.'],['Database Integration','SQL and application database integration.'],['Debugging & Code Improvement','Finding errors, improving structure and making applications more reliable.']];
const stack=['Python','Java','JavaScript','HTML','CSS','Flask','OpenCV','Pandas','NumPy','Matplotlib','SQL','MySQL','Git','GitHub','VS Code','Jupyter'];
const tags=a=>`<div class="tags">${a.map(x=>`<span>${esc(x)}</span>`).join('')}</div>`;
$('#skillGrid').innerHTML=skills.map(s=>`<article class="card skill rv" tabindex="0"><h3>${s[0]}</h3>${tags(s[1])}<p class="more">${s[2]}</p></article>`).join('');
$('#projGrid').innerHTML=projects.map((p,i)=>`<button class="card proj rv" data-i="${i}" aria-label="Open ${esc(p.n)} case study"><div class="pvw"><div class="pv">${p.n.split(' ').map(w=>w[0]).slice(0,2).join('')}</div></div><div class="pb"><span class="cat">${p.cat}</span><h3>${p.n}</h3><p>${p.d}</p>${tags(p.t)}</div></button>`).join('');
$('#certGrid').innerHTML=certs.map((c,i)=>c[2]?`<article class="card rv cert-card"><button class="cert-preview cert-detail-trigger" type="button" data-cert="${i}" aria-label="Read about ${esc(c[1])} certificate"><img src="${c[2]}" alt="${esc(c[1])} certificate preview" loading="lazy"><span class="cert-overlay">Explore certificate ↗</span></button><span class="cat">${esc(c[0])}</span><h3>${esc(c[1])}</h3><p class="cert-summary">${esc(c[4]||'Professional learning and foundational concepts.')}</p><button class="btn sm cert-open cert-detail-trigger" type="button" data-cert="${i}">Certificate details ↗</button></article>`:`<article class="card rv"><span class="cat">${esc(c[0])}</span><h3>${esc(c[1])}</h3></article>`).join('');
$('#svcGrid').innerHTML=svcs.map(s=>`<article class="card rv"><h3>${esc(s[0])}</h3><p>${s[1]}</p></article>`).join('');
$('#stack').innerHTML=stack.map(s=>`<button class="chip" aria-pressed="false">${s}</button>`).join('');
$('#yr').textContent=new Date().getFullYear();

// Modal
const m=$('#modal'),mb=$('#mBody');let last;
const link=(u,t,pri)=>`<a class="btn${pri?' pri':''}" href="${u}" target="_blank" rel="noopener">${t}</a>`;
function open(i){const p=projects[i];window.__cur=i;if(m.hidden)last=document.activeElement;
 const links=[p.live&&link(p.live,'Live Demo',1),link(p.gh||GH,p.gh?'GitHub':'GitHub Profile',!p.live)].filter(Boolean).join('');
 mb.innerHTML=`<span class="cat" style="font-size:.78rem;color:var(--ac2)">${p.cat}</span><h3 id="mTitle" style="font-size:1.6rem;margin-top:4px">${p.n}</h3>
 <h4>Problem</h4><p>${p.p}</p><h4>Approach</h4><p>${p.a}</p><h4>Technology</h4>${tags(p.t)}<h4>Key features</h4><ul>${p.f.map(x=>`<li>${x}</li>`).join('')}</ul><h4>What I learned</h4><p>${p.l}</p><h4>Links</h4><div class="row">${links}</div><div class="mnav"><button class="btn sm" data-d="-1">← Previous</button><span class="muted">${i+1} / ${projects.length}</span><button class="btn sm" data-d="1">Next →</button></div>`;
 m.hidden=false;requestAnimationFrame(()=>m.classList.add('open'));$('#mClose').focus();document.body.style.overflow='hidden'}
function close(){m.classList.remove('open');setTimeout(()=>{m.hidden=true},RM?0:250);document.body.style.overflow='';last&&last.focus()}
window.openProj=open;
$('#projGrid').addEventListener('click',e=>{const b=e.target.closest('.proj');b&&open(b.dataset.i)});
// Certificate details: click a certificate to see a learning summary and open the original PDF.
$('#certGrid').addEventListener('click',e=>{const b=e.target.closest('[data-cert]');if(!b)return;const c=certs[Number(b.dataset.cert)];if(!c)return;if(m.hidden)last=document.activeElement;mb.innerHTML=`<span class="cat">${esc(c[0])}</span><h3 id="mTitle" class="cert-modal-title">${esc(c[1])}</h3><div class="cert-modal-preview"><img src="${c[2]}" alt="${esc(c[1])} certificate"></div><h4>What this certificate covers</h4><p>${esc(c[4]||'This entry records additional learning and development.')}</p><h4>Skills and topics</h4><div class="tags">${(c[5]||'Professional development').split(' · ').map(x=>`<span>${esc(x)}</span>`).join('')}</div><p class="muted cert-note">This summary is an overview of the learning area, not a claim of professional certification beyond what the certificate states.</p><div class="row cert-modal-actions"><a class="btn pri" href="${c[3]}" target="_blank" rel="noopener">Open original PDF ↗</a><button class="btn" type="button" id="certBack">Back to portfolio</button></div>`;m.hidden=false;requestAnimationFrame(()=>m.classList.add('open'));$('#mClose').focus();document.body.style.overflow='hidden';$('#certBack').onclick=close;});
$('#mClose').onclick=close;m.addEventListener('click',e=>{e.target===m&&close()});
addEventListener('keydown',e=>{if(e.key==='Escape'&&!m.hidden)close();
 if(e.key==='Tab'&&!m.hidden){const f=[...m.querySelectorAll('a,button')];const a=f[0],z=f[f.length-1];
  if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}}});

// Nav
const nav=$('#nav'),bar=$('#progress'),burger=$('#burger'),menu=$('#menu');
let tick=false;
addEventListener('scroll',()=>{if(tick)return;tick=true;requestAnimationFrame(()=>{
 const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;
 nav.classList.toggle('sc',y>20);bar.style.transform=`scaleX(${h>0?y/h:0})`;tick=false})},{passive:true});
burger.onclick=()=>{const o=menu.classList.toggle('open');burger.setAttribute('aria-expanded',o)};
menu.addEventListener('click',e=>{if(e.target.tagName==='A'){menu.classList.remove('open');burger.setAttribute('aria-expanded',false)}});
const links=[...menu.querySelectorAll('a')];
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
document.querySelectorAll('main section[id]').forEach(s=>so.observe(s));
const ro=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');ro.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(el=>ro.observe(el));

// Loader
addEventListener('load',()=>{const l=$('#loader');if(RM){l.classList.add('done');return}
 setTimeout(()=>l.classList.add('done'),700)});
setTimeout(()=>$('#loader').classList.add('done'),2500);

// Cursor
if(matchMedia('(hover:hover) and (pointer:fine)').matches&&!RM){document.body.classList.add('has-cur');
 const r=$('#cur-ring'),d=$('#cur-dot');let x=0,y=0,rx=0,ry=0;
 addEventListener('mousemove',e=>{x=e.clientX;y=e.clientY;d.style.transform=`translate(${x}px,${y}px)`;
  r.classList.toggle('big',!!e.target.closest('a,button,.card'))},{passive:true});
 (function f(){rx+=(x-rx)*.2;ry+=(y-ry)*.2;r.style.transform=`translate(${rx}px,${ry}px)`;requestAnimationFrame(f)})()}

// GitHub (real data, fails gracefully)
fetch('https://api.github.com/users/mandip000/repos?sort=updated&per_page=6').then(r=>{if(!r.ok)throw 0;return r.json()}).then(rs=>{
 const box=$('#ghBox');if(!rs.length)throw 0;
 const L={};rs.forEach(r=>r.language&&(L[r.language]=(L[r.language]||0)+1));const cols=['#7C6CFF','#38D9FF','#9FE3B8','#F5C26B','#F08BA8','#98A2B3'];
 const bar=Object.keys(L).length?`<div class="lb">${Object.entries(L).map(([k,v],i)=>`<i style="flex:${v};background:${cols[i%6]}" title="${esc(k)}"></i>`).join('')}</div><p class="muted" style="font-size:.8rem">${Object.entries(L).map(([k,v])=>esc(k)+' '+v).join(' · ')} (recent repos)</p>`:'';
 box.innerHTML=`<h3>Recently updated repositories</h3>${bar}<div class="gh-r" style="margin-top:12px">${rs.map(r=>`<a href="${r.html_url}" target="_blank" rel="noopener"><span>${esc(r.name)}</span><span class="muted">${esc(r.language||'')}</span></a>`).join('')}</div>`;
}).catch(()=>{$('#ghBox').innerHTML='<p class="muted">Live GitHub data is unavailable right now. Visit the profile to see my repositories.</p>'});
})();

// ---- Advanced layer ----
(()=>{const $=s=>document.querySelector(s),RM=matchMedia('(prefers-reduced-motion:reduce)').matches,FP=matchMedia('(hover:hover) and (pointer:fine)').matches;
// headline word reveal
const h1=$('h1');if(h1&&!RM){h1.setAttribute('aria-label',h1.textContent);h1.innerHTML=h1.textContent.split(' ').map((w,i)=>`<span class="w" aria-hidden="true" style="--d:${0.85+i*.07}s">${w}</span>`).join(' ')}
// neural network canvas
const c=$('#net');if(c){const g=c.getContext('2d');let W,H,N=[],run=false,raf;
 const size=()=>{const d=devicePixelRatio||1;W=c.clientWidth;H=c.clientHeight;c.width=W*d;c.height=H*d;g.setTransform(d,0,0,d,0,0);N=Array.from({length:Math.round(W*H/16000)},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.25,vy:(Math.random()-.5)*.25}))};
 const draw=()=>{g.clearRect(0,0,W,H);for(const a of N){a.x+=a.vx;a.y+=a.vy;if(a.x<0||a.x>W)a.vx*=-1;if(a.y<0||a.y>H)a.vy*=-1}
  for(let i=0;i<N.length;i++){const a=N[i];g.fillStyle='rgba(56,217,255,.7)';g.fillRect(a.x-1,a.y-1,2,2);for(let j=i+1;j<N.length;j++){const b=N[j],dx=a.x-b.x,dy=a.y-b.y,d=dx*dx+dy*dy;if(d<9000){g.strokeStyle=`rgba(124,108,255,${.35*(1-d/9000)})`;g.beginPath();g.moveTo(a.x,a.y);g.lineTo(b.x,b.y);g.stroke()}}}
  if(run)raf=requestAnimationFrame(draw)};
 size();draw();addEventListener('resize',()=>{size();cancelAnimationFrame(raf);draw()});
 if(!RM)new IntersectionObserver(e=>{run=e[0].isIntersecting;cancelAnimationFrame(raf);if(run)draw()}).observe(c)}
// spotlight + magnetic
document.addEventListener('pointermove',e=>{const k=e.target.closest&&e.target.closest('.card');if(k){const r=k.getBoundingClientRect();k.style.setProperty('--mx',e.clientX-r.left+'px');k.style.setProperty('--my',e.clientY-r.top+'px')}},{passive:true});
if(FP&&!RM)document.querySelectorAll('.btn.pri').forEach(b=>{b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.15}px,${(e.clientY-r.top-r.height/2)*.25}px)`});b.addEventListener('mouseleave',()=>b.style.transform='')});
// toast
const T=$('#toast');let tt;const toast=m=>{T.textContent=m;T.classList.add('show');clearTimeout(tt);tt=setTimeout(()=>T.classList.remove('show'),2000)};
// command palette
const ck=$('#ck'),inp=$('#ckIn'),ul=$('#ckList'),MAIL='ymandip2@gmail.com';let sel=0,vis=[],prev;
const go=id=>()=>document.getElementById(id).scrollIntoView({behavior:RM?'auto':'smooth'});
const ext=u=>()=>window.open(u,'_blank','noopener');
const copy=()=>{(navigator.clipboard?navigator.clipboard.writeText(MAIL):Promise.reject()).then(()=>toast('Email copied')).catch(()=>{location.href='mailto:'+MAIL})};
const names={journey:'experience',certs:'certifications'};
const items=[...['about','skills','projects','journey','certs','services','github','contact'].map(id=>['Go to '+(names[id]||id),'Section',go(id)]),
 ...['Aquarius AI','Face Emotion Detection Dashboard','WeatherInsight'].map((n,i)=>['Open '+n+' case study','Project',()=>window.openProj(i)]),
 ['Face Emotion Detection live demo','Link',ext('https://mandip000.github.io/face-emotion-detection-dashboard/')],['WeatherInsight live demo','Link',ext('https://mandip000.github.io/WeatherInsight/')],
 ['GitHub profile','Link',ext('https://github.com/mandip000')],['LinkedIn profile','Link',ext('https://np.linkedin.com/in/mandip-yadav-5a90b9373')],['Copy email address','Action',copy]];
const render=()=>{const q=inp.value.trim().toLowerCase();vis=items.filter(i=>i[0].toLowerCase().includes(q));sel=Math.min(sel,Math.max(vis.length-1,0));
 ul.innerHTML=vis.length?vis.map((it,i)=>`<li role="option" data-i="${i}" aria-selected="${i===sel}"><span>${it[0]}</span><small>${it[1]}</small></li>`).join(''):'<li>No matches</li>'};
const openK=()=>{prev=document.activeElement;ck.hidden=false;inp.value='';sel=0;render();inp.focus()};
const closeK=()=>{ck.hidden=true;prev&&prev.focus&&prev.focus()};
const run=i=>{const it=vis[i];if(!it)return;closeK();setTimeout(it[2],30)};
$('#kOpen').onclick=openK;inp.addEventListener('input',()=>{sel=0;render()});
ul.addEventListener('click',e=>{const l=e.target.closest('li[data-i]');l&&run(+l.dataset.i)});
ck.addEventListener('click',e=>{e.target===ck&&closeK()});
inp.addEventListener('keydown',e=>{if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();sel=(sel+(e.key==='ArrowDown'?1:-1)+vis.length)%Math.max(vis.length,1);render();const s=ul.querySelector('[aria-selected=true]');s&&s.scrollIntoView({block:'nearest'})}else if(e.key==='Enter')run(sel);else if(e.key==='Escape')closeK();else if(e.key==='Tab')e.preventDefault()});
addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();ck.hidden?openK():closeK()}});
})();

// ---- Pro layer ----
(()=>{const $=s=>document.querySelector(s),RM=matchMedia('(prefers-reduced-motion:reduce)').matches,FP=matchMedia('(hover:hover) and (pointer:fine)').matches,root=document.documentElement;
$('#theme').onclick=()=>{const mode=root.dataset.mode||'auto';window.__setAppearanceMode(mode==='dark'?'light':mode==='light'?'auto':'dark')};
// modal prev/next
$('#mBody').addEventListener('click',e=>{const b=e.target.closest('[data-d]');if(b)window.openProj((window.__cur+ +b.dataset.d+3)%3)});
addEventListener('keydown',e=>{if($('#modal').hidden||(e.key!=='ArrowLeft'&&e.key!=='ArrowRight'))return;window.openProj((window.__cur+(e.key==='ArrowRight'?1:-1)+3)%3)});
// project tilt
if(FP&&!RM)document.querySelectorAll('.proj').forEach(p=>{p.addEventListener('pointermove',e=>{const r=p.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;p.style.transform=`perspective(900px) rotateX(${-y*5}deg) rotateY(${x*6}deg) translateY(-4px)`});p.addEventListener('pointerleave',()=>p.style.transform='')});
// stack -> project highlight
$('#stack').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;const on=b.getAttribute('aria-pressed')!=='true',k=b.textContent.toLowerCase();
 document.querySelectorAll('#stack button').forEach(x=>x.setAttribute('aria-pressed','false'));b.setAttribute('aria-pressed',on);let n=0;
 document.querySelectorAll('.proj').forEach(p=>{const has=[...p.querySelectorAll('.tags span')].some(s=>s.textContent.toLowerCase()===k);if(on&&has)n++;p.classList.toggle('dim',on&&!has)});
 $('#fHint').textContent=on?(n?`${n} project${n>1?'s':''} using ${b.textContent}`:`No listed project uses ${b.textContent} yet`):'Select a technology to highlight the projects that use it.'});
// section dots
const ids=['about','skills','projects','journey','certs','services','github','contact'],dots=$('#dots');
dots.innerHTML=ids.map(id=>`<a href="#${id}" aria-label="${id}" title="${id[0].toUpperCase()+id.slice(1)}"></a>`).join('');
const dio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)dots.querySelectorAll('a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
ids.forEach(id=>dio.observe(document.getElementById(id)));
// back to top
new IntersectionObserver(e=>$('#topb').classList.toggle('show',!e[0].isIntersecting)).observe($('.hero'));
})();

// Signature Edition polish: numbered sections, accessible reveal, and refined interactions.
(()=>{
 const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const sections=[...document.querySelectorAll('main .sec')];
 sections.forEach((section,i)=>{const h=section.querySelector('h2');if(h&&!h.dataset.index)h.dataset.index=String(i+1).padStart(2,'0')+' / '+String(sections.length).padStart(2,'0')});
 if(!reduce&&'IntersectionObserver'in window){
  const reveal=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('premium-in');reveal.unobserve(entry.target)}}),{threshold:.08,rootMargin:'0px 0px -30px 0px'});
  document.querySelectorAll('main .sec, .stats, footer').forEach(el=>{el.classList.add('premium-reveal');reveal.observe(el)});
 }
 // Prevent accidental page scroll when a modal is open; restore focus on close.
 const modal=document.getElementById('modal'),close=document.getElementById('mClose');let focusBefore=null;
 document.addEventListener('click',e=>{if(e.target.closest('.cert-detail-trigger,.cert-open,.proj'))focusBefore=e.target.closest('button,a')||document.activeElement});
 const observer=new MutationObserver(()=>{if(!modal.hidden){document.body.classList.add('modal-open')}else{document.body.classList.remove('modal-open');if(focusBefore&&focusBefore.isConnected)focusBefore.focus({preventScroll:true})}});
 if(modal)observer.observe(modal,{attributes:true,attributeFilter:['hidden','class']});
 if(close)close.setAttribute('title','Close dialog');
})();
