<template>
  <div>
    <p v-for="ask in this.fetchedAsks" v-bind:key="ask.title">
      <router-link v-bind:to="`/item/${ask.id}`">
        {{ ask.title }}
      </router-link>
      <small>
        {{ ask.time_ago }} by {{ ask.user }}
      </small>
    </p>
  </div>
</template>

<script>

// import { fetchAskList } from '@/api/index'
import { mapGetters } from 'vuex'

export default {
  name: "AskView",
  computed:{
    ...mapGetters([
      'fetchedAsks'
    ])
  },
  created() {
    this.$store.dispatch('FETCH_ASKS');
  }
}
</script>

<style scoped>

</style>