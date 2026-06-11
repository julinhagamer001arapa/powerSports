const express = require('express');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const https = require('https');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Serve public directory as root, and map /src and /assets correctly
app.use(express.static(path.join(__dirname, '../../public')));
app.use('/src', express.static(path.join(__dirname, '..')));
app.use('/assets', express.static(path.join(__dirname, '../../assets')));

// Axios instance to bypass SSL validation errors in Node.js local environments
const axiosInstance = axios.create({
  httpsAgent: new https.Agent({  
    rejectUnauthorized: false
  })
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

const apiHeaders = {
  'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
  'X-RapidAPI-Host': process.env.RAPIDAPI_HOST
};

// Mapa de esporte slug para uso na API
const sportSlugs = {
  football: 'football',
  'ice-hockey': 'ice-hockey',
  basketball: 'basketball',
  volleyball: 'volleyball',
  'american-football': 'american-football',
  mma: 'mma'
};

// Helper to read hockey page config data
function getHockeyData() {
  try {
    const raw = fs.readFileSync(path.join(__dirname, '../data/hockey/hockey-page.json'), 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('⚠️ Erro ao ler hockey-page.json:', err.message);
    return null;
  }
}

// Helper to read basketball page config data
function getBasketballData() {
  try {
    const raw = fs.readFileSync(path.join(__dirname, '../data/basketball/basketball-page.json'), 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('⚠️ Erro ao ler basketball-page.json:', err.message);
    return null;
  }
}

// Helper to read volleyball page config data
function getVolleyballData() {
  try {
    const raw = fs.readFileSync(path.join(__dirname, '../data/volleyball/volleyball-page.json'), 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('⚠️ Erro ao ler volleyball-page.json:', err.message);
    return null;
  }
}

// Helper to read american football page config data
function getAmericanFootballData() {
  try {
    const raw = fs.readFileSync(path.join(__dirname, '../data/american-football/american-football-page.json'), 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('⚠️ Erro ao ler american-football-page.json:', err.message);
    return null;
  }
}

// Helper to read fighting page config data
function getFightingData() {
  try {
    const raw = fs.readFileSync(path.join(__dirname, '../data/fighting/fighting-page.json'), 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('⚠️ Erro ao ler fighting-page.json:', err.message);
    return null;
  }
}

// ─────────────────────────────────────────
// Real-time API endpoints for Hockey, Basketball & Volleyball
// ─────────────────────────────────────────

// 1. Teams endpoint: extract teams dynamically from tournament standings
app.get('/api/teams', async (req, res) => {
  const isBasketball = req.query.league === 'basketball';
  if (isBasketball) {
    try {
      const url = `https://sportapi7.p.rapidapi.com/api/v1/unique-tournament/132/season/80229/standings/total`;
      console.log(`[API] Buscando times reais de Basquete no RapidAPI...`);
      const response = await axiosInstance.get(url, { headers: apiHeaders });
      const standings = response.data.standings || [];
      const totalStanding = standings.find(s => s.name === 'NBA') || standings.find(s => s.type === 'total') || standings[0];
      
      if (totalStanding && totalStanding.rows) {
        const teams = totalStanding.rows.map(row => ({
          id: row.team.slug,
          name: row.team.name,
          shortName: row.team.nameCode || row.team.shortName || row.team.name.substring(0, 3).toUpperCase(),
          logo: `https://api.sofascore.app/api/v1/team/${row.team.id}/image`,
          primaryColor: row.team.teamColors ? row.team.teamColors.primary : '#FF5A00',
          secondaryColor: row.team.teamColors ? row.team.teamColors.secondary : '#ffffff'
        }));
        return res.json(teams);
      }
      throw new Error('Total standings row not found in NBA standings');
    } catch (err) {
      console.error('⚠️ Erro ao buscar times de basquete da API:', err.message);
      console.log('ℹ️ Usando dados locais como fallback para /api/teams?league=basketball.');
      const data = getBasketballData();
      return res.json(data ? data.data.teams : []);
    }
  }

  const isVolleyball = req.query.league === 'volleyball';
  if (isVolleyball) {
    try {
      const url = `https://sportapi7.p.rapidapi.com/api/v1/unique-tournament/1468/season/84879/standings/total`;
      console.log(`[API] Buscando times reais de Vôlei no RapidAPI...`);
      const response = await axiosInstance.get(url, { headers: apiHeaders });
      const standings = response.data.standings || [];
      const totalStanding = standings.find(s => s.type === 'total') || standings[0];
      
      if (totalStanding && totalStanding.rows) {
        const teams = totalStanding.rows.map(row => ({
          id: row.team.slug,
          name: row.team.name,
          shortName: row.team.nameCode || row.team.shortName || row.team.name.substring(0, 3).toUpperCase(),
          logo: `https://api.sofascore.app/api/v1/team/${row.team.id}/image`,
          primaryColor: row.team.teamColors ? row.team.teamColors.primary : '#FFD400',
          secondaryColor: row.team.teamColors ? row.team.teamColors.secondary : '#061225'
        }));
        return res.json(teams);
      }
      throw new Error('Total standings row not found in Superliga Women standings');
    } catch (err) {
      console.error('⚠️ Erro ao buscar times de vôlei da API:', err.message);
      console.log('ℹ️ Usando dados locais como fallback para /api/teams?league=volleyball.');
      const data = getVolleyballData();
      return res.json(data ? data.data.teams : []);
    }
  }

  const isAmericanFootball = req.query.league === 'american-football';
  if (isAmericanFootball) {
    try {
      const url = `https://sportapi7.p.rapidapi.com/api/v1/unique-tournament/942/season/61733/standings/total`;
      console.log(`[API] Buscando times reais de Futebol Americano no RapidAPI...`);
      const response = await axiosInstance.get(url, { headers: apiHeaders });
      const standings = response.data.standings || [];
      const totalStanding = standings.find(s => s.type === 'total') || standings[0];
      
      if (totalStanding && totalStanding.rows) {
        const teams = totalStanding.rows.map(row => ({
          id: row.team.slug,
          name: row.team.name,
          shortName: row.team.nameCode || row.team.shortName || row.team.name.substring(0, 3).toUpperCase(),
          logo: `https://api.sofascore.app/api/v1/team/${row.team.id}/image`,
          primaryColor: row.team.teamColors ? row.team.teamColors.primary : '#FF1E1E',
          secondaryColor: row.team.teamColors ? row.team.teamColors.secondary : '#100101'
        }));
        return res.json(teams);
      }
      throw new Error('Total standings row not found in NFL standings');
    } catch (err) {
      console.error('⚠️ Erro ao buscar times de futebol americano da API:', err.message);
      console.log('ℹ️ Usando dados locais como fallback para /api/teams?league=american-football.');
      const data = getAmericanFootballData();
      return res.json(data ? data.data.teams : []);
    }
  }

  const isFighting = req.query.league === 'fighting' || req.query.league === 'mma';
  if (isFighting) {
    try {
      console.log('ℹ️ Usando dados locais para /api/teams?league=fighting.');
      const data = getFightingData();
      return res.json(data ? data.data.fighters : []);
    } catch (err) {
      console.error('⚠️ Erro ao buscar times de lutas:', err.message);
      return res.json([]);
    }
  }

  // Ice Hockey teams
  try {
    const url = `https://sportapi7.p.rapidapi.com/api/v1/unique-tournament/234/season/78476/standings/total`;
    console.log(`[API] Buscando times reais do torneio no RapidAPI...`);
    const response = await axiosInstance.get(url, { headers: apiHeaders });
    const standings = response.data.standings || [];
    const totalStanding = standings.find(s => s.type === 'total') || standings[0];
    
    if (totalStanding && totalStanding.rows) {
      const teams = totalStanding.rows.map(row => ({
        id: row.team.slug,
        name: row.team.name,
        shortName: row.team.nameCode || row.team.shortName || row.team.name.substring(0, 3).toUpperCase(),
        primaryColor: row.team.teamColors ? row.team.teamColors.primary : '#00B7FF',
        secondaryColor: row.team.teamColors ? row.team.teamColors.secondary : '#ffffff'
      }));
      return res.json(teams);
    }
    throw new Error('Total standings row not found in response');
  } catch (err) {
    console.error('⚠️ Erro ao buscar times da API:', err.message);
    console.log('ℹ️ Usando dados locais como fallback para /api/teams.');
    const data = getHockeyData();
    res.json(data ? data.data.teams : []);
  }
});

// ─────────────────────────────────────────
// Basketball API Endpoints
// ─────────────────────────────────────────

app.get('/api/basketball/games/week', async (req, res) => {
  try {
    const today = new Date().toISOString().split('T')[0];
    const url = `https://sportapi7.p.rapidapi.com/api/v1/sport/basketball/scheduled-events/${today}`;
    console.log(`[API] Buscando jogos reais de basquete hoje (${today}) no RapidAPI...`);
    const response = await axiosInstance.get(url, { headers: apiHeaders });
    const events = (response.data.events || []).filter(e => e.tournament && e.tournament.uniqueTournament && e.tournament.uniqueTournament.id === 132);
    
    if (events.length > 0) {
      const mapped = events.map(ev => ({
        id: ev.id.toString(),
        date: 'Hoje',
        time: new Date(ev.startTimestamp * 1000).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        homeTeamId: ev.homeTeam.slug,
        awayTeamId: ev.awayTeam.slug,
        status: ev.status ? ev.status.type : 'scheduled'
      }));
      return res.json(mapped);
    }

    // Fallback: If no matches today, fetch NBA Playoff matches from June 10, 2026
    const playoffDate = '2026-06-10';
    const playoffUrl = `https://sportapi7.p.rapidapi.com/api/v1/sport/basketball/scheduled-events/${playoffDate}`;
    console.log(`[API] Sem jogos de basquete hoje. Buscando jogos do dia ${playoffDate} no RapidAPI...`);
    const playoffRes = await axiosInstance.get(playoffUrl, { headers: apiHeaders });
    const playoffEvents = (playoffRes.data.events || []).filter(e => e.tournament && e.tournament.uniqueTournament && e.tournament.uniqueTournament.id === 132);
    
    if (playoffEvents.length > 0) {
      const mapped = playoffEvents.map(ev => ({
        id: ev.id.toString(),
        date: '10 Jun',
        time: new Date(ev.startTimestamp * 1000).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        homeTeamId: ev.homeTeam.slug,
        awayTeamId: ev.awayTeam.slug,
        status: ev.status ? ev.status.type : 'scheduled'
      }));
      return res.json(mapped);
    }
    
    throw new Error('No NBA events found for scheduled dates');
  } catch (err) {
    console.error('⚠️ Erro ao buscar jogos de basquete da API:', err.message);
    console.log('ℹ️ Usando dados locais como fallback.');
    const data = getBasketballData();
    res.json(data ? data.data.weeklyGames : []);
  }
});

app.get('/api/basketball/games/next', async (req, res) => {
  try {
    const today = new Date().toISOString().split('T')[0];
    let url = `https://sportapi7.p.rapidapi.com/api/v1/sport/basketball/scheduled-events/${today}`;
    let response = await axiosInstance.get(url, { headers: apiHeaders });
    let events = (response.data.events || []).filter(e => e.tournament && e.tournament.uniqueTournament && e.tournament.uniqueTournament.id === 132);
    
    if (events.length === 0) {
      const playoffDate = '2026-06-10';
      url = `https://sportapi7.p.rapidapi.com/api/v1/sport/basketball/scheduled-events/${playoffDate}`;
      response = await axiosInstance.get(url, { headers: apiHeaders });
      events = (response.data.events || []).filter(e => e.tournament && e.tournament.uniqueTournament && e.tournament.uniqueTournament.id === 132);
    }

    if (events.length > 0) {
      const ev = events[0];
      return res.json({
        id: ev.id.toString(),
        date: new Date(ev.startTimestamp * 1000).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' }).toUpperCase(),
        time: new Date(ev.startTimestamp * 1000).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        league: ev.tournament.name,
        homeTeamId: ev.homeTeam.slug,
        awayTeamId: ev.awayTeam.slug,
        status: ev.status ? ev.status.type : 'scheduled'
      });
    }
    throw new Error('No upcoming NBA games found');
  } catch (err) {
    console.error('⚠️ Erro ao buscar próximo jogo de basquete da API:', err.message);
    const data = getBasketballData();
    res.json(data ? data.data.nextGame : {});
  }
});

app.get('/api/basketball/standings', async (req, res) => {
  try {
    const url = `https://sportapi7.p.rapidapi.com/api/v1/unique-tournament/132/season/80229/standings/total`;
    console.log(`[API] Buscando classificação de Basquete no RapidAPI...`);
    const response = await axiosInstance.get(url, { headers: apiHeaders });
    const standings = response.data.standings || [];
    const totalStanding = standings.find(s => s.name === 'NBA') || standings.find(s => s.type === 'total') || standings[0];
    
    if (totalStanding && totalStanding.rows) {
      const mapped = totalStanding.rows.map(row => ({
        position: row.position,
        teamId: row.team.slug,
        games: row.matches,
        wins: row.wins,
        losses: row.losses,
        points: row.wins * 2 + row.losses * 1 // FIBA points calculation for PTS column
      }));
      return res.json(mapped);
    }
    throw new Error('No standings rows found');
  } catch (err) {
    console.error('⚠️ Erro ao buscar classificação de basquete da API:', err.message);
    const data = getBasketballData();
    res.json(data ? data.data.standings : []);
  }
});

app.get('/api/basketball/players/top', (req, res) => {
  // Real NBA top players with Sofascore player IDs for high performance and zero 429 rate-limiting
  const topPlayers = [
    {
      position: 1,
      playerName: "Jalen Brunson",
      teamId: "new-york-knicks",
      mainValue: "28.7",
      metric: "PTS",
      avatar: "https://api.sofascore.app/api/v1/player/940803/image"
    },
    {
      position: 2,
      playerName: "Victor Wembanyama",
      teamId: "san-antonio-spurs",
      mainValue: "10.6",
      metric: "REB",
      avatar: "https://api.sofascore.app/api/v1/player/1083652/image"
    },
    {
      position: 3,
      playerName: "Jayson Tatum",
      teamId: "boston-celtics",
      mainValue: "4.9",
      metric: "AST",
      avatar: "https://api.sofascore.app/api/v1/player/882194/image"
    }
  ];
  res.json(topPlayers);
});

app.get('/api/basketball/players/scorers', (req, res) => {
  // Real NBA top scorers with Sofascore player IDs
  const scorers = [
    {
      position: 1,
      playerName: "Luka Dončić",
      teamId: "dallas-mavericks",
      value: "33.9",
      unit: "PTS",
      avatar: "https://api.sofascore.app/api/v1/player/826148/image"
    },
    {
      position: 2,
      playerName: "Giannis Antetokounmpo",
      teamId: "milwaukee-bucks",
      value: "30.4",
      unit: "PTS",
      avatar: "https://api.sofascore.app/api/v1/player/349238/image"
    },
    {
      position: 3,
      playerName: "Shai Gilgeous-Alexander",
      teamId: "oklahoma-city-thunder",
      value: "30.1",
      unit: "PTS",
      avatar: "https://api.sofascore.app/api/v1/player/925203/image"
    },
    {
      position: 4,
      playerName: "Jalen Brunson",
      teamId: "new-york-knicks",
      value: "28.7",
      unit: "PTS",
      avatar: "https://api.sofascore.app/api/v1/player/835002/image"
    },
    {
      position: 5,
      playerName: "Jayson Tatum",
      teamId: "boston-celtics",
      value: "26.9",
      unit: "PTS",
      avatar: "https://api.sofascore.app/api/v1/player/882194/image"
    }
  ];
  res.json(scorers);
});

app.get('/api/basketball/highlights/week', (req, res) => {
  const data = getBasketballData();
  res.json(data ? data.data.weeklyHighlight : {});
});

app.get('/api/basketball/news', (req, res) => {
  const data = getBasketballData();
  res.json(data ? data.data.featuredNews : []);
});

app.get('/api/basketball/league/stats', (req, res) => {
  const data = getBasketballData();
  res.json(data ? data.data.leagueStats : []);
});

app.get('/api/basketball/shortcuts', (req, res) => {
  const data = getBasketballData();
  res.json(data ? data.data.bottomShortcuts : []);
});

// 2. Matches endpoint: get scheduled matches for today (or playoff date 2026-06-10)
app.get('/api/matches', async (req, res) => {
  try {
    const today = new Date().toISOString().split('T')[0];
    const url = `https://sportapi7.p.rapidapi.com/api/v1/sport/ice-hockey/scheduled-events/${today}`;
    console.log(`[API] Buscando jogos reais de hoje (${today}) no RapidAPI...`);
    const response = await axiosInstance.get(url, { headers: apiHeaders });
    const events = response.data.events || [];
    
    if (events.length > 0) {
      const mapped = events.map(ev => ({
        id: ev.id.toString(),
        date: 'Hoje',
        time: new Date(ev.startTimestamp * 1000).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        homeTeamId: ev.homeTeam.slug,
        awayTeamId: ev.awayTeam.slug,
        arena: ev.venue ? ev.venue.name : 'Arena',
        status: ev.status ? ev.status.type : 'scheduled'
      }));
      return res.json(mapped);
    }

    // Fallback: If no matches today, fetch NHL Playoff matches from June 10, 2026 (the active playoffs date)
    const playoffDate = '2026-06-10';
    const playoffUrl = `https://sportapi7.p.rapidapi.com/api/v1/sport/ice-hockey/scheduled-events/${playoffDate}`;
    console.log(`[API] Sem jogos hoje. Buscando jogos do dia ${playoffDate} no RapidAPI...`);
    const playoffRes = await axiosInstance.get(playoffUrl, { headers: apiHeaders });
    const playoffEvents = playoffRes.data.events || [];
    
    if (playoffEvents.length > 0) {
      const mapped = playoffEvents.map(ev => ({
        id: ev.id.toString(),
        date: '10 Jun',
        time: new Date(ev.startTimestamp * 1000).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        homeTeamId: ev.homeTeam.slug,
        awayTeamId: ev.awayTeam.slug,
        arena: ev.venue ? ev.venue.name : 'Arena',
        status: ev.status ? ev.status.type : 'scheduled'
      }));
      return res.json(mapped);
    }
    
    throw new Error('No events found for scheduled dates');
  } catch (err) {
    console.error('⚠️ Erro ao buscar jogos da API:', err.message);
    console.log('ℹ️ Usando dados locais como fallback para /api/matches.');
    const data = getHockeyData();
    res.json(data ? data.data.matches : []);
  }
});

// 3. Standings endpoint: get NHL total league standings
app.get('/api/standings', async (req, res) => {
  try {
    const url = `https://sportapi7.p.rapidapi.com/api/v1/unique-tournament/234/season/78476/standings/total`;
    console.log(`[API] Buscando classificação real no RapidAPI...`);
    const response = await axiosInstance.get(url, { headers: apiHeaders });
    const standings = response.data.standings || [];
    const totalStanding = standings.find(s => s.type === 'total') || standings[0];
    
    if (totalStanding && totalStanding.rows) {
      const mapped = totalStanding.rows.slice(0, 8).map(row => ({
        position: row.position,
        teamId: row.team.slug,
        games: row.matches,
        wins: row.wins,
        losses: row.losses,
        points: row.points
      }));
      return res.json(mapped);
    }
    throw new Error('Total standings row not found in response');
  } catch (err) {
    console.error('⚠️ Erro ao buscar classificação da API:', err.message);
    console.log('ℹ️ Usando dados locais como fallback para /api/standings.');
    const data = getHockeyData();
    res.json(data ? data.data.standings : []);
  }
});

// 4. Top scorers endpoint
app.get('/api/players/top-scorers', async (req, res) => {
  try {
    // Attempt SofaScore top-players goals endpoint
    const url = `https://sportapi7.p.rapidapi.com/api/v1/unique-tournament/234/season/78476/top-players/goals`;
    console.log(`[API] Buscando artilheiros reais no RapidAPI...`);
    const response = await axiosInstance.get(url, { headers: apiHeaders });
    const topPlayers = response.data.topPlayers || [];
    
    if (topPlayers.length > 0) {
      const mapped = topPlayers.slice(0, 5).map((tp, idx) => ({
        position: idx + 1,
        playerName: tp.player.name,
        teamId: tp.team.slug,
        goals: tp.statistics.goals,
        avatar: tp.player.id ? `https://api.sofascore.app/api/v1/player/${tp.player.id}/image` : ''
      }));
      return res.json(mapped);
    }
    throw new Error('No top players found in response');
  } catch (err) {
    console.error('⚠️ Erro ao buscar artilheiros da API:', err.message);
    console.log('ℹ️ Usando dados locais como fallback para /api/players/top-scorers.');
    const data = getHockeyData();
    res.json(data ? data.data.topScorers : []);
  }
});

// 5. Calendar endpoint
app.get('/api/calendar', async (req, res) => {
  try {
    const playoffDate = '2026-06-10';
    const url = `https://sportapi7.p.rapidapi.com/api/v1/sport/ice-hockey/scheduled-events/${playoffDate}`;
    console.log(`[API] Buscando calendário real no RapidAPI...`);
    const response = await axiosInstance.get(url, { headers: apiHeaders });
    const events = response.data.events || [];
    
    if (events.length > 0) {
      const mapped = events.slice(0, 6).map(ev => ({
        id: 'cal-' + ev.id,
        date: '10 Jun',
        time: new Date(ev.startTimestamp * 1000).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        homeTeamId: ev.homeTeam.slug,
        awayTeamId: ev.awayTeam.slug,
        arena: ev.venue ? ev.venue.name : 'Arena'
      }));
      return res.json(mapped);
    }
    throw new Error('No calendar events found');
  } catch (err) {
    console.error('⚠️ Erro ao buscar calendário da API:', err.message);
    console.log('ℹ️ Usando dados locais como fallback para /api/calendar.');
    const data = getHockeyData();
    res.json(data ? data.data.leagueCalendar : []);
  }
});

// Local configurations endpoints (no RapidAPI equivalents)
app.get('/api/league/stats', (req, res) => {
  const data = getHockeyData();
  res.json(data ? data.data.leagueStats : []);
});

app.get('/api/news', (req, res) => {
  const data = getHockeyData();
  res.json(data ? data.data.featuredNews : []);
});

app.get('/api/videos/highlights', (req, res) => {
  const data = getHockeyData();
  res.json(data ? data.data.momentHighlight : {});
});

app.get('/api/highlights/bottom', (req, res) => {
  const data = getHockeyData();
  res.json(data ? data.data.bottomHighlights : []);
});

// Original matches endpoints
app.get('/api/partidas', async (req, res) => {
  const sport = req.query.sport && sportSlugs[req.query.sport] ? sportSlugs[req.query.sport] : 'football';
  try {
    const dataFiltro = req.query.data || new Date().toISOString().split('T')[0];
    const url = `https://sportapi7.p.rapidapi.com/api/v1/sport/${sport}/scheduled-events/${dataFiltro}`;
    const response = await axiosInstance.get(url, { headers: apiHeaders });
    const data = response.data;
    res.json(data.events || []);
  } catch (error) {
    console.error('⚠️ ERRO NO SERVIDOR:', error.response ? error.response.data : error.message);
    console.log(`ℹ️ Usando fallback de dados locais para o esporte: ${sport}`);
    
    if (sport === 'ice-hockey') {
      const hockeyData = getHockeyData();
      if (hockeyData && hockeyData.data && hockeyData.data.matches) {
        const mappedMatches = hockeyData.data.matches.map(m => {
          const homeTeam = hockeyData.data.teams.find(t => t.id === m.homeTeamId) || { name: m.homeTeamId };
          const awayTeam = hockeyData.data.teams.find(t => t.id === m.awayTeamId) || { name: m.awayTeamId };
          return {
            id: m.id,
            startTimestamp: Math.floor(new Date().getTime() / 1000) + 7200,
            homeTeam: { name: homeTeam.name },
            awayTeam: { name: awayTeam.name },
            tournament: { name: 'Liga de Hóquei no Gelo' },
            status: { type: 'scheduled' }
          };
        });
        return res.json(mappedMatches);
      }
    }

    // Default mock games for other sports
    const mockMatches = [
      {
        id: 'mock-001',
        startTimestamp: Math.floor(new Date().getTime() / 1000) + 3600,
        homeTeam: { name: 'Time Alfa' },
        awayTeam: { name: 'Time Beta' },
        tournament: { name: 'Copa PowerSport' },
        status: { type: 'inprogress' },
        homeScore: { current: 2 },
        awayScore: { current: 1 }
      },
      {
        id: 'mock-002',
        startTimestamp: Math.floor(new Date().getTime() / 1000) + 7200,
        homeTeam: { name: 'União FC' },
        awayTeam: { name: 'Atlético Club' },
        tournament: { name: 'Liga Principal' },
        status: { type: 'scheduled' }
      }
    ];
    res.json(mockMatches);
  }
});

app.get('/api/partida/:id/jogadores', async (req, res) => {
  const sport = req.query.sport && sportSlugs[req.query.sport] ? sportSlugs[req.query.sport] : 'football';
  try {
    const eventId = req.params.id;
    const url = `https://sportapi7.p.rapidapi.com/api/v1/sport/${sport}/event/${eventId}/lineups`;
    const response = await axiosInstance.get(url, { headers: apiHeaders });
    res.json(response.data);
  } catch (error) {
    console.error(`! Erro ao buscar jogadores para partida ${req.params.id}:`, error.message);
    console.log(`ℹ️ Usando escalação mockada de fallback.`);

    const mockPlayers = {
      home: {
        players: [
          { jerseyNumber: 1, player: { name: 'Silva (G)' }, position: 'Goleiro' },
          { jerseyNumber: 3, player: { name: 'Santos' }, position: 'Defensor' },
          { jerseyNumber: 7, player: { name: 'Oliveira' }, position: 'Meia' },
          { jerseyNumber: 10, player: { name: 'Souza' }, position: 'Atacante' }
        ]
      },
      away: {
        players: [
          { jerseyNumber: 12, player: { name: 'Lima (G)' }, position: 'Goleiro' },
          { jerseyNumber: 4, player: { name: 'Pereira' }, position: 'Defensor' },
          { jerseyNumber: 8, player: { name: 'Costa' }, position: 'Meia' },
          { jerseyNumber: 9, player: { name: 'Rodrigues' }, position: 'Atacante' }
        ]
      }
    };
    res.json(mockPlayers);
  }
});

// ─────────────────────────────────────────
// Volleyball API Endpoints
// ─────────────────────────────────────────

app.get('/api/volleyball/games/upcoming', async (req, res) => {
  try {
    const today = new Date().toISOString().split('T')[0];
    const url = `https://sportapi7.p.rapidapi.com/api/v1/sport/volleyball/scheduled-events/${today}`;
    console.log(`[API] Buscando jogos reais de vôlei hoje (${today}) no RapidAPI...`);
    const response = await axiosInstance.get(url, { headers: apiHeaders });
    const events = (response.data.events || []).filter(e => e.tournament && e.tournament.uniqueTournament && e.tournament.uniqueTournament.id === 1468);
    
    if (events.length > 0) {
      const mapped = events.map(ev => ({
        id: ev.id.toString(),
        date: 'Hoje',
        time: new Date(ev.startTimestamp * 1000).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        homeTeamId: ev.homeTeam.slug,
        awayTeamId: ev.awayTeam.slug,
        arena: ev.venue ? ev.venue.name : 'Arena',
        status: ev.status ? ev.status.type : 'scheduled'
      }));
      return res.json(mapped);
    }

    // Fallback: If no matches today, fetch Superliga Women matches from June 10, 2026
    const playoffDate = '2026-06-10';
    const playoffUrl = `https://sportapi7.p.rapidapi.com/api/v1/sport/volleyball/scheduled-events/${playoffDate}`;
    console.log(`[API] Sem jogos de vôlei hoje. Buscando jogos do dia ${playoffDate} no RapidAPI...`);
    const playoffRes = await axiosInstance.get(playoffUrl, { headers: apiHeaders });
    const playoffEvents = (playoffRes.data.events || []).filter(e => e.tournament && e.tournament.uniqueTournament && e.tournament.uniqueTournament.id === 1468);
    
    if (playoffEvents.length > 0) {
      const mapped = playoffEvents.map(ev => ({
        id: ev.id.toString(),
        date: '10 Jun',
        time: new Date(ev.startTimestamp * 1000).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        homeTeamId: ev.homeTeam.slug,
        awayTeamId: ev.awayTeam.slug,
        arena: ev.venue ? ev.venue.name : 'Arena',
        status: ev.status ? ev.status.type : 'scheduled'
      }));
      return res.json(mapped);
    }
    
    throw new Error('No Superliga Women events found for scheduled dates');
  } catch (err) {
    console.error('⚠️ Erro ao buscar jogos de vôlei da API:', err.message);
    console.log('ℹ️ Usando dados locais como fallback para /api/volleyball/games/upcoming.');
    const data = getVolleyballData();
    res.json(data ? data.data.upcomingGames : []);
  }
});

app.get('/api/volleyball/standings', async (req, res) => {
  try {
    const url = `https://sportapi7.p.rapidapi.com/api/v1/unique-tournament/1468/season/84879/standings/total`;
    console.log(`[API] Buscando classificação de Vôlei no RapidAPI...`);
    const response = await axiosInstance.get(url, { headers: apiHeaders });
    const standings = response.data.standings || [];
    const totalStanding = standings.find(s => s.type === 'total') || standings[0];
    
    if (totalStanding && totalStanding.rows) {
      const mapped = totalStanding.rows.map(row => ({
        position: row.position,
        teamId: row.team.slug,
        games: row.matches,
        wins: row.wins,
        losses: row.losses,
        points: row.points // Superliga points are calculated natively
      }));
      return res.json(mapped);
    }
    throw new Error('No standings rows found');
  } catch (err) {
    console.error('⚠️ Erro ao buscar classificação de vôlei da API:', err.message);
    const data = getVolleyballData();
    res.json(data ? data.data.standings : []);
  }
});

app.get('/api/volleyball/players/top', (req, res) => {
  // Real Superliga Women top players with Sofascore IDs for high-fidelity headshots
  const topPlayers = [
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
  ];
  res.json(topPlayers);
});

app.get('/api/volleyball/highlights/round', (req, res) => {
  const data = getVolleyballData();
  res.json(data ? data.data.roundHighlight : {});
});

app.get('/api/volleyball/highlights/best-moments', (req, res) => {
  const data = getVolleyballData();
  res.json(data ? data.data.bestMoments : []);
});

app.get('/api/volleyball/news', (req, res) => {
  const data = getVolleyballData();
  res.json(data ? data.data.featuredNews : []);
});

app.get('/api/volleyball/calendar', (req, res) => {
  const data = getVolleyballData();
  res.json(data ? data.data.leagueCalendar : []);
});

app.get('/api/volleyball/shortcuts', (req, res) => {
  const data = getVolleyballData();
  res.json(data ? data.data.bottomShortcuts : []);
});

app.get('/api/volleyball/league/stats', (req, res) => {
  const data = getVolleyballData();
  res.json(data ? data.data.leagueStats : []);
});

// ─────────────────────────────────────────
// American Football API Endpoints
// ─────────────────────────────────────────

app.get('/api/american-football/games/next', async (req, res) => {
  try {
    const today = new Date().toISOString().split('T')[0];
    let url = `https://sportapi7.p.rapidapi.com/api/v1/sport/american-football/scheduled-events/${today}`;
    let response = await axiosInstance.get(url, { headers: apiHeaders });
    let events = (response.data.events || []).filter(e => e.tournament && e.tournament.uniqueTournament && e.tournament.uniqueTournament.id === 942);
    
    if (events.length === 0) {
      const playoffDate = '2026-06-10';
      url = `https://sportapi7.p.rapidapi.com/api/v1/sport/american-football/scheduled-events/${playoffDate}`;
      response = await axiosInstance.get(url, { headers: apiHeaders });
      events = (response.data.events || []).filter(e => e.tournament && e.tournament.uniqueTournament && e.tournament.uniqueTournament.id === 942);
    }

    if (events.length > 0) {
      const ev = events[0];
      return res.json({
        id: ev.id.toString(),
        date: new Date(ev.startTimestamp * 1000).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' }).toUpperCase(),
        time: new Date(ev.startTimestamp * 1000).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        stadium: ev.venue ? ev.venue.name : 'Stadium',
        homeTeamId: ev.homeTeam.slug,
        awayTeamId: ev.awayTeam.slug,
        status: ev.status ? ev.status.type : 'scheduled'
      });
    }
    throw new Error('No upcoming NFL games found');
  } catch (err) {
    console.error('⚠️ Erro ao buscar próximo jogo de futebol americano da API:', err.message);
    const data = getAmericanFootballData();
    res.json(data ? data.data.nextGame : {});
  }
});

app.get('/api/american-football/games/calendar', async (req, res) => {
  try {
    const today = new Date().toISOString().split('T')[0];
    const url = `https://sportapi7.p.rapidapi.com/api/v1/sport/american-football/scheduled-events/${today}`;
    console.log(`[API] Buscando jogos de futebol americano hoje no RapidAPI...`);
    const response = await axiosInstance.get(url, { headers: apiHeaders });
    const events = (response.data.events || []).filter(e => e.tournament && e.tournament.uniqueTournament && e.tournament.uniqueTournament.id === 942);
    
    if (events.length > 0) {
      const mapped = events.map(ev => ({
        id: ev.id.toString(),
        date: 'Hoje',
        time: new Date(ev.startTimestamp * 1000).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        homeTeamId: ev.homeTeam.slug,
        awayTeamId: ev.awayTeam.slug,
        status: ev.status ? ev.status.type : 'scheduled'
      }));
      return res.json(mapped);
    }

    const playoffDate = '2026-06-10';
    const playoffUrl = `https://sportapi7.p.rapidapi.com/api/v1/sport/american-football/scheduled-events/${playoffDate}`;
    console.log(`[API] Sem jogos hoje. Buscando jogos do dia ${playoffDate} no RapidAPI...`);
    const playoffRes = await axiosInstance.get(playoffUrl, { headers: apiHeaders });
    const playoffEvents = (playoffRes.data.events || []).filter(e => e.tournament && e.tournament.uniqueTournament && e.tournament.uniqueTournament.id === 942);
    
    if (playoffEvents.length > 0) {
      const mapped = playoffEvents.map(ev => ({
        id: ev.id.toString(),
        date: '10 Jun',
        time: new Date(ev.startTimestamp * 1000).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        homeTeamId: ev.homeTeam.slug,
        awayTeamId: ev.awayTeam.slug,
        status: ev.status ? ev.status.type : 'scheduled'
      }));
      return res.json(mapped);
    }
    throw new Error('No NFL events found for scheduled dates');
  } catch (err) {
    console.error('⚠️ Erro ao buscar jogos de futebol americano da API:', err.message);
    const data = getAmericanFootballData();
    res.json(data ? data.data.gameCalendar : []);
  }
});

app.get('/api/american-football/standings', async (req, res) => {
  try {
    const url = `https://sportapi7.p.rapidapi.com/api/v1/unique-tournament/942/season/61733/standings/total`;
    console.log(`[API] Buscando classificação de Futebol Americano no RapidAPI...`);
    const response = await axiosInstance.get(url, { headers: apiHeaders });
    const standings = response.data.standings || [];
    const totalStanding = standings.find(s => s.type === 'total') || standings[0];
    
    if (totalStanding && totalStanding.rows) {
      const mapped = totalStanding.rows.map(row => ({
        position: row.position,
        conference: row.team.conference ? row.team.conference.name : 'Norte',
        teamId: row.team.slug,
        games: row.matches || (row.wins + row.losses + (row.draws || 0)),
        wins: row.wins,
        losses: row.losses,
        percentage: row.percentage || ((row.wins / (row.matches || 1)) * 100).toFixed(1),
        points: row.points || row.wins * 2
      }));
      return res.json(mapped);
    }
    throw new Error('No standings rows found');
  } catch (err) {
    console.error('⚠️ Erro ao buscar classificação de futebol americano da API:', err.message);
    const data = getAmericanFootballData();
    res.json(data ? data.data.standings : []);
  }
});

app.get('/api/american-football/highlights/best-plays', (req, res) => {
  const data = getAmericanFootballData();
  res.json(data ? data.data.bestPlays : {});
});

app.get('/api/american-football/players/highlights', (req, res) => {
  const data = getAmericanFootballData();
  res.json(data ? data.data.playerHighlights : []);
});

app.get('/api/american-football/news', (req, res) => {
  const data = getAmericanFootballData();
  res.json(data ? data.data.featuredNews : []);
});

app.get('/api/american-football/league/stats', (req, res) => {
  const data = getAmericanFootballData();
  res.json(data ? data.data.leagueStats : []);
});

app.get('/api/american-football/players/scorers', (req, res) => {
  const data = getAmericanFootballData();
  res.json(data ? data.data.topScorers : []);
});

app.get('/api/american-football/shortcuts', (req, res) => {
  const data = getAmericanFootballData();
  res.json(data ? data.data.bottomShortcuts : []);
});

// ─────────────────────────────────────────
// Fighting (MMA) API Endpoints
// ─────────────────────────────────────────

app.get('/api/fighting/fighters', (req, res) => {
  const data = getFightingData();
  res.json(data ? data.data.fighters : []);
});

app.get('/api/fighting/fights/next', (req, res) => {
  const data = getFightingData();
  res.json(data ? data.data.nextFight : {});
});

app.get('/api/fighting/fights/upcoming', (req, res) => {
  const data = getFightingData();
  res.json(data ? data.data.upcomingFights : []);
});

app.get('/api/fighting/ranking/official', (req, res) => {
  const data = getFightingData();
  let ranking = data ? data.data.officialRanking : [];
  
  const category = req.query.category;
  if (category && ranking.length > 0) {
    if (category === 'pound-for-pound') {
      ranking = [
        { position: 1, fighterId: "makhachev", country: "Rússia", record: "27-1-0", category: "Leve" },
        { position: 2, fighterId: "pereira", country: "Brasil", record: "12-0", category: "Médio" },
        { position: 3, fighterId: "oliveira", country: "Brasil", record: "34-10-0", category: "Leve" },
        { position: 4, fighterId: "volkanovski", country: "Austrália", record: "26-4-0", category: "Pena" },
        { position: 5, fighterId: "whittaker", country: "Austrália", record: "27-7-0", category: "Médio" }
      ];
    } else if (category === 'lightweight' || category === 'leve') {
      ranking = data.data.officialRanking;
    } else if (category === 'middleweight' || category === 'medio') {
      ranking = [
        { position: 1, fighterId: "pereira", country: "Brasil", record: "12-0", category: "Médio" },
        { position: 2, fighterId: "adesanya", country: "Nigéria", record: "24-4-0", category: "Médio" },
        { position: 3, fighterId: "whittaker", country: "Austrália", record: "27-7-0", category: "Médio" },
        { position: 4, fighterId: "chimaev", country: "Suécia", record: "13-0-0", category: "Médio" }
      ];
    } else if (category === 'light-heavyweight' || category === 'meio-pesado') {
      ranking = [
        { position: 1, fighterId: "ankalaev", country: "Rússia", record: "19-1-1", category: "Meio-Pesado" },
        { position: 2, fighterId: "blachowicz", country: "Polônia", record: "29-10-1", category: "Meio-Pesado" }
      ];
    } else if (category === 'heavyweight' || category === 'pesado') {
      ranking = [
        { position: 1, fighterId: "jones", country: "EUA", record: "27-1-0", category: "Pesado" },
        { position: 2, fighterId: "aspinall", country: "Inglaterra", record: "14-3-0", category: "Pesado" },
        { position: 3, fighterId: "gane", country: "França", record: "12-2-0", category: "Pesado" }
      ];
    }
  }
  res.json(ranking);
});

app.get('/api/fighting/highlights', (req, res) => {
  const data = getFightingData();
  res.json(data ? data.data.highlights : []);
});

app.get('/api/fighting/league/stats', (req, res) => {
  const data = getFightingData();
  res.json(data ? data.data.leagueStats : []);
});

app.get('/api/fighting/news', (req, res) => {
  const data = getFightingData();
  res.json(data ? data.data.featuredNews : []);
});

app.get('/api/fighting/events/featured', (req, res) => {
  const data = getFightingData();
  res.json(data ? data.data.featuredEvents : []);
});

app.get('/api/fighting/athletes/trending', (req, res) => {
  const data = getFightingData();
  res.json(data ? data.data.trendingAthletes : []);
});

app.get('/api/fighting/shortcuts', (req, res) => {
  const data = getFightingData();
  res.json(data ? data.data.bottomShortcuts : []);
});


app.listen(PORT, () => {
  console.log(`⚽ Sport360 rodando em http://localhost:${PORT}`);
});