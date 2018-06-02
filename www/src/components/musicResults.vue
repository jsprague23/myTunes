<template>
  <div class="search-results">
    <ul>
      <li v-for="(song in results)">{{song.title}}</li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: 'search-results',
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
    }
  }
</script>