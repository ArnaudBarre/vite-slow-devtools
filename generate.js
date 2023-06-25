import { writeFileSync, mkdirSync, rmSync } from "node:fs";

rmSync("src/items.js", { force: true });
rmSync("src/items", { recursive: true, force: true });
mkdirSync("./src/items");

let itemsContent = ""
for (let i = 1; i <= 3_000; i++) {
    itemsContent += `export * from "./items/item${i}.js";\n`;
    writeFileSync(`src/items/item${i}.js`, `export const item${i} = "<li>Item ${i}</div>"`);
}
writeFileSync("src/items.js", itemsContent);
