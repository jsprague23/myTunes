<template>
  <div>
    <music></music>
    <musicResults></musicResults>
    <userPlaylist></userPlaylist>
  </div>  
</template>

<script>
  import music from './music.vue'
  import musicResults from './musicResults'
  import userPlaylist from './userplaylist'

  export default {
    name: 'HelloWorld',
    components: {
      musicResults,
      music,
      userplaylist
    },
    data() {
      return {
        query: '',
        title: ''
      }
    },
    computed: {
      music() {
        return this.$store.state.music
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

<!-- Add "scoped " attribute to limit CSS to this component only -->
<style scoped>
  .songs-section {
    display: grid;
    grid-template-areas: "results playlist "
  }
  .results {
    grid-area: results
  }
  .playlist {
    grid-area: playlist
  }
</style>