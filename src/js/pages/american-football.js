/* ==========================================================================
   POWERSPORT - AMERICAN FOOTBALL PAGE LOGIC (american-football.js)
   ========================================================================== */

// 1. FALLBACK STATIC DATA (In case API is offline or page is loaded via file://)
const fallbackData = {
  teams: [
    {
      id: "red-hawks",
      name: "Red Hawks",
      shortName: "RHA",
      logo: "team-red-hawks.svg",
      primaryColor: "#D71920",
      secondaryColor: "#111111"
    },
    {
      id: "steelers",
      name: "Steelers",
      shortName: "STE",
      logo: "team-steelers.svg",
      primaryColor: "#B6B6B6",
      secondaryColor: "#111111"
    },
    {
      id: "bulls",
      name: "Bulls",
      shortName: "BUL",
      logo: "team-bulls.svg",
      primaryColor: "#C90000",
      secondaryColor: "#FFFFFF"
    },
    {
      id: "predators",
      name: "Predators",
      shortName: "PRE",
      logo: "team-predators.svg",
      primaryColor: "#FF1E1E",
      secondaryColor: "#111111"
    },
    {
      id: "wolves",
      name: "Wolves",
      shortName: "WOL",
      logo: "team-wolves.svg",
      primaryColor: "#7E7E7E",
      secondaryColor: "#111111"
    },
    {
      id: "iron-bears",
      name: "Iron Bears",
      shortName: "IBE",
      logo: "team-iron-bears.svg",
      primaryColor: "#009B4D",
      secondaryColor: "#111111"
    },
    {
      id: "falcons",
      name: "Falcons",
      shortName: "FAL",
      logo: "team-falcons.svg",
      primaryColor: "#B80000",
      secondaryColor: "#FFFFFF"
    },
    {
      id: "hurricanes",
      name: "Hurricanes",
      shortName: "HUR",
      logo: "team-hurricanes.svg",
      primaryColor: "#003B6F",
      secondaryColor: "#FFFFFF"
    }
  ],
  nextGame: {
    id: "next-game-001",
    date: "26 MAI",
    time: "20:00",
    stadium: "Hawk Stadium",
    homeTeamId: "red-hawks",
    awayTeamId: "iron-bears",
    status: "scheduled"
  },
  gameCalendar: [
    {
      id: "game-001",
      date: "24 MAI",
      time: "19:00",
      homeTeamId: "red-hawks",
      awayTeamId: "steelers",
      status: "scheduled"
    },
    {
      id: "game-002",
      date: "25 MAI",
      time: "16:00",
      homeTeamId: "bulls",
      awayTeamId: "predators",
      status: "scheduled"
    },
    {
      id: "game-003",
      date: "26 MAI",
      time: "20:00",
      homeTeamId: "wolves",
      awayTeamId: "iron-bears",
      status: "scheduled"
    },
    {
      id: "game-004",
      date: "27 MAI",
      time: "18:30",
      homeTeamId: "falcons",
      awayTeamId: "hurricanes",
      status: "scheduled"
    }
  ],
  standings: [
    {
      position: 1,
      conference: "Norte",
      teamId: "red-hawks",
      games: 8,
      wins: 7,
      losses: 1,
      percentage: "87.5",
      points: 14
    },
    {
      position: 2,
      conference: "Norte",
      teamId: "wolves",
      games: 8,
      wins: 6,
      losses: 2,
      percentage: "75.0",
      points: 12
    },
    {
      position: 3,
      conference: "Norte",
      teamId: "steelers",
      games: 8,
      wins: 5,
      losses: 3,
      percentage: "62.5",
      points: 10
    },
    {
      position: 4,
      conference: "Norte",
      teamId: "iron-bears",
      games: 8,
      wins: 4,
      losses: 4,
      percentage: "50.0",
      points: 8
    },
    {
      position: 5,
      conference: "Norte",
      teamId: "predators",
      games: 8,
      wins: 2,
      losses: 6,
      percentage: "25.0",
      points: 4
    },
    {
      position: 6,
      conference: "Norte",
      teamId: "hurricanes",
      games: 8,
      wins: 1,
      losses: 7,
      percentage: "12.5",
      points: 2
    }
  ],
  bestPlays: {
    id: "best-play-001",
    title: "Touchdown Épico!",
    description: "A jogada que levantou a torcida!",
    thumbnail: "FeedFutebolAmericano-3.png",
    videoUrl: "https://www.youtube.com/watch?v=wKk_7F4sF98",
    buttonLabel: "Assistir agora"
  },
  playerHighlights: [
    {
      position: 1,
      playerName: "T. Anderson",
      teamId: "red-hawks",
      value: "2.345",
      metric: "Jardas Passe",
      avatar: "player-t-anderson.png"
    },
    {
      position: 2,
      playerName: "J. Williams",
      teamId: "wolves",
      value: "1.242",
      metric: "Jardas Corrida",
      avatar: "player-j-williams.png"
    },
    {
      position: 3,
      playerName: "M. Brown",
      teamId: "steelers",
      value: "18",
      metric: "Touchdowns",
      avatar: "player-m-brown.png"
    }
  ],
  featuredNews: [
    {
      id: "news-001",
      title: "Wolves conquistam grande vitória na prorrogação",
      date: "23 MAI 2024",
      image: "FeedFutebolAmericano-2.png",
      url: "#noticia-001"
    },
    {
      id: "news-002",
      title: "Análise tática: as defesas que dominaram a rodada",
      date: "22 MAI 2024",
      image: "FeedFutebolAmericano-3.png",
      url: "#noticia-002"
    },
    {
      id: "news-003",
      title: "Novo recorde de jardas aéreas estabelecido",
      date: "21 MAI 2024",
      image: "FeedFutebolAmericano-1.png",
      url: "#noticia-003"
    }
  ],
  leagueStats: [
    {
      id: "points-per-game",
      label: "Pontos por jogo",
      value: "28.4",
      unit: "",
      description: "Média",
      icon: "scoreboard"
    },
    {
      id: "yards-per-game",
      label: "Jardas por jogo",
      value: "412.7",
      unit: "",
      description: "Média",
      icon: "field-yard"
    },
    {
      id: "third-down-conversion",
      label: "% Conversão 3ª descida",
      value: "46.8",
      unit: "%",
      description: "Média",
      icon: "target"
    },
    {
      id: "turnovers-per-game",
      label: "Turnovers por jogo",
      value: "1.3",
      unit: "",
      description: "Média",
      icon: "turnover"
    }
  ],
  topScorers: [
    {
      position: 1,
      playerName: "T. Anderson",
      teamId: "red-hawks",
      value: "2.345",
      unit: "JDS",
      avatar: "player-t-anderson.png"
    },
    {
      position: 2,
      playerName: "J. Carter",
      teamId: "wolves",
      value: "2.102",
      unit: "JDS",
      avatar: "player-j-carter.png"
    },
    {
      position: 3,
      playerName: "M. Thompson",
      teamId: "steelers",
      value: "1.987",
      unit: "JDS",
      avatar: "player-m-thompson.png"
    },
    {
      position: 4,
      playerName: "D. Wilson",
      teamId: "iron-bears",
      value: "1.765",
      unit: "JDS",
      avatar: "player-d-wilson.png"
    },
    {
      position: 5,
      playerName: "K. Miller",
      teamId: "bulls",
      value: "1.654",
      unit: "JDS",
      avatar: "player-k-miller.png"
    }
  ],
  bottomShortcuts: [
    {
      id: "live-transmission",
      icon: "broadcast",
      title: "Transmissão ao vivo",
      description: "Acompanhe todos os jogos em tempo real.",
      href: "#ao-vivo"
    },
    {
      id: "complete-stats",
      icon: "bar-chart",
      title: "Estatísticas completas",
      description: "Dados detalhados de times e jogadores.",
      href: "#estatisticas"
    },
    {
      id: "exclusive-news",
      icon: "newspaper",
      title: "Notícias exclusivas",
      description: "Cobertura completa do mundo do futebol americano.",
      href: "#noticias"
    },
    {
      id: "best-moments",
      icon: "play-circle",
      title: "Vídeos e melhores momentos",
      description: "Os melhores lances e touchdowns da temporada.",
      href: "#videos"
    },
    {
      id: "personal-alerts",
      icon: "bell",
      title: "Alertas personalizados",
      description: "Receba notificações dos seus times favoritos.",
      href: "#notificacoes"
    }
  ]
};

// SVG Icons helper to inject custom inline SVGs based on icon name
const SVG_ICONS = {
  'scoreboard': `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line><line x1="15" y1="21" x2="15" y2="9"></line></svg>`,
  'field-yard': `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2" ry="2"></rect><line x1="6" y1="5" x2="6" y2="19"></line><line x1="12" y1="5" x2="12" y2="19"></line><line x1="18" y1="5" x2="18" y2="19"></line></svg>`,
  'target': `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>`,
  'turnover': `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"></path></svg>`,
  'broadcast': `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path></svg>`,
  'bar-chart': `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
  'newspaper': `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><path d="M16 8h2m-2 4h2M6 8h6v8H6z"></path></svg>`,
  'star': `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
  'play-circle': `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>`,
  'bell': `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>`,
  'search': `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.5" fill="none"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
  'trophy': `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34M12 2a6 6 0 0 1 6 6v5a6 6 0 0 1-6 6 6 6 0 0 1-6-6V8a6 6 0 0 1 6-6z"></path></svg>`
};

// 2. API REQUEST UTILITY WITH FALLBACK
async function fetchData(endpointKey, serverPath) {
  const keyMap = {
    'news': 'featuredNews',
    'teams': 'teams',
    'nextGame': 'nextGame',
    'gameCalendar': 'gameCalendar',
    'standings': 'standings',
    'bestPlays': 'bestPlays',
    'playerHighlights': 'playerHighlights',
    'leagueStats': 'leagueStats',
    'topScorers': 'topScorers',
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
      const response = await fetch('../../../src/data/american-football/american-football-page.json');
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
  const list = await fetchData('teams', '/api/teams?league=american-football');
  if (list && list.length > 0) {
    teamsCache = list;
  }
}

function getTeam(teamId) {
  return teamsCache.find(t => t.id === teamId || t.id.includes(teamId) || teamId.includes(t.id)) || {
    id: teamId,
    name: teamId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    shortName: teamId.substring(0, 3).toUpperCase(),
    primaryColor: "#FF1E1E",
    secondaryColor: "#ffffff",
    logo: ""
  };
}

// Helper to render team logo
function getTeamLogoHtml(team, size = "28px") {
  if (team.logo && team.logo.startsWith('http')) {
    return `<img src="${team.logo}" alt="${team.name} Logo" style="width:${size}; height:${size}; object-fit:contain; filter: drop-shadow(0 0 2px rgba(255,255,255,0.25));">`;
  }
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

  const match = await fetchData('nextGame', '/api/american-football/games/next');
  if (!match || !match.homeTeamId) {
    container.innerHTML = '<div class="loading-placeholder">Sem partidas agendadas</div>';
    return;
  }

  const homeTeam = getTeam(match.homeTeamId);
  const awayTeam = getTeam(match.awayTeamId);

  container.innerHTML = `
    <div class="versus-block-container" data-match-id="${match.id}">
      <span class="versus-stadium">
        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" class="stadium-icon" style="display:inline;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        ${match.stadium || 'Stadium'}
      </span>
      
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
    openModal('Detalhes da Partida', `
      <div style="text-align:center; padding:10px 0;">
        <h4 class="modal-subtitle">${match.stadium || 'Stadium'}</h4>
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
          <p style="margin-bottom:8px;"><strong style="color:var(--border-primary);">HORÁRIO:</strong> ${match.date} às ${match.time}</p>
          <p style="margin-bottom:8px;"><strong style="color:var(--border-primary);">LOCAL:</strong> ${match.stadium || 'Stadium'}</p>
          <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.4; margin-top:12px;">Transmissão ao vivo com comentários, estatísticas em tempo real e visualizações em multicâmeras no portal oficial PowerSport.</p>
        </div>
      </div>
    `);
  });
}

// Render Game Calendar Card List
async function renderGameCalendar() {
  const container = document.getElementById('game-calendar-list');
  if (!container) return;

  const list = await fetchData('gameCalendar', '/api/american-football/games/calendar');
  const items = list.slice(0, 4);

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

  const list = await fetchData('standings', '/api/american-football/standings');
  const items = list.slice(0, 6);

  if (!items || items.length === 0) {
    tbody.innerHTML = '<tr><td colspan="7" class="loading-placeholder">Sem classificação</td></tr>';
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
      <td class="col-pct">${parseFloat(row.percentage).toFixed(1)}%</td>
      <td class="col-pts">${row.points}</td>
    `;
    tbody.appendChild(tr);
  });
}

// Render Best Plays Highlight Video Widget
async function renderBestPlays() {
  const container = document.getElementById('best-plays-container');
  if (!container) return;

  const data = await fetchData('bestPlays', '/api/american-football/highlights/best-plays');
  if (!data) {
    container.innerHTML = '<div class="loading-placeholder">Sem destaques de vídeos</div>';
    return;
  }

  const imageSrc = `../../../assets/american-football/feed/${data.thumbnail || 'FeedFutebolAmericano-3.png'}`;
  const videoUrl = data.videoUrl || 'https://www.youtube.com/watch?v=wKk_7F4sF98';

  container.innerHTML = `
    <div class="best-plays-wrap" data-highlight-id="${data.id}">
      <div class="best-plays-preview">
        <img src="${imageSrc}" alt="${data.title}" class="best-plays-img" loading="lazy">
        <div class="best-plays-overlay">
          <a href="${videoUrl}" target="_blank" class="play-circle-btn" aria-label="Assistir vídeo de melhores jogadas">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><polygon points="8,5 19,12 8,19"></polygon></svg>
          </a>
        </div>
      </div>
      <h4 class="best-plays-title">${data.title}</h4>
      <p class="best-plays-desc">${data.description}</p>
      <a href="${videoUrl}" target="_blank" class="btn-primary best-plays-btn" style="text-decoration:none;">
        ${data.buttonLabel || 'Assistir agora'}
      </a>
    </div>
  `;
}

// Render Player Highlights (Podium)
async function renderPlayerHighlights() {
  const container = document.getElementById('player-highlights-container');
  if (!container) return;

  const list = await fetchData('playerHighlights', '/api/american-football/players/highlights');
  const items = list.slice(0, 3);

  if (!items || items.length === 0) {
    container.innerHTML = '<div class="loading-placeholder">Sem destaques de atletas</div>';
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
        <span class="podium-val">${player.value}</span>
        <span class="podium-metric">${player.metric}</span>
      </div>
    `;
    podium.appendChild(playerEl);
  });
}

// Render Featured News Card Grid
async function renderFeaturedNews() {
  const container = document.getElementById('featured-news-grid');
  if (!container) return;

  const news = await fetchData('news', '/api/american-football/news');
  const items = news.slice(0, 3);

  if (!items || items.length === 0) {
    container.innerHTML = '<div class="loading-placeholder">Sem notícias</div>';
    return;
  }

  container.innerHTML = '';
  items.forEach(item => {
    const imageSrc = `../../../assets/american-football/feed/${item.image || 'FeedFutebolAmericano-2.png'}`;
    const newsEl = document.createElement('a');
    newsEl.href = item.url || '#';
    newsEl.className = 'news-card-item';
    newsEl.innerHTML = `
      <div class="news-img-wrap">
        <img src="${imageSrc}" alt="${item.title}" class="news-img" loading="lazy">
        <span class="news-category-badge">Liga</span>
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
            <span style="display:block; font-size:0.8rem; color:var(--text-muted); margin-bottom:16px;">DATA: ${item.date}</span>
            <img src="${imageSrc}" alt="${item.title}" style="width:100%; height:220px; object-fit:cover; border-radius:8px; border:1px solid var(--border-muted); margin-bottom:16px;">
            <p style="margin-bottom:12px; line-height:1.5;">Esta é uma reportagem completa do portal PowerSport trazendo as principais atualizações e análises do Futebol Americano.</p>
            <p style="margin-bottom:12px; line-height:1.5;">As equipes estão intensificando os treinamentos para as próximas decisões da conferência. Fique por dentro de todos os detalhes táticos e coletivos aqui.</p>
          </div>
        `);
      }
    });
    container.appendChild(newsEl);
  });
}

// Render League Average Stats
async function renderLeagueStats() {
  const container = document.getElementById('league-stats-grid');
  if (!container) return;

  const stats = await fetchData('leagueStats', '/api/american-football/league/stats');
  const items = stats.slice(0, 4);

  if (!items || items.length === 0) {
    container.innerHTML = '<div class="loading-placeholder">Sem estatísticas</div>';
    return;
  }

  container.innerHTML = '<div class="stats-grid-wrap"></div>';
  const wrap = container.querySelector('.stats-grid-wrap');

  items.forEach(stat => {
    const iconSvg = SVG_ICONS[stat.icon] || SVG_ICONS.scoreboard;
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

// Render Top Scorers list
async function renderTopScorers() {
  const container = document.getElementById('top-scorers-list');
  if (!container) return;

  const list = await fetchData('topScorers', '/api/american-football/players/scorers');
  const items = list.slice(0, 5);

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
        <span class="scorer-label">${scorer.unit || 'JDS'}</span>
      </div>
    `;
    wrap.appendChild(scorerEl);
  });
}

// Render Bottom Shortcuts Feature Strip
async function renderBottomShortcuts() {
  const container = document.getElementById('bottom-shortcuts-row');
  if (!container) return;

  const list = await fetchData('shortcuts', '/api/american-football/shortcuts');
  const items = list.slice(0, 5);

  if (!items || items.length === 0) return;

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
      openModal(shortcut.title, `
        <div style="padding:10px 0; text-align:center;">
          <div style="color:var(--border-primary); margin-bottom:16px; display:inline-block;">
            ${iconSvg}
          </div>
          <h4 class="modal-subtitle" style="margin-top:8px;">${shortcut.title}</h4>
          <p style="margin:16px 0; line-height:1.5; color:var(--text-secondary);">${shortcut.description}</p>
          <div style="border-top: 1px solid var(--border-muted); padding-top:16px; text-align:left;">
            <p style="font-size:0.85rem; color:var(--text-muted); line-height:1.4;">
              Recurso rápido do portal PowerSport para o Futebol Americano. Atualizações de elencos, drafts e chaves de playoffs da conferência são integrados após cada rodada.
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
  // 1. Calendar Ver Todos
  const btnCalendar = document.getElementById('action-game-calendar');
  if (btnCalendar) {
    btnCalendar.addEventListener('click', async (e) => {
      e.preventDefault();
      const list = await fetchData('gameCalendar', '/api/american-football/games/calendar');
      
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
      openModal('Calendário de Jogos', html);
    });
  }

  // 2. Standings Ver Tabela Completa
  const btnStandings = document.getElementById('action-standings');
  if (btnStandings) {
    btnStandings.addEventListener('click', async (e) => {
      e.preventDefault();
      const list = await fetchData('standings', '/api/american-football/standings');
      
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
                <th style="padding-bottom:10px; text-align:center;">%</th>
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
            <td style="padding:10px 0; text-align:center; font-family:var(--font-numbers);">${parseFloat(row.percentage).toFixed(1)}%</td>
            <td style="padding:10px 0; text-align:center; font-family:var(--font-numbers); font-weight:900; color:var(--border-primary);">${row.points}</td>
          </tr>
        `;
      });
      
      html += '</tbody></table></div>';
      openModal('Tabela de Classificação', html);
    });
  }

  // 3. Player Highlights Ver Ranking
  const btnHighlights = document.getElementById('action-player-highlights');
  if (btnHighlights) {
    btnHighlights.addEventListener('click', async (e) => {
      e.preventDefault();
      const list = await fetchData('playerHighlights', '/api/american-football/players/highlights');
      
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
              <span style="font-family:var(--font-heading); font-size:1rem; font-weight:900; color:var(--text-secondary); width:28px; text-align:center; margin-right:8px;">${player.position}</span>
              ${avatarHtml}
              <div style="display:flex; flex-direction:column; margin-left:12px;">
                <strong style="color:var(--white); text-transform:uppercase; font-size:0.9rem;">${player.playerName}</strong>
                <span style="font-family:var(--font-heading); font-size:0.75rem; color:var(--text-muted); text-transform:uppercase;">${team.name}</span>
              </div>
            </div>
            <div style="text-align:right; width:30%;">
              <span style="font-family:var(--font-numbers); font-size:1.25rem; font-weight:900; color:var(--accent-primary);">${player.value}</span>
              <span style="display:block; font-family:var(--font-heading); font-size:0.65rem; color:var(--text-secondary); text-transform:uppercase;">${player.metric}</span>
            </div>
          </div>
        `;
      });
      html += '</div>';
      openModal('Líderes de Estatísticas', html);
    });
  }

  // 4. News Ver Todas
  const btnNews = document.getElementById('action-featured-news');
  if (btnNews) {
    btnNews.addEventListener('click', async (e) => {
      e.preventDefault();
      const news = await fetchData('news', '/api/american-football/news');
      
      let html = '<div style="display:flex; flex-direction:column; gap:12px; max-height:60vh; overflow-y:auto; padding-right:8px;">';
      news.forEach(item => {
        const imageSrc = `../../../assets/american-football/feed/${item.image || 'FeedFutebolAmericano-2.png'}`;
        html += `
          <a href="${item.url || '#'}" style="display:flex; gap:12px; padding:10px; border-bottom:1px solid var(--border-muted); text-decoration:none;" class="news-list-item">
            <img src="${imageSrc}" style="width:64px; height:64px; object-fit:cover; border-radius:6px; border:1px solid var(--border-muted); flex-shrink:0;">
            <div>
              <span style="font-family:var(--font-numbers); font-size:0.72rem; color:var(--accent-primary); font-weight:700; display:block;">${item.date}</span>
              <strong style="color:var(--white); font-size:0.85rem; line-height:1.25; display:block;">${item.title}</strong>
            </div>
          </a>
        `;
      });
      html += '</div>';
      openModal('Notícias Recentes', html);
    });
  }

  // 5. Stats Ver Todas
  const btnStats = document.getElementById('action-league-stats');
  if (btnStats) {
    btnStats.addEventListener('click', async (e) => {
      e.preventDefault();
      const stats = await fetchData('leagueStats', '/api/american-football/league/stats');
      
      let html = '<div style="display:flex; flex-direction:column; gap:16px; max-height:60vh; overflow-y:auto; padding-right:8px;">';
      stats.forEach(stat => {
        const iconSvg = SVG_ICONS[stat.icon] || SVG_ICONS.scoreboard;
        html += `
          <div style="display:flex; align-items:center; gap:16px; padding:12px; border: 1px solid var(--border-muted); border-radius:8px; background:rgba(14, 1, 1, 0.45);">
            <div style="color:var(--accent-primary); filter:drop-shadow(var(--glow-text));">
              ${iconSvg}
            </div>
            <div>
              <span style="font-family:var(--font-heading); font-size:0.75rem; font-weight:700; text-transform:uppercase; color:var(--text-secondary);">${stat.label}</span>
              <div style="display:flex; align-items:baseline;">
                <span style="font-family:var(--font-numbers); font-size:1.6rem; font-weight:900; color:var(--white);">${stat.value}</span>
                ${stat.unit ? `<span style="font-family:var(--font-heading); font-size:0.85rem; font-weight:800; color:var(--accent-primary); margin-left:2px;">${stat.unit}</span>` : ''}
              </div>
              <span style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase;">${stat.description} da Liga</span>
            </div>
          </div>
        `;
      });
      html += '</div>';
      openModal('Estatísticas Gerais', html);
    });
  }

  // 6. Scorers Ver Ranking
  const btnScorers = document.getElementById('action-top-scorers');
  if (btnScorers) {
    btnScorers.addEventListener('click', async (e) => {
      e.preventDefault();
      const list = await fetchData('topScorers', '/api/american-football/players/scorers');
      
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
              <span style="font-family:var(--font-heading); font-size:1rem; font-weight:900; color:var(--text-secondary); width:28px; text-align:center; margin-right:8px;">${scorer.position}</span>
              ${avatarHtml}
              <div style="display:flex; flex-direction:column; margin-left:12px;">
                <strong style="color:var(--white); text-transform:uppercase; font-size:0.9rem;">${scorer.playerName}</strong>
                <span style="font-family:var(--font-heading); font-size:0.75rem; color:var(--text-muted); text-transform:uppercase;">${team.name}</span>
              </div>
            </div>
            <div style="text-align:right; width:30%;">
              <span style="font-family:var(--font-numbers); font-size:1.25rem; font-weight:900; color:var(--accent-primary);">${scorer.value}</span>
              <span style="display:block; font-family:var(--font-heading); font-size:0.65rem; color:var(--text-secondary); text-transform:uppercase;">${scorer.unit || 'JDS'}</span>
            </div>
          </div>
        `;
      });
      html += '</div>';
      openModal('Artilheiros - Ranking Geral', html);
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

// Mobile Hamburger menu toggle
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
    renderGameCalendar(),
    renderStandings(),
    renderBestPlays(),
    renderPlayerHighlights(),
    renderFeaturedNews(),
    renderLeagueStats(),
    renderTopScorers(),
    renderBottomShortcuts(),
    bindModalActions()
  ]);
}

window.addEventListener('DOMContentLoaded', init);
