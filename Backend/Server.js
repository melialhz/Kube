const express = require('express');
const app = express();

// Simulation de données provenant de MongoDB
const utilisateursEnBase = [

];

app.get('/api/message', (req, res) => {
  res.json({ 
    message: "Connecté au Cluster Kubernetes (Simulé)",
    database: "MongoDB : Status OK",
    items: utilisateursEnBase 
  });
});

app.listen(5000, () => {
  console.log("🚀 Serveur de simulation démarré sur http://localhost:5000");
});