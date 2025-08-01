const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname)); // Sert tous les fichiers du dossier courant

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});