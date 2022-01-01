<template>
<div>
  <user-profile v-bind:info="userInfo">
    <div slot="username">
      {{ userInfo.id }}
    </div>
    <template slot="time">
      {{ userInfo.created }}
    </template>
    <div slot="karma">
      {{ userInfo.karma }}
    </div>
  </user-profile>
</div>
</template>

<script>

import UserProfile from "@/components/UserProfile";
export default {
  name: "UserView",
  components: {UserProfile},
  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },
  created() {
    const userName = this.$route.params.id
    this.$store.dispatch('FETCH_USER', userName);
  }

}
</script>

<style scoped>

</style>