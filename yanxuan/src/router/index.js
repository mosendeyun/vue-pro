import Vue from 'vue'
import Router from 'vue-router'
import homeRoute from './homeRoute'
import cartRoute from './cartRoute'
import catagoryRoute from './categoryRoute'
import mineRoute from './mineRoute'
import topicRoute from './topicRoute'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    homeRoute,
    cartRoute,
    catagoryRoute,
    mineRoute,
    topicRoute
  ]
})
