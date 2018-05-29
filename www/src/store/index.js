import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'

let api = axios.create({
  baseURL: 'https://itunes.apple.com/search?term=',
  timeout: 3000
})

vue.use(vuex)


export default new vuex.Store({
  state: {
    music: [],
    playlist: [],
    activeSong: {}
  },
  mutations: {
    setMusic(state, music) {
      state.music = music
    },
    addMusic(state, music) {
      state.playlist.push(music)
    },
    removeSong(state, indexToRemove) {
      state.playlist.splice(indexToRemove, 1)
    },
    setActiveSong(state, song) {
      state.activeSong = song
    }
  },
  actions: {
    addMusic({
      dispatch,
      commit,
      state
    }, song) {
      if (state.playlist.find(m => m.id == song.id)) {
        return dispatch('showNotification', {
          type: 'error',
          message: 'That song is already in your list'
        })
      }
      commit('addMusic', song)
    },
    showNotification({
      commit
    }, notification) {
      console.log(notification)
    },
    findMusic({
      commit,
      dispatch
    }, query) {
      api.get(query)
        .then(res => {
          console.log(res.data.results)
          commit('setMusic', res.data.results)
        }).catch(err => dispatch('showNotification', err))
    }
  }
})