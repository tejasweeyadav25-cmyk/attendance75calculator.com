// Generates public/og-image.png from an inline SVG built with the site's
// existing theme colors (see src/styles/app.css --theme tokens).
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, "..", "public", "og-image.png");

const WIDTH = 1200;
const HEIGHT = 630;

// Theme tokens copied from src/styles/app.css @theme block.
const colors = {
	canvas: "#171717", // --color-primary / dark background
	onPrimary: "#ffffff", // --color-on-primary
	link: "#0070f3", // --color-link (accent)
	faint: "#a1a1a1", // --color-faint (muted footer text)
};

const fontFamily = "Arial, Helvetica, sans-serif"; // matches --font-sans fallback stack

const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
	<rect width="${WIDTH}" height="${HEIGHT}" fill="${colors.canvas}" />

	<!-- Decorative badge, kept clear of the safe-area text below -->
	<circle cx="1080" cy="110" r="50" fill="${colors.link}" />
	<text x="1080" y="123" font-family="${fontFamily}" font-size="32" font-weight="700" fill="${colors.onPrimary}" text-anchor="middle">75%</text>

	<text x="100" y="272" font-family="${fontFamily}" font-size="68" font-weight="700" fill="${colors.onPrimary}">How many classes</text>
	<text x="100" y="352" font-family="${fontFamily}" font-size="68" font-weight="700" fill="${colors.onPrimary}">can you bunk?</text>

	<text x="100" y="422" font-family="${fontFamily}" font-size="42" font-weight="500" fill="${colors.link}">Free 75% Attendance Calculator</text>

	<text x="100" y="540" font-family="${fontFamily}" font-size="40" font-weight="400" fill="${colors.faint}">attendance75calculator.com</text>
</svg>
`;

await mkdir(dirname(outPath), { recursive: true });
await sharp(Buffer.from(svg)).resize(WIDTH, HEIGHT).png({ compressionLevel: 9 }).toFile(outPath);

const stats = await sharp(outPath).metadata();
console.log(`Wrote ${outPath} (${stats.width}x${stats.height})`);

const bytes = (await import("node:fs")).statSync(outPath).size;
console.log(`Size: ${(bytes / 1024).toFixed(1)} KB`);
