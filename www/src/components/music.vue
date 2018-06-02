<template>
 <div class="itunes-search">
   <form @submit.prevent="search">
     <input type="text" v-model="query">
     <button type="submit"></button>
   </form>
 </div>
</template>

<script>
  export default {
    name: 'music-list',
    props: {
      list: {
        type: Array,
        required: true
      },
      buttonText: {
        type: String,
        required: true
      },
      handleButtonClick: {
        type: Function,
        required: true
      }
    },
    computed: {
      music(){
        return this.$store.state.playlist[this.$route.params.id]
      }
    },
    methods: {
      search(){
        this.$store.despatch('getMusic')
      }
    }
  }
</script>

