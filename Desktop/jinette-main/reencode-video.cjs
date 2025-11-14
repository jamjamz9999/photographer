const ffmpeg = require('fluent-ffmpeg');
const ffmpegStatic = require('ffmpeg-static');
const fs = require('fs');
const path = require('path');

// Set FFmpeg path
ffmpeg.setFfmpegPath(ffmpegStatic);

const inputPath = path.join(process.cwd(), 'public', 'header.mp4');
const outputPath = path.join(process.cwd(), 'public', 'header-fixed.mp4');

console.log('Starting video re-encoding...');
console.log(`Input: ${inputPath}`);
console.log(`Output: ${outputPath}`);

// Check if input file exists
if (!fs.existsSync(inputPath)) {
  console.error(`Input file not found: ${inputPath}`);
  process.exit(1);
}

ffmpeg(inputPath)
  .outputOptions([
    '-c:v libx264',
    '-preset fast',
    '-crf 23',
    '-c:a aac',
    '-b:a 128k',
    '-movflags +faststart'
  ])
  .output(outputPath)
  .on('start', (cmd) => {
    console.log('FFmpeg command started...');
  })
  .on('progress', (progress) => {
    if (progress.percent) {
      console.log(`Processing: ${Math.round(progress.percent)}%`);
    }
  })
  .on('end', () => {
    console.log('Video re-encoding completed successfully!');
    console.log(`Output saved to: ${outputPath}`);
    
    // Replace the original
    try {
      fs.copyFileSync(outputPath, inputPath);
      fs.unlinkSync(outputPath);
      console.log('✓ Original file updated with re-encoded video');
      console.log('✓ Video should now play in browser');
    } catch (err) {
      console.error('Error replacing original file:', err);
    }
  })
  .on('error', (err) => {
    console.error('Error during re-encoding:', err);
    process.exit(1);
  })
  .run();
