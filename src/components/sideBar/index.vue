<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu router :default-active="hasChild" class="el-menu-vertical-demo" background-color="#082450" text-color="#fff" active-text-color="blue">
        <div v-for='items in menus' :key="items.menu">
          <el-submenu :index="items.path" v-if="items.children.length !== 0">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{ items.menu }}</span>
            </template>
            <div v-for="item in items.children" :key="item.menu">
              <el-menu-item-group v-if="item.children.length === 0">
                <el-menu-item :index="item.path">{{ item.menu }}</el-menu-item>
              </el-menu-item-group>
              <el-submenu :index="item.path" v-else-if="item.children.length !== 0">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>{{ item.menu }}</span>
                </template>
                <side-bar :menus="item.children"></side-bar>
              </el-submenu>
            </div>
          </el-submenu>
          <el-menu-item :index="items.path" v-else-if="items.children.length === 0">
            <i class="el-icon-menu"></i>
            <span slot="title">{{ items.menu }}</span>
          </el-menu-item>
        </div>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script type="text/javascript">
export default {
  name: 'sideBar',
  props: {
    menus: ''
  },
  created() {
    console.log(this.menus)
  },
  computed: {
    hasChild() {
      console.log(this)
      let path = ''
      if (!this.menus[0]) {
        return path
      } else {
        if (this.menus[0].children.length === 0) {
          path = this.menus[0].path
          this.defaultjumpPage(this.menus[0].path)
          return this.menus[0].path
        } else {
          path = this.menus[0].children[0].path
          this.defaultjumpPage(this.menus[0].children[0].path)
          return this.menus[0].children[0].path
        }
      }
    }
  },
  methods: {
    defaultjumpPage(path) {
      this.$router.push({
        path: path
      })
    }
  }
}

</script>
<style rel="stylesheet/less" lang="less" scoped>
.el-row .el-submenu .el-menu-item {
  min-width: 150px;
}

.el-menu-item-group ul {
  background-color: green;
}

.side-bar-wrapper .el-submenu__title {
  padding-left: 20px !important;
}

</style>
<style rel="stylesheet/less" lang="less">
.el-submenu__title {
  padding-left: 20px !important;
}

</style>
