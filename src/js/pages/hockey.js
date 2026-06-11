/* ==========================================================================
   POWERSPORT - ICE HOCKEY PAGE LOGIC (sports.js)
   ========================================================================== */

// 1. FALLBACK STATIC DATA (In case API is offline or page is loaded via file://)
const fallbackData = {
  teams: [
    {
      id: "ice-panthers",
      name: "Ice Panthers",
      shortName: "ICE",
      logo: "team-ice-panthers.svg",
      primaryColor: "#0A7CFF",
      secondaryColor: "#DDF2FF"
    },
    {
      id: "frost-wolves",
      name: "Frost Wolves",
      shortName: "FRO",
      logo: "team-frost-wolves.svg",
      primaryColor: "#1C91FF",
      secondaryColor: "#B7DFFF"
    },
    {
      id: "glacier-kings",
      name: "Glacier Kings",
      shortName: "GLA",
      logo: "team-glacier-kings.svg",
      primaryColor: "#A9E8FF",
      secondaryColor: "#005BFF"
    },
    {
      id: "north-storm",
      name: "North Storm",
      shortName: "NOR",
      logo: "team-north-storm.svg",
      primaryColor: "#006BFF",
      secondaryColor: "#FFFFFF"
    },
    {
      id: "arctic-blizzard",
      name: "Arctic Blizzard",
      shortName: "ARC",
      logo: "team-arctic-blizzard.svg",
      primaryColor: "#8DDCFF",
      secondaryColor: "#102C5C"
    }
  ],
  matches: [
    {
      id: "match-001",
      date: "24 MAI",
      time: "19:30",
      homeTeamId: "ice-panthers",
      awayTeamId: "frost-wolves",
      arena: "Gelada Arena",
      status: "scheduled"
    },
    {
      id: "match-002",
      date: "25 MAI",
      time: "18:00",
      homeTeamId: "glacier-kings",
      awayTeamId: "north-storm",
      arena: "Polar Dome",
      status: "scheduled"
    },
    {
      id: "match-003",
      date: "26 MAI",
      time: "20:00",
      homeTeamId: "arctic-blizzard",
      awayTeamId: "ice-panthers",
      arena: "Frozen Stadium",
      status: "scheduled"
    },
    {
      id: "match-004",
      date: "27 MAI",
      time: "19:00",
      homeTeamId: "frost-wolves",
      awayTeamId: "glacier-kings",
      arena: "Wolf Arena",
      status: "scheduled"
    }
  ],
  standings: [
    {
      position: 1,
      teamId: "glacier-kings",
      games: 28,
      wins: 22,
      losses: 4,
      points: 68
    },
    {
      position: 2,
      teamId: "north-storm",
      games: 28,
      wins: 19,
      losses: 6,
      points: 58
    },
    {
      position: 3,
      teamId: "ice-panthers",
      games: 28,
      wins: 17,
      losses: 7,
      points: 51
    },
    {
      position: 4,
      teamId: "frost-wolves",
      games: 28,
      wins: 14,
      losses: 10,
      points: 42
    },
    {
      position: 5,
      teamId: "arctic-blizzard",
      games: 28,
      wins: 11,
      losses: 13,
      points: 33
    }
  ],
  topScorers: [
    {
      position: 1,
      playerName: "A. Johnson",
      teamId: "glacier-kings",
      goals: 32,
      avatar: "player-a-johnson.png"
    },
    {
      position: 2,
      playerName: "M. Pettersson",
      teamId: "north-storm",
      goals: 28,
      avatar: "player-m-pettersson.png"
    },
    {
      position: 3,
      playerName: "L. Andersson",
      teamId: "ice-panthers",
      goals: 25,
      avatar: "player-l-andersson.png"
    }
  ],
  leagueStats: [
    {
      id: "average-goals",
      label: "Média de gols por jogo",
      value: "4.8",
      unit: "",
      icon: "puck"
    },
    {
      id: "attack-efficiency",
      label: "% de eficiência de ataque",
      value: "18.7",
      unit: "%",
      icon: "target"
    },
    {
      id: "saves-per-game",
      label: "Defesas por jogo",
      value: "28.3",
      unit: "",
      icon: "shield"
    },
    {
      id: "penalties-per-game",
      label: "Punições por jogo",
      value: "6.2",
      unit: "",
      icon: "penalty"
    }
  ],
  momentHighlight: {
    id: "highlight-001",
    label: "Destaque do Momento",
    title: "Golaço da Semana!",
    subtitle: "Melhores jogadas da rodada",
    thumbnail: "FeedHoquei-4.png",
    videoUrl: "#",
    buttonLabel: "Assistir agora"
  },
  featuredNews: [
    {
      id: "news-001",
      category: "Oficial",
      title: "Glacier Kings contrata novo atacante estrela",
      date: "23 MAI 2024",
      image: "FeedHoquei-4.png",
      url: "#noticia-001"
    },
    {
      id: "news-002",
      category: "Análise",
      title: "Análise completa da última rodada",
      date: "22 MAI 2024",
      image: "FeedHoquei-3.png",
      url: "#noticia-002"
    },
    {
      id: "news-003",
      category: "Destaque",
      title: "Defesa espetacular garante a vitória",
      date: "21 MAI 2024",
      image: "FeedHoquei-2.png",
      url: "#noticia-003"
    },
    {
      id: "news-004",
      category: "Equipe",
      title: "Ice Panthers lidera com folga a liga",
      date: "20 MAI 2024",
      image: "FeedHoquei-1.png",
      url: "#noticia-004"
    }
  ],
  leagueCalendar: [
    {
      id: "calendar-001",
      date: "24 MAI",
      time: "19:30",
      "homeTeamId": "ice-panthers",
      "awayTeamId": "frost-wolves",
      arena: "Gelada Arena"
    },
    {
      id: "calendar-002",
      date: "25 MAI",
      time: "18:00",
      "homeTeamId": "glacier-kings",
      "awayTeamId": "north-storm",
      arena: "Polar Dome"
    },
    {
      id: "calendar-003",
      date: "26 MAI",
      time: "20:00",
      "homeTeamId": "arctic-blizzard",
      "awayTeamId": "ice-panthers",
      arena: "Frozen Stadium"
    },
    {
      id: "calendar-004",
      date: "27 MAI",
      time: "19:00",
      "homeTeamId": "frost-wolves",
      "awayTeamId": "glacier-kings",
      arena: "Wolf Arena"
    }
  ],
  bottomHighlights: [
    {
      id: "champion",
      icon: "trophy",
      title: "5x Campeão",
      highlight: "Glacier Kings",
      description: "Maior campeão da liga"
    },
    {
      id: "fans",
      icon: "fans",
      title: "Melhor torcida",
      highlight: "Frost Wolves",
      description: "Paixão que não para"
    },
    {
      id: "season-games",
      icon: "puck-motion",
      title: "+120 Jogos",
      highlight: "Por temporada",
      description: "Emoção do início ao fim"
    },
    {
      id: "official-league",
      icon: "shield",
      title: "Liga Oficial",
      highlight: "Federação Internacional",
      description: "De hóquei no gelo"
    }
  ]
};

// 2. API REQUEST UTILITY WITH FALLBACK
async function fetchData(endpointKey, serverPath) {
  const keyMap = {
    'news': 'featuredNews',
    'calendar': 'leagueCalendar'
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
      const response = await fetch('../../../src/data/hockey/hockey-page.json');
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

function getTeam(teamId) {
  return teamsCache.find(t => t.id === teamId) || {
    id: teamId,
    name: teamId,
    shortName: teamId.substring(0, 3).toUpperCase(),
    primaryColor: "#00B7FF",
    secondaryColor: "#ffffff"
  };
}

// 4. RENDERING MODULES

// Render Moment Highlight (Video block in Hero)
async function renderMomentHighlight() {
  const container = document.getElementById('moment-highlight-container');
  if (!container) return;

  const data = await fetchData('momentHighlight', '/api/videos/highlights');
  
  // Format the visual path
  const imageSrc = `../../../assets/hockey/feed/${data.thumbnail || 'FeedHoquei-4.png'}`;
  const videoUrl = data.videoUrl || 'https://www.youtube.com/watch?v=sWbVpxf8YBI&msockid=a19a64c164e111f18ffb3ce96b6ac5ca';

  container.innerHTML = `
    <div class="moment-video-preview">
      <img src="${imageSrc}" alt="Destaque da semana" class="moment-video-img" loading="lazy">
      <div class="moment-video-overlay">
        <a href="${videoUrl}" target="_blank" class="play-btn-circle" aria-label="Assistir vídeo de destaque">
          <svg viewBox="0 0 24 24" width="22" height="22"><polygon points="8,5 19,12 8,19"></polygon></svg>
        </a>
      </div>
    </div>
    <div class="moment-info-area">
      <div class="moment-card-label">${data.label || 'Destaque do Momento'}</div>
      <h4 class="moment-card-title">${data.title || 'Golaço da Semana!'}</h4>
      <p class="moment-card-subtitle">${data.subtitle || 'Melhores jogadas da rodada'}</p>
      <a href="${videoUrl}" target="_blank" class="btn-primary moment-watch-btn" style="text-decoration:none;">
        ${data.buttonLabel || 'Assistir agora'}
      </a>
    </div>
  `;
}

// Render Upcoming Matches
async function renderMatches() {
  const container = document.getElementById('upcoming-games-list');
  if (!container) return;

  const list = await fetchData('matches', '/api/matches');
  // Limit to 3 items
  const items = list.slice(0, 3);

  if (!items || items.length === 0) {
    container.innerHTML = '<div class="loading-placeholder">Sem partidas agendadas</div>';
    return;
  }

  container.innerHTML = '';
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
    container.appendChild(matchEl);
  });
}

// Render Standings
async function renderStandings() {
  const tbody = document.getElementById('standings-table-body');
  if (!tbody) return;

  const list = await fetchData('standings', '/api/standings');
  const items = list.slice(0, 5); // Max 5 items

  if (!items || items.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" class="loading-placeholder">Sem dados de classificação</td></tr>';
    return;
  }

  tbody.innerHTML = '';
  items.forEach(row => {
    const team = getTeam(row.teamId);
    
    // Apply rank badge class
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

// Render Top Scorers
async function renderTopScorers() {
  const container = document.getElementById('top-scorers-list');
  if (!container) return;

  const list = await fetchData('topScorers', '/api/players/top-scorers');
  const items = list.slice(0, 3); // Max 3 items

  if (!items || items.length === 0) {
    container.innerHTML = '<div class="loading-placeholder">Sem artilheiros</div>';
    return;
  }

  container.innerHTML = '';
  items.forEach(scorer => {
    const team = getTeam(scorer.teamId);
    
    // Use initials for avatar if image not available
    const initials = scorer.playerName.split(' ').map(n => n[0]).join('');

    let rankClass = 'scorer-rank';
    if (scorer.position === 1) rankClass += ' rank-1';
    else if (scorer.position === 2) rankClass += ' rank-2';
    else if (scorer.position === 3) rankClass += ' rank-3';

    const scorerEl = document.createElement('div');
    scorerEl.className = 'scorer-row';
    scorerEl.innerHTML = `
      <span class="${rankClass}">${scorer.position}</span>
      <div class="scorer-avatar-wrap">
        <div class="scorer-avatar">
          <span>${initials}</span>
        </div>
      </div>
      <div class="scorer-info">
        <div class="scorer-name">${scorer.playerName}</div>
        <div class="scorer-team">${team.name}</div>
      </div>
      <div class="scorer-stats">
        <div class="scorer-goals">${scorer.goals}</div>
        <div class="scorer-label">Gols</div>
      </div>
    `;
    container.appendChild(scorerEl);
  });
}

// Render League Stats with inline SVGs
async function renderStats() {
  const container = document.getElementById('league-stats-list');
  if (!container) return;

  const stats = await fetchData('leagueStats', '/api/league/stats');

  if (!stats || stats.length === 0) {
    container.innerHTML = '<div class="loading-placeholder">Sem estatísticas</div>';
    return;
  }

  // Icons registry
  const icons = {
    puck: `
      <svg class="stat-icon" viewBox="0 0 24 24">
        <ellipse cx="12" cy="14" rx="9" ry="5" stroke="currentColor" stroke-width="2" fill="none"></ellipse>
        <ellipse cx="12" cy="8" rx="9" ry="5" stroke="currentColor" stroke-width="2" fill="none"></ellipse>
        <path d="M3 8v6c0 2.76 4 5 9 5s9-2.24 9-5V8" stroke="currentColor" stroke-width="2" fill="none"></path>
      </svg>
    `,
    target: `
      <svg class="stat-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"></circle>
        <circle cx="12" cy="12" r="6" stroke="currentColor" stroke-width="2" fill="none"></circle>
        <circle cx="12" cy="12" r="2" fill="currentColor"></circle>
      </svg>
    `,
    shield: `
      <svg class="stat-icon" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2" fill="none"></path>
      </svg>
    `,
    penalty: `
      <svg class="stat-icon" viewBox="0 0 24 24">
        <path d="M9 5H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h5l6 4v-4h3a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4h-9z" stroke="currentColor" stroke-width="2" fill="none"></path>
        <circle cx="6" cy="9" r="1" fill="currentColor"></circle>
      </svg>
    `
  };

  container.innerHTML = '';
  stats.forEach(stat => {
    const iconSvg = icons[stat.icon] || icons['puck'];
    const statEl = document.createElement('div');
    statEl.className = 'stat-item-row';
    statEl.innerHTML = `
      <div class="stat-icon-container" aria-hidden="true">
        ${iconSvg}
      </div>
      <div class="stat-details">
        <div class="stat-label-text">${stat.label}</div>
      </div>
      <div class="stat-value-block">
        <span class="stat-value-num">${stat.value}</span>
        ${stat.unit ? `<span class="stat-label-text" style="color:var(--text-primary); margin-left:2px;">${stat.unit}</span>` : ''}
      </div>
    `;
    container.appendChild(statEl);
  });
}

// Render News Card Grid
async function renderNews() {
  const container = document.getElementById('featured-news-grid');
  if (!container) return;

  const list = await fetchData('news', '/api/news');
  const items = list.slice(0, 4); // Max 4 items

  if (!items || items.length === 0) {
    container.innerHTML = '<div class="loading-placeholder">Sem notícias no momento</div>';
    return;
  }

  container.innerHTML = '';
  items.forEach(news => {
    // Format visual path
    const imageSrc = `../../../assets/hockey/feed/${news.image}`;

    const card = document.createElement('a');
    card.href = news.url || '#';
    card.className = 'news-card-item';
    card.innerHTML = `
      <div class="news-image-wrap">
        <span class="news-category-badge">${news.category}</span>
        <img src="${imageSrc}" alt="${news.title}" class="news-img" loading="lazy">
      </div>
      <div class="news-content-area">
        <h4 class="news-card-title">${news.title}</h4>
        <span class="news-date">${news.date}</span>
      </div>
    `;
    container.appendChild(card);
  });
}

// Render League Calendar
async function renderCalendar() {
  const container = document.getElementById('league-calendar-list');
  if (!container) return;

  const list = await fetchData('calendar', '/api/calendar');
  const items = list.slice(0, 4); // Max 4 items

  if (!items || items.length === 0) {
    container.innerHTML = '<div class="loading-placeholder">Sem eventos programados</div>';
    return;
  }

  container.innerHTML = '';
  items.forEach(item => {
    const homeTeam = getTeam(item.homeTeamId);
    const awayTeam = getTeam(item.awayTeamId);

    const row = document.createElement('div');
    row.className = 'calendar-row-item';
    row.innerHTML = `
      <div class="cal-date-col">
        <span class="cal-date">${item.date}</span>
        <span class="cal-time">${item.time}</span>
      </div>
      <div class="cal-matchup-col">
        <span class="cal-team home">${homeTeam.shortName}</span>
        <span class="cal-vs">×</span>
        <span class="cal-team away">${awayTeam.shortName}</span>
      </div>
      <div class="cal-arena-col" title="${item.arena}">${item.arena}</div>
    `;
    container.appendChild(row);
  });
}

// Render Bottom Highlights strip
async function renderBottomHighlights() {
  const container = document.getElementById('bottom-highlights-row');
  if (!container) return;

  const items = await fetchData('bottomHighlights', '/api/highlights/bottom');

  // Strip Icons Registry
  const stripIcons = {
    trophy: `
      <svg class="strip-icon" viewBox="0 0 24 24">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34M12 2a7 7 0 0 0-7 7v4.66a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V9a7 7 0 0 0-7-7z" stroke="currentColor" stroke-width="2" fill="none"></path>
      </svg>
    `,
    fans: `
      <svg class="strip-icon" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 14v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 1 1 0 7.75" stroke="currentColor" stroke-width="2" fill="none"></path>
      </svg>
    `,
    'puck-motion': `
      <svg class="strip-icon" viewBox="0 0 24 24">
        <ellipse cx="14" cy="14" rx="8" ry="4" stroke="currentColor" stroke-width="2" fill="none"></ellipse>
        <path d="M6 14v4c0 2.2 4 4 8 4s8-1.8 8-4v-4M2 14h2M2 18h2M3 10c0-1 2-2 5-2s5 1 5 2" stroke="currentColor" stroke-width="2" fill="none"></path>
      </svg>
    `,
    shield: `
      <svg class="strip-icon" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2" fill="none"></path>
      </svg>
    `
  };

  container.innerHTML = '';
  items.forEach(item => {
    const iconSvg = stripIcons[item.icon] || stripIcons['shield'];
    const itemEl = document.createElement('div');
    itemEl.className = 'highlight-strip-item';
    itemEl.innerHTML = `
      <div class="strip-icon-container" aria-hidden="true">
        ${iconSvg}
      </div>
      <div class="strip-details">
        <span class="strip-label">${item.title}</span>
        <span class="strip-highlight">${item.highlight}</span>
        <span class="strip-desc">${item.description}</span>
      </div>
    `;
    container.appendChild(itemEl);
  });
}

// 5. INTERACTION & NAVIGATION UTILITIES
function initNavigation() {
  const header = document.getElementById('site-header');
  const hamburger = document.getElementById('hamburger-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Header Scroll Effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile Hamburger Toggle
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navMenu.classList.toggle('open');
    });

    // Close menu when clicking links
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navMenu.classList.remove('open');
      });
    });
  }

  // Nav scroll spy and item active change
  const sections = document.querySelectorAll('section, main');
  window.addEventListener('scroll', () => {
    let currentId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    if (currentId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        }
      });
    }
  });

  // Simple alert hooks for actions
  const searchBtn = document.getElementById('action-search');
  if (searchBtn) searchBtn.addEventListener('click', () => alert('Pesquisa indisponível no momento.'));

  const bellBtn = document.getElementById('action-notifications');
  if (bellBtn) bellBtn.addEventListener('click', () => alert('Você não tem novas notificações.'));

  const profileBtn = document.getElementById('action-profile');
  if (profileBtn) profileBtn.addEventListener('click', () => alert('Carregando perfil de usuário...'));
}

// 5.5 MODAL OVERLAY LOGIC (TO SHOW ALL ITEMS DYNAMICALLY FROM THE API)
function renderModalMatches(list, container) {
  container.innerHTML = '<div class="modal-detail-list"></div>';
  const listDiv = container.querySelector('.modal-detail-list');
  list.forEach(match => {
    const homeTeam = getTeam(match.homeTeamId);
    const awayTeam = getTeam(match.awayTeamId);
    const row = document.createElement('div');
    row.className = 'match-row-item';
    row.style.margin = '4px 0';
    row.innerHTML = `
      <div class="match-time-block">
        <span class="match-date">${match.date}</span>
        <span class="match-time">${match.time}</span>
      </div>
      <div class="match-teams-grid" style="padding: 0 20px;">
        <div class="team-inline home" style="width: 45%;">
          <span class="team-name-short" style="font-size:1.05rem;">${homeTeam.name}</span>
          <span class="team-color-dot" style="color: ${homeTeam.primaryColor}; background-color: ${homeTeam.primaryColor};"></span>
        </div>
        <div class="match-vs-center">VS</div>
        <div class="team-inline away" style="width: 45%;">
          <span class="team-color-dot" style="color: ${awayTeam.primaryColor}; background-color: ${awayTeam.primaryColor};"></span>
          <span class="team-name-short" style="font-size:1.05rem;">${awayTeam.name}</span>
        </div>
      </div>
      <div class="cal-arena-col" style="max-width: 150px;" title="${match.arena}">
        ${match.arena}
      </div>
    `;
    listDiv.appendChild(row);
  });
}

function renderModalStandings(list, container) {
  container.innerHTML = `
    <div class="standings-table-container">
      <table class="standings-table">
        <thead>
          <tr>
            <th class="col-pos">Pos</th>
            <th class="col-team">Time</th>
            <th class="col-games">J</th>
            <th class="col-wins">V</th>
            <th class="col-losses">D</th>
            <th class="col-pts">PTS</th>
          </tr>
        </thead>
        <tbody id="modal-standings-body"></tbody>
      </table>
    </div>
  `;
  const tbody = container.querySelector('#modal-standings-body');
  list.forEach(row => {
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

function renderModalScorers(list, container) {
  container.innerHTML = '<div class="modal-detail-list"></div>';
  const listDiv = container.querySelector('.modal-detail-list');
  list.forEach(scorer => {
    const team = getTeam(scorer.teamId);
    const initials = scorer.playerName.split(' ').map(n => n[0]).join('');

    let rankClass = 'scorer-rank';
    if (scorer.position === 1) rankClass += ' rank-1';
    else if (scorer.position === 2) rankClass += ' rank-2';
    else if (scorer.position === 3) rankClass += ' rank-3';

    const row = document.createElement('div');
    row.className = 'scorer-row';
    row.innerHTML = `
      <span class="${rankClass}">${scorer.position}</span>
      <div class="scorer-avatar-wrap">
        <div class="scorer-avatar"><span>${initials}</span></div>
      </div>
      <div class="scorer-info">
        <div class="scorer-name">${scorer.playerName}</div>
        <div class="scorer-team">${team.name}</div>
      </div>
      <div class="scorer-stats">
        <div class="scorer-goals">${scorer.goals}</div>
        <div class="scorer-label">Gols</div>
      </div>
    `;
    listDiv.appendChild(row);
  });
}

function renderModalStats(list, container) {
  container.innerHTML = '<div class="modal-detail-list"></div>';
  const listDiv = container.querySelector('.modal-detail-list');
  const icons = {
    puck: `
      <svg class="stat-icon" viewBox="0 0 24 24">
        <ellipse cx="12" cy="14" rx="9" ry="5" stroke="currentColor" stroke-width="2" fill="none"></ellipse>
        <ellipse cx="12" cy="8" rx="9" ry="5" stroke="currentColor" stroke-width="2" fill="none"></ellipse>
        <path d="M3 8v6c0 2.76 4 5 9 5s9-2.24 9-5V8" stroke="currentColor" stroke-width="2" fill="none"></path>
      </svg>
    `,
    target: `
      <svg class="stat-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"></circle>
        <circle cx="12" cy="12" r="6" stroke="currentColor" stroke-width="2" fill="none"></circle>
        <circle cx="12" cy="12" r="2" fill="currentColor"></circle>
      </svg>
    `,
    shield: `
      <svg class="stat-icon" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2" fill="none"></path>
      </svg>
    `,
    penalty: `
      <svg class="stat-icon" viewBox="0 0 24 24">
        <path d="M9 5H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h5l6 4v-4h3a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4h-9z" stroke="currentColor" stroke-width="2" fill="none"></path>
        <circle cx="6" cy="9" r="1" fill="currentColor"></circle>
      </svg>
    `
  };
  list.forEach(stat => {
    const iconSvg = icons[stat.icon] || icons['puck'];
    const row = document.createElement('div');
    row.className = 'stat-item-row';
    row.innerHTML = `
      <div class="stat-icon-container" aria-hidden="true">${iconSvg}</div>
      <div class="stat-details">
        <div class="stat-label-text">${stat.label}</div>
      </div>
      <div class="stat-value-block">
        <span class="stat-value-num">${stat.value}</span>
        ${stat.unit ? `<span class="stat-label-text" style="color:var(--text-primary); margin-left:2px;">${stat.unit}</span>` : ''}
      </div>
    `;
    listDiv.appendChild(row);
  });
}

function renderModalNews(list, container) {
  container.innerHTML = '<div class="modal-news-grid"></div>';
  const gridDiv = container.querySelector('.modal-news-grid');
  list.forEach(news => {
    const card = document.createElement('div');
    card.className = 'news-card-item';
    card.innerHTML = `
      <div class="news-image-wrap">
        <span class="news-category-badge">${news.category}</span>
        <img src="../../../assets/hockey/feed/${news.image}" alt="${news.title}" class="news-img" loading="lazy">
      </div>
      <div class="news-content-area">
        <h4 class="news-card-title">${news.title}</h4>
        <span class="news-date">${news.date}</span>
      </div>
    `;
    gridDiv.appendChild(card);
  });
}

function renderModalCalendar(list, container) {
  container.innerHTML = '<div class="modal-detail-list"></div>';
  const listDiv = container.querySelector('.modal-detail-list');
  list.forEach(item => {
    const homeTeam = getTeam(item.homeTeamId);
    const awayTeam = getTeam(item.awayTeamId);
    const row = document.createElement('div');
    row.className = 'calendar-row-item';
    row.innerHTML = `
      <div class="cal-date-col">
        <span class="cal-date">${item.date}</span>
        <span class="cal-time">${item.time}</span>
      </div>
      <div class="cal-matchup-col">
        <span class="cal-team home" style="width:40%; text-align:right;">${homeTeam.name}</span>
        <span class="cal-vs">×</span>
        <span class="cal-team away" style="width:40%; text-align:left;">${awayTeam.name}</span>
      </div>
      <div class="cal-arena-col" style="max-width:180px;" title="${item.arena}">${item.arena}</div>
    `;
    listDiv.appendChild(row);
  });
}

function initModal() {
  const modal = document.getElementById('dashboard-modal');
  const closeBtn = document.getElementById('modal-close');
  
  if (!modal || !closeBtn) return;
  
  let lastActiveElement = null;

  const closeModal = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    if (lastActiveElement) {
      lastActiveElement.focus();
    } else {
      document.activeElement.blur();
    }
  };

  closeBtn.addEventListener('click', closeModal);
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.querySelectorAll('.card-action-link').forEach(link => {
    link.addEventListener('click', async (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      
      lastActiveElement = document.activeElement;
      
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      
      // Transfer focus to the modal close button so assistive technology is aware of focus inside
      closeBtn.focus();
      
      const titleEl = document.getElementById('modal-title');
      const bodyEl = document.getElementById('modal-body');
      
      titleEl.textContent = 'Carregando...';
      bodyEl.innerHTML = '<div class="loading-placeholder">Carregando dados completos...</div>';
      
      try {
        if (href === '#jogos') {
          titleEl.textContent = 'Todos os Jogos';
          const list = await fetchData('matches', '/api/matches');
          renderModalMatches(list, bodyEl);
        } else if (href === '#classificacao') {
          titleEl.textContent = 'Classificação Completa';
          const list = await fetchData('standings', '/api/standings');
          renderModalStandings(list, bodyEl);
        } else if (href === '#atletas') {
          titleEl.textContent = 'Artilheiros da Liga';
          const list = await fetchData('topScorers', '/api/players/top-scorers');
          renderModalScorers(list, bodyEl);
        } else if (href === '#estatisticas') {
          titleEl.textContent = 'Todas as Estatísticas';
          const list = await fetchData('leagueStats', '/api/league/stats');
          renderModalStats(list, bodyEl);
        } else if (href === '#noticias') {
          titleEl.textContent = 'Todas as Notícias';
          const list = await fetchData('news', '/api/news');
          renderModalNews(list, bodyEl);
        } else if (href === '#calendario') {
          titleEl.textContent = 'Calendário Completo';
          const list = await fetchData('calendar', '/api/calendar');
          renderModalCalendar(list, bodyEl);
        }
      } catch (err) {
        console.error('Erro ao carregar detalhes no modal:', err);
        bodyEl.innerHTML = `<div class="loading-placeholder" style="color:var(--danger)">Erro ao carregar dados: ${err.message}</div>`;
      }
    });
  });
}

// 6. INITIALIZATION
window.addEventListener('DOMContentLoaded', async () => {
  // Load teams first to populate the cache
  try {
    const list = await fetchData('teams', '/api/teams');
    if (list && list.length > 0) {
      teamsCache = list;
    }
  } catch (e) {
    console.error('Failed to pre-cache teams.', e);
  }

  // Initialize UI navigation and interactions
  initNavigation();
  initModal();

  // Load and render all components
  renderMomentHighlight();
  renderMatches();
  renderStandings();
  renderTopScorers();
  renderStats();
  renderNews();
  renderCalendar();
  renderBottomHighlights();
});
