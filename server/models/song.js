var mongoose = require('mongoose')
var Schema = mongoose.Schema
var schemaName = 'songSchema'
var ObjectId = Schema.Types.ObjectId

var songSchema = new Schema({
  title:{type:String, required:true, unique:true},
  albumArt:{type: String, required:true},
  artist: {type: String, required:true},
  album: {type: String, required:true},
  preview:{type: String, required:true},
  price: {type: String, required:true}
})





module.exports = mongoose.model(schemaName, songSchema)