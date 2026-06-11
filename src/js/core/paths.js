/* ==========================================================================
   POWERSPORT - CENTRAL PATH CONSTRAINTS & ROUTING HELPERS (paths.js)
   ========================================================================== */

const PowerSportPaths = {
  // Centralized mappings for sport page configurations
  sports: {
    hockey: {
      id: 'hockey',
      name: 'Hóquei no Gelo',
      html: 'pages/hockey/hockey.html',
      css: 'src/css/pages/hockey.css',
      js: 'src/js/pages/hockey.js',
      json: 'src/data/hockey/hockey-page.json',
      assets: 'assets/hockey/'
    },
    basketball: {
      id: 'basketball',
      name: 'Basquete',
      html: 'pages/basketball/basketball.html',
      css: 'src/css/pages/basketball.css',
      js: 'src/js/pages/basketball.js',
      json: 'src/data/basketball/basketball-page.json',
      assets: 'assets/basketball/'
    },
    volleyball: {
      id: 'volleyball',
      name: 'Vôlei',
      html: 'pages/volleyball/volleyball.html',
      css: 'src/css/pages/volleyball.css',
      js: 'src/js/pages/volleyball.js',
      json: 'src/data/volleyball/volleyball-page.json',
      assets: 'assets/volleyball/'
    },
    'american-football': {
      id: 'american-football',
      name: 'Futebol Americano',
      html: 'pages/american-football/american-football.html',
      css: 'src/css/pages/american-football.css',
      js: 'src/js/pages/american-football.js',
      json: 'src/data/american-football/american-football-page.json',
      assets: 'assets/american-football/'
    },
    fighting: {
      id: 'fighting',
      name: 'Lutas',
      html: 'pages/fighting/fighting.html',
      css: 'src/css/pages/fighting.css',
      js: 'src/js/pages/fighting.js',
      json: 'src/data/fighting/fighting-page.json',
      assets: 'assets/fighting/'
    }
  },

  // Helper to generate correct relative path from current depth to project root
  // E.g. index.html at root is depth 0 -> prefix is './'
  // E.g. index.html in public/ is depth 1 -> prefix is '../'
  // E.g. sports pages in public/pages/hockey/ is depth 3 -> prefix is '../../../'
  getPrefix(depth = 3) {
    if (depth === 0) return './';
    return '../'.repeat(depth);
  }
};

// Export for server or browser scope
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PowerSportPaths;
} else {
  window.PowerSportPaths = PowerSportPaths;
}
