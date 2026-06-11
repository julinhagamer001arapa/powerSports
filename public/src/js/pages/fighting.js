/* ==========================================================================
   POWERSPORT - FIGHTING PAGE LOGIC (fighting.js)
   ========================================================================== */

// 1. FALLBACK STATIC DATA (In case API is offline or page is loaded via file://)
const fallbackData = {
  fighters: [
    {
      id: "oliveira",
      name: "Oliveira",
      country: "Brasil",
      record: "34-10-0",
      category: "Leve",
      avatar: "fighter-oliveira.png"
    },
    {
      id: "makhachev",
      name: "Islam Makhachev",
      country: "Rússia",
      record: "27-1-0",
      category: "Leve",
      avatar: "fighter-makhachev.png"
    },
    {
      id: "volkanovski",
      name: "Volkanovski",
      country: "Austrália",
      record: "26-4-0",
      category: "Pena",
      avatar: "fighter-volkanovski.png"
    },
    {
      id: "holloway",
      name: "Holloway",
      country: "EUA",
      record: "26-8-0",
      category: "Pena",
      avatar: "fighter-holloway.png"
    },
    {
      id: "pereira",
      name: "Pereira",
      country: "Brasil",
      record: "12-0",
      category: "Médio",
      avatar: "fighter-pereira.png"
    },
    {
      id: "adesanya",
      name: "Adesanya",
      country: "Nigéria",
      record: "24-4-0",
      category: "Médio",
      avatar: "fighter-adesanya.png"
    },
    {
      id: "whittaker",
      name: "R. Whittaker",
      country: "Austrália",
      record: "27-7-0",
      category: "Médio",
      avatar: "fighter-whittaker.png"
    },
    {
      id: "chimaev",
      name: "Chimaev",
      country: "Suécia",
      record: "13-0-0",
      category: "Médio",
      avatar: "fighter-chimaev.png"
    },
    {
      id: "blachowicz",
      name: "Blachowicz",
      country: "Polônia",
      record: "29-10-1",
      category: "Meio-Pesado",
      avatar: "fighter-blachowicz.png"
    },
    {
      id: "ankalaev",
      name: "Ankalaev",
      country: "Rússia",
      record: "19-1-1",
      category: "Meio-Pesado",
      avatar: "fighter-ankalaev.png"
    },
    {
      id: "tsarukyan",
      name: "Arman Tsarukyan",
      country: "Rússia",
      record: "22-3-0",
      category: "Leve",
      avatar: "fighter-tsarukyan.png"
    },
    {
      id: "poirier",
      name: "Dustin Poirier",
      country: "EUA",
      record: "30-8-0",
      category: "Leve",
      avatar: "fighter-poirier.png"
    },
    {
      id: "gaethje",
      name: "Justin Gaethje",
      country: "EUA",
      record: "25-5-0",
      category: "Leve",
      avatar: "fighter-gaethje.png"
    }
  ],
  nextFight: {
    id: "next-fight-001",
    date: "01 JUN",
    time: "22:00",
    category: "Cinturão Peso Médio",
    arena: "T-Mobile Arena, Las Vegas",
    fighterAId: "pereira",
    fighterBId: "adesanya",
    status: "scheduled",
    buttonLabel: "Ver detalhes"
  },
  upcomingFights: [
    {
      id: "fight-001",
      date: "18 MAI",
      time: "19:00",
      fighterAId: "oliveira",
      fighterBId: "makhachev",
      category: "Leve",
      status: "scheduled"
    },
    {
      id: "fight-002",
      date: "25 MAI",
      time: "20:00",
      fighterAId: "volkanovski",
      fighterBId: "holloway",
      category: "Pena",
      status: "scheduled"
    },
    {
      id: "fight-003",
      date: "01 JUN",
      time: "22:00",
      fighterAId: "pereira",
      fighterBId: "adesanya",
      category: "Médio",
      status: "scheduled"
    },
    {
      id: "fight-004",
      date: "08 JUN",
      time: "19:00",
      fighterAId: "whittaker",
      fighterBId: "chimaev",
      category: "Médio",
      status: "scheduled"
    },
    {
      id: "fight-005",
      date: "15 JUN",
      time: "18:00",
      fighterAId: "blachowicz",
      fighterBId: "ankalaev",
      category: "Meio-Pesado",
      status: "scheduled"
    }
  ],
  officialRanking: [
    {
      position: 1,
      fighterId: "makhachev",
      country: "Rússia",
      record: "27-1-0",
      category: "Leve"
    },
    {
      position: 2,
      fighterId: "oliveira",
      country: "Brasil",
      record: "34-10-0",
      category: "Leve"
    },
    {
      position: 3,
      fighterId: "tsarukyan",
      country: "Rússia",
      record: "22-3-0",
      category: "Leve"
    },
    {
      position: 4,
      fighterId: "poirier",
      country: "EUA",
      record: "30-8-0",
      category: "Leve"
    },
    {
      position: 5,
      fighterId: "gaethje",
      country: "EUA",
      record: "25-5-0",
      category: "Leve"
    }
  ],
  highlights: [
    {
      id: "highlight-001",
      title: "Nocaute Incrível!",
      description: "Reviva o nocaute que parou o evento!",
      thumbnail: "FeedLutaDestaque.png",
      videoUrl: "https://www.youtube.com/watch?v=N3Cu_zmkvac",
      buttonLabel: "Assistir agora"
    }
  ],
  leagueStats: [
    {
      id: "knockouts",
      label: "Nocautes",
      value: "1,245",
      unit: "",
      icon: "boxing-glove"
    },
    {
      id: "submissions",
      label: "Finalizações",
      value: "842",
      unit: "",
      icon: "target"
    },
    {
      id: "fights-completed",
      label: "Lutas realizadas",
      value: "1,987",
      unit: "",
      icon: "octagon"
    },
    {
      id: "average-fight-time",
      label: "Tempo médio de luta",
      value: "14:32",
      unit: "",
      icon: "timer"
    },
    {
      id: "significant-strikes-per-minute",
      label: "Golpes significativos por min",
      value: "5.28",
      unit: "",
      icon: "impact"
    }
  ],
  featuredNews: [
    {
      id: "news-001",
      title: "Pereira defende cinturão com nocaute espetacular",
      date: "12 MAI 2024",
      image: "FeedLutaNoticiaCinturao.png",
      imageStatus: "live",
      url: "#noticia-001"
    },
    {
      id: "news-002",
      title: "Makhachev e Oliveira fazem cara a cara tenso antes do combate",
      date: "10 MAI 2024",
      image: "FeedLutaColetiva.png",
      imageStatus: "live",
      url: "#noticia-002"
    },
    {
      id: "news-003",
      title: "Novo desafiante surge na categoria dos pesos pesados",
      date: "09 MAI 2024",
      image: "FeedLutaNovoDesafiante.png",
      imageStatus: "live",
      url: "#noticia-003"
    }
  ],
  featuredEvents: [
    {
      id: "event-001",
      name: "UFC 302",
      date: "01 JUN",
      time: "22:00",
      arena: "T-Mobile Arena",
      location: "Las Vegas, EUA",
      logo: "FeedLutaEventoUFC.png"
    },
    {
      id: "event-002",
      name: "UFC Fight Night",
      date: "15 JUN",
      time: "19:00",
      arena: "State Farm Arena",
      location: "Atlanta, EUA",
      logo: "FeedLutaEventoUFC.png"
    },
    {
      id: "event-003",
      name: "UFC 303",
      date: "29 JUN",
      time: "20:00",
      arena: "Mobile Arena",
      location: "Las Vegas, EUA",
      logo: "FeedLutaEventoUFC.png"
    }
  ],
  trendingAthletes: [
    {
      position: 1,
      fighterId: "pereira",
      category: "Médio",
      record: "12-0",
      avatar: "fighter-pereira.png"
    },
    {
      position: 2,
      fighterId: "makhachev",
      category: "Leve",
      record: "11-1",
      avatar: "fighter-makhachev.png"
    },
    {
      position: 3,
      fighterId: "oliveira",
      category: "Leve",
      record: "9-1",
      avatar: "fighter-oliveira.png"
    },
    {
      position: 4,
      fighterId: "volkanovski",
      category: "Pena",
      record: "8-1",
      avatar: "fighter-volkanovski.png"
    },
    {
      position: 5,
      fighterId: "whittaker",
      category: "Médio",
      record: "7-1",
      avatar: "fighter-whittaker.png"
    }
  ],
  bottomShortcuts: [
    {
      id: "live-transmission",
      icon: "broadcast",
      title: "Transmissão ao vivo",
      description: "Acompanhe todas as lutas em tempo real.",
      href: "#ao-vivo"
    },
    {
      id: "best-moments",
      icon: "play-circle",
      title: "Melhores momentos",
      description: "Assista aos nocautes e finalizações da semana.",
      href: "#videos"
    },
    {
      id: "updated-ranking",
      icon: "trophy",
      title: "Ranking atualizado",
      description: "Confira o ranking oficial dos melhores lutadores.",
      href: "#ranking"
    },
    {
      id: "exclusive-news",
      icon: "newspaper",
      title: "Notícias exclusivas",
      description: "Cobertura completa do mundo das lutas.",
      href: "#noticias"
    },
    {
      id: "personal-alerts",
      icon: "bell",
      title: "Alertas personalizados",
      description: "Receba notificações das suas lutas e atletas favoritos.",
      href: "#notificacoes"
    }
  ]
};

// SVG Icons helper to inject custom inline SVGs based on icon name
const SVG_ICONS = {
  'boxing-glove': `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 14V8a4 4 0 0 1 8 0v2h2a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3zM10 6h4M6 10h8m-5 8h6"></path></svg>`,
  'target': `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle><line x1="12" y1="2" x2="12" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line></svg>`,
  'octagon': `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><polygon points="8,2 16,2 22,8 22,16 16,22 8,22 2,16 2,8"></polygon></svg>`,
  'timer': `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="13" r="8"></circle><path d="M12 9v4l3 3m-3-11h2M9 2h6"></path></svg>`,
  'impact': `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L9 9l-7 1 5 5-2 7 6-4 6 4-2-7 5-5-7-1-3-7z"></path></svg>`,
  'broadcast': `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path></svg>`,
  'play-circle': `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>`,
  'trophy': `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34M12 2a6 6 0 0 1 6 6v5a6 6 0 0 1-6 6 6 6 0 0 1-6-6V8a6 6 0 0 1 6-6z"></path></svg>`,
  'newspaper': `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v16H4zM8 8h8M8 12h8M8 16h4"></path></svg>`,
  'bell': `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.5" fill="none"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>`
};

// 2. API REQUEST UTILITY WITH FALLBACK
async function fetchData(endpointKey, serverPath) {
  const keyMap = {
    'news': 'featuredNews',
    'fighters': 'fighters',
    'nextFight': 'nextFight',
    'upcomingFights': 'upcomingFights',
    'officialRanking': 'officialRanking',
    'highlights': 'highlights',
    'leagueStats': 'leagueStats',
    'events': 'featuredEvents',
    'trendingAthletes': 'trendingAthletes',
    'shortcuts': 'bottomShortcuts'
  };
  const mappedKey = keyMap[endpointKey] || endpointKey;

  if (!serverPath) {
    return fallbackData[mappedKey];
  }
  try {
    const response = await fetch(serverPath, { signal: AbortSignal.timeout(12000) });
    if (!response.ok) {
      throw new Error(`HTTP Error status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.warn(`⚠️ API Error on endpoint '${endpointKey}' [${error.message}]. Using static fallback data.`);
    
    // Attempt local static file fetch if server endpoints fail
    try {
      const response = await fetch('../../../src/data/fighting/fighting-page.json');
      if (response.ok) {
        const fullJson = await response.json();
        if (fullJson && fullJson.data && fullJson.data[mappedKey]) {
          return fullJson.data[mappedKey];
        }
      }
    } catch (localFileError) {
      // Ignore and proceed to memory fallback
    }

    // Direct memory fallback
    return fallbackData[mappedKey];
  }
}

// 3. CACHE FIGHTERS FOR RESOLVING NAMES AND RECORDS
let fightersCache = [...fallbackData.fighters];

async function initializeFightersCache() {
  const list = await fetchData('fighters', '/api/fighting/fighters');
  if (list && list.length > 0) {
    fightersCache = list;
  }
}

function getFighter(fighterId) {
  return fightersCache.find(f => f.id === fighterId || f.id.includes(fighterId) || fighterId.includes(f.id)) || {
    id: fighterId,
    name: fighterId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    country: "N/A",
    record: "0-0",
    category: "Médio",
    avatar: ""
  };
}

// Helper to render stylized fighter avatar representation
function getFighterAvatarHtml(fighter, size = "72px") {
  // Return initials avatar representing missing fighter photo
  const initials = fighter.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  return `
    <div style="width:${size}; height:${size}; border-radius:50%; background:var(--bg-tertiary); display:flex; align-items:center; justify-content:center; border: 2px solid var(--border-primary); box-shadow: 0 0 10px rgba(160, 32, 255, 0.4);">
      <span style="font-family:var(--font-heading); font-size:calc(${size} * 0.4); font-weight:900; color:var(--text-secondary);">${initials}</span>
    </div>
  `;
}

// 4. RENDERING MODULES

// Render Next Fight Versus Card (Hero Right)
async function renderNextFight() {
  const container = document.getElementById('next-fight-container');
  if (!container) return;

  const data = await fetchData('nextFight', '/api/fighting/fights/next');
  if (!data || !data.fighterAId) {
    container.innerHTML = '<div class="loading-placeholder">Sem próxima luta agendada</div>';
    return;
  }

  const fighterA = getFighter(data.fighterAId);
  const fighterB = getFighter(data.fighterBId);
  const videoUrl = "https://www.youtube.com/watch?v=sK2Wj2W-j4E";

  container.innerHTML = `
    <div class="versus-match-container" data-fight-id="${data.id}">
      <div class="match-meta-info">
        <span class="match-category">${data.category}</span>
        <span class="match-schedule">${data.date} <span>|</span> ${data.time}</span>
      </div>
      
      <div class="fighters-versus-grid">
        <div class="fighter-side">
          <div class="fighter-avatar-wrap">
            ${getFighterAvatarHtml(fighterA, "72px")}
          </div>
          <span class="fighter-name-label">${fighterA.name}</span>
          <span class="fighter-record-label">${fighterA.record}</span>
        </div>
        
        <div class="vs-block-center">VS</div>
        
        <div class="fighter-side">
          <div class="fighter-avatar-wrap">
            ${getFighterAvatarHtml(fighterB, "72px")}
          </div>
          <span class="fighter-name-label">${fighterB.name}</span>
          <span class="fighter-record-label">${fighterB.record}</span>
        </div>
      </div>
      
      <div class="match-arena-name">
        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" style="display:inline-block; vertical-align:middle; margin-right:2px;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        <span>${data.arena}</span>
      </div>
      
      <a href="${videoUrl}" target="_blank" class="btn-primary versus-details-btn" style="text-decoration:none;">
        ${data.buttonLabel || 'Ver detalhes'}
      </a>
    </div>
  `;
}

// Render Upcoming Fights List (Card Left)
async function renderUpcomingFights() {
  const container = document.getElementById('upcoming-fights-list');
  if (!container) return;

  const list = await fetchData('upcomingFights', '/api/fighting/fights/upcoming');
  const items = list.slice(0, 5);

  if (!items || items.length === 0) {
    container.innerHTML = '<div class="loading-placeholder">Sem lutas agendadas</div>';
    return;
  }

  container.innerHTML = '<div class="fights-list-wrap"></div>';
  const wrap = container.querySelector('.fights-list-wrap');

  items.forEach(match => {
    const fighterA = getFighter(match.fighterAId);
    const fighterB = getFighter(match.fighterBId);

    const rowEl = document.createElement('div');
    rowEl.className = 'fight-row-item';
    rowEl.innerHTML = `
      <div class="fight-time-block">
        <span class="fight-date">${match.date}</span>
        <span class="fight-time">${match.time}</span>
      </div>
      <div class="fight-fighters-grid">
        <div class="fighter-inline home">
          <span class="fight-row-name">${fighterA.name}</span>
        </div>
        <div class="fight-vs-text">VS</div>
        <div class="fighter-inline away">
          <span class="fight-row-name">${fighterB.name}</span>
        </div>
      </div>
    `;
    wrap.appendChild(rowEl);
  });
}

// Official Ranking Category Tabs and Filtering
const rankingTabs = [
  { id: "pound-for-pound", label: "Peso por Peso" },
  { id: "lightweight", label: "Peso Leve" },
  { id: "middleweight", label: "Peso Médio" },
  { id: "light-heavyweight", label: "Peso Meio-Pesado" },
  { id: "heavyweight", label: "Peso Pesado" }
];
let activeCategory = "lightweight";

function renderRankingTabs() {
  const container = document.getElementById('ranking-category-tabs');
  if (!container) return;

  container.innerHTML = '';
  rankingTabs.forEach(tab => {
    const tabBtn = document.createElement('button');
    tabBtn.className = 'rank-tab-btn' + (tab.id === activeCategory ? ' active' : '');
    tabBtn.dataset.tabId = tab.id;
    tabBtn.textContent = tab.label;
    tabBtn.addEventListener('click', () => {
      if (activeCategory === tab.id) return;
      activeCategory = tab.id;
      
      // Update tabs style classes
      container.querySelectorAll('.rank-tab-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      tabBtn.classList.add('active');
      
      // Re-render ranking table for the selected category
      renderRankingStandings();
    });
    container.appendChild(tabBtn);
  });
}

async function renderRankingStandings() {
  const tbody = document.getElementById('ranking-table-body');
  if (!tbody) return;

  tbody.innerHTML = '<tr><td colspan="4" class="loading-placeholder">Filtrando ranking...</td></tr>';

  // Fetch ranking records from the endpoint filtered by the active category tab
  const list = await fetchData('officialRanking', `/api/fighting/ranking/official?category=${activeCategory}`);
  const items = list.slice(0, 5);

  if (!items || items.length === 0) {
    tbody.innerHTML = '<tr><td colspan="4" class="loading-placeholder">Sem lutadores nesta categoria</td></tr>';
    return;
  }

  tbody.innerHTML = '';
  items.forEach(row => {
    const fighter = getFighter(row.fighterId);
    
    let rankBadgeClass = 'rank-badge';
    if (row.position === 1) rankBadgeClass += ' rank-1';
    else if (row.position === 2) rankBadgeClass += ' rank-2';
    else if (row.position === 3) rankBadgeClass += ' rank-3';

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="col-pos"><span class="${rankBadgeClass}">${row.position}</span></td>
      <td class="col-athlete">
        <div class="table-athlete-cell">
          <span class="table-athlete-name">${fighter.name}</span>
        </div>
      </td>
      <td class="col-country">${row.country}</td>
      <td class="col-record">${row.record}</td>
    `;
    tbody.appendChild(tr);
  });
}

// Render Video Highlights widget
async function renderHighlights() {
  const container = document.getElementById('highlights-container');
  if (!container) return;

  const list = await fetchData('highlights', '/api/fighting/highlights');
  if (!list || list.length === 0) {
    container.innerHTML = '<div class="loading-placeholder">Sem destaques agendados</div>';
    return;
  }

  const highlight = list[0];
  const imageSrc = `../../../assets/fighting/feed/${highlight.thumbnail || 'FeedLutaDestaque.png'}`;
  const videoUrl = highlight.videoUrl || 'https://www.youtube.com/watch?v=sK2Wj2W-j4E';

  container.innerHTML = `
    <div class="highlight-wrap-card" data-highlight-id="${highlight.id}">
      <div class="video-preview-wrapper">
        <img src="${imageSrc}" alt="${highlight.title}" class="video-preview-image" loading="lazy">
        <div class="video-overlay-play">
          <a href="${videoUrl}" target="_blank" class="play-action-btn" aria-label="Assistir destaque agora">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><polygon points="8,5 19,12 8,19"></polygon></svg>
          </a>
        </div>
      </div>
      <h4 class="highlight-title">${highlight.title}</h4>
      <p class="highlight-desc">${highlight.description}</p>
      <a href="${videoUrl}" target="_blank" class="btn-primary" style="text-decoration:none; text-align:center;">
        ${highlight.buttonLabel || 'Assistir agora'}
      </a>
    </div>
  `;
}

// Render League Stats list widget
async function renderLeagueStats() {
  const container = document.getElementById('stats-grid-container');
  if (!container) return;

  const stats = await fetchData('leagueStats', '/api/fighting/league/stats');
  const items = stats.slice(0, 5);

  if (!items || items.length === 0) {
    container.innerHTML = '<div class="loading-placeholder">Sem estatísticas da liga</div>';
    return;
  }

  container.innerHTML = '<div class="stats-list-container"></div>';
  const listWrap = container.querySelector('.stats-list-container');

  items.forEach(stat => {
    const iconSvg = SVG_ICONS[stat.icon] || SVG_ICONS['boxing-glove'];
    const itemEl = document.createElement('div');
    itemEl.className = 'stat-row-item';
    itemEl.innerHTML = `
      <div class="stat-icon-wrap">
        ${iconSvg}
      </div>
      <div class="stat-meta-wrap">
        <span class="stat-label-text">${stat.label}</span>
        <div class="stat-value-block">
          <span class="stat-value-num">${stat.value}</span>
          ${stat.unit ? `<span class="stat-value-unit">${stat.unit}</span>` : ''}
        </div>
      </div>
    `;
    listWrap.appendChild(itemEl);
  });
}

// Render Featured News grid widget
async function renderFeaturedNews() {
  const container = document.getElementById('featured-news-grid');
  if (!container) return;

  const news = await fetchData('news', '/api/fighting/news');
  const items = news.slice(0, 3);

  if (!items || items.length === 0) {
    container.innerHTML = '<div class="loading-placeholder">Sem notícias</div>';
    return;
  }

  container.innerHTML = '';
  items.forEach(item => {
    const imageSrc = `../../../assets/fighting/feed/${item.image || 'FeedLutaDestaque.png'}`;
    const newsEl = document.createElement('a');
    newsEl.href = item.url || '#';
    newsEl.className = 'news-card-item';
    newsEl.innerHTML = `
      <div class="news-img-wrap">
        <img src="${imageSrc}" alt="${item.title}" class="news-img" loading="lazy">
      </div>
      <div class="news-text-area">
        <span class="news-date">${item.date}</span>
        <h4 class="news-title">${item.title}</h4>
        <span class="news-read-more">Ler notícia &rarr;</span>
      </div>
    `;
    newsEl.addEventListener('click', (e) => {
      if (item.url === '#') {
        e.preventDefault();
      }
      openModal(item.title, `
        <div style="padding:10px 0;">
          <span style="display:block; font-size:0.8rem; color:var(--text-muted); margin-bottom:16px;">DATA: ${item.date}</span>
          <img src="${imageSrc}" alt="${item.title}" style="width:100%; height:220px; object-fit:cover; border-radius:8px; border:1px solid var(--border-muted); margin-bottom:16px;">
          <p style="margin-bottom:12px; line-height:1.5; color:var(--text-secondary);">Esta é uma cobertura especial sobre o mundo das lutas da franquia UFC e ligas de MMA trazida com exclusividade pela PowerSport.</p>
          <p style="margin-bottom:12px; line-height:1.5; color:var(--text-secondary);">Fique por dentro das últimas coletivas de imprensa, análises detalhadas do octógono, records de vitórias e a preparação tática de cada lutador.</p>
        </div>
      `);
    });
    container.appendChild(newsEl);
  });
}

// Render Featured Events list
async function renderFeaturedEvents() {
  const container = document.getElementById('featured-events-list');
  if (!container) return;

  const list = await fetchData('events', '/api/fighting/events/featured');
  const items = list.slice(0, 3);

  if (!items || items.length === 0) {
    container.innerHTML = '<div class="loading-placeholder">Sem eventos agendados</div>';
    return;
  }

  container.innerHTML = '<div class="events-list-wrap"></div>';
  const wrap = container.querySelector('.events-list-wrap');

  items.forEach(ev => {
    const logoSrc = `../../../assets/fighting/feed/${ev.logo || 'FeedLutaEventoUFC.png'}`;
    const rowEl = document.createElement('div');
    rowEl.className = 'event-row-card';
    rowEl.innerHTML = `
      <div class="event-logo-box">
        <img src="${logoSrc}" alt="${ev.name} logo" class="event-logo-img">
      </div>
      <div class="event-info-box">
        <span class="event-name-txt">${ev.name}</span>
        <span class="event-arena-txt">${ev.arena}</span>
      </div>
      <div class="event-schedule-box">
        <span class="event-date-txt">${ev.date}</span>
        <span class="event-time-txt">${ev.time}</span>
      </div>
    `;
    wrap.appendChild(rowEl);
  });
}

// Render Trending Athletes horizontal widget
async function renderTrendingAthletes() {
  const container = document.getElementById('trending-athletes-container');
  if (!container) return;

  const list = await fetchData('trendingAthletes', '/api/fighting/athletes/trending');
  const items = list.slice(0, 5);

  if (!items || items.length === 0) {
    container.innerHTML = '<div class="loading-placeholder">Sem atletas cadastrados</div>';
    return;
  }

  container.innerHTML = '<div class="athletes-trending-grid"></div>';
  const gridWrap = container.querySelector('.athletes-trending-grid');

  items.forEach(item => {
    const fighter = getFighter(item.fighterId);
    const initials = fighter.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

    const itemEl = document.createElement('div');
    itemEl.className = 'trending-athlete-item';
    
    // Check if fighter has avatar file or needs placeholder initials
    const avatarHtml = fighter.avatar && fighter.avatar.startsWith('http')
      ? `<img src="${fighter.avatar}" alt="${fighter.name}" class="trending-avatar-img">`
      : `<span class="trending-initials">${initials}</span>`;

    itemEl.innerHTML = `
      <div class="trending-avatar-box">
        ${avatarHtml}
        <span class="trending-badge">${item.position}</span>
      </div>
      <span class="trending-athlete-name">${fighter.name}</span>
      <span class="trending-athlete-cat">Peso ${item.category}</span>
      <span class="trending-athlete-rec">${item.record}</span>
    `;
    gridWrap.appendChild(itemEl);
  });
}

// Render Bottom Shortcuts features strip
async function renderBottomShortcuts() {
  const container = document.getElementById('bottom-shortcuts-row');
  if (!container) return;

  const list = await fetchData('shortcuts', '/api/fighting/shortcuts');
  const items = list.slice(0, 5);

  if (!items || items.length === 0) return;

  container.innerHTML = '';
  items.forEach(shortcut => {
    const iconSvg = SVG_ICONS[shortcut.icon] || SVG_ICONS.trophy;
    const cardEl = document.createElement('a');
    cardEl.href = shortcut.href || '#';
    cardEl.className = 'shortcut-card';
    cardEl.innerHTML = `
      <div class="shortcut-icon-wrap">
        ${iconSvg}
      </div>
      <div class="shortcut-info-wrap">
        <span class="shortcut-title">${shortcut.title}</span>
        <span class="shortcut-desc">${shortcut.description}</span>
      </div>
    `;
    cardEl.addEventListener('click', (e) => {
      if (shortcut.href === '#') {
        e.preventDefault();
      }
      openModal(shortcut.title, `
        <div style="padding:10px 0; text-align:center;">
          <div style="color:var(--border-primary); margin-bottom:16px; display:inline-block;">
            ${iconSvg}
          </div>
          <h4 class="modal-subtitle" style="margin-top:8px; text-transform:uppercase; font-family:var(--font-heading); color:var(--white);">${shortcut.title}</h4>
          <p style="margin:16px 0; line-height:1.5; color:var(--text-secondary);">${shortcut.description}</p>
          <div style="border-top: 1px solid var(--border-muted); padding-top:16px; text-align:left;">
            <p style="font-size:0.85rem; color:var(--text-muted); line-height:1.4;">
              Acesso exclusivo aos alertas em tempo real e feeds customizados de lutas na Arena PowerSport. Assine notificações de lutadores e eventos de cinturão do UFC.
            </p>
          </div>
        </div>
      `);
    });
    container.appendChild(cardEl);
  });
}

// 5. MODAL LOGIC
const modalOverlay = document.getElementById('dashboard-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');

function openModal(title, htmlContent) {
  if (!modalOverlay || !modalTitle || !modalBody) return;
  modalTitle.textContent = title;
  modalBody.innerHTML = htmlContent;
  
  modalOverlay.classList.add('active');
  modalOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!modalOverlay) return;
  modalOverlay.classList.remove('active');
  modalOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

if (modalClose) modalClose.addEventListener('click', closeModal);
if (modalOverlay) {
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
    closeModal();
  }
});

// Bind Modal Action Links (Ver todos / Ver ranking / Ver tabela)
async function bindModalActions() {
  // 1. Upcoming Fights Ver Todas
  const btnFights = document.getElementById('action-upcoming-fights');
  if (btnFights) {
    btnFights.addEventListener('click', async (e) => {
      e.preventDefault();
      const list = await fetchData('upcomingFights', '/api/fighting/fights/upcoming');
      
      let html = '<div style="display:flex; flex-direction:column; gap:12px; max-height:60vh; overflow-y:auto; padding-right:8px;">';
      list.forEach(match => {
        const fighterA = getFighter(match.fighterAId);
        const fighterB = getFighter(match.fighterBId);
        html += `
          <div style="display:flex; align-items:center; justify-content:space-between; padding:12px; border-bottom:1px solid var(--border-muted);">
            <div style="font-family:var(--font-numbers); font-size:0.85rem; color:var(--text-secondary); width:25%;">
              <strong>${match.date}</strong><br><span style="color:var(--text-muted);">${match.time}</span>
            </div>
            <div style="display:flex; align-items:center; justify-content:space-between; width:75%;">
              <div style="display:flex; align-items:center; width:42%; justify-content:flex-end; text-align:right;">
                <span style="font-family:var(--font-heading); font-size:0.95rem; font-weight:800; margin-right:10px; color:var(--white);">${fighterA.name}</span>
                <span style="font-size:0.75rem; color:var(--text-muted);">${fighterA.record}</span>
              </div>
              <div style="font-family:var(--font-heading); font-size:0.85rem; font-weight:900; color:var(--accent-primary); text-align:center; width:16%;">VS</div>
              <div style="display:flex; align-items:center; width:42%; justify-content:flex-start; text-align:left;">
                <span style="font-size:0.75rem; color:var(--text-muted); margin-right:10px;">${fighterB.record}</span>
                <span style="font-family:var(--font-heading); font-size:0.95rem; font-weight:800; color:var(--white);">${fighterB.name}</span>
              </div>
            </div>
          </div>
        `;
      });
      html += '</div>';
      openModal('Próximas Lutas', html);
    });
  }

  // 2. Official Ranking Ver Ranking Completo
  const btnRanking = document.getElementById('action-official-ranking');
  if (btnRanking) {
    btnRanking.addEventListener('click', async (e) => {
      e.preventDefault();
      // Fetch ranking of the active category
      const list = await fetchData('officialRanking', `/api/fighting/ranking/official?category=${activeCategory}`);
      const categoryLabel = rankingTabs.find(t => t.id === activeCategory).label;
      
      let html = `
        <div style="max-height:60vh; overflow-y:auto; padding-right:8px;">
          <table class="ranking-table" style="width:100%;">
            <thead>
              <tr>
                <th style="padding-bottom:10px; text-align:center;">Pos</th>
                <th style="padding-bottom:10px;">Atleta</th>
                <th style="padding-bottom:10px;">País</th>
                <th style="padding-bottom:10px; text-align:center;">Recorde</th>
              </tr>
            </thead>
            <tbody>
      `;
      
      list.forEach(row => {
        const fighter = getFighter(row.fighterId);
        let rankBadgeClass = 'rank-badge';
        if (row.position === 1) rankBadgeClass += ' rank-1';
        else if (row.position === 2) rankBadgeClass += ' rank-2';
        else if (row.position === 3) rankBadgeClass += ' rank-3';

        html += `
          <tr>
            <td style="padding:10px 0; text-align:center;"><span class="${rankBadgeClass}">${row.position}</span></td>
            <td style="padding:10px 0;">
              <strong style="font-family:var(--font-body); font-size:0.9rem; font-weight:700; color:var(--white);">${fighter.name}</strong>
            </td>
            <td style="padding:10px 0; color:var(--text-secondary);">${row.country}</td>
            <td style="padding:10px 0; text-align:center; font-family:var(--font-numbers); font-weight:900; color:var(--accent-secondary);">${row.record}</td>
          </tr>
        `;
      });
      
      html += '</tbody></table></div>';
      openModal(`Ranking Completo - ${categoryLabel}`, html);
    });
  }

  // 3. Highlights Ver Todos
  const btnHighlights = document.getElementById('action-highlights');
  if (btnHighlights) {
    btnHighlights.addEventListener('click', async (e) => {
      e.preventDefault();
      const list = await fetchData('highlights', '/api/fighting/highlights');
      
      let html = '<div style="display:flex; flex-direction:column; gap:16px; max-height:60vh; overflow-y:auto; padding-right:8px;">';
      list.forEach(highlight => {
        const imageSrc = `../../../assets/fighting/feed/${highlight.thumbnail || 'FeedLutaDestaque.png'}`;
        const videoUrl = highlight.videoUrl || 'https://www.youtube.com/watch?v=sK2Wj2W-j4E';
        html += `
          <div style="display:flex; gap:16px; padding:12px; border: 1px solid var(--border-muted); border-radius:8px; background:rgba(28, 0, 46, 0.45);">
            <img src="${imageSrc}" style="width:120px; aspect-ratio:16/9; object-fit:cover; border-radius:6px; flex-shrink:0;">
            <div>
              <strong style="font-family:var(--font-heading); font-size:0.95rem; text-transform:uppercase; color:var(--white); display:block;">${highlight.title}</strong>
              <p style="font-size:0.8rem; color:var(--text-secondary); margin:4px 0 8px 0;">${highlight.description}</p>
              <a href="${videoUrl}" target="_blank" class="btn-primary" style="padding:4px 10px; font-size:0.75rem; text-decoration:none;">Assistir agora</a>
            </div>
          </div>
        `;
      });
      html += '</div>';
      openModal('Vídeos de Destaque', html);
    });
  }

  // 4. League Stats Ver Todas
  const btnStats = document.getElementById('action-league-stats');
  if (btnStats) {
    btnStats.addEventListener('click', async (e) => {
      e.preventDefault();
      const stats = await fetchData('leagueStats', '/api/fighting/league/stats');
      
      let html = '<div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:12px; max-height:60vh; overflow-y:auto; padding-right:8px;">';
      stats.forEach(stat => {
        const iconSvg = SVG_ICONS[stat.icon] || SVG_ICONS['boxing-glove'];
        html += `
          <div style="display:flex; align-items:center; gap:12px; padding:12px; border:1px solid var(--border-muted); border-radius:8px; background:rgba(28, 0, 46, 0.45);">
            <div style="color:var(--accent-primary); filter:drop-shadow(0 0 4px var(--accent-primary));">
              ${iconSvg}
            </div>
            <div>
              <span style="font-family:var(--font-heading); font-size:0.72rem; font-weight:700; text-transform:uppercase; color:var(--text-muted);">${stat.label}</span>
              <div style="display:flex; align-items:baseline;">
                <span style="font-family:var(--font-numbers); font-size:1.4rem; font-weight:900; color:var(--white);">${stat.value}</span>
                ${stat.unit ? `<span style="font-family:var(--font-heading); font-size:0.8rem; font-weight:800; color:var(--accent-secondary); margin-left:2px;">${stat.unit}</span>` : ''}
              </div>
            </div>
          </div>
        `;
      });
      html += '</div>';
      openModal('Estatísticas Detalhadas', html);
    });
  }

  // 5. Featured News Ver Todas
  const btnNews = document.getElementById('action-featured-news');
  if (btnNews) {
    btnNews.addEventListener('click', async (e) => {
      e.preventDefault();
      const news = await fetchData('news', '/api/fighting/news');
      
      let html = '<div style="display:flex; flex-direction:column; gap:12px; max-height:60vh; overflow-y:auto; padding-right:8px;">';
      news.forEach(item => {
        const imageSrc = `../../../assets/fighting/feed/${item.image || 'FeedLutaDestaque.png'}`;
        html += `
          <a href="${item.url || '#'}" style="display:flex; gap:12px; padding:10px; border-bottom:1px solid var(--border-muted); text-decoration:none;" class="news-modal-row">
            <img src="${imageSrc}" style="width:64px; height:64px; object-fit:cover; border-radius:6px; border:1px solid var(--border-muted); flex-shrink:0;">
            <div>
              <span style="font-family:var(--font-numbers); font-size:0.72rem; color:var(--accent-secondary); font-weight:700; display:block;">${item.date}</span>
              <strong style="color:var(--white); font-size:0.85rem; line-height:1.25; display:block;">${item.title}</strong>
            </div>
          </a>
        `;
      });
      html += '</div>';
      openModal('Notícias Recentes', html);
    });
  }

  // 6. Featured Events Ver Todos
  const btnEvents = document.getElementById('action-featured-events');
  if (btnEvents) {
    btnEvents.addEventListener('click', async (e) => {
      e.preventDefault();
      const list = await fetchData('events', '/api/fighting/events/featured');
      
      let html = '<div style="display:flex; flex-direction:column; gap:10px; max-height:60vh; overflow-y:auto; padding-right:8px;">';
      list.forEach(ev => {
        const logoSrc = `../../../assets/fighting/feed/${ev.logo || 'FeedLutaEventoUFC.png'}`;
        html += `
          <div style="display:flex; align-items:center; justify-content:space-between; padding:12px; border-bottom:1px solid var(--border-muted);">
            <div style="font-family:var(--font-numbers); font-size:0.85rem; color:var(--text-secondary); width:25%;">
              <strong>${ev.date}</strong><br><span style="color:var(--text-muted);">${ev.time}</span>
            </div>
            <div style="display:flex; align-items:center; width:55%; gap:12px;">
              <div style="width:34px; height:34px; border-radius:4px; background:rgba(255, 255, 255, 0.06); border:1px solid var(--border-muted); display:flex; align-items:center; justify-content:center; flex-shrink:0;">
                <img src="${logoSrc}" style="width:80%; height:80%; object-fit:contain;">
              </div>
              <div>
                <strong style="font-family:var(--font-heading); font-size:0.95rem; font-weight:900; color:var(--white);">${ev.name}</strong>
                <span style="display:block; font-size:0.75rem; color:var(--text-muted);">${ev.arena}</span>
              </div>
            </div>
            <div style="width:20%; text-align:right; font-size:0.75rem; color:var(--text-muted);">${ev.location}</div>
          </div>
        `;
      });
      html += '</div>';
      openModal('Eventos da Temporada', html);
    });
  }

  // 7. Trending Athletes Ver Ranking
  const btnAthletes = document.getElementById('action-trending-athletes');
  if (btnAthletes) {
    btnAthletes.addEventListener('click', async (e) => {
      e.preventDefault();
      const list = await fetchData('trendingAthletes', '/api/fighting/athletes/trending');
      
      let html = '<div style="display:flex; flex-direction:column; gap:12px; max-height:60vh; overflow-y:auto; padding-right:8px;">';
      list.forEach(item => {
        const fighter = getFighter(item.fighterId);
        const initials = fighter.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
        const avatarHtml = fighter.avatar && fighter.avatar.startsWith('http')
          ? `<img src="${fighter.avatar}" alt="${fighter.name}" style="width:40px; height:40px; border-radius:50%; object-fit:cover; border:1px solid var(--border-primary);">`
          : `<div style="width:40px; height:40px; border-radius:50%; background:var(--bg-tertiary); display:flex; align-items:center; justify-content:center; border:1px solid var(--border-primary); font-family:var(--font-heading); font-size:0.95rem; font-weight:700; color:var(--text-secondary);">${initials}</div>`;

        html += `
          <div style="display:flex; align-items:center; justify-content:space-between; padding:10px; border-bottom:1px solid var(--border-muted);">
            <div style="display:flex; align-items:center; width:70%;">
              <span style="font-family:var(--font-heading); font-size:1.05rem; font-weight:900; color:var(--accent-secondary); width:24px; text-align:center; margin-right:8px;">${item.position}</span>
              ${avatarHtml}
              <div style="display:flex; flex-direction:column; margin-left:12px;">
                <strong style="color:var(--white); text-transform:uppercase; font-size:0.9rem;">${fighter.name}</strong>
                <span style="font-family:var(--font-heading); font-size:0.75rem; color:var(--text-muted); text-transform:uppercase;">Peso ${item.category}</span>
              </div>
            </div>
            <div style="text-align:right; width:30%;">
              <span style="font-family:var(--font-numbers); font-size:1.15rem; font-weight:900; color:var(--accent-primary);">${item.record}</span>
              <span style="display:block; font-size:0.65rem; color:var(--text-muted); text-transform:uppercase;">Vitórias/Derrotas</span>
            </div>
          </div>
        `;
      });
      html += '</div>';
      openModal('Atletas em Destaque', html);
    });
  }
}

// 6. SCROLL SPY & NAVIGATION ACTIVE STATE
const sections = document.querySelectorAll('section, main, footer');
const navLinks = document.querySelectorAll('.nav-link');

function scrollSpy() {
  const scrollPos = window.scrollY + 100; // Offset for header height
  
  sections.forEach(section => {
    if (section.id && scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${section.id}`) {
          link.classList.add('active');
        }
      });
    }
  });

  // Handle site header scroll glow
  const header = document.getElementById('site-header');
  if (header) {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
}

window.addEventListener('scroll', scrollSpy);

// Mobile Hamburger toggle
const hamburgerBtn = document.getElementById('hamburger-toggle');
const navMenu = document.getElementById('nav-menu');

if (hamburgerBtn && navMenu) {
  hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburgerBtn.classList.toggle('open');
  });

  // Close menu when clicking nav link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      hamburgerBtn.classList.remove('open');
    });
  });
}

// 7. INITIALIZE ALL
async function init() {
  await initializeFightersCache();
  
  // Render tabs before stands ranking table load
  renderRankingTabs();

  await Promise.all([
    renderNextFight(),
    renderUpcomingFights(),
    renderRankingStandings(),
    renderHighlights(),
    renderLeagueStats(),
    renderFeaturedNews(),
    renderFeaturedEvents(),
    renderTrendingAthletes(),
    renderBottomShortcuts(),
    bindModalActions()
  ]);
}

window.addEventListener('DOMContentLoaded', init);
