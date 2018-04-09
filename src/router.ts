import Vue from 'vue'
import Router from 'vue-router'

import HelloComponent from "./components/hello.vue";
import app from "./app.vue";

Vue.use(Router)

export function createRouter () {

  var RouterView = {
    template: '<router-view></router-view>'
  };

  return new Router({
    routes: [{
      path: '/',
      component:RouterView
    },{
      path: '/index',
      component: app
    },{
      path: '/hello',
      component: HelloComponent
    }]
  })
}