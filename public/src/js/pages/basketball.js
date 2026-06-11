/* ==========================================================================
   POWERSPORT - BASKETBALL PAGE LOGIC (basketball.js)
   ========================================================================== */

// 1. FALLBACK STATIC DATA (In case API is offline or page is loaded via file://)
const fallbackData = {
  teams: [
    {
      id: "hawks",
      name: "Hawks",
      shortName: "HAW",
      logo: "team-hawks.svg",
      primaryColor: "#D71920",
      secondaryColor: "#FFFFFF"
    },
    {
      id: "tigers",
      name: "Tigers",
      shortName: "TIG",
      logo: "team-tigers.svg",
      primaryColor: "#FF6A00",
      secondaryColor: "#111111"
    },
    {
      id: "warriors",
      name: "Warriors",
      shortName: "WAR",
      logo: "team-warriors.svg",
      primaryColor: "#D9D9D9",
      secondaryColor: "#111111"
    },
    {
      id: "kings",
      name: "Kings",
      shortName: "KIN",
      logo: "team-kings.svg",
      primaryColor: "#255CFF",
      secondaryColor: "#FFFFFF"
    },
    {
      id: "eagles",
      name: "Eagles",
      shortName: "EAG",
      logo: "team-eagles.svg",
      primaryColor: "#FFFFFF",
      secondaryColor: "#111111"
    },
    {
      id: "dragons",
      name: "Dragons",
      shortName: "DRA",
      logo: "team-dragons.svg",
      primaryColor: "#005CFF",
      secondaryColor: "#FF5A00"
    },
    {
      id: "panthers",
      name: "Panthers",
      shortName: "PAN",
      logo: "team-panthers.svg",
      primaryColor: "#111111",
      secondaryColor: "#FF5A00"
    },
    {
      id: "bulls",
      name: "Bulls",
      shortName: "BUL",
      logo: "team-bulls.svg",
      primaryColor: "#D71920",
      secondaryColor: "#FFFFFF"
    }
  ],
  nextGame: {
    id: "next-game-001",
    date: "25 MAI",
    time: "20:00",
    league: "Liga Nacional",
    homeTeamId: "tigers",
    awayTeamId: "warriors",
    status: "scheduled"
  },
  weeklyGames: [
    {
      id: "game-week-001",
      date: "24 MAI",
      time: "18:00",
      homeTeamId: "hawks",
      awayTeamId: "bulls",
      status: "scheduled"
    },
    {
      id: "game-week-002",
      date: "25 MAI",
      time: "20:00",
      homeTeamId: "tigers",
      awayTeamId: "warriors",
      status: "scheduled"
    },
    {
      id: "game-week-003",
      date: "26 MAI",
      time: "19:30",
      homeTeamId: "kings",
      awayTeamId: "eagles",
      status: "scheduled"
    },
    {
      id: "game-week-004",
      date: "27 MAI",
      time: "21:00",
      homeTeamId: "dragons",
      awayTeamId: "panthers",
      status: "scheduled"
    }
  ],
  standings: [
    {
      position: 1,
      teamId: "tigers",
      games: 28,
      wins: 22,
      losses: 6,
      points: 50
    },
    {
      position: 2,
      teamId: "warriors",
      games: 28,
      wins: 20,
      losses: 8,
      points: 48
    },
    {
      position: 3,
      teamId: "kings",
      games: 28,
      wins: 18,
      losses: 10,
      points: 46
    },
    {
      position: 4,
      teamId: "eagles",
      games: 28,
      wins: 16,
      losses: 12,
      points: 44
    },
    {
      position: 5,
      teamId: "hawks",
      games: 28,
      wins: 14,
      losses: 14,
      points: 42
    },
    {
      position: 6,
      teamId: "bulls",
      games: 28,
      wins: 12,
      losses: 16,
      points: 40
    },
    {
      position: 7,
      teamId: "panthers",
      games: 28,
      wins: 10,
      losses: 18,
      points: 38
    },
    {
      position: 8,
      teamId: "dragons",
      games: 28,
      wins: 8,
      losses: 20,
      points: 36
    }
  ],
  weeklyHighlight: {
    id: "highlight-001",
    category: "Destaque",
    title: "Enterrada Espetacular!",
    description: "A jogada que parou a partida!",
    thumbnail: "FeedBasquete-1.png",
    videoUrl: "https://www.youtube.com/watch?v=VZaB9c745FM",
    buttonLabel: "Assistir agora"
  },
  topPlayers: [
    {
      position: 1,
      playerName: "L. Anderson",
      teamId: "tigers",
      mainValue: "24.8",
      metric: "PTS",
      avatar: "player-l-anderson.png"
    },
    {
      position: 2,
      playerName: "J. Williams",
      teamId: "warriors",
      mainValue: "7.6",
      metric: "REB",
      avatar: "player-j-williams.png"
    },
    {
      position: 3,
      playerName: "M. Brown",
      teamId: "eagles",
      mainValue: "5.4",
      metric: "AST",
      avatar: "player-m-brown.png"
    }
  ],
  featuredNews: [
    {
      id: "news-001",
      title: "Tigers lidera a temporada regular com recorde histórico",
      date: "23 MAI 2024",
      image: "FeedBasquete-2.png",
      url: "#noticia-001"
    },
    {
      id: "news-002",
      title: "Os astros da liga se preparam para o All-Star Game",
      date: "22 MAI 2024",
      image: "FeedBasquete-1.png",
      url: "#noticia-002"
    },
    {
      id: "news-003",
      title: "Decisão emocionante nas finais da Conferência Leste",
      date: "21 MAI 2024",
      image: "FeedBasquete-3.png",
      url: "#noticia-003"
    }
  ],
  leagueStats: [
    {
      id: "points-per-game",
      label: "Pontos por jogo",
      value: "98.7",
      unit: "",
      description: "Média",
      icon: "basket"
    },
    {
      id: "rebounds-per-game",
      label: "Rebotes por jogo",
      value: "42.3",
      unit: "",
      description: "Média",
      icon: "basketball"
    },
    {
      id: "assists-per-game",
      label: "Assistências por jogo",
      value: "24.8",
      unit: "",
      description: "Média",
      icon: "court"
    },
    {
      id: "field-goal-percentage",
      label: "Aproveitamento",
      value: "48.6",
      unit: "%",
      description: "Média",
      icon: "target"
    }
  ],
  topScorers: [
    {
      position: 1,
      playerName: "L. Anderson",
      teamId: "tigers",
      value: "24.8",
      unit: "PTS",
      avatar: "player-l-anderson.png"
    },
    {
      position: 2,
      playerName: "J. Williams",
      teamId: "warriors",
      value: "22.1",
      unit: "PTS",
      avatar: "player-j-williams.png"
    },
    {
      position: 3,
      playerName: "M. Brown",
      teamId: "kings",
      value: "19.7",
      unit: "PTS",
      avatar: "player-m-brown.png"
    },
    {
      position: 4,
      playerName: "D. Johnson",
      teamId: "eagles",
      value: "18.3",
      unit: "PTS",
      avatar: "player-d-johnson.png"
    },
    {
      position: 5,
      playerName: "R. Smith",
      teamId: "hawks",
      value: "16.9",
      unit: "PTS",
      avatar: "player-r-smith.png"
    }
  ],
  bottomShortcuts: [
    {
      id: "full-calendar",
      icon: "calendar",
      title: "Calendário Completo",
      description: "Confira todos os jogos da temporada",
      href: "#calendario"
    },
    {
      id: "best-plays",
      icon: "play-circle",
      title: "Melhores Jogadas",
      description: "Assista aos melhores momentos",
      href: "#videos"
    },
    {
      id: "advanced-stats",
      icon: "bar-chart",
      title: "Estatísticas Avançadas",
      description: "Números que fazem a diferença",
      href: "#estatisticas"
    },
    {
      id: "history-records",
      icon: "trophy",
      title: "História e Recordes",
      description: "Conheça os maiores da liga",
      href: "#recordes"
    }
  ]
};

// SVG Icons helper to inject custom inline SVGs based on icon name
const SVG_ICONS = {
  basket: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M2 12h20M12 2a10 10 0 0 1 10 10m-20 0a10 10 0 0 1 10-10m0 20a10 10 0 0 1-10-10m20 0a10 10 0 0 1-10 10"></path></svg>`,
  basketball: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M6.2 6.2c2.4 2.4 2.4 6.4 0 8.8m11.6-8.8c-2.4 2.4-2.4 6.4 0 8.8M2 12h20M12 2v20"></path></svg>`,
  court: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"></rect><line x1="12" y1="4" x2="12" y2="20"></line><circle cx="12" cy="12" r="3"></circle><path d="M2 9a3 3 0 0 1 0 6m20-6a3 3 0 0 0 0 6"></path></svg>`,
  target: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>`,
  calendar: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
  'play-circle': `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>`,
  'bar-chart': `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
  trophy: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34M12 2a6 6 0 0 1 6 6v5a6 6 0 0 1-6 6 6 6 0 0 1-6-6V8a6 6 0 0 1 6-6z"></path></svg>`
};

// 2. API REQUEST UTILITY WITH FALLBACK
async function fetchData(endpointKey, serverPath) {
  const keyMap = {
    'news': 'featuredNews',
    'teams': 'teams'
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
      const response = await fetch('../../../src/data/basketball/basketball-page.json');
      if (response.ok) {
        const fullJson = await response.json();
        if (fullJson && fullJson.data && fullJson.data[mappedKey]) {
          return fullJson.data[mappedKey];
        }
      }
    } catch (localFileError) {
      // Ignore and proceed to hardcoded fallback
    }

    // Direct memory fallback
    return fallbackData[mappedKey];
  }
}

// 3. CACHE TEAMS FOR RESOLVING NAMES AND COLORS
let teamsCache = [...fallbackData.teams];

async function initializeTeamsCache() {
  const list = await fetchData('teams', '/api/teams?league=basketball');
  if (list && list.length > 0) {
    teamsCache = list;
  }
}

function getTeam(teamId) {
  // Try exact match or match by slug/id
  return teamsCache.find(t => t.id === teamId || t.id.includes(teamId) || teamId.includes(t.id)) || {
    id: teamId,
    name: teamId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    shortName: teamId.substring(0, 3).toUpperCase(),
    primaryColor: "#FF5A00",
    secondaryColor: "#ffffff",
    logo: ""
  };
}

// Helper to render team logo
function getTeamLogoHtml(team, size = "28px") {
  if (team.logo && team.logo.startsWith('http')) {
    // Live team logo URL from Sofascore!
    return `<img src="${team.logo}" alt="${team.name} Logo" style="width:${size}; height:${size}; object-fit:contain; filter: drop-shadow(0 0 2px rgba(255,255,255,0.2));">`;
  }
  
  // Custom SVG team logo if local
  return `
    <div style="width:${size}; height:${size}; border-radius:50%; background:${team.primaryColor}; display:flex; align-items:center; justify-content:center; border: 1px solid rgba(255,255,255,0.25); box-shadow: 0 0 8px ${team.primaryColor};">
      <span style="font-family:var(--font-heading); font-size:calc(${size} * 0.45); font-weight:900; color:${team.secondaryColor || '#fff'};">${team.shortName.substring(0,2)}</span>
    </div>
  `;
}

// 4. RENDERING MODULES

// Render Next Game Versus Card (Hero Right)
async function renderNextGame() {
  const container = document.getElementById('next-game-container');
  if (!container) return;

  const match = await fetchData('nextGame', '/api/basketball/games/next');
  if (!match || !match.homeTeamId) {
    container.innerHTML = '<div class="loading-placeholder">Sem partidas agendadas</div>';
    return;
  }

  const homeTeam = getTeam(match.homeTeamId);
  const awayTeam = getTeam(match.awayTeamId);

  container.innerHTML = `
    <div class="versus-block-container" data-match-id="${match.id}">
      <span class="versus-league">${match.league || 'Liga de Basquete'}</span>
      
      <div class="versus-teams-row">
        <div class="versus-team">
          <div class="versus-logo-wrap">
            ${getTeamLogoHtml(homeTeam, "56px")}
          </div>
          <span class="versus-team-name">${homeTeam.name}</span>
        </div>
        
        <div class="versus-middle-text">VS</div>
        
        <div class="versus-team">
          <div class="versus-logo-wrap">
            ${getTeamLogoHtml(awayTeam, "56px")}
          </div>
          <span class="versus-team-name">${awayTeam.name}</span>
        </div>
      </div>
      
      <div class="versus-datetime">
        <span class="versus-date">${match.date}</span>
        <span class="versus-time">${match.time}</span>
      </div>
      
      <button class="btn-primary versus-btn-details" id="btn-next-game-details">Ver detalhes</button>
    </div>
  `;

  // Bind details click
  document.getElementById('btn-next-game-details').addEventListener('click', () => {
    openModal('Detalhes do Jogo', `
      <div style="text-align:center; padding:10px 0;">
        <h4 class="modal-subtitle">${match.league || 'Liga de Basquete'}</h4>
        <div style="display:flex; justify-content:space-around; align-items:center; margin:24px 0;">
          <div style="width:40%; display:flex; flex-direction:column; align-items:center;">
            <div style="margin-bottom:12px;">${getTeamLogoHtml(homeTeam, "72px")}</div>
            <strong style="color:var(--white); text-transform:uppercase; font-size:1.1rem; text-align:center;">${homeTeam.name}</strong>
          </div>
          <div style="font-family:var(--font-heading); font-size:2rem; color:var(--border-primary); font-style:italic; font-weight:900;">VS</div>
          <div style="width:40%; display:flex; flex-direction:column; align-items:center;">
            <div style="margin-bottom:12px;">${getTeamLogoHtml(awayTeam, "72px")}</div>
            <strong style="color:var(--white); text-transform:uppercase; font-size:1.1rem; text-align:center;">${awayTeam.name}</strong>
          </div>
        </div>
        <div style="border-top:1px solid var(--border-muted); padding-top:16px; margin-top:16px;">
          <p style="margin-bottom:8px;"><strong style="color:var(--border-primary);">DATA:</strong> ${match.date} às ${match.time}</p>
          <p style="margin-bottom:8px;"><strong style="color:var(--border-primary);">ESTÁDIO:</strong> Arena Principal</p>
          <p style="font-size:0.85rem; color:var(--text-muted); line-height:1.4; margin-top:12px;">Prepare-se para uma transmissão ao vivo espetacular com análises em tempo real, estatísticas dos atletas e replays com multicâmeras no aplicativo oficial PowerSport.</p>
        </div>
      </div>
    `);
  });
}

// Render Weekly Games List
async function renderWeeklyGames() {
  const container = document.getElementById('weekly-games-list');
  if (!container) return;

  const list = await fetchData('weeklyGames', '/api/basketball/games/week');
  const items = list.slice(0, 4); // Limit to 4 items in card view

  if (!items || items.length === 0) {
    container.innerHTML = '<div class="loading-placeholder">Sem partidas agendadas</div>';
    return;
  }

  container.innerHTML = '<div class="weekly-games-list-wrap"></div>';
  const wrap = container.querySelector('.weekly-games-list-wrap');

  items.forEach(match => {
    const homeTeam = getTeam(match.homeTeamId);
    const awayTeam = getTeam(match.awayTeamId);

    const matchEl = document.createElement('div');
    matchEl.className = 'match-row-item';
    matchEl.innerHTML = `
      <div class="match-time-block">
        <span class="match-date">${match.date}</span>
        <span class="match-time">${match.time}</span>
      </div>
      <div class="match-teams-grid">
        <div class="team-inline home">
          <span class="team-name-short">${homeTeam.shortName}</span>
          <span class="team-color-dot" style="color: ${homeTeam.primaryColor}; background-color: ${homeTeam.primaryColor};"></span>
        </div>
        <div class="match-vs-center">VS</div>
        <div class="team-inline away">
          <span class="team-color-dot" style="color: ${awayTeam.primaryColor}; background-color: ${awayTeam.primaryColor};"></span>
          <span class="team-name-short">${awayTeam.shortName}</span>
        </div>
      </div>
    `;
    wrap.appendChild(matchEl);
  });
}

// Render Standings Table
async function renderStandings() {
  const tbody = document.getElementById('standings-table-body');
  if (!tbody) return;

  const list = await fetchData('standings', '/api/basketball/standings');
  const items = list.slice(0, 8); // Top 8 items in card view

  if (!items || items.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" class="loading-placeholder">Sem classificação</td></tr>';
    return;
  }

  tbody.innerHTML = '';
  items.forEach(row => {
    const team = getTeam(row.teamId);
    
    let rankBadgeClass = 'pos-badge';
    if (row.position === 1) rankBadgeClass += ' pos-1';
    else if (row.position === 2) rankBadgeClass += ' pos-2';
    else if (row.position === 3) rankBadgeClass += ' pos-3';

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="col-pos"><span class="${rankBadgeClass}">${row.position}</span></td>
      <td class="col-team">
        <div class="table-team-cell">
          <span class="table-team-dot" style="background-color: ${team.primaryColor}; box-shadow: 0 0 6px ${team.primaryColor};"></span>
          <span class="table-team-name">${team.name}</span>
        </div>
      </td>
      <td class="col-games">${row.games}</td>
      <td class="col-wins">${row.wins}</td>
      <td class="col-losses">${row.losses}</td>
      <td class="col-pts">${row.points}</td>
    `;
    tbody.appendChild(tr);
  });
}

// Render Weekly Highlight (Video card)
async function renderWeeklyHighlight() {
  const container = document.getElementById('weekly-highlight-container');
  if (!container) return;

  const data = await fetchData('weeklyHighlight', '/api/basketball/highlights/week');
  
  const imageSrc = `../../../assets/basketball/feed/${data.thumbnail || 'FeedBasquete-1.png'}`;
  const videoUrl = data.videoUrl || 'https://www.youtube.com/watch?v=VZaB9c745FM';

  container.innerHTML = `
    <div class="video-card-preview">
      <img src="${imageSrc}" alt="Destaques da semana" class="video-thumb-img" loading="lazy">
      <div class="video-dark-overlay">
        <a href="${videoUrl}" target="_blank" class="play-btn-circle" aria-label="Assistir vídeo de destaque da semana">
          <svg viewBox="0 0 24 24" width="22" height="22"><polygon points="8,5 19,12 8,19"></polygon></svg>
        </a>
      </div>
    </div>
    <div class="video-info-wrap">
      <div class="video-card-category">${data.category || 'Destaque'}</div>
      <h4 class="video-card-title">${data.title || 'Enterrada Espetacular!'}</h4>
      <p class="video-card-description">${data.description || 'A jogada que parou a partida!'}</p>
      <a href="${videoUrl}" target="_blank" class="btn-primary video-card-btn" style="text-decoration:none;">
        ${data.buttonLabel || 'Assistir agora'}
      </a>
    </div>
  `;
}

// Render Top Players (Podium)
async function renderTopPlayers() {
  const container = document.getElementById('top-players-container');
  if (!container) return;

  const list = await fetchData('topPlayers', '/api/basketball/players/top');
  const items = list.slice(0, 3); // Max 3 items on podium

  if (!items || items.length === 0) {
    container.innerHTML = '<div class="loading-placeholder">Sem dados de jogadores</div>';
    return;
  }

  container.innerHTML = '<div class="podium-container"></div>';
  const podium = container.querySelector('.podium-container');

  items.forEach(player => {
    const team = getTeam(player.teamId);
    const initials = player.playerName.split(' ').map(n => n[0]).join('');

    let podiumClass = 'podium-player';
    if (player.position === 1) podiumClass += ' pos-1';
    else if (player.position === 2) podiumClass += ' pos-2';
    else if (player.position === 3) podiumClass += ' pos-3';

    const playerEl = document.createElement('div');
    playerEl.className = podiumClass;
    
    // Check if avatar is real url or local fallback
    const avatarHtml = player.avatar && player.avatar.startsWith('http')
      ? `<img src="${player.avatar}" alt="${player.playerName}" class="podium-avatar-img">`
      : `<span class="podium-initials">${initials}</span>`;

    playerEl.innerHTML = `
      <div class="podium-avatar-wrap">
        <div class="podium-avatar">
          ${avatarHtml}
        </div>
        <span class="podium-badge">${player.position}</span>
      </div>
      <span class="podium-name">${player.playerName}</span>
      <div class="podium-stats">
        <span class="podium-val">${player.mainValue}</span>
        <span class="podium-metric">${player.metric}</span>
      </div>
    `;
    podium.appendChild(playerEl);
  });
}

// Render Featured News Card
async function renderFeaturedNews() {
  const container = document.getElementById('featured-news-grid');
  if (!container) return;

  const news = await fetchData('news', '/api/basketball/news');
  const items = news.slice(0, 3);

  if (!items || items.length === 0) {
    container.innerHTML = '<div class="loading-placeholder">Sem notícias</div>';
    return;
  }

  container.innerHTML = '';
  items.forEach(item => {
    const imageSrc = `../../../assets/basketball/feed/${item.image || 'FeedBasquete-2.png'}`;
    const newsEl = document.createElement('a');
    newsEl.href = item.url || '#';
    newsEl.className = 'news-card-item';
    newsEl.innerHTML = `
      <div class="news-img-wrap">
        <img src="${imageSrc}" alt="${item.title}" class="news-img" loading="lazy">
        <span class="news-category-badge">${item.category || 'Liga'}</span>
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
        openModal(item.title, `
          <div style="padding:10px 0;">
            <span class="news-category-badge" style="position:static; display:inline-block; margin-bottom:12px;">${item.category}</span>
            <span style="display:block; font-size:0.8rem; color:var(--text-muted); margin-bottom:16px;">DATA: ${item.date}</span>
            <img src="${imageSrc}" alt="${item.title}" style="width:100%; height:220px; object-fit:cover; border-radius:8px; border:1px solid var(--border-muted); margin-bottom:16px;">
            <p style="margin-bottom:12px; line-height:1.5;">Esta é uma cobertura especial e detalhada do portal PowerSport trazendo as últimas análises táticas, entrevistas exclusivas de vestiário e opiniões de especialistas sobre a rodada do basquete nacional.</p>
            <p style="margin-bottom:12px; line-height:1.5;">O comissário da liga elogiou o nível competitivo das equipes nesta temporada e previu recordes históricos de audiência nas finais programadas para este mês.</p>
          </div>
        `);
      }
    });
    container.appendChild(newsEl);
  });
}

// Render League Average Stats Card
async function renderLeagueStats() {
  const container = document.getElementById('league-stats-grid');
  if (!container) return;

  const stats = await fetchData('leagueStats', '/api/basketball/league/stats');
  const items = stats.slice(0, 4);

  if (!items || items.length === 0) {
    container.innerHTML = '<div class="loading-placeholder">Sem estatísticas</div>';
    return;
  }

  container.innerHTML = '<div class="stats-grid-wrap"></div>';
  const wrap = container.querySelector('.stats-grid-wrap');

  items.forEach(stat => {
    const iconSvg = SVG_ICONS[stat.icon] || SVG_ICONS.basket;
    const itemEl = document.createElement('div');
    itemEl.className = 'stat-grid-item';
    itemEl.innerHTML = `
      <div class="stat-icon-wrap">
        ${iconSvg}
      </div>
      <div class="stat-info-wrap">
        <span class="stat-label">${stat.label}</span>
        <div class="stat-number-wrap">
          <span class="stat-num">${stat.value}</span>
          ${stat.unit ? `<span class="stat-unit">${stat.unit}</span>` : ''}
        </div>
        <span class="stat-desc">${stat.description}</span>
      </div>
    `;
    wrap.appendChild(itemEl);
  });
}

// Render Top Scorers ranking list
async function renderTopScorers() {
  const container = document.getElementById('top-scorers-list');
  if (!container) return;

  const list = await fetchData('topScorers', '/api/basketball/players/scorers');
  const items = list.slice(0, 5); // Max 5 items on list

  if (!items || items.length === 0) {
    container.innerHTML = '<div class="loading-placeholder">Sem artilheiros</div>';
    return;
  }

  container.innerHTML = '<div class="scorers-list-wrap"></div>';
  const wrap = container.querySelector('.scorers-list-wrap');

  items.forEach(scorer => {
    const team = getTeam(scorer.teamId);
    const initials = scorer.playerName.split(' ').map(n => n[0]).join('');

    let rankClass = 'scorer-rank';
    if (scorer.position === 1) rankClass += ' rank-1';
    else if (scorer.position === 2) rankClass += ' rank-2';
    else if (scorer.position === 3) rankClass += ' rank-3';

    // Check if avatar is real url or local fallback
    const avatarHtml = scorer.avatar && scorer.avatar.startsWith('http')
      ? `<img src="${scorer.avatar}" alt="${scorer.playerName}" class="scorer-avatar-img">`
      : `<span class="scorer-initials">${initials}</span>`;

    const scorerEl = document.createElement('div');
    scorerEl.className = 'scorer-row';
    scorerEl.innerHTML = `
      <span class="${rankClass}">${scorer.position}</span>
      <div class="scorer-avatar-wrap">
        ${avatarHtml}
      </div>
      <div class="scorer-info">
        <span class="scorer-name">${scorer.playerName}</span>
        <span class="scorer-team">${team.name}</span>
      </div>
      <div class="scorer-stats">
        <span class="scorer-value">${scorer.value}</span>
        <span class="scorer-label">${scorer.unit || 'PTS'}</span>
      </div>
    `;
    wrap.appendChild(scorerEl);
  });
}

// Render Bottom Shortcuts features strip
async function renderBottomShortcuts() {
  const container = document.getElementById('bottom-shortcuts-row');
  if (!container) return;

  const list = await fetchData('shortcuts', '/api/basketball/shortcuts');
  const items = list.slice(0, 4);

  if (!items || items.length === 0) {
    return;
  }

  container.innerHTML = '';
  items.forEach(shortcut => {
    const iconSvg = SVG_ICONS[shortcut.icon] || SVG_ICONS.trophy;
    const card = document.createElement('a');
    card.href = shortcut.href || '#';
    card.className = 'shortcut-card';
    card.innerHTML = `
      <div class="shortcut-icon-wrap">
        ${iconSvg}
      </div>
      <div class="shortcut-info-wrap">
        <span class="shortcut-title">${shortcut.title}</span>
        <span class="shortcut-desc">${shortcut.description}</span>
      </div>
    `;
    card.addEventListener('click', (e) => {
      if (shortcut.href === '#') {
        e.preventDefault();
      }
      // Expand shortcut in details modal
      openModal(shortcut.title, `
        <div style="padding:10px 0; text-align:center;">
          <div style="color:var(--border-primary); margin-bottom:16px; display:inline-block;">
            ${iconSvg}
          </div>
          <h4 class="modal-subtitle" style="margin-top:8px;">${shortcut.title}</h4>
          <p style="margin:16px 0; line-height:1.5; color:var(--text-secondary);">${shortcut.description}</p>
          <div style="border-top: 1px solid var(--border-muted); padding-top:16px; text-align:left;">
            <p style="font-size:0.85rem; color:var(--text-muted); line-height:1.4;">
              Esta seção fornece recursos rápidos para o acompanhamento da Liga de Basquete. Novos relatórios avançados de analytics, dados históricos de drafts e chaves de playoffs da FIBA/NBA são atualizados a cada rodada.
            </p>
          </div>
        </div>
      `);
    });
    container.appendChild(card);
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

// Bind Modal Action Links (Ver todos / Ver tabela / Ver ranking)
async function bindModalActions() {
  // 1. Weekly Games Ver Todos
  const btnGames = document.getElementById('action-weekly-games');
  if (btnGames) {
    btnGames.addEventListener('click', async (e) => {
      e.preventDefault();
      const list = await fetchData('weeklyGames', '/api/basketball/games/week');
      
      let html = '<div style="display:flex; flex-direction:column; gap:12px; max-height:60vh; overflow-y:auto; padding-right:8px;">';
      list.forEach(match => {
        const homeTeam = getTeam(match.homeTeamId);
        const awayTeam = getTeam(match.awayTeamId);
        html += `
          <div style="display:flex; align-items:center; justify-content:space-between; padding:12px; border-bottom:1px solid var(--border-muted);">
            <div style="font-family:var(--font-numbers); font-size:0.85rem; color:var(--text-secondary); width:25%;">
              <strong>${match.date}</strong><br><span style="color:var(--text-muted);">${match.time}</span>
            </div>
            <div style="display:flex; align-items:center; justify-content:space-between; width:75%;">
              <div style="display:flex; align-items:center; width:42%; justify-content:flex-end; text-align:right;">
                <span style="font-family:var(--font-heading); font-size:0.95rem; font-weight:800; margin-right:10px; color:var(--white);">${homeTeam.name}</span>
                ${getTeamLogoHtml(homeTeam, "28px")}
              </div>
              <div style="font-family:var(--font-heading); font-size:0.85rem; font-weight:900; color:var(--border-primary); text-align:center; width:16%;">VS</div>
              <div style="display:flex; align-items:center; width:42%; justify-content:flex-start; text-align:left;">
                ${getTeamLogoHtml(awayTeam, "28px")}
                <span style="font-family:var(--font-heading); font-size:0.95rem; font-weight:800; margin-left:10px; color:var(--white);">${awayTeam.name}</span>
              </div>
            </div>
          </div>
        `;
      });
      html += '</div>';
      openModal('Jogos da Semana', html);
    });
  }

  // 2. Standings Ver Tabela Completa
  const btnStandings = document.getElementById('action-standings');
  if (btnStandings) {
    btnStandings.addEventListener('click', async (e) => {
      e.preventDefault();
      const list = await fetchData('standings', '/api/basketball/standings');
      
      let html = `
        <div style="max-height:60vh; overflow-y:auto; padding-right:8px;">
          <table class="standings-table" style="width:100%;">
            <thead>
              <tr>
                <th style="padding-bottom:10px; text-align:center;">Pos</th>
                <th style="padding-bottom:10px;">Time</th>
                <th style="padding-bottom:10px; text-align:center;">J</th>
                <th style="padding-bottom:10px; text-align:center;">V</th>
                <th style="padding-bottom:10px; text-align:center;">D</th>
                <th style="padding-bottom:10px; text-align:center;">PTS</th>
              </tr>
            </thead>
            <tbody>
      `;
      
      list.forEach(row => {
        const team = getTeam(row.teamId);
        let rankBadgeClass = 'pos-badge';
        if (row.position === 1) rankBadgeClass += ' pos-1';
        else if (row.position === 2) rankBadgeClass += ' pos-2';
        else if (row.position === 3) rankBadgeClass += ' pos-3';

        html += `
          <tr>
            <td style="padding:10px 0; text-align:center;"><span class="${rankBadgeClass}">${row.position}</span></td>
            <td style="padding:10px 0;">
              <div class="table-team-cell">
                ${getTeamLogoHtml(team, "24px")}
                <span class="table-team-name" style="margin-left:8px; font-size:0.9rem; font-weight:700; color:var(--white);">${team.name}</span>
              </div>
            </td>
            <td style="padding:10px 0; text-align:center; font-family:var(--font-numbers);">${row.games}</td>
            <td style="padding:10px 0; text-align:center; font-family:var(--font-numbers); color:var(--success); font-weight:700;">${row.wins}</td>
            <td style="padding:10px 0; text-align:center; font-family:var(--font-numbers); color:var(--danger);">${row.losses}</td>
            <td style="padding:10px 0; text-align:center; font-family:var(--font-numbers); font-weight:900; color:var(--border-primary);">${row.points}</td>
          </tr>
        `;
      });
      
      html += '</tbody></table></div>';
      openModal('Tabela de Classificação', html);
    });
  }

  // 3. Top Players Ver Ranking
  const btnTopPlayers = document.getElementById('action-top-players');
  if (btnTopPlayers) {
    btnTopPlayers.addEventListener('click', async (e) => {
      e.preventDefault();
      const list = await fetchData('topPlayers', '/api/basketball/players/top');
      
      let html = '<div style="display:flex; flex-direction:column; gap:12px; max-height:60vh; overflow-y:auto; padding-right:8px;">';
      list.forEach(player => {
        const team = getTeam(player.teamId);
        const initials = player.playerName.split(' ').map(n => n[0]).join('');
        const avatarHtml = player.avatar && player.avatar.startsWith('http')
          ? `<img src="${player.avatar}" alt="${player.playerName}" style="width:36px; height:36px; border-radius:50%; object-fit:cover; border:1px solid var(--border-secondary);">`
          : `<div style="width:36px; height:36px; border-radius:50%; background:var(--bg-tertiary); display:flex; align-items:center; justify-content:center; border:1px solid var(--border-secondary); font-family:var(--font-heading); font-size:0.85rem; font-weight:700; color:var(--text-secondary);">${initials}</div>`;

        html += `
          <div style="display:flex; align-items:center; justify-content:space-between; padding:10px; border-bottom:1px solid var(--border-muted);">
            <div style="display:flex; align-items:center; width:70%;">
              <span style="font-family:var(--font-heading); font-size:1rem; font-weight:900; color:var(--text-muted); width:28px; text-align:center; margin-right:8px;">${player.position}</span>
              ${avatarHtml}
              <div style="display:flex; flex-direction:column; margin-left:12px;">
                <strong style="color:var(--white); text-transform:uppercase; font-size:0.9rem;">${player.playerName}</strong>
                <span style="font-family:var(--font-heading); font-size:0.75rem; color:var(--text-muted); text-transform:uppercase;">${team.name}</span>
              </div>
            </div>
            <div style="text-align:right; width:30%;">
              <span style="font-family:var(--font-numbers); font-size:1.25rem; font-weight:900; color:var(--border-primary);">${player.mainValue}</span>
              <span style="display:block; font-family:var(--font-heading); font-size:0.65rem; color:var(--text-muted); text-transform:uppercase;">${player.metric}</span>
            </div>
          </div>
        `;
      });
      html += '</div>';
      openModal('Líderes Estatísticos', html);
    });
  }

  // 4. Top Scorers Ver Ranking
  const btnTopScorers = document.getElementById('action-top-scorers');
  if (btnTopScorers) {
    btnTopScorers.addEventListener('click', async (e) => {
      e.preventDefault();
      const list = await fetchData('topScorers', '/api/basketball/players/scorers');
      
      let html = '<div style="display:flex; flex-direction:column; gap:12px; max-height:60vh; overflow-y:auto; padding-right:8px;">';
      list.forEach(scorer => {
        const team = getTeam(scorer.teamId);
        const initials = scorer.playerName.split(' ').map(n => n[0]).join('');
        const avatarHtml = scorer.avatar && scorer.avatar.startsWith('http')
          ? `<img src="${scorer.avatar}" alt="${scorer.playerName}" style="width:36px; height:36px; border-radius:50%; object-fit:cover; border:1px solid var(--border-secondary);">`
          : `<div style="width:36px; height:36px; border-radius:50%; background:var(--bg-tertiary); display:flex; align-items:center; justify-content:center; border:1px solid var(--border-secondary); font-family:var(--font-heading); font-size:0.85rem; font-weight:700; color:var(--text-secondary);">${initials}</div>`;

        html += `
          <div style="display:flex; align-items:center; justify-content:space-between; padding:10px; border-bottom:1px solid var(--border-muted);">
            <div style="display:flex; align-items:center; width:70%;">
              <span style="font-family:var(--font-heading); font-size:1rem; font-weight:900; color:var(--text-muted); width:28px; text-align:center; margin-right:8px;">${scorer.position}</span>
              ${avatarHtml}
              <div style="display:flex; flex-direction:column; margin-left:12px;">
                <strong style="color:var(--white); text-transform:uppercase; font-size:0.9rem;">${scorer.playerName}</strong>
                <span style="font-family:var(--font-heading); font-size:0.75rem; color:var(--text-muted); text-transform:uppercase;">${team.name}</span>
              </div>
            </div>
            <div style="text-align:right; width:30%;">
              <span style="font-family:var(--font-numbers); font-size:1.25rem; font-weight:900; color:var(--border-primary);">${scorer.value}</span>
              <span style="display:block; font-family:var(--font-heading); font-size:0.65rem; color:var(--text-muted); text-transform:uppercase;">${scorer.unit || 'PTS'}</span>
            </div>
          </div>
        `;
      });
      html += '</div>';
      openModal('Classificação dos Artilheiros', html);
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
  await initializeTeamsCache();
  await Promise.all([
    renderNextGame(),
    renderWeeklyGames(),
    renderStandings(),
    renderWeeklyHighlight(),
    renderTopPlayers(),
    renderFeaturedNews(),
    renderLeagueStats(),
    renderTopScorers(),
    renderBottomShortcuts(),
    bindModalActions()
  ]);
}

window.addEventListener('DOMContentLoaded', init);
