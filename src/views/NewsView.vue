<template>
<list-item></list-item>
</template>

<script>

import ListItem from '../components/ListItem.vue'
// import bus from '../utils/bus.js'

export default {
  name: "NewsView",
  components: {
    ListItem
  },
  created(){
    // bus.$emit('start:spinner');
    // setTimeout(()=>{
    //   this.$store.dispatch('FETCH_NEWS')
    //   .then(() => {
    //     console.log('fetched');
    //     bus.$emit('end:spinner');
    //   })
    //   .catch((err)=>{
    //     console.log(err);
    //   })
    // },3000);
  }
}

</script>

<style scoped>

</style>