<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>

import ListItem from "@/components/ListItem.vue";
// import bus from "@/utils/bus";

export default {
  name: "AskView",
  components: {ListItem},
  created(){
    // bus.$emit('start:spinner');
    // setTimeout(()=>{
    //   this.$store.dispatch('FETCH_ASKS')
    //       .then(() => {
    //         console.log('fetched');
    //         bus.$emit('end:spinner');
    //       })
    //       .catch((err)=>{
    //         console.log(err);
    //       })
    // },3000);
  }
}
</script>

<style scoped>

</style>