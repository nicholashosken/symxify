import fs from "fs";
import path from "path";

const TARGET_DIR = "./src/types"; // ← Update this path as needed

// Recursively collect all files in the directory
function getAllFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    return entry.isDirectory() ? getAllFiles(fullPath) : fullPath;
  });
}

// Sanitize a file by removing matching lines
function processFile(filePath: string) {
  const content = fs.readFileSync(filePath, "utf-8");
  const filtered = content
    .split("\n")
    .filter((line) =>
      !line.includes("Value") &&
      !line.includes("Specified") &&
      !line.trim().startsWith('import { XmlElement } from "./xmlElement"') &&
      !line.trim().startsWith("any: XmlElement[];")
    )
    .join("\n");

  fs.writeFileSync(filePath, filtered, "utf-8");
  console.log(`Sanitized: ${filePath}`);
}

// Main execution
function main() {
  const files = getAllFiles(TARGET_DIR).filter((f) =>
    f.endsWith(".ts") || f.endsWith(".tsx") || f.endsWith(".js")
  );

  for (const file of files) {
    processFile(file);
  }

  console.log("Sanitization complete.");
}

main();
