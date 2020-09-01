<template>
  <div id="sidebar">
    <el-menu 
      class="sidebar" 
      :unique-opened="true" 
      :default-active="currentPagePath" 
      @open="handleOpen"
      :router="true" @close="handleClose"
    >
      <el-menu-item index="/dashboard/welcome">
        <i class="fa el-icon-s-home"></i>
        <span>后台主页</span>
      </el-menu-item>
      <el-menu-item index="/dashboard/order">
        <i class="fa fa-large el-icon-menu"></i>
        <span>订单列表</span>
      </el-menu-item>
      <el-submenu index="goods">
        <template slot="title">
          <i class="fa el-icon-s-goods"></i>
          <span>商品管理</span>
        </template>
        <el-menu-item index="/goods">
          <i class="fa fa-circle"></i>
          <span>商品列表</span>
        </el-menu-item>
        <el-menu-item index="/dashboard/nature">
          <i class="fa fa-circle"></i>
          <span>商品设置</span>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="/dashboard/shopcart">
        <i class="fa fa-large el-icon-shopping-cart-full"></i>
        <span>购物车</span>
      </el-menu-item>
      <el-menu-item index="/dashboard/user">
        <i class="fa fa-large el-icon-user-solid"></i>
        <span>用户列表</span>
      </el-menu-item>
      <el-submenu index="settings">
        <template slot="title">
          <i class="fa fa-large el-icon-s-tools"></i>
          <span>店铺设置</span>
        </template>
        <el-menu-item index="/dashboard/settings/showset">
          <i class="fa fa-circle"></i>
          <span>显示设置</span>
        </el-menu-item>
        <el-menu-item index="/dashboard/ad">
          <i class="fa fa-circle"></i>
          <span>广告列表</span>
        </el-menu-item>
        <el-menu-item index="/dashboard/notice">
          <i class="fa fa-circle"></i>
          <span>公告管理</span>
        </el-menu-item>
        <el-menu-item index="/dashboard/freight">
          <i class="fa fa-circle"></i>
          <span>运费模板</span>
        </el-menu-item>
        <el-menu-item index="/dashboard/shipper">
          <i class="fa fa-circle"></i>
          <span>快递设置</span>
        </el-menu-item>
        <el-menu-item index="/dashboard/admin">
          <i class="fa fa-circle"></i>
          <span>管理员</span>
        </el-menu-item>
      </el-submenu>
      <el-menu-item @click="logout">
        <i class="fa fa-large fa-sign-out"></i>
        <span>退出</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'sidebar',
  data() {
    return {
      currentPagePath: '/dashboard',
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    logout() {

    }
  }
}
</script>
<style scoped>
.sidebar {
  width: 200px;
  flex: 1;
  border-radius: 0;
  /*background: #233445;*/
}
.fa {
  margin-right: 10px;
  font-size: 18px;
  /*color: #ccc;*/
}
.el-submenu .el-menu-item .fa {
  margin-right: 10px;
  font-size: 10px;
}
</style>