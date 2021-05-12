const userRoutes = (app, fs) => {
    // variables
    const dataVideo = './data/users.json';

  
    // Lecture
    app.get('/users', (req, res) => {
      fs.readFile(dataVideo, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
  
        res.send(JSON.parse(data));
      });
    });    
  };

  module.exports = userRoutes;