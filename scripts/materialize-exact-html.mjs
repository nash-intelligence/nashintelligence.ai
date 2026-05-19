import { copyFileSync, existsSync, mkdirSync, statSync, unlinkSync } from "node:fs";
import { dirname, join } from "node:path";

const pages = [
  ["site-nash-platfrom.html", ["index.html", "platform.html", "platform/index.html"]],
  ["site-nash-axis.html", ["axis.html", "axis/index.html"]],
  ["site-nash-edge.html", ["edge.html", "edge/index.html"]],
  ["site-nash-mind.html", ["mind.html", "mind/index.html"]],
  ["site-nash-usecases.html", ["use-cases.html", "use-cases/index.html"]],
];

for (const [source, outputs] of pages) {
  const sourcePath = join(process.cwd(), "src", "exact-html", source);

  for (const output of outputs) {
    const outputPath = join(process.cwd(), "out", output);
    const outputDir = dirname(outputPath);

    if (existsSync(outputDir) && statSync(outputDir).isFile()) {
      unlinkSync(outputDir);
    }

    mkdirSync(outputDir, { recursive: true });
    copyFileSync(sourcePath, outputPath);
  }
}

console.log("Materialized exact supplied HTML into out/ canonical routes.");
