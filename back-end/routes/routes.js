//chargement des routes
const userRoutes = require('./users')

const appRouter = (app, fs) => {
//nous avons ajouté ici une route par défaut qui gère les routes vides
//aux URL de l'API de base
app.get('/', (req, res) => {
    res.send('Bienvenue sur le serveur Retrovod en cours de développement');
  });

// lancez notre module de routage utilisateur ici pour terminer le câblage
userRoutes(app, fs)
};

module.exports = appRouter;