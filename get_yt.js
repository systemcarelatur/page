const https = require('https');
https.get('https://www.youtube.com/@systemcarelaturlaptoprepair', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const matches = [...data.matchAll(/"videoId":"([^"]+)"/g)];
    const ids = [...new Set(matches.map(m => m[1]))];
    console.log("VIDEOS:", ids.slice(0, 5));
  });
});
