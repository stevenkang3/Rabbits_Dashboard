var rabbits = require('../controllers/rabbits.js');
module.exports = function(app) {
  var errors_array = [];
  app.get('/', function(req, res) {
      rabbits.load(req, res)
  })
  app.post('/mongooses', function(req,res){
    rabbits.create(req, res)
  })
  app.get('/mongooses/new', function(req, res){
    res.render('new_rabbit', {errors: errors_array});
  })

  app.get('/mongooses/:id', function (req, res) {
    console.log(req);
    rabbits.finds(req, res)
  })

  app.get('/mongooses/:id/edit', function (req, res) {
    rabbits.edit(req, res)
  })
  app.post('/mongoose/:id', function (req, res) {
    rabbits.update(req, res)
  })
  app.post('/mongooses/:id/destroy', function (req, res) {
    rabbits.destroy(req, res)
  })
}
