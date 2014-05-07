module.exports.controller = function(app) {
  return app.get('/', function(req, res) {
    return res.json({
      title: 'Welcome to Quantum Data'
    });
  });
};

