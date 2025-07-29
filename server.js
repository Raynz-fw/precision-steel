// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware: sajikan file statis dari direktori saat ini
app.use(express.static(__dirname));

// Route utama ke file HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'precision-steel.html'));
});

// Fallback untuk SPA / rute lain
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'precision-steel.html'));
});

// Jalankan server
app.listen(port, () => {
  console.log(`🚀 Server berjalan di http://localhost:${port}`);
});
