<template>
  <ol class="col-sm-6">
    <li v-for="song in list">
      <!--change url to itunes <img height="80" :src="'https://image.tmdb.org/t/p/w500/'+movie.poster_path" alt=""> -->
      <p>{{song.trackName}}</p>
      <button @click="handleButtonClick(song)">{{buttonText}}</button>
    </li>
  </ol>
</template>

<script>
  export default {
    name: 'movies-list',
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
      food(){
        return this.$store.state.playlist[this.$route.params.id]
      }
    },
    methods: {}
  }
</script>

<!-- <template>

  <div class="container foodDetails">
      <div class="row">
          <h1>FOOD DETAILS</h1>
      </div>

      <div class="row">
          <div class="col-12">
              <h3>NAME:</h3>
              <ol>
                  <li>{{item.foods.food_name}}</li>
                  <li>{{item.foods.nf_calories}</li>
                  <li>{{item.foods.nf_total_carbohydrate}</li>
                  <li>{{item.foods.nf_protein}</li>
              </ol>
          </div>
      </div>
  </div>

  </div>
</template>


<script>
  export default {
      name: 'FoodDetails',
      data() {
          return {
              foods
          }
      }
  }
</script> -->









<style scoped>
</style>