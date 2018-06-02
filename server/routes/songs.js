var router = require('express').Router()
var Songs = require('../models/song')
// var Users = require('../models/user')
// let session = require('../authentication/sessions')

//get & get by id
router.get('/api/songs/:id?', (req, res) => {
  if (req.params.id) {
    Songs.findById(req.params.id)
      .then(song => {
        res.send(song)
      })
      .catch(err => {
        res.status(404).send({
          'error': 'err'
        })
      })
  }
  Songs.find({})
    .then(songs => {
      return res.send(songs)
    })
  
    .catch(err => {
      res.status(404).send({
        'error': 'err'
      })
    })
})

// EDIT
router.put('/api/songs/:id/songs', (req, res)=>{
  Songs.findById(req.params.id)
  .then(song=>{
    song.songs.addToSet(req.body)
    song.save()
    res.send(song)
  })
  .catch(err=>{    
      res.status(400).send(err)
    
  })
},
//delete
router.delete('/api/songs/:id', (req,res)=>{
  Songs.findByIdAndRemove(req.params.id)
  .then(()=>{
    res.send("Successfully deleted")
  })
  .catch(err=>{
    res.send(err)
  })
}))

module.exports = {
  router
}