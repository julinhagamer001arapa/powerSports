/* ==========================================================================
   POWERSPORT - VOLLEYBALL PAGE LOGIC (volleyball.js)
   ========================================================================== */

// 1. FALLBACK STATIC DATA (In case API is offline or page is loaded via file://)
const fallbackData = {
  teams: [
    {
      id: "praia-clube",
      name: "Praia Clube",
      shortName: "PRA",
      logo: "team-praia-clube.svg",
      primaryColor: "#FFD400",
      secondaryColor: "#061225"
    },
    {
      id: "minas",
      name: "Minas",
      shortName: "MIN",
      logo: "team-minas.svg",
      primaryColor: "#007BFF",
      secondaryColor: "#FFFFFF"
    },
    {
      id: "osasco",
      name: "Osasco",
      shortName: "OSA",
      logo: "team-osasco.svg",
      primaryColor: "#E7272D",
      secondaryColor: "#FFFFFF"
    },
    {
      id: "sesc-rj",
      name: "SESC RJ",
      shortName: "SES",
      logo: "team-sesc-rj.svg",
      primaryColor: "#B40018",
      secondaryColor: "#FFFFFF"
    },
    {
      id: "fluminense",
      name: "Fluminense",
      shortName: "FLU",
      logo: "team-fluminense.svg",
      primaryColor: "#00843D",
      secondaryColor: "#8A1538"
    },
    {
      id: "barueri",
      name: "Barueri",
      shortName: "BAR",
      logo: "team-barueri.svg",
      primaryColor: "#652D90",
      secondaryColor: "#00AEEF"
    },
    {
      id: "pinheiros",
      name: "Pinheiros",
      shortName: "PIN",
      logo: "team-pinheiros.svg",
      primaryColor: "#005BAA",
      secondaryColor: "#FFFFFF"
    },
    {
      id: "sao-caetano",
      name: "São Caetano",
      shortName: "SCA",
      logo: "team-sao-caetano.svg",
      primaryColor: "#FFD400",
      secondaryColor: "#005BAA"
    }
  ],
  upcomingGames: [
    {
      id: "game-001",
      date: "24 MAI",
      time: "18:00",
      homeTeamId: "praia-clube",
      awayTeamId: "minas",
      arena: "Ginásio UTC",
      status: "scheduled"
    },
    {
      id: "game-002",
      date: "25 MAI",
      time: "19:00",
      homeTeamId: "sesc-rj",
      awayTeamId: "osasco",
      arena: "Ginásio Tijuca",
      status: "scheduled"
    },
    {
      id: "game-003",
      date: "26 MAI",
      time: "20:00",
      homeTeamId: "fluminense",
      awayTeamId: "pinheiros",
      arena: "Maracanãzinho",
      status: "scheduled"
    },
    {
      id: "game-004",
      date: "27 MAI",
      time: "19:30",
      homeTeamId: "barueri",
      awayTeamId: "sao-caetano",
      arena: "Ginásio J. Pedroso",
      status: "scheduled"
    }
  ],
  standings: [
    {
      position: 1,
      teamId: "praia-clube",
      games: 22,
      wins: 18,
      losses: 4,
      points: 54
    },
    {
      position: 2,
      teamId: "minas",
      games: 22,
      wins: 16,
      losses: 6,
      points: 48
    },
    {
      position: 3,
      teamId: "osasco",
      games: 22,
      wins: 14,
      losses: 8,
      points: 42
    },
    {
      position: 4,
      teamId: "sesc-rj",
      games: 22,
      wins: 12,
      losses: 10,
      points: 36
    },
    {
      position: 5,
      teamId: "fluminense",
      games: 22,
      wins: 11,
      losses: 11,
      points: 33
    },
    {
      position: 6,
      teamId: "barueri",
      games: 22,
      wins: 9,
      losses: 13,
      points: 28
    },
    {
      position: 7,
      teamId: "pinheiros",
      games: 22,
      wins: 7,
      losses: 15,
      points: 21
    },
    {
      position: 8,
      teamId: "sao-caetano",
      games: 22,
      wins: 5,
      losses: 17,
      points: 15
    }
  ],
  leagueStats: [
    {
      id: "points-per-game",
      label: "Pontos por jogo",
      value: "78.4",
      unit: "",
      description: "Média",
      icon: "volleyball-ball"
    },
    {
      id: "attacks-per-game",
      label: "Ataques por jogo",
      value: "62.1",
      unit: "",
      description: "Média",
      icon: "target-attack"
    },
    {
      id: "blocks-per-game",
      label: "Bloqueios por jogo",
      value: "12.3",
      unit: "",
      description: "Média",
      icon: "block"
    },
    {
      id: "aces-per-game",
      label: "Aces por jogo",
      value: "6.7",
      unit: "",
      description: "Média",
      icon: "serve"
    }
  ],
  topPlayers: [
    {
      position: 1,
      playerName: "Gabi Guimarães",
      teamId: "praia-clube",
      points: 324,
      unit: "Pontos",
      avatar: "https://api.sofascore.app/api/v1/player/853380/image"
    },
    {
      position: 2,
      playerName: "Kisy Nascimento",
      teamId: "minas",
      points: 289,
      unit: "Pontos",
      avatar: "https://api.sofascore.app/api/v1/player/992226/image"
    },
    {
      position: 3,
      playerName: "Tandara Caixeta",
      teamId: "osasco",
      points: 276,
      unit: "Pontos",
      avatar: "https://api.sofascore.app/api/v1/player/853412/image"
    }
  ],
  roundHighlight: {
    id: "highlight-001",
    title: "Ataque Decisivo!",
    description: "Ponto que garantiu a vitória nos sets finais.",
    thumbnail: "FeedVoleiSaque.png",
    videoUrl: "https://www.youtube.com/watch?v=k3C6bVswU4A",
    buttonLabel: "Assistir agora"
  },
  bestMoments: [
    {
      id: "moment-001",
      title: "Bloqueio Incrível!",
      description: "Defesa espetacular na última rodada.",
      thumbnail: "FeedVoleiBloqueio.png",
      videoUrl: "https://www.youtube.com/watch?v=k3C6bVswU4A"
    },
    {
      id: "moment-002",
      title: "Rally Histórico!",
      description: "Troca de bola que levantou a torcida.",
      thumbnail: "FeedVoleiRally.png",
      videoUrl: "https://www.youtube.com/watch?v=k3C6bVswU4A"
    },
    {
      id: "moment-003",
      title: "União que faz a diferença",
      description: "O trabalho em equipe que garante vitórias.",
      thumbnail: "FeedVoleiEquipe.png",
      videoUrl: "https://www.youtube.com/watch?v=k3C6bVswU4A"
    },
    {
      id: "moment-004",
      title: "Saque Quebra-Recepção!",
      description: "Ponto direto para mudar o jogo.",
      thumbnail: "FeedVoleiSaque.png",
      videoUrl: "https://www.youtube.com/watch?v=k3C6bVswU4A"
    }
  ],
  featuredNews: [
    {
      id: "news-001",
      title: "Praia Clube mantém liderança com grande vitória sobre Minas",
      date: "23 MAI 2024",
      image: "FeedVoleiNoticias.png",
      url: "#noticia-001"
    },
    {
      id: "news-002",
      title: "Osasco supera SESC RJ em jogo equilibrado",
      date: "22 MAI 2024",
      image: "FeedVoleiNoticias.png",
      url: "#noticia-002"
    },
    {
      id: "news-003",
      title: "Kisy é eleita a jogadora da semana",
      date: "21 MAI 2024",
      image: "FeedVoleiNoticias.png",
      url: "#noticia-003"
    }
  ],
  leagueCalendar: [
    {
      id: "calendar-001",
      date: "24 MAI",
      time: "18:00",
      homeTeamId: "praia-clube",
      awayTeamId: "minas",
      arena: "Ginásio UTC"
    },
    {
      id: "calendar-002",
      date: "25 MAI",
      time: "19:00",
      homeTeamId: "sesc-rj",
      awayTeamId: "osasco",
      arena: "Ginásio Tijuca"
    },
    {
      id: "calendar-003",
      date: "26 MAI",
      time: "20:00",
      homeTeamId: "fluminense",
      awayTeamId: "pinheiros",
      arena: "Maracanãzinho"
    },
    {
      id: "calendar-004",
      date: "27 MAI",
      time: "19:30",
      homeTeamId: "barueri",
      awayTeamId: "sao-caetano",
      arena: "Ginásio J. Pedroso"
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
      description: "Números e análises detalhadas da temporada.",
      href: "#estatisticas"
    },
    {
      id: "exclusive-content",
      icon: "star",
      title: "Conteúdo exclusivo",
      description: "Entrevistas, bastidores e muito mais para você.",
      href: "#conteudo-exclusivo"
    },
    {
      id: "notifications",
      icon: "calendar-alert",
      title: "Não perca nada!",
      description: "Ative as notificações e receba tudo em primeira mão.",
      href: "#notificacoes"
    }
  ]
};

// SVG Icons helper to inject custom inline SVGs based on icon name
const SVG_ICONS = {
  'volleyball-ball': `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10m0-20A15.3 15.3 0 0 0 8 12a15.3 15.3 0 0 0 4 10M2 12h20"></path></svg>`,
  'target-attack': `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M2 12h20M12 2a10 10 0 0 1 10 10m-20 0a10 10 0 0 1 10-10m0 20a10 10 0 0 1-10-10m20 0a10 10 0 0 1-10 10"></path></svg>`,
  'block': `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="10" rx="2"></rect><path d="M12 2v9M8 5v6M16 5v6"></path></svg>`,
  'serve': `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 8l8 8m-8 0l8-8"></path></svg>`,
  'broadcast': `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path></svg>`,
  'bar-chart': `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
  'star': `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
  'calendar-alert': `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line><line x1="12" y1="14" x2="12" y2="16"></line><line x1="12" y1="19" x2="12.01" y2="19"></line></svg>`,
  'search': `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.5" fill="none"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
  'bell': `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.5" fill="none"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>`,
  'user': `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.5" fill="none"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
  'play-circle': `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>`,
  'trophy': `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34M12 2a6 6 0 0 1 6 6v5a6 6 0 0 1-6 6 6 6 0 0 1-6-6V8a6 6 0 0 1 6-6z"></path></svg>`
};

// 2. API REQUEST UTILITY WITH FALLBACK
async function fetchData(endpointKey, serverPath) {
  const keyMap = {
    'news': 'featuredNews',
    'teams': 'teams',
    'upcomingGames': 'upcomingGames',
    'standings': 'standings',
    'leagueStats': 'leagueStats',
    'topPlayers': 'topPlayers',
    'roundHighlight': 'roundHighlight',
    'bestMoments': 'bestMoments',
    'calendar': 'leagueCalendar',
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
      const response = await fetch('../../../src/data/volleyball/volleyball-page.json');
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
  const list = await fetchData('teams', '/api/teams?league=volleyball');
  if (list && list.length > 0) {
    teamsCache = list;
  }
}

function getTeam(teamId) {
  return teamsCache.find(t => t.id === teamId || t.id.includes(teamId) || teamId.includes(t.id)) || {
    id: teamId,
    name: teamId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    shortName: teamId.substring(0, 3).toUpperCase(),
    primaryColor: "#008CFF",
    secondaryColor: "#ffffff",
    logo: ""
  };
}

// Helper to render team logo or stylized dot/shield
function getTeamLogoHtml(team, size = "28px") {
  if (team.logo && team.logo.startsWith('http')) {
    return `<img src="${team.logo}" alt="${team.name} Logo" style="width:${size}; height:${size}; object-fit:contain; filter: drop-shadow(0 0 2px rgba(255,255,255,0.25));">`;
  }
  
  // Custom styled visual representation
  return `
    <div style="width:${size}; height:${size}; border-radius:50%; background:${team.primaryColor}; display:flex; align-items:center; justify-content:center; border: 1px solid rgba(255,255,255,0.25); box-shadow: 0 0 8px ${team.primaryColor};">
      <span style="font-family:var(--font-heading); font-size:calc(${size} * 0.45); font-weight:900; color:${team.secondaryColor || '#fff'};">${team.shortName.substring(0,2)}</span>
    </div>
  `;
}

// 4. RENDERING MODULES

// Render Destaque da Rodada Widget (Hero Right)
async function renderRoundHighlight() {
  const container = document.getElementById('round-highlight-container');
  if (!container) return;

  const data = await fetchData('roundHighlight', '/api/volleyball/highlights/round');
  if (!data) {
    container.innerHTML = '<div class="loading-placeholder">Sem destaque agendado</div>';
    return;
  }

  const imageSrc = `../../../assets/volleyball/feed/${data.thumbnail || 'FeedVoleiSaque.png'}`;
  const videoUrl = data.videoUrl || 'https://www.youtube.com/watch?v=k3C6bVswU4A';

  container.innerHTML = `
    <div class="round-highlight-wrap" data-highlight-id="${data.id}">
      <div class="round-highlight-preview">
        <img src="${imageSrc}" alt="${data.title}" class="round-highlight-img" loading="lazy">
        <div class="round-highlight-overlay">
          <a href="${videoUrl}" target="_blank" class="play-circle-btn" aria-label="Assistir destaque da rodada" style="width:48px; height:48px;">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><polygon points="8,5 19,12 8,19"></polygon></svg>
          </a>
        </div>
      </div>
      <h4 class="round-highlight-title">${data.title}</h4>
      <p class="round-highlight-desc">${data.description}</p>
      <a href="${videoUrl}" target="_blank" class="btn-primary round-highlight-btn" style="text-decoration:none;">
        ${data.buttonLabel || 'Assistir agora'}
      </a>
    </div>
  `;
}

// Render Upcoming Games Card
async function renderUpcomingGames() {
  const container = document.getElementById('upcoming-games-list');
  if (!container) return;

  const list = await fetchData('upcomingGames', '/api/volleyball/games/upcoming');
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

  const list = await fetchData('standings', '/api/volleyball/standings');
  const items = list.slice(0, 8);

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

// Render League Stats Card
async function renderLeagueStats() {
  const container = document.getElementById('league-stats-grid');
  if (!container) return;

  const stats = await fetchData('leagueStats', '/api/volleyball/league/stats');
  const items = stats.slice(0, 4);

  if (!items || items.length === 0) {
    container.innerHTML = '<div class="loading-placeholder">Sem estatísticas</div>';
    return;
  }

  container.innerHTML = '<div class="stats-grid-wrap"></div>';
  const wrap = container.querySelector('.stats-grid-wrap');

  items.forEach(stat => {
    const iconSvg = SVG_ICONS[stat.icon] || SVG_ICONS['volleyball-ball'];
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

// Render Top Players (Podium)
async function renderTopPlayers() {
  const container = document.getElementById('top-players-container');
  if (!container) return;

  const list = await fetchData('topPlayers', '/api/volleyball/players/top');
  const items = list.slice(0, 3);

  if (!items || items.length === 0) {
    container.innerHTML = '<div class="loading-placeholder">Sem jogadoras cadastradas</div>';
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
        <span class="podium-val">${player.points}</span>
        <span class="podium-metric">${player.unit || 'Pontos'}</span>
      </div>
    `;
    podium.appendChild(playerEl);
  });
}

// Render Best Moments Videos Grid
async function renderBestMoments() {
  const container = document.getElementById('best-moments-grid');
  if (!container) return;

  const list = await fetchData('bestMoments', '/api/volleyball/highlights/best-moments');
  const items = list.slice(0, 4);

  if (!items || items.length === 0) {
    container.innerHTML = '<div class="loading-placeholder">Sem vídeos</div>';
    return;
  }

  container.innerHTML = '';
  items.forEach(video => {
    const imageSrc = `../../../assets/volleyball/feed/${video.thumbnail || 'FeedVoleiSaque.png'}`;
    const videoUrl = video.videoUrl || 'https://www.youtube.com/watch?v=k3C6bVswU4A';
    
    const cardEl = document.createElement('div');
    cardEl.className = 'video-thumb-card';
    cardEl.innerHTML = `
      <div class="video-preview-wrapper">
        <img src="${imageSrc}" alt="${video.title}" class="video-thumb-image" loading="lazy">
        <div class="video-darkness">
          <a href="${videoUrl}" target="_blank" class="play-circle-btn" aria-label="Assistir ${video.title}">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><polygon points="8,5 19,12 8,19"></polygon></svg>
          </a>
        </div>
      </div>
      <div class="video-details-info">
        <h4 class="video-info-title">${video.title}</h4>
        <span class="video-info-desc">${video.description}</span>
      </div>
    `;
    container.appendChild(cardEl);
  });
}

// Render Featured News
async function renderFeaturedNews() {
  const container = document.getElementById('featured-news-grid');
  if (!container) return;

  const news = await fetchData('news', '/api/volleyball/news');
  const items = news.slice(0, 3);

  if (!items || items.length === 0) {
    container.innerHTML = '<div class="loading-placeholder">Sem notícias</div>';
    return;
  }

  container.innerHTML = '';
  items.forEach(item => {
    const imageSrc = `../../../assets/volleyball/feed/${item.image || 'FeedVoleiNoticias.png'}`;
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
        openModal(item.title, `
          <div style="padding:10px 0;">
            <span style="display:block; font-size:0.8rem; color:var(--text-muted); margin-bottom:16px;">DATA: ${item.date}</span>
            <img src="${imageSrc}" alt="${item.title}" style="width:100%; height:220px; object-fit:cover; border-radius:8px; border:1px solid var(--border-muted); margin-bottom:16px;">
            <p style="margin-bottom:12px; line-height:1.5;">Esta é uma cobertura esportiva especial de vôlei trazida com exclusividade pelo canal PowerSport.</p>
            <p style="margin-bottom:12px; line-height:1.5;">Nossos repórteres acompanharam a preparação das equipes, trouxeram entrevistas pós-jogo e compilaram estatísticas detalhadas sobre o rendimento das jogadoras em quadra.</p>
          </div>
        `);
      }
    });
    container.appendChild(newsEl);
  });
}

// Render League Calendar List
async function renderLeagueCalendar() {
  const container = document.getElementById('league-calendar-list');
  if (!container) return;

  const list = await fetchData('calendar', '/api/volleyball/calendar');
  const items = list.slice(0, 4);

  if (!items || items.length === 0) {
    container.innerHTML = '<div class="loading-placeholder">Sem calendário de jogos</div>';
    return;
  }

  container.innerHTML = '';
  items.forEach(cal => {
    const homeTeam = getTeam(cal.homeTeamId);
    const awayTeam = getTeam(cal.awayTeamId);

    const row = document.createElement('div');
    row.className = 'calendar-row';
    row.innerHTML = `
      <div class="cal-date-box">
        <span class="cal-date">${cal.date}</span>
        <span class="cal-time">${cal.time}</span>
      </div>
      <div class="cal-teams-box">
        <span class="cal-team-name">${homeTeam.name}</span>
        <span class="cal-vs-text">vs</span>
        <span class="cal-team-name">${awayTeam.name}</span>
      </div>
      <div class="cal-arena-box">
        <span class="cal-arena-name">${cal.arena || 'Ginásio'}</span>
      </div>
    `;
    container.appendChild(row);
  });
}

// Render Bottom Shortcuts Features Strip
async function renderBottomShortcuts() {
  const container = document.getElementById('bottom-shortcuts-row');
  if (!container) return;

  const list = await fetchData('shortcuts', '/api/volleyball/shortcuts');
  const items = list.slice(0, 4);

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
              Seção dedicada aos canais interativos da Superliga Feminina de Vôlei. Receba notificações no celular, consulte chaves dos playoffs e confira recordes históricos no portal PowerSport.
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
  // 1. Upcoming Games Ver Todos
  const btnGames = document.getElementById('action-upcoming-games');
  if (btnGames) {
    btnGames.addEventListener('click', async (e) => {
      e.preventDefault();
      const list = await fetchData('upcomingGames', '/api/volleyball/games/upcoming');
      
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
      openModal('Próximos Jogos', html);
    });
  }

  // 2. Standings Ver Tabela Completa
  const btnStandings = document.getElementById('action-standings');
  if (btnStandings) {
    btnStandings.addEventListener('click', async (e) => {
      e.preventDefault();
      const list = await fetchData('standings', '/api/volleyball/standings');
      
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
            <td style="padding:10px 0; text-align:center; font-family:var(--font-numbers); font-weight:900; color:var(--accent-primary);">${row.points}</td>
          </tr>
        `;
      });
      
      html += '</tbody></table></div>';
      openModal('Tabela de Classificação', html);
    });
  }

  // 3. Stats Ver Todas
  const btnStats = document.getElementById('action-league-stats');
  if (btnStats) {
    btnStats.addEventListener('click', async (e) => {
      e.preventDefault();
      const stats = await fetchData('leagueStats', '/api/volleyball/league/stats');
      
      let html = '<div style="display:flex; flex-direction:column; gap:16px; max-height:60vh; overflow-y:auto; padding-right:8px;">';
      stats.forEach(stat => {
        const iconSvg = SVG_ICONS[stat.icon] || SVG_ICONS['volleyball-ball'];
        html += `
          <div style="display:flex; align-items:center; gap:16px; padding:12px; border: 1px solid var(--border-muted); border-radius:8px; background:rgba(3, 18, 35, 0.45);">
            <div style="color:var(--border-primary); filter:drop-shadow(var(--glow-text-blue));">
              ${iconSvg}
            </div>
            <div>
              <span style="font-family:var(--font-heading); font-size:0.75rem; font-weight:700; text-transform:uppercase; color:var(--text-muted);">${stat.label}</span>
              <div style="display:flex; align-items:baseline;">
                <span style="font-family:var(--font-numbers); font-size:1.6rem; font-weight:900; color:var(--white);">${stat.value}</span>
                ${stat.unit ? `<span style="font-family:var(--font-heading); font-size:0.85rem; font-weight:800; color:var(--accent-primary); margin-left:2px;">${stat.unit}</span>` : ''}
              </div>
              <span style="font-size:0.75rem; color:var(--text-secondary); text-transform:uppercase;">${stat.description} da Superliga</span>
            </div>
          </div>
        `;
      });
      html += '</div>';
      openModal('Estatísticas da Liga', html);
    });
  }

  // 4. Top Players Ver Ranking
  const btnTopPlayers = document.getElementById('action-top-players');
  if (btnTopPlayers) {
    btnTopPlayers.addEventListener('click', async (e) => {
      e.preventDefault();
      const list = await fetchData('topPlayers', '/api/volleyball/players/top');
      
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
              <span style="font-family:var(--font-numbers); font-size:1.25rem; font-weight:900; color:var(--accent-primary);">${player.points}</span>
              <span style="display:block; font-family:var(--font-heading); font-size:0.65rem; color:var(--text-muted); text-transform:uppercase;">${player.unit || 'Pontos'}</span>
            </div>
          </div>
        `;
      });
      html += '</div>';
      openModal('Líderes em Pontuação', html);
    });
  }

  // 5. Best Moments Ver Todos
  const btnVideos = document.getElementById('action-best-moments');
  if (btnVideos) {
    btnVideos.addEventListener('click', async (e) => {
      e.preventDefault();
      const list = await fetchData('bestMoments', '/api/volleyball/highlights/best-moments');
      
      let html = '<div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:12px; max-height:60vh; overflow-y:auto; padding-right:8px;">';
      list.forEach(video => {
        const imageSrc = `../../../assets/volleyball/feed/${video.thumbnail || 'FeedVoleiSaque.png'}`;
        const videoUrl = video.videoUrl || 'https://www.youtube.com/watch?v=k3C6bVswU4A';
        html += `
          <div style="display:flex; flex-direction:column; background:rgba(3,18,35,0.4); border:1px solid var(--border-muted); border-radius:8px; overflow:hidden;">
            <div style="position:relative; width:100%; aspect-ratio:16/9; background:#000;">
              <img src="${imageSrc}" style="width:100%; height:100%; object-fit:cover; opacity:0.85;">
              <div style="position:absolute; top:0; left:0; width:100%; height:100%; background:rgba(1,8,20,0.35); display:flex; align-items:center; justify-content:center;">
                <a href="${videoUrl}" target="_blank" class="play-circle-btn" style="width:34px; height:34px; border-radius:50%; background:var(--accent-primary); color:var(--text-dark); display:flex; align-items:center; justify-content:center; box-shadow: 0 0 10px var(--accent-primary);">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><polygon points="8,5 19,12 8,19"></polygon></svg>
                </a>
              </div>
            </div>
            <div style="padding:8px;">
              <strong style="color:var(--white); font-size:0.8rem; font-family:var(--font-heading); text-transform:uppercase; display:block; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${video.title}</strong>
              <span style="font-size:0.7rem; color:var(--text-muted);">${video.description}</span>
            </div>
          </div>
        `;
      });
      html += '</div>';
      openModal('Melhores Momentos', html);
    });
  }

  // 6. News Ver Todas
  const btnNews = document.getElementById('action-featured-news');
  if (btnNews) {
    btnNews.addEventListener('click', async (e) => {
      e.preventDefault();
      const news = await fetchData('news', '/api/volleyball/news');
      
      let html = '<div style="display:flex; flex-direction:column; gap:12px; max-height:60vh; overflow-y:auto; padding-right:8px;">';
      news.forEach(item => {
        const imageSrc = `../../../assets/volleyball/feed/${item.image || 'FeedVoleiNoticias.png'}`;
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

  // 7. Calendar Ver Calendário
  const btnCalendar = document.getElementById('action-league-calendar');
  if (btnCalendar) {
    btnCalendar.addEventListener('click', async (e) => {
      e.preventDefault();
      const list = await fetchData('calendar', '/api/volleyball/calendar');
      
      let html = '<div style="display:flex; flex-direction:column; gap:10px; max-height:60vh; overflow-y:auto; padding-right:8px;">';
      list.forEach(cal => {
        const homeTeam = getTeam(cal.homeTeamId);
        const awayTeam = getTeam(cal.awayTeamId);
        html += `
          <div style="display:flex; align-items:center; justify-content:space-between; padding:12px; border-bottom:1px solid var(--border-muted);">
            <div style="font-family:var(--font-numbers); font-size:0.82rem; color:var(--text-secondary); width:25%;">
              <strong>${cal.date}</strong><br><span style="color:var(--text-muted);">${cal.time}</span>
            </div>
            <div style="width:50%; display:flex; flex-direction:column; justify-content:center;">
              <span style="font-family:var(--font-heading); font-size:0.9rem; font-weight:800; color:var(--white); text-transform:uppercase;">${homeTeam.name}</span>
              <span style="font-size:0.7rem; color:var(--text-muted); font-style:italic;">vs</span>
              <span style="font-family:var(--font-heading); font-size:0.9rem; font-weight:800; color:var(--white); text-transform:uppercase;">${awayTeam.name}</span>
            </div>
            <div style="width:25%; text-align:right; font-size:0.78rem; color:var(--text-muted);">
              ${cal.arena || 'Ginásio'}
            </div>
          </div>
        `;
      });
      html += '</div>';
      openModal('Calendário Completo', html);
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
    renderRoundHighlight(),
    renderUpcomingGames(),
    renderStandings(),
    renderLeagueStats(),
    renderTopPlayers(),
    renderBestMoments(),
    renderFeaturedNews(),
    renderLeagueCalendar(),
    renderBottomShortcuts(),
    bindModalActions()
  ]);
}

window.addEventListener('DOMContentLoaded', init);
