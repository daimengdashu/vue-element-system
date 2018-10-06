<template>
  <div>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage1" :page-sizes="pageSizes" layout="total, sizes, prev, pager, next, jumper" :total="total">
    </el-pagination>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'pagination',
  props: {
    total: 0,
    pageSizes: ''
  },
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    }
  },
  methods: {
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`)
      this.$emit('handleSizeChange', val)
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`)
      this.$emit('handleCurrentChange', val)
    }
  }
}

</script>
<style rel="stylesheet/less" lang="less" scoped>
</style>
