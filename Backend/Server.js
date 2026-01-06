const express = require('express');
const mongoose = require('mongoose');
const app = express();

// On récupère l'URL de MongoDB depuis les variables d'environnement de K8s
// Si elle n'existe pas, on met une valeur par défaut
const mongoUrl = process.env.DB_URL || "mongodb://admin:password123@mongodb-service:27017/admin";

// --- LA PARTIE IMPORTANTE : LE .catch() ---
mongoose.connect(mongoUrl)
  .then(() => console.log("✅ Connexion à MongoDB réussie !"))
  .catch(err => {
    console.error("⚠️ Erreur de connexion MongoDB :");
    console.error(err.message);
    console.log("🚀 Le serveur continue de tourner sans BDD pour l'instant...");
  });
// ------------------------------------------

app.get('/api/message', (req, res) => {
  res.json({ 
    message: "Hello ! Le Backend est en ligne !",
    database: mongoose.connection.readyState === 1 ? "Connectée" : "Déconnectée"
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
});