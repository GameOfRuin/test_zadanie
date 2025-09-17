"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const name = process.argv[2];
if (!name) {
    throw Error('Migration name must be provided as first argument');
}
const migrationsCount = fs_1.default
    .readdirSync(path_1.default.resolve(__dirname, 'migrations'))
    .filter((file) => {
    const filePath = path_1.default.join(path_1.default.resolve(__dirname, 'migrations'), file);
    return fs_1.default.statSync(filePath).isFile();
}).length;
const src = path_1.default.resolve(__dirname, 'template.txt');
const dst = path_1.default.resolve(__dirname, 'migrations', `${(migrationsCount + 1).toString().padStart(3, '0')}-${name}.ts`);
fs_1.default.copyFileSync(src, dst);
console.log('Successfully generated new migration:', dst);
//# sourceMappingURL=generate.js.map