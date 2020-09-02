<template>
  <div id="GoodsPage" class="content-page">
    <div class="content-page">
      <div class="content-nav">
        <el-breadcrumb class="breadcrumb" separator="/">
          <el-breadcrumb-item>商品列表</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="content-main">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="出售中" name="first"></el-tab-pane>
        <el-tab-pane label="已售完" name="second"></el-tab-pane>
        <el-tab-pane label="已下架" name="third"></el-tab-pane>
        <el-tab-pane label="全部商品" name="fourth"></el-tab-pane>
      </el-tabs>
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="date"
          label="ID"
          width="120">
        </el-table-column>
        <el-table-column
          prop="name"
          label="商品图片"
          width="80">
        </el-table-column>
        <el-table-column
          prop="address"
          label="商品名称">
        </el-table-column>
        <el-table-column prop="sort_order" label="排序" width="140" sortable>
          <template scope="scope">
            <el-input-number class="sort-width" size="mini" :min="1" :max="100" controls-position="right" v-model="scope.row.sort_order" placeholder="排序" @blur="submitSort(scope.$index, scope.row)" @change="submitSort(scope.$index, scope.row)"></el-input-number>
          </template>
        </el-table-column>
        <el-table-column 
          prop="sell_volume" 
          label="销量" 
          width="80" 
          sortable>
        </el-table-column>
        <el-table-column 
          prop="goods_number" 
          label="库存" 
          width="80" 
          sortable>
        </el-table-column>
        <el-table-column label="首页显示" width="80">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.is_index"
              active-text=""
              inactive-text=""
              @change='changeShowStatus($event,scope.row.id)'>
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="首页显示" width="80">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.is_index"
              active-text=""
              inactive-text=""
              @change='changeShowStatus($event,scope.row.id)'>
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="small" @click="handleRowEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="small" plain type="danger" @click="handleRowDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    
  </div>
</template>
<script>
// const baseURL = 'http://127.0.0.1:3000'

export default {
  name: 'GoodsPage',
  data() {
    return {
      activeName: 'fourth',
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
      }],
      page: 1,
      size:10,
      filterForm: {
        name: ''
      },
    }
  },
  methods: {
    submitSort(index, row){
      console.log(index)
      console.log(row)
    },
    changeShowStatus($event, para) {
      console.log($event)
      console.log(para)
    },
    changeStatus($event, para) {
      console.log($event)
      console.log(para)
    },
    handleRowEdit(index, row) {
      console.log(index)
      console.log(row)
    },
    handleRowDelete(index, row) {
      console.log(index)
      console.log(row)
    },
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
    getList() {
      console.log('555')
      this.axios({
        url:'goods',
        method: 'get',
        params: {
          page: this.page,
          size: this.size,
        }
      })
      .then((response) => {
        console.log(response)
        // this.tableData = response.data.data.data
        // this.page = response.data.data.currentPage
        // this.total = response.data.data.count
      })
    },
  },
  mounted() {
    this.getList()
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
.sort-width{
  width: 90px;
}
.right{
  float: right;
}
.content-nav {
  display: block;
}
</style>