<template>
  <div id="ordersPage">
    <div class="content-page">
      <div class="content-nav">
        <el-breadcrumb class="breadcrumb" separator="/">
          <el-breadcrumb-item>订单列表</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="content-main">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="待付款" name="first"></el-tab-pane>
        <el-tab-pane label="待发货" name="second"></el-tab-pane>
        <el-tab-pane label="待收货" name="third"></el-tab-pane>
        <el-tab-pane label="已收货" name="fourth"></el-tab-pane>
        <el-tab-pane label="已关闭" name="fifth"></el-tab-pane>
        <el-tab-pane label="全部订单" name="sixth"></el-tab-pane>
      </el-tabs>
    </div>
    <div class="form-table-box">
      <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
        
      </el-checkbox-group>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ordersPage',
  data() {
    return {
      activeName: 'first',
      checkedCities: ['上海', '北京'],
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab)
      console.log(event)
      let pindex = tab._data.index;
      if (pindex == 0) {
        this.order_status = '101,801'
      }
      else if (pindex == 1) {
        this.order_status = 300
      }
      else if (pindex == 2) {
        this.order_status = 301
      }
      else if (pindex == 3) {
        this.order_status = 401
      }
      else if (pindex == 4) {
        this.order_status = '102,103'
      }
      else if (pindex == 5) {
        this.order_status = '101,102,103,202,203,300,301,302,303,401,801,802'
      }
      // this.getList();
    },
    handleCheckedCitiesChange() {

    }
  }
}
</script>
<style scoped>
.content-page {
  display: block;
  clear: both;
}
.content-main {
  display: block;
  background-color: #fff;
  padding: 20px;
}
</style>