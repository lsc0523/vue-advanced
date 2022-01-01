<template>
  <div>
    <list-item></list-item>
    <!--    <ul class="news-list">-->
<!--      <li v-for="ask in this.fetchedAsks" v-bind:key="ask.title" class="post">-->
<!--        &lt;!&ndash;        포인트영역&ndash;&gt;-->
<!--        <div class="points">-->
<!--          {{ ask.points }}-->
<!--        </div>-->
<!--        &lt;!&ndash;        기타정보영역ㅇ&ndash;&gt;-->
<!--        <div>-->
<!--          <p class="news-title">-->
<!--            <a v-bind:href="ask.url">-->
<!--              {{ ask.title }}-->
<!--            </a>-->
<!--          </p>-->
<!--          <small class="link-text">-->
<!--            {{ ask.time_ago }}-->
<!--            by-->
<!--            <router-link v-bind:to="`/user/${ask.user}`" class="link-text" >{{ ask.user }}</router-link>-->
<!--          </small>-->
<!--        </div>-->
<!--      </li>-->
<!--    </ul>-->
  </div>
</template>

<script>

// import { fetchAskList } from '@/api/index'
// import { mapGetters } from 'vuex'
import ListItem from "@/components/ListItem.vue";

export default {
  name: "AskView",
  components: {ListItem},
  // computed:{
  //   ...mapGetters([
  //     'fetchedAsks'
  //   ])
  // },
  // created() {
  //   this.$store.dispatch('FETCH_ASKS');
  // }
}
</script>

<style scoped>

</style>