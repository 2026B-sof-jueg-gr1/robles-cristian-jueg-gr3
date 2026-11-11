/**
 * Exporta press/cover.html a press/cover-630x500.png (1260×1000, 2x).
 *
 * Uso:
 *   npm i -D playwright && npx playwright install chromium
 *   node press/render-cover.js
 *
 * La portada se dibuja entera con HTML + SVG: no hay imágenes de terceros.
 */
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 630, height: 500 },
    deviceScaleFactor: 2
  });

  const file = 'file://' + path.resolve(__dirname, 'cover.html').replace(/\\/g, '/');
  await page.goto(file, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1200); // fuentes web

  const cover = await page.$('.cover');
  await cover.screenshot({ path: path.resolve(__dirname, 'cover-630x500.png') });

  await browser.close();
  console.log('Listo: press/cover-630x500.png');
})();
