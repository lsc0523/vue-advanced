<template>
  <div>
    <p v-for="n in this.$store.state.news" v-bind:key="n.title">
      <a v-bind:href="n.url"> {{ n.title }} </a>
      <small>
        {{ n.time_ago }} by
        <router-link v-bind:to="`/user/${n.user}`">{{ n.user }}</router-link>
      </small>
    </p>
  </div>
</template>

<script>

export default {
  name: "NewsView",
  created(){
    this.$store.dispatch('FETCH_NEWS');
  }
}

</script>

<style scoped>

</style>