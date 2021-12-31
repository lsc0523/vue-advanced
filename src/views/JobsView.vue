<template>
<div>
  <p v-for="job in this.$store.state.jobs" v-bind:key="job.title">
    <a v-bind:href="job.url">{{ job.title }}</a>
    <small>{{ job.time_ago }} , {{ job.domain }}</small>
  </p>
</div>
</template>

<script>

// import { fetchJobsList } from '@/api/index'
export default {
  name: "JobsView",
  created(){
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style scoped>

</style>