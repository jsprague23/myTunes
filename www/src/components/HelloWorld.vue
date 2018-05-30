<template>
  <div class="hello">

    <div class="searchbar">
      <form @submit.prevent="findMusic">
        <input type="text" v-model="query">
      </form>
    </div>
    <div class="songs-section">

      <div class="results">
        <h4>Results for {{title}}:</h4>
        <div class="row">
          <music :list="music" button-text="Add to playlist" :handle-button-click="addMusic"></music>
        </div>
      </div>
      <hr>
      <div class=" playlist ">
        <div class="row ">
          <music :list="playlist " button-text="Remove from playlist " :handle-button-click="removeSong "></music>
        </div>
      </div>
    </div>

    <div class="detailed-view ">
      details here
    </div>

  </div>
</div>
</template>

<script>
  import music from './music.vue'
  export default {
    name: 'HelloWorld',
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