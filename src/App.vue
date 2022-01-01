<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ToolBar from "@/components/ToolBar";

export default {
  name: 'App',
  components: {
    ToolBar
  }
}
</script>

<style>
body{
    padding: 0;
    margin: 0;
}
a{
  text-decoration: none;
}
a.router-link-exact-active{
  color: #34495e;
  text-decoration: underline;
}
a:hover{
  color:#42b883;
  text-decoration: underline;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
