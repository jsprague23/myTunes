var mongoose = require('mongoose')
var Schema = mongoose.Schema
var schemaName = 'playlistSchema'
var ObjectId = Schema.Types.ObjectId

var playlist = new playlist({
  title: {type: String, required: true},
  songs: [],   
 })

 playlist.pre('save', function(next){
this.markModified('songs')
next()
 })

 module.exports = mongoose.model(schemaName, playlist)