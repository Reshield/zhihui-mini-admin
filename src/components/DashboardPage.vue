<template>
  <div id="dashboard">
      <Sidebar style="float: left"></Sidebar>
      <!-- <navbar></navbar> -->
      <div class="content">
        <transition name="router-fade" mode="out-in">
            <router-view></router-view>
        </transition>
      </div>
    </div>
</template>
<script>
import Sidebar from '@/Common/Sidebar'

export default {
  name : 'dashboard',
  methods: {

  },
  components: {
    Sidebar
  }
}
</script>
<style scoped>
.content {
  box-sizing: border-box;
  padding: 10px 10px 10px 10px;
  min-height: 700px;
  overflow: auto;
}
</style>
