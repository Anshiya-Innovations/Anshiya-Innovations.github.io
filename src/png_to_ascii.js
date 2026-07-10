import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

const dir = 'c:\\Users\\ASUS\\OneDrive\\Desktop\\Website\\Anshiya-Innovations.github.io\\career asset';
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.endsWith('.png')) {
    const filePath = path.join(dir, file);
    const buffer = fs.readFileSync(filePath);
    
    // PNG parsing
    let offset = 8;
    let width = 0;
    let height = 0;
    let bitDepth = 0;
    let colorType = 0;
    let idatBuffers = [];

    while (offset < buffer.length) {
      if (offset + 8 > buffer.length) break;
      const length = buffer.readUInt32BE(offset);
      const chunkType = buffer.toString('ascii', offset + 4, offset + 8);
      const data = buffer.subarray(offset + 8, offset + 8 + length);
      
      if (chunkType === 'IHDR') {
        width = data.readUInt32BE(0);
        height = data.readUInt32BE(4);
        bitDepth = data[8];
        colorType = data[9];
      } else if (chunkType === 'IDAT') {
        idatBuffers.push(data);
      }
      offset += 12 + length;
    }

    if (idatBuffers.length === 0) return;

    try {
      const compressed = Buffer.concat(idatBuffers);
      const decompressed = zlib.inflateSync(compressed);
      
      // Compute bytes per pixel
      let bpp = 1;
      if (colorType === 2) bpp = 3; // RGB
      if (colorType === 3) bpp = 1; // Indexed
      if (colorType === 4) bpp = 2; // Grayscale + Alpha
      if (colorType === 6) bpp = 4; // RGBA

      const bytesPerScanline = 1 + Math.ceil(width * bitDepth * bpp / 8);
      
      console.log(`\n=========================================`);
      console.log(`File: ${file} (${width}x${height}), ColorType: ${colorType}, BPP: ${bpp}`);
      console.log(`=========================================`);

      // We want to print a simple ASCII representation.
      // We will look at the alpha values or gray values.
      // Scanline layout: [filterType (1 byte)] [pixel1] [pixel2] ...
      // For RGBA: pixel is [R, G, B, A]
      // For Grayscale + Alpha (colorType 4): pixel is [G, A]
      // Let's just print a character depending on opacity (Alpha) if RGBA, or presence of non-zero colors.
      let ascii = '';
      for (let y = 0; y < height; y++) {
        const scanlineStart = y * bytesPerScanline;
        const filterType = decompressed[scanlineStart];
        
        let row = '';
        for (let x = 0; x < width; x++) {
          const pixelStart = scanlineStart + 1 + x * bpp;
          if (pixelStart + bpp > decompressed.length) break;

          let val = 0;
          if (colorType === 6) {
            // RGBA
            const r = decompressed[pixelStart];
            const g = decompressed[pixelStart + 1];
            const b = decompressed[pixelStart + 2];
            const a = decompressed[pixelStart + 3];
            val = a; // use alpha for opacity visualization
          } else if (colorType === 4) {
            val = decompressed[pixelStart + 1]; // Alpha
          } else if (colorType === 2) {
            // RGB
            const r = decompressed[pixelStart];
            const g = decompressed[pixelStart + 1];
            const b = decompressed[pixelStart + 2];
            val = (r + g + b) < 600 ? 255 : 0; // dark pixels
          } else {
            val = decompressed[pixelStart] > 0 ? 255 : 0;
          }

          if (val > 128) {
            row += '#';
          } else {
            row += ' ';
          }
        }
        ascii += row + '\n';
      }
      console.log(ascii);
    } catch (e) {
      console.log(`Failed to decompress or parse IDAT for ${file}:`, e.message);
    }
  }
});
