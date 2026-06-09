import fs from "fs";
import path from "path";
import sharp from "sharp";

const TARGET_DIRS = [
  "public/images/tapas",
  "public/images/autores"
];

// Max width for the web (book covers and author portraits are displayed relatively small)
const MAX_WIDTH = 1200; 

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (![".webp", ".png", ".jpg", ".jpeg"].includes(ext)) return;

  const stats = fs.statSync(filePath);
  const originalSizeKB = (stats.size / 1024).toFixed(2);

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();

    if (!metadata.width) return;

    let pipeline = image;
    let resized = false;

    if (metadata.width > MAX_WIDTH) {
      pipeline = pipeline.resize({ width: MAX_WIDTH });
      resized = true;
    }

    // Convert/recompress to WebP/PNG/JPG with optimization settings
    if (ext === ".webp") {
      pipeline = pipeline.webp({ quality: 92, effort: 6 });
    } else if (ext === ".png") {
      pipeline = pipeline.png({ quality: 90, compressionLevel: 9 });
    } else if ([".jpg", ".jpeg"].includes(ext)) {
      pipeline = pipeline.jpeg({ quality: 90, mozjpeg: true });
    }

    const tmpPath = filePath + ".tmp";
    await pipeline.toFile(tmpPath);
    
    const newStats = fs.statSync(tmpPath);
    const newSizeKB = (newStats.size / 1024).toFixed(2);

    // Replace only if it actually reduced the file size
    if (newStats.size < stats.size) {
      fs.renameSync(tmpPath, filePath);
      console.log(`✅ Optimized ${path.relative(process.cwd(), filePath)}: ${originalSizeKB} KB -> ${newSizeKB} KB (Resized: ${resized ? "Yes (" + metadata.width + "px -> " + Math.min(metadata.width, MAX_WIDTH) + "px)" : "No"})`);
    } else {
      fs.unlinkSync(tmpPath);
      console.log(`ℹ️ Skipped ${path.relative(process.cwd(), filePath)}: Original is already smaller`);
    }
  } catch (err) {
    console.error(`❌ Error processing ${path.relative(process.cwd(), filePath)}:`, err);
  }
}

async function run() {
  console.log("Starting image optimization...");
  for (const dir of TARGET_DIRS) {
    const absoluteDir = path.resolve(dir);
    if (!fs.existsSync(absoluteDir)) {
      console.log(`Directory not found: ${dir}`);
      continue;
    }

    console.log(`\nScanning directory: ${dir}`);
    const files = fs.readdirSync(absoluteDir);
    for (const file of files) {
      const filePath = path.join(absoluteDir, file);
      if (fs.statSync(filePath).isFile()) {
        await optimizeImage(filePath);
      }
    }
  }
  console.log("\nImage optimization finished!");
}

run();
