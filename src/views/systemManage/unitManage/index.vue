<template>
  <div class="main">
    <div class="title">
      您当前所在的位置：
      <span>系统管理</span>
      <span> > </span>
      <span class="active">单位管理</span>
    </div>
    <div class="contain">
      <div class="contain-left">
        <div class="left-wrapper">
          <tree-menu @nodeClick="nodeClick" :data="data"></tree-menu>
        </div>
      </div>
      <div class="contain-right">
        <table class="my-table">
          <thead>
            <tr>
              <th v-if="isNeedCheckbox">
                <input v-model="allChecked" @click="checkAll" type="checkbox">
              </th>
              <th v-for="headItem in headData" :key="headItem">{{ headItem }}</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(bodyItem, i) in bodyData" :key="bodyItem.name">
              <td v-if="isNeedCheckbox">
                <input ref="singleInput" @click="checkSingle" type="checkbox">
              </td>
              <td>{{i + 1}}</td>
              <td>{{ bodyItem.name }}</td>
              <td>{{ bodyItem.age }}</td>
              <td>{{ bodyItem.favort }}</td>
              <td>
                <span class="table-btn" title="修改">
                	<svg-icon iconName="modify"></svg-icon>
                </span>
                <span class="table-btn" title="删除">
                	<svg-icon iconName="del"></svg-icon>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="pagination">
        	<pagination :pageSizes="pageSizes" :total="total" @handleSizeChange="handleSizeChange" @handleCurrentChange="handleCurrentChange"></pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import TreeMenu from '@/components/treeMenu'
import Pagination from '@/components/pagination'
import { initTree } from '@/api/systemManage/unitManage'

export default {
  name: 'unitManage',
  data() {
    return {
      data: [],
      allChecked: false,
      isNeedCheckbox: true,
      total: 100,
      pageSizes: [10, 20, 30, 40, 50],
      headData: ['序号', '姓名', '年龄', '爱好'],
      bodyData: [{
          name: '张三',
          age: 12,
          favort: '游泳'
        },
        {
          name: '李四',
          age: 14,
          favort: '打篮球'
        },
        {
          name: '小马',
          age: 15,
          favort: '踢足球'
        },
        {
          name: '张涛',
          age: 17,
          favort: '打台球'
        }
      ]
    }
  },
  created() {
    // this._initTree()
  },
  methods: {
    _initTree() {
      initTree().then(res => {
        this.data = res.data.data
      })
    },
    nodeClick(node) {
      console.log(node)
      console.log(node.id)
      console.log(node.label)
    },
    handleSizeChange(val) {
    	console.log(val)
    },
    handleCurrentChange(val) {
    	console.log(val)
    },
    checkAll() {
      var _this = this
      let singleInput = this.$refs.singleInput
      singleInput.map(function(el, i) {
        if (_this.allChecked) {
          el.checked = false
        } else {
          el.checked = true
        }
      })
    },
    checkSingle() {
      let singleInput = this.$refs.singleInput
      let isAllCheck = singleInput.every(function(el, i) {
        return el.checked
      })
      if (isAllCheck) {
        this.allChecked = true
      } else {
        this.allChecked = false
      }
    }
  },
  components: {
    TreeMenu,
    Pagination
  }
}

</script>
<style rel="stylesheet/less" lang="less" scoped>
.main {
  position: relative;
  height: 100%;

  .title {
    position: absolute;
    left: 0;
    top: 2px;
    width: 100%;
    padding-left: 2px;
    box-sizing: border-box;
    height: 36px;
    line-height: 36px;
    background-color: #fff;

    .active {
      color: blue;
    }
  }

  .contain {
    position: relative;
    height: 100%;

    .contain-left {
      position: absolute;
      left: 10px;
      top: 48px;
      bottom: 10px;
      width: 200px;
      padding: 10px;
      box-sizing: border-box;
      background-color: #A1CB18;

      .left-wrapper {
        width: 100%;
        height: 100%;
      }
    }

    .contain-right {
      position: absolute;
      left: 220px;
      right: 10px;
      top: 48px;
      bottom: 10px;
      padding: 10px;
      box-sizing: border-box;
      background-color: #fff;
      overflow: auto;
      .pagination {
      	width: 100%;
      	margin-top: 15px;
      }
    }
  }

}

</style>
