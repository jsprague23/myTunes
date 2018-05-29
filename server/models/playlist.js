var mongoose = require('mongoose')
var Schema = mongoose.Schema
var schemaName = 'Playlist'
var ObjectId = Schema.Types.ObjectId

var songSchema = new Schema({
  trackName: {
    type: String,
    required: true
  },
  artistName: {
    type: String,
    required: true,
  },
  collectionName:{
    type:String,    
  }

})

var schema = new Schema({
  title: {type: String, required: true},
  songs: [songSchema],
    userId: {
    type: ObjectId,
    ref: "User",
    required: true
  },
 })



module.exports = mongoose.model(schemaName, schema)