/* ── LUCIDE INIT ── */
const initLucide = () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
};

document.addEventListener('DOMContentLoaded', initLucide);

/* ── BOOT SEQUENCE ── */
const bootMessages = [
  "INITIALIZING ICARUS_OS...",
  "ESTABLISHING SECURE HANDSHAKE...",
  "LOADING CORE MODULES...",
  "WINGS_CALIBRATION: COMPLETE",
  "ACCESS GRANTED // WELCOME OPERATOR"
];

const bootScreen = document.getElementById('boot-screen');
const bootText = document.getElementById('boot-text');

async function runBoot() {
  // Initial pause before starting
  await new Promise(r => setTimeout(r, 800));
  
  for (const msg of bootMessages) {
    const line = document.createElement('div');
    line.className = 'boot-line';
    line.textContent = '> ' + msg;
    bootText.appendChild(line);
    // Increased delay between lines (approx 1.2s per line)
    await new Promise(r => setTimeout(r, 1200));
    line.classList.add('show');
  }
  // Longer final pause for reading the last message
  await new Promise(r => setTimeout(r, 1500));
  bootScreen.classList.add('boot-hidden');
  
  // Trigger impact flash on boot complete
  const flash = document.getElementById('impactFlash');
  if(flash){flash.style.opacity='1';setTimeout(()=>flash.style.opacity='0',60);}
}

if (bootScreen) {
  runBoot();
}

/* ── CURSOR & REACTIVE GRID ── */
const cur=document.getElementById('cur'),ring=document.getElementById('cur-ring');
let mx=0,my=0,rx=0,ry=0,rot=0,lx=0,ly=0;

document.addEventListener('mousemove',e=>{
  mx=e.clientX;
  my=e.clientY;
  
  // Update mouse position CSS variables for reactive grid
  const xPct = (e.clientX / window.innerWidth) * 100;
  const yPct = (e.clientY / window.innerHeight) * 100;
  document.documentElement.style.setProperty('--mouse-x', xPct + '%');
  document.documentElement.style.setProperty('--mouse-y', yPct + '%');
});

(function tick(){
  cur.style.left=mx+'px';cur.style.top=my+'px';
  rx+=(mx-rx)*.12;ry+=(my-ry)*.12;
  const dx=mx-lx,dy=my-ly;rot+=Math.sqrt(dx*dx+dy*dy)*.3;lx=mx;ly=my;
  ring.style.left=rx+'px';ring.style.top=ry+'px';
  ring.style.transform=`translate(-50%,-50%) rotate(${rot}deg)`;
  requestAnimationFrame(tick);
})();

document.querySelectorAll('a,button,.skill-cat,.project-row,.cert-row,.gh-repo-card').forEach(el=>{
  el.addEventListener('mouseenter',()=>{document.body.classList.add('cur-hover');});
  el.addEventListener('mouseleave',()=>{document.body.classList.remove('cur-hover');});
});

/* ── THEME TOGGLE ── */
const html=document.documentElement;
const themeBtn=document.getElementById('themeToggle');
const themeIcon=document.getElementById('themeIcon');

const updateThemeUI = (theme) => {
  html.setAttribute('data-theme', theme);
  // swap lucide icon
  themeIcon.innerHTML = theme === 'dark'
    ? '<i data-lucide="sun" class="icon-theme"></i>'
    : '<i data-lucide="moon" class="icon-theme"></i>';
  lucide.createIcons();
  themeBtn.setAttribute('data-label', theme === 'dark' ? 'LIGHT MODE' : 'DARK MODE');
  localStorage.setItem('icarus-theme', theme);
};

// Initialize theme
const savedTheme = localStorage.getItem('icarus-theme') || 'dark';
updateThemeUI(savedTheme);

themeBtn.addEventListener('click',()=>{
  const isDark = html.getAttribute('data-theme') === 'dark';
  const nextTheme = isDark ? 'light' : 'dark';

  themeIcon.classList.add('spin-out');

  setTimeout(()=>{
    updateThemeUI(nextTheme);
    themeIcon.classList.remove('spin-out');
  },200);
});

/* ── UPTIME ── */
const startTime=Date.now();
function updateUptime(){
  const s=Math.floor((Date.now()-startTime)/1000);
  const h=String(Math.floor(s/3600)).padStart(2,'0');
  const m=String(Math.floor((s%3600)/60)).padStart(2,'0');
  const sc=String(s%60).padStart(2,'0');
  const el=document.getElementById('uptime');
  if(el)el.textContent=h+':'+m+':'+sc;
}
setInterval(updateUptime,1000);updateUptime();

/* ── SCROLL REVEAL ── */
const flash=document.getElementById('impactFlash');
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('visible');
      if(flash){flash.style.opacity='1';setTimeout(()=>flash.style.opacity='0',60);}
    }
  });
},{threshold:.1,rootMargin:'0px 0px -36px 0px'});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

/* ── LANG COLORS ── */
const LC={JavaScript:'#f1e05a',TypeScript:'#3178c6',Java:'#b07219',PHP:'#4F5D95',Python:'#3572A5',Solidity:'#AA6746',HTML:'#e34c26',CSS:'#563d7c',SCSS:'#c6538c',Dart:'#00B4AB',Shell:'#89e051',Vue:'#41b883',Kotlin:'#A97BFF',SQL:'#e38c00'};

/* ── PROJECTS DATA ── */
const featured=[
  {name:'devctl — Development Orchestrator',tags:['CLI','Automation','Python','Docker','WIP'],desc:'A unified CLI tool to automate the local development lifecycle. Orchestrates Spring Boot, Angular, and Vue.js environments with CRUD scaffolding and parallel process management.',langs:['Python','Shell'],url:'https://github.com/yss-ef/devctl',live:null,wip:true},
  {name:'Mundia Library Management System',tags:['Next.js 15','React 19','Drizzle','MySQL','NextAuth'],desc:'Full-stack university library platform with student and admin portals. Features automated overdue reminders, book recommendations, and fine management.',langs:['TypeScript','SQL'],url:'https://github.com/AnouarMohamed/Mundia_library',live:null},
  {name:'CRM SaaS Platform',tags:['SaaS','CRM','AI','Angular','Spring Boot'],desc:'Full CRM SaaS built from scratch at Broker Immobilier. Angular + Spring Boot, RAG system, and automated document generation.',langs:['Java','TypeScript'],url:null,live:null},
  {name:'Smart Digital Banking System',tags:['FinTech','JWT','RAG','REST API'],desc:'Spring Boot REST API with JWT/RBAC, AI-powered RAG assistant for customer support, Angular dashboard with ChartJS.',langs:['Java','TypeScript'],url:'https://github.com/yss-ef/spring-boot-portfolio/tree/main/05-fullstack-systems/digital-banking-system',live:null},
  {name:'Cloud Infrastructure Supervision',tags:['AWS','Zabbix','Linux','Monitoring'],desc:'Infrastructure monitoring using Zabbix on AWS, Linux and Windows servers — system health, alerts, and performance metrics.',langs:['Shell'],url:'https://github.com/yss-ef/AWS-ZABBIX-MONITORING',live:null},
  {name:'Decentralized E-Learning Platform',tags:['Web3','Ethereum','IPFS','DApp'],desc:'Solidity Smart Contracts on Ethereum, React.js frontend, Web3.js integration. Final-year project at FST Errachidia.',langs:['Solidity','JavaScript'],url:'https://github.com/yss-ef/decentralized-course-archive',live:null},
  {name:'Mobile Portfolio App',tags:['Mobile','Flutter','UI'],desc:'Flutter mobile application showcasing projects, skills, and experience in a clean native mobile interface.',langs:['Dart'],url:'https://github.com/yss-ef/FLUTTER-INTERACTIVE-PORTFOLIO',live:null},
  {name:'Dolibarr ERP Custom Modules',tags:['ERP','Treasury','Tax','PDF'],desc:'4 custom modules for Dolibarr ERP — Treasury & Tax management, workflow automation, and query performance optimization.',langs:['PHP','SQL'],url:'https://github.com/yss-ef/Dolibarr-Custom-Modules',live:null},
  {name:'Firewall Configuration — OPNsense',tags:['Security','Networking','VLANs'],desc:'OPNsense firewall with custom rules, VLANs, and network segmentation to secure a simulated enterprise infrastructure.',langs:['Shell'],url:null,live:null}
];

let activeFilter='all';

function renderFeatured(){
  const grid=document.getElementById('projectsGrid');
  const list=activeFilter==='all'?featured:featured.filter(p=>p.langs.some(l=>l.toLowerCase().includes(activeFilter.toLowerCase())));
  if(!list.length){grid.innerHTML='<div class="projects-loading">[ NO MATCHES FOUND ]</div>';return;}
  grid.innerHTML=list.map((p,i)=>{
    const langDots=p.langs.map(l=>`<span class="pr-lang-tag"><span class="lang-dot-sm" style="background:${LC[l]||'#888'}"></span>${l}</span>`).join('');
    const tagPills=p.tags.map(t=>`<span class="pr-tag">${t}</span>`).join('');
    const links=[];
    if(p.url) links.push(`<a href="${p.url}" target="_blank" class="pr-link pr-link-gh"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> Code</a>`);
    if(p.live) links.push(`<a href="${p.live}" target="_blank" class="pr-link pr-link-live"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg> Live</a>`);
    
    let linksCol;
    if(links.length) {
      linksCol = `<div class="pr-links">${links.join('')}${p.wip ? `<span class="pr-badge" style="border-color:var(--accent2);color:var(--accent2);margin-top:.4rem">WIP</span>` : ''}</div>`;
    } else {
      const badgeText = p.wip ? 'WIP' : 'Featured';
      const badgeStyle = p.wip ? 'border-color:var(--accent2);color:var(--accent2)' : '';
      linksCol = `<div class="pr-links"><span class="pr-badge" style="${badgeStyle}">${badgeText}</span></div>`;
    }

    return `<div class="project-row">
      <div class="pr-bar"></div>
      <div class="pr-meta">
        <div class="pr-index">PRJ-${String(i+1).padStart(2,'0')}</div>
        <div class="pr-name">${p.name}</div>
        <div class="pr-langs">${langDots}</div>
      </div>
      <div class="pr-body">
        <div class="pr-desc">${p.desc}</div>
        <div class="pr-tags">${tagPills}</div>
      </div>
      ${linksCol}
    </div>`;
  }).join('');
  initLucide();
}
renderFeatured();

document.getElementById('filterBar').addEventListener('click',e=>{
  if(!e.target.classList.contains('filter-btn'))return;
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  e.target.classList.add('active');
  activeFilter=e.target.dataset.filter;
  renderFeatured();
});

/* ── GITHUB ── */
function timeAgo(d){
  const s=Math.floor((Date.now()-new Date(d))/1000);
  if(s<3600)return Math.floor(s/60)+'m ago';
  if(s<86400)return Math.floor(s/3600)+'h ago';
  if(s<2592000)return Math.floor(s/86400)+'d ago';
  if(s<31536000)return Math.floor(s/2592000)+'mo ago';
  return Math.floor(s/31536000)+'y ago';
}
async function loadGitHub(){
  const grid=document.getElementById('ghGrid'),meta=document.getElementById('ghMeta');
  try{
    const[uRes,rRes]=await Promise.all([fetch('https://api.github.com/users/yss-ef'),fetch('https://api.github.com/users/yss-ef/repos?sort=updated&per_page=30')]);
    if(!uRes.ok||!rRes.ok)throw new Error();
    const user=await uRes.json();
    const repos=(await rRes.json()).filter(r=>!r.fork);
    const stars=repos.reduce((s,r)=>s+r.stargazers_count,0);
    meta.innerHTML=`<div class="gh-stat-pill"><span class="dot"></span><strong>${repos.length}</strong>&nbsp;public repos</div><div class="gh-stat-pill"><strong>${stars}</strong>&nbsp;total stars</div><div class="gh-stat-pill"><strong>${user.followers}</strong>&nbsp;followers</div>`;
    // Lucide file icon as inline SVG for repo cards
    const repoIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="opacity:.4;flex-shrink:0"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>`;
    grid.innerHTML=repos.map(r=>`<a href="${r.html_url}" target="_blank" class="gh-repo-card">
      <div class="gh-repo-name">${repoIcon}${r.name}</div>
      <div class="gh-repo-desc">${r.description||'No description provided.'}</div>
      <div class="gh-repo-footer">
        ${r.language?`<span class="gh-repo-lang"><span class="lang-dot" style="background:${LC[r.language]||'#888'}"></span>${r.language}</span>`:''}
        ${r.stargazers_count?`<span class="gh-repo-stat">★ ${r.stargazers_count}</span>`:''}
        ${r.forks_count?`<span class="gh-repo-stat">⑂ ${r.forks_count}</span>`:''}
        <span class="gh-repo-updated">${timeAgo(r.updated_at)}</span>
      </div></a>`).join('');
    initLucide();
  }catch(e){
    grid.innerHTML=`<div class="projects-loading">SIGNAL LOST — <a href="https://github.com/yss-ef" target="_blank" style="color:var(--accent)">View on GitHub →</a></div>`;
  }
}
loadGitHub();
