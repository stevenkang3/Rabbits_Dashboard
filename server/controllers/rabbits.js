var mongoose = require('mongoose');
var Mongoose = mongoose.model('Mongoose');
  var errors_array = [];
module.exports = {
  load: function(req, res) {
    Mongoose.find({}, function(err, mongoose) {
      res.render('index', {errors: errors_array, mongooses: mongoose});
    })
  },

  new: function(req, res) {
    res.render('new_rabbit', {errors: errors_array});
  },

  finds: function(req, res) {
     Mongoose.findOne({_id: req.params.id}, function (err, mongoose){
          res.render('rabbit', {mongoose: mongoose});
      })
  },
  edit: function(req, res) {
    Mongoose.findOne({_id: req.params.id}, function (err, mongoose){
      res.render('edit_rabbit', {mongoose: mongoose});
    })
  },
  create: function(req, res) {
    mongoose = new Mongoose({name: req.body.name, weight: req.body.weight, color: req.body.color});
    mongoose.save(function(err){
      if(err) {
        for(var x in err.errors)
        {
          errors_array.push(err.errors[x].message);
        }
        res.redirect('/mongooses/new');
        } else {
        res.redirect('/');
        }
      })
    },

  update: function (req, res){
    Mongoose.update({_id: req.params.id}, {name: req.body.name, weight: req.body.weight, color: req.body.color}, function (err, mongoose){
        res.redirect('/mongooses/'+req.params.id);
    })
  },
 destroy: function (req, res){
   Mongoose.remove({_id: req.params.id}, function (err, user){
       res.redirect('/');
     })
   }
};
