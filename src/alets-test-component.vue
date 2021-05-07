<template>
  <div class="hello">
    {{ games }}
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',

  data() {
    return {
      games: [],
    }
  },

  async mounted() {
    this.games = await axios.get(
      'https://8tvo5bp9ai.execute-api.us-west-2.amazonaws.com/prod/gamesBySeason/1325',
      {},
    )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
