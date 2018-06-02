<template>
  <div class="user-playlist">
    <ul>
      <li v-for="(song in results)">{{song.title}}</li>

    </ul>
  </div>
</template>

<script>

  export default {
    name: 'user-playlist',
    components: {
      music
    },
    data() {
      return {
        query: '',
        title: ''
      }
    },
    computed: {
      music() {
        return this.$store.state.userPlaylist
      },
      playlist() {
        return this.$store.state.playlist
      }

    },

    methods: {
      findMusic() {
        this.$store.dispatch('findMusic', this.query)
        this.title = this.query
        this.query = ''
      },
      addMusic(song) {
        this.$store.dispatch('addMusic', song)
      },
      removeSong(song) {
        this.$store.dispatch('removeSong', song)
      }
    }
  }
</script>