// charger le framework express et body-parser
const express = require('express');
const bodyParser = require('body-parser');
//const mysql = require('mysql');


// créer une instance d'express
const app = express();

// charger la bibliothèque système de fichiers intégrée au nœud ici
// nous l'utiliserons plus tard pour servir nos fichiers JSON


// configurer notre instance express
// paramètres de gestion de l'analyseur de données JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// c'est ici que nous allons gérer nos différents itinéraires
const connection = require('./database/db_connect.js')


// lancez notre serveur sur le port 8080.
const server = app.listen(8080, () => {
  console.log('listening on port %s...', server.address().port);
});