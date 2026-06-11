/* =====================================================
   POWER SPORT - main.js
   ===================================================== */

// ─────────────────────────────────────────
// Sport card scroll → jump to partidas
// ─────────────────────────────────────────
document.querySelectorAll('.sport-card').forEach(card => {
  card.addEventListener('click', () => {
    const sport = card.dataset.sport;
    if (sport === 'ice-hockey') {
      window.location.href = window.PowerSportPaths ? window.PowerSportPaths.sports.hockey.html : 'pages/hockey/hockey.html';
      return;
    }
    if (sport === 'basketball') {
      window.location.href = window.PowerSportPaths ? window.PowerSportPaths.sports.basketball.html : 'pages/basketball/basketball.html';
      return;
    }
    if (sport === 'volleyball') {
      window.location.href = window.PowerSportPaths ? window.PowerSportPaths.sports.volleyball.html : 'pages/volleyball/volleyball.html';
      return;
    }
    if (sport === 'american-football') {
      window.location.href = window.PowerSportPaths ? window.PowerSportPaths.sports['american-football'].html : 'pages/american-football/american-football.html';
      return;
    }
    if (sport === 'mma') {
      window.location.href = window.PowerSportPaths ? window.PowerSportPaths.sports.fighting.html : 'pages/fighting/fighting.html';
      return;
    }
    const sportSelect = document.getElementById('sport-select');
    if (sportSelect && sport) sportSelect.value = sport;
    document.getElementById('partidas').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => buscarJogos(), 400);
  });
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); }
  });
});

// Also bind the hockey athlete image to navigate to the hockey page
const hockeyAthlete = document.querySelector('.athlete-hockey');
if (hockeyAthlete) {
  hockeyAthlete.style.cursor = 'pointer';
  hockeyAthlete.addEventListener('click', () => {
    window.location.href = window.PowerSportPaths ? window.PowerSportPaths.sports.hockey.html : 'pages/hockey/hockey.html';
  });
}

// Also bind the basketball athlete image to navigate to the basketball page
const basketballAthlete = document.querySelector('.athlete-basketball');
if (basketballAthlete) {
  basketballAthlete.style.cursor = 'pointer';
  basketballAthlete.addEventListener('click', () => {
    window.location.href = window.PowerSportPaths ? window.PowerSportPaths.sports.basketball.html : 'pages/basketball/basketball.html';
  });
}

// Also bind the volleyball athlete image to navigate to the volleyball page
const volleyballAthlete = document.querySelector('.athlete-volleyball');
if (volleyballAthlete) {
  volleyballAthlete.style.cursor = 'pointer';
  volleyballAthlete.addEventListener('click', () => {
    window.location.href = window.PowerSportPaths ? window.PowerSportPaths.sports.volleyball.html : 'pages/volleyball/volleyball.html';
  });
}

// Also bind the american football athlete image to navigate to the american football page
const americanFootballAthlete = document.querySelector('.athlete-americanfb');
if (americanFootballAthlete) {
  americanFootballAthlete.style.cursor = 'pointer';
  americanFootballAthlete.addEventListener('click', () => {
    window.location.href = window.PowerSportPaths ? window.PowerSportPaths.sports['american-football'].html : 'pages/american-football/american-football.html';
  });
}

// Also bind the MMA athlete image to navigate to the fighting page
const mmaAthlete = document.querySelector('.athlete-mma');
if (mmaAthlete) {
  mmaAthlete.style.cursor = 'pointer';
  mmaAthlete.addEventListener('click', () => {
    window.location.href = window.PowerSportPaths ? window.PowerSportPaths.sports.fighting.html : 'pages/fighting/fighting.html';
  });
}

// ─────────────────────────────────────────
// Smooth scroll for CTA button
// ─────────────────────────────────────────
const btnAcessar = document.getElementById('btn-acessar');
if (btnAcessar) {
  btnAcessar.addEventListener('click', e => {
    e.preventDefault();
    const sportCards = document.getElementById('sport-cards');
    if (sportCards) {
      sportCards.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// ─────────────────────────────────────────
// Matches API
// ─────────────────────────────────────────
const statusEl  = document.getElementById('status-api');
const gridEl    = document.getElementById('grid-jogos');
const btnBuscar = document.getElementById('btn-buscar');
const dataInput = document.getElementById('data-jogo');
const sportSel  = document.getElementById('sport-select');

// Set default date to today
const hoje = new Date().toISOString().split('T')[0];
if (dataInput) dataInput.value = hoje;

function setStatus(msg, tipo) {
  if (!statusEl) return;
  statusEl.textContent = msg;
  statusEl.className = 'status-api ' + (tipo || '');
}

function formatarHora(timestamp) {
  if (!timestamp) return '--:--';
  const d = new Date(timestamp * 1000);
  return d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

function getStatusLabel(event) {
  const s = event.status && event.status.type;
  if (s === 'inprogress') return { text: '● AO VIVO', cls: 'status-live' };
  if (s === 'finished')   return { text: '✓ ENCERRADO', cls: 'status-finish' };
  return { text: '⏱ AGENDADO', cls: 'status-sched' };
}

function renderJogos(eventos) {
  if (!gridEl) return;
  gridEl.innerHTML = '';
  if (!eventos || eventos.length === 0) {
    gridEl.innerHTML = '<div class="estado-vazio">NENHUM JOGO ENCONTRADO PARA ESTE FILTRO.</div>';
    return;
  }
  eventos.forEach(ev => {
    const homeScore = ev.homeScore && ev.homeScore.current != null ? ev.homeScore.current : '';
    const awayScore = ev.awayScore && ev.awayScore.current != null ? ev.awayScore.current : '';
    const placar = (homeScore !== '' && awayScore !== '') ? `${homeScore} — ${awayScore}` : 'VS';
    const hora  = formatarHora(ev.startTimestamp);
    const liga  = ev.tournament ? ev.tournament.name : '';
    const { text: statusTxt, cls: statusCls } = getStatusLabel(ev);
    const sportSlug = sportSel ? sportSel.value : 'football';

    const card = document.createElement('div');
    card.className = 'jogo-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `${ev.homeTeam.name} vs ${ev.awayTeam.name}`);
    card.innerHTML = `
      <div class="jogo-hora">${hora}</div>
      <div class="jogo-times">
        <span class="jogo-time-nome">${ev.homeTeam.name}</span>
        <span class="jogo-vs">${placar}</span>
        <span class="jogo-time-nome">${ev.awayTeam.name}</span>
      </div>
      ${liga ? `<div class="jogo-liga">${liga}</div>` : ''}
      <div style="text-align:center;">
        <span class="jogo-status ${statusCls}">${statusTxt}</span>
      </div>
    `;
    card.addEventListener('click', () => carregarJogadores(ev.id, ev, sportSlug));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); }
    });
    gridEl.appendChild(card);
  });
}

async function buscarJogos() {
  if (!gridEl) return;
  const data  = dataInput  ? dataInput.value  : hoje;
  const sport = sportSel   ? sportSel.value   : 'football';
  if (!data) { setStatus('Selecione uma data.', 'erro'); return; }

  gridEl.innerHTML = '<div class="estado-carregando">CARREGANDO JOGOS...</div>';
  setStatus('Conectando...', 'carregando');

  try {
    const res  = await fetch(`/api/partidas?data=${data}&sport=${encodeURIComponent(sport)}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data2 = await res.json();
    if (data2.erro) throw new Error(data2.erro);
    setStatus(`${data2.length} jogo(s) encontrado(s)`, 'ok');
    renderJogos(data2);
  } catch (err) {
    console.error(err);
    setStatus('Erro ao buscar jogos', 'erro');
    gridEl.innerHTML = `<div class="estado-vazio">ERRO: ${err.message}</div>`;
  }
}

if (btnBuscar) btnBuscar.addEventListener('click', buscarJogos);
if (dataInput) dataInput.addEventListener('change', buscarJogos);
if (sportSel)  sportSel.addEventListener('change',  buscarJogos);

// ─────────────────────────────────────────
// Lineup
// ─────────────────────────────────────────
const secaoJogadores = document.getElementById('secao-jogadores');
const btnVoltar      = document.getElementById('btn-voltar');
const tituloPartida  = document.getElementById('titulo-partida');
const nomeTimeCasa   = document.getElementById('nome-time-casa');
const nomeTimeFora   = document.getElementById('nome-time-fora');
const gridCasa       = document.getElementById('grid-time-casa');
const gridFora       = document.getElementById('grid-time-fora');

function renderJogadores(lista, container) {
  container.innerHTML = '';
  if (!lista || lista.length === 0) {
    container.innerHTML = '<p style="color:#555; font-size:0.85rem;">Escalação não disponível.</p>';
    return;
  }
  lista.forEach(p => {
    const card = document.createElement('div');
    card.className = 'jogador-card';
    const numero   = p.jerseyNumber || p.shirtNumber || '—';
    const nome     = p.player ? p.player.name : (p.name || '—');
    const posicao  = p.position || (p.player && p.player.position) || '';
    card.innerHTML = `
      <div class="jogador-numero">${numero}</div>
      <div class="jogador-nome">${nome}</div>
      ${posicao ? `<div class="jogador-posicao">${posicao}</div>` : ''}
    `;
    container.appendChild(card);
  });
}

async function carregarJogadores(id, evento, sport) {
  if (!secaoJogadores) return;
  tituloPartida.textContent = `${evento.homeTeam.name} × ${evento.awayTeam.name}`;
  nomeTimeCasa.textContent  = evento.homeTeam.name;
  nomeTimeFora.textContent  = evento.awayTeam.name;
  gridCasa.innerHTML = '<p style="color:#FFD700; font-size:0.9rem;">Carregando...</p>';
  gridFora.innerHTML = '';

  if (gridEl) {
    const section = gridEl.closest('.partidas-section');
    if (section) {
      const matchGrid = section.querySelector('.grid-jogos');
      if (matchGrid) matchGrid.style.display = 'none';
    }
  }
  secaoJogadores.style.display = 'block';
  secaoJogadores.scrollIntoView({ behavior: 'smooth' });

  try {
    const res  = await fetch(`/api/partida/${id}/jogadores?sport=${encodeURIComponent(sport)}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    const home = data.home && data.home.players ? data.home.players : [];
    const away = data.away && data.away.players ? data.away.players : [];
    renderJogadores(home, gridCasa);
    renderJogadores(away, gridFora);
  } catch (err) {
    console.error(err);
    gridCasa.innerHTML = `<p style="color:#FF1E1E; font-size:0.85rem;">Erro: ${err.message}</p>`;
    gridFora.innerHTML = '';
  }
}

if (btnVoltar) {
  btnVoltar.addEventListener('click', () => {
    secaoJogadores.style.display = 'none';
    if (gridEl) {
      gridEl.style.display = 'grid';
      const section = document.getElementById('partidas');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
}

// ─────────────────────────────────────────
// Load today's football matches on start
// ─────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => buscarJogos());
