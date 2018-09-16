<template>
  <div>
    <div class="title-wrapper"></div>
    <div>
      <div class="side-bar-wrapper">
        <side-bar :menus="menus"></side-bar>
      </div>
      <div class="content-wrapper"></div>
    </div>
  </div>
</template>
<script type="text/javascript">
import SideBar from '@/components/sideBar'
import {login} from '@/api/login'
export default {
  name: '',
  data() {
    return {
      menus: []
    }
  },
  created() {
    this.getMenus()
  },
  methods: {
    getMenus: function() {
      const username = this.$route.params.username
      console.log(this.$route.params)
      login(username, '').then(res => {
        if (res.code === '000000') {
          this.menus = res.data.menus
        }
      })
    }
  },
  components: {
    SideBar
  }
}

</script>
<style rel="stylesheet/less" lang="less" scoped>
.title-wrapper {
  width: 100%;
  height: 50px;
  background-color: blue;
}

.side-bar-wrapper {
  width: 150px;
  height: 800px;
  float: left;
  background-color: #082450;
  .el-row .el-submenu .el-menu-item {
    width: 150px;
  }
}

.content-wrapper {
  height: 800px;
  margin-left: 150px;
  background-color: orange;
}

</style>
