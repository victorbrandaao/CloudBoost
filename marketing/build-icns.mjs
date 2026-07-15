import fs from "node:fs";
import path from "node:path";

const [iconsetDir, outputPath] = process.argv.slice(2);
if (!iconsetDir || !outputPath) {
  throw new Error("Usage: node build-icns.mjs <iconset-dir> <output.icns>");
}

const entries = [
  ["icp4", "icon_16x16.png"],
  ["icp5", "icon_32x32.png"],
  ["icp6", "icon_32x32@2x.png"],
  ["ic07", "icon_128x128.png"],
  ["ic08", "icon_256x256.png"],
  ["ic09", "icon_512x512.png"],
  ["ic10", "icon_512x512@2x.png"]
];

const chunks = entries.map(([type, file]) => {
  const payload = fs.readFileSync(path.join(iconsetDir, file));
  const chunk = Buffer.alloc(8 + payload.length);
  chunk.write(type, 0, 4, "ascii");
  chunk.writeUInt32BE(chunk.length, 4);
  payload.copy(chunk, 8);
  return chunk;
});

const header = Buffer.alloc(8);
header.write("icns", 0, 4, "ascii");
header.writeUInt32BE(8 + chunks.reduce((sum, chunk) => sum + chunk.length, 0), 4);
fs.writeFileSync(outputPath, Buffer.concat([header, ...chunks]));
