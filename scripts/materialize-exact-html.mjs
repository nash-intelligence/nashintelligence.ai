import { existsSync, mkdirSync, readFileSync, statSync, unlinkSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const pages = [
  ["site-nash-platfrom.html", ["index.html", "platform.html", "platform/index.html"]],
  ["site-nash-axis.html", ["axis.html", "axis/index.html"]],
  ["site-nash-deploy.html", ["deploy.html", "deploy/index.html"]],
  ["site-nash-edge.html", ["edge.html", "edge/index.html"]],
  ["site-nash-mind.html", ["mind.html", "mind/index.html"]],
  ["site-nash-usecases.html", ["use-cases.html", "use-cases/index.html"]],
];

const basePath = (process.env.GITHUB_PAGES_BASE_PATH || "").replace(/\/$/, "");

function withBasePath(html) {
  if (!basePath) {
    return html;
  }

  return html
    .replace(/href="\/(favicon(?:-light|-dark)?\.(?:ico|png)|apple-icon(?:-light|-dark)\.png)"/g, (_match, asset) => `href="${basePath}/${asset}"`)
    .replace(/href="\/(fonts\/[^"]+)"/g, (_match, asset) => `href="${basePath}/${asset}"`)
    .replace(/url\("\/(fonts\/[^"]+)"\)/g, (_match, asset) => `url("${basePath}/${asset}")`)
    .replace(/href="\/(edge|deploy|mind|axis|use-cases)?\/?"/g, (_match, route = "") => {
      const suffix = route ? `/${route}/` : "/";
      return `href="${basePath}${suffix}"`;
    })
    .replace(/src="\/(nash\/[^"]+)"/g, (_match, asset) => `src="${basePath}/${asset}"`);
}

for (const [source, outputs] of pages) {
  const sourcePath = join(process.cwd(), "src", "exact-html", source);
  const html = withBasePath(readFileSync(sourcePath, "utf8"));

  for (const output of outputs) {
    const outputPath = join(process.cwd(), "out", output);
    const outputDir = dirname(outputPath);

    if (existsSync(outputDir) && statSync(outputDir).isFile()) {
      unlinkSync(outputDir);
    }

    mkdirSync(outputDir, { recursive: true });
    writeFileSync(outputPath, html);
  }
}

console.log("Materialized exact supplied HTML into out/ canonical routes.");
