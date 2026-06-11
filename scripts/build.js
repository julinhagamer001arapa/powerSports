const fs = require('fs');
const path = require('path');

/**
 * Recursively copy a directory
 */
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const files = fs.readdirSync(src);
  files.forEach(file => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    const stat = fs.statSync(srcPath);

    if (stat.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

/**
 * Build script for Vercel deployment
 * Copies CSS, JS, and assets to public folder
 */
console.log('🔨 Building project for deployment...');

const rootDir = path.join(__dirname, '..');

// Copy src/css to public/src/css
console.log('📋 Copying CSS files...');
copyDir(
  path.join(rootDir, 'src', 'css'),
  path.join(rootDir, 'public', 'src', 'css')
);

// Copy src/js to public/src/js
console.log('📋 Copying JavaScript files...');
copyDir(
  path.join(rootDir, 'src', 'js'),
  path.join(rootDir, 'public', 'src', 'js')
);

// Copy assets to public/assets
console.log('📋 Copying asset files...');
copyDir(
  path.join(rootDir, 'assets'),
  path.join(rootDir, 'public', 'assets')
);

// Copy src/data to public/src/data
console.log('📋 Copying data files...');
copyDir(
  path.join(rootDir, 'src', 'data'),
  path.join(rootDir, 'public', 'src', 'data')
);

console.log('✅ Build completed! All files copied to public folder.');
