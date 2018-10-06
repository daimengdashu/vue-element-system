<template>
  <div>
    <div class="title-wrapper">
      <div class="logo"></div>
      <div class="option">
        <span class="username-wrapper">
          <svg-icon iconName="user_name"></svg-icon>
          <span class="username">{{ username }}</span>
        </span>
        <span @click="exit" title="退出" class="exit-wrapper">
          <svg-icon class="exit" iconName="exit"></svg-icon>
        </span>
      </div>
    </div>
    <div>
      <div class="side-bar-wrapper">
        <side-bar :menus="menus"></side-bar>
      </div>
      <div class="content-wrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import SideBar from '@/components/sideBar'
import { getMenus } from '@/api/login'
export default {
  name: '',
  data() {
    return {
      menus: [],
      username: ''
    }
  },
  created() {
    this._getMenus()
    // window.history.pushState(null, null, document.URL)
    // window.addEventListener('popstate', function() {
    //   window.history.pushState(null, null, document.URL)
    // })
  },
  methods: {
    _getMenus: function() {
      const username = window.sessionStorage.getItem('user')
      console.log(document.cookie)
      if (!username) {
        this.$alert('登录已过期,请重新登陆!', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$router.push({
              path: '/login'
            })
          }
        })
        return
      }
      this.username = username
      getMenus().then(res => {
        console.log(res)
        this.menus = res.data
      })
    },
    exit: function() {
      this.$router.push({
        path: '/login'
      })
      // 禁止浏览器后退
      window.history.pushState(null, null, document.URL)
      window.addEventListener('popstate', function() {
        window.history.pushState(null, null, document.URL)
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
  height: 50px; // background-color: green;

  .logo {
    float: left;
    height: 100%;
    width: 150px;
    background-image: url('../../assets/logo.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .option {
    float: right;
    height: 100%;
    line-height: 50px;

    .username-wrapper {
      margin-right: 10px;
      font-size: 20px;

      .username {
        position: relative;
        top: -2px;
      }
    }

    .exit-wrapper {
      margin-right: 10px;
      font-size: 20px;
      cursor: pointer;
    }
  }
}

.side-bar-wrapper {
  position: absolute;
  left: 0;
  top: 50px;
  bottom: 0;
  width: 150px;
  overflow: auto;
  background-color: #082450;

  .el-row .el-submenu .el-menu-item {
    width: 150px;
  }
}

.content-wrapper {
  position: absolute;
  left: 150px;
  top: 50px;
  right: 0;
  bottom: 0;
  background-color: #C8DFEF;
}

</style>
