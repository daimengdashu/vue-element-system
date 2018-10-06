import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import Layout from '@/views/layout'
import UnitManage from '@/views/systemManage/unitManage'
import OrgManage from '@/views/systemManage/orgManage'
import MenuManage from '@/views/systemManage/systemConfig/menuManage'
import UserManage from '@/views/systemManage/systemConfig/userManage'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/login'
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/layout',
    name: 'layout',
    component: Layout,
    children: [
      {
        path: '/unitManage',
        name: 'unitManage',
        component: UnitManage
      },
      {
        path: '/orgManage',
        name: 'orgManage',
        component: OrgManage
      },
      {
        path: '/menuManage',
        name: 'menuManage',
        component: MenuManage
      },
      {
        path: '/userManage',
        name: 'userManage',
        component: UserManage
      }
    ]
  }]
})
