<template>
  <div id="dashboard">
      <Sidebar></Sidebar>
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

</style>
