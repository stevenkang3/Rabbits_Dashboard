var mongoose = require('mongoose');


mongoose.connection.on('error', function(err){});

var MongooseSchema = new mongoose.Schema({
  name: String,
  weight: Number,
  color: String
});

var Mongoose = mongoose.model('Mongoose', MongooseSchema);

MongooseSchema.path('color').required(true, 'Color cannot be blank');
MongooseSchema.path('weight').required(true, 'Weight cannot be blank');
MongooseSchema.path('name').required(true, 'Name cannot be blank');
