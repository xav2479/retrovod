const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'retrovod'
});

connection.connect(function(err) {
  if (err) {
      return console.log('error :' + err.message)
  }
  console.log('Vous étes bien connecter à Retrovod_db')

});
//

connection.end(function(err) {
    if (err) {
      return console.log('error:' + err.message);
    }
    console.log('La connection à retrovod est fermé.');
});
