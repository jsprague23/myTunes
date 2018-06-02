import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import router from '../router'

let api = axios.create({
  baseURL: 'https://itunes.apple.com/search?term=',
  timeout: 3000
})

let myTunes = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 3000
})

vue.use(vuex)


export default new vuex.Store({
  state: {
    music: [],
    playlist: {
      title: "demo",
      songs: []
    },
    allPlalists: []
  },
  mutations: {
    setMusic(state, music) {
      state.music = music
    },
    setPlaylist(state, songs) {
      state.music = songs
    },
    addMusic(state, music) {
      state.playlist.push(music)
    },
    removeSong(state, indexToRemove) {
      state.playlist.splice(indexToRemove, 1)
    }

  },
  actions: {
    getMusic({ dispatch, commit }, query) {
      api.get(query)
        .then(res => {
          var songList = res.data.map(function (song) {
            return {
              title: song.trackName,
              albumArt: song.artworkUrl100 ? song.artworkUrl100.replace('100x100', '250x250') : '//placehold.it/250x250',
              artist: song.artistName,
              collection: song.collectionName,
              price: song.collectionPrice,
              preview: song.previewUrl
            };
          })
          commit('setMusic', songList)
        })
    },
    createPlaylist({
      dispatch,
      commit
    }, playlist) {
      myTunes.post('playlists', playlist)
    }
  }
});

