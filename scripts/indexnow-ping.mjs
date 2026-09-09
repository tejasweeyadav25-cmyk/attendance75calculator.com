// Notifies Bing/Yandex (and any other IndexNow-participating engine) that
// the site's URLs changed, via the IndexNow protocol: https://www.indexnow.org
//
// Uses the key file already published at public/<key>.txt — its filename
// (minus extension) IS the key, and its content must equal the key, which
// is how IndexNow verifies we own the host. Reads the real URL list from
// public/sitemap.xml so this never submits anything not already indexable.
//
// Runs after every deploy (see package.json "deploy" script). Never throws:
// a failed ping should not fail a deploy that otherwise succeeded.
import { readFile, readdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");
const host = "attendance75calculator.com";

async function findKeyFile() {
	const files = await readdir(publicDir);
	const keyFile = files.find((f) => /^[a-f0-9]{32}\.txt$/i.test(f));
	if (!keyFile) throw new Error("No IndexNow key file (public/<32-hex-char-key>.txt) found.");
	const key = keyFile.replace(/\.txt$/i, "");
	const content = (await readFile(join(publicDir, keyFile), "utf8")).trim();
	if (content !== key) throw new Error(`IndexNow key file content ("${content}") does not match its filename ("${key}").`);
	return key;
}

function extractSitemapUrls(xml) {
	return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

async function main() {
	const key = await findKeyFile();
	const sitemapXml = await readFile(join(publicDir, "sitemap.xml"), "utf8");
	const urlList = extractSitemapUrls(sitemapXml);

	if (urlList.length === 0) {
		console.warn("[indexnow] No URLs found in sitemap.xml — nothing to submit.");
		return;
	}

	const body = JSON.stringify({
		host,
		key,
		keyLocation: `https://${host}/${key}.txt`,
		urlList,
	});

	const res = await fetch("https://api.indexnow.org/indexnow", {
		method: "POST",
		headers: { "Content-Type": "application/json; charset=utf-8" },
		body,
	});

	if (res.ok) {
		console.log(`[indexnow] Submitted ${urlList.length} URLs — status ${res.status}.`);
	} else {
		console.warn(`[indexnow] Submission returned status ${res.status}: ${await res.text()}`);
	}
}

main().catch((err) => {
	console.warn(`[indexnow] Skipped — ${err.message}`);
});
