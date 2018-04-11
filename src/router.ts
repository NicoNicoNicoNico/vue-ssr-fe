import Vue from 'vue'
import Router from 'vue-router'

import HelloComponent from "./modules/hello.vue";
import app from "./modules/app.vue";

Vue.use(Router)

export function createRouter () {

  var RouterView = {
    template: '<router-view></router-view>'
  };

  return new Router({
    mode: 'history',
    routes: [{
      path: '/',
      component:RouterView,
      children:[{
        path:':lang',
        component: RouterView,
        children: [{
          path:'ww',
          component: HelloComponent
        },{
          path: 'about',
          meta: {
            title: '关于我们'
          },
          component: app
        },{
          path: ':category_url?/-c(\\d+)',
          meta: {
            title: '分类页'
          },
          component: app
        }]
      }]
    // },{
    //   path: '/:lang',
    //   component: RouterView,
    //   children: [{
    //     path: '',
    //     meta: {
    //       title: '主页'
    //     },
    //     component: HelloComponent
    //   },{
    //     path: 'about',
    //     meta: {
    //       title: '关于我们'
    //     },
    //     component: app
    //   },{
    //     path: 'contact',
    //     meta: {
    //       title: '联系我们'
    //     },
    //     component: app
    //   },{
    //     path: 'search',
    //     meta: {
    //       title: '搜索结果页'
    //     },
    //     component: app
    //   },{
    //     path: ':categroy_url'+'-c'+':cid'+'.html',
    //     meta: {
    //       title: '分类页'
    //     },
    //     component: HelloComponent
    //   },{
    //     path: ':product_url'+'-p'+':pid'+'.html',
    //     meta: {
    //       title: '产品页'
    //     },
    //     component: app
    //   },{
    //     path: ':news_url'+'-n'+':nid'+'.html',
    //     meta: {
    //       title: '新闻页'
    //     },
    //     component: app
    //   },{
    //     path: ':opportunity_url'+'-bo'+':boid'+'.html',
    //     meta: {
    //       title: '交易机会页'
    //     },
    //     component: app
    //   },{
    //     path: 'not_found',
    //     meta: {
    //       title: '404'
    //     },
    //     component: app
    //   }]
    },{
      path: '/error',
      meta: {
        title: '站点未找到'
      },
      component: app
    }]
  })
}