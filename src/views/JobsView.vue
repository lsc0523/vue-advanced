<template>
<div>
  <list-item></list-item>
</div>
</template>

<script>

// import { fetchJobsList } from '@/api/index'
import ListItem from "@/components/ListItem";
// import ListMixin from "@/mixins/ListMixin.js";
import bus from "@/utils/bus";

export default {
  name: "JobsView",
  components: {ListItem},
  mounted() {
    bus.$emit('end:spinner');
  }
  // mixins: [ListMixin],
  // created(){
  //   bus.$emit('start:spinner');
  //   setTimeout(()=>{
  //     this.$store.dispatch('FETCH_JOBS')
  //         .then(() => {
  //           console.log('fetched');
  //           bus.$emit('end:spinner');
  //         })
  //         .catch((err)=>{
  //           console.log(err);
  //         })
  //   },3000);
  // }
}
</script>

<style scoped>
/*.news-list{*/
/*  margin:0;*/
/*  padding: 0;*/
/*}*/
/*.post{*/
/*  list-style: none;*/
/*  display: flex;*/
/*  align-items: center;*/
/*  border-bottom: 1px solid darkgrey;*/
/*}*/
/*.points{*/
/*  width: 80px;*/
/*  height: 60px;*/
/*  display: flex;*/
/*  align-items: center;*/
/*  justify-content: center;*/
/*  color: #41b883;*/
/*}*/
/*.news-title{*/
/*  margin:0*/
/*}*/
/*.link-text{*/
/*  color: #828282*/
/*}*/
</style>