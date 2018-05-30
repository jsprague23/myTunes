var router = require('express').Router()
var Playlists = require('../models/playlist')
// var Users = require('../models/user')
let session = require('../authentication/sessions')

//get & get by id
router.get('/api/playlists/:id?', (req, res) => {
  if (req.params.id) {
    Playlists.findById(req.params.id)
      .then(playlist => {
        res.send(playlist)
      })
      .catch(err => {
        res.status(404).send({
          'error': 'err'
        })
      })
  }
  Playlists.find({})
    .then(playlists => {
      return res.send(playlists)
    })
  
    .catch(err => {
      res.status(404).send({
        'error': 'err'
      })
    })
})

//EDIT
// router.post('/api/create-playlist', (req, res) => {
//   Users.findById(req.session.uid)
//     .then(user => {
//       if (!user) {
//         return res.status(400).send({ message: "invalid action" })
//       } else if (user.role != 'Admin') {
//         return res.status(400).send({ message: "invalid action" })
//       }
//       Playlists.create(req.body)
//         .then(newPlaylist => {
//           res.status(200).send(newPlaylist)
//         })
//         .catch(err => {
//           res.status(400).send(err)
//         })
//     })
//     .catch(err => {
//       res.status(400).send(err)
//     })
// }),

  // router.post('/playlists', (req, res, next) => {
  //   Playlists.create(req.body).then(playlist => {
  //     res.send(playlist)
  //   })
  // })

// router.post('/playlists/:listId/songs', (req, res, next) => {
//   Playlists.findById(req.params.listId).then(list => {
//     list.songs.$addToSet(req.body)
//     list.save()
//       .then(() => {
//         res.send(list)
//       })

//   })
// })

//put
//add a single song
router.put('/api/playlists/:id/songs', (req, res)=>{
  Playlists.findById(req.params.id)
  .then(playlist=>{
    playlist.songs.addToSet(req.body)
    playlist.save()
    res.send(playlist)
  })
  .catch(err=>{    
      res.status(400).send(err)
    
  })
},


//update entire song arrayfrom entire playlist
router.put('/api/playlists/:id',(req,res)=>{
  Playlists.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(playlist=>{
    res.send(playlist)

  })
  .catch(err=>{
    res.status(400).send(err)
  })
}),

//delete
router.delete('/api/playlists/:id', (req,res)=>{
  Playlists.findByIdAndRemove(req.params.id)
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