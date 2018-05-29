var router = require('express').Router()
var Playlists = require('../models/playlist')
var Users = require('../models/user')
let session = require('../authentication/sessions')

//get by id
router.get('/playlists', (req, res) => {
  Users.findById(req.session.uid)
    .then(user => {
      if (!user) {
        return res.status(400).send({ message: "invalid action" })
      }
        Playlists.findById(user._id)
          .then((playlist) => {
            res.status(200).send(playlist)
          })
          .catch(err => {
            res.status(400).send(err)
          })

    })
  Playlists.find({})
    .then(playlists => {
      res.status(200).send(playlists)
    })
    .catch(err => {
      res.status(400).send(err)
    })
}),
  // .catch(err => {
  //   res.status(400).send(err)
  // })


  //EDIT
  router.post('/create-playlist', (req, res, next) => {
    Users.findById(req.session.uid)
      .then(user => {
        if (!user) {
          return res.status(400).send({ message: "invalid action" })
        } else if (user.role != 'Admin') {
          return res.status(400).send({ message: "invalid action" })
        }
        Playlists.create(req.body)
          .then(newPlaylist => {
            res.status(200).send(newPlaylist)
          })
          .catch(err => {
            res.status(400).send(err)
          })
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }),

  router.post('/playlists', (req, res, next) => {
    Playlists.create(req.body).then(playlist => {
      res.send(playlist)
    })
  })

router.post('/playlists/:listId/songs', (req, res, next) => {
  Playlists.findById(req.params.listId).then(list => {
    list.songs.$addToSet(req.body)
    list.save()
      .then(() => {
        res.send(list)
      })

  })
})



module.exports = {
  router
}