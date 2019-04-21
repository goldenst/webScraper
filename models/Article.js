var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Articlesschema = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  note: {
    type: Schema.Types.ObjectId,
    ref: 'note'
  }
});
var Articlesschema = mongoose.model('Article', Articlesschema);

module.exports = Article;