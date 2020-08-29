<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// import testRequest from './util/request'
// const baseURL = 'http://127.0.0.1:3000'

export default {
  name: "app",
  methods: {
   
  },
  components: {
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.el-menu-vertical-demo {
  width: 10%;
}
</style>
