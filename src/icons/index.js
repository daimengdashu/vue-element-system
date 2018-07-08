import Vue from 'vue'
import SvgIcon from '@/components/svgIcon'

Vue.component('svg-icon', SvgIcon)
const requireAll = r => r.keys().map(r)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)
