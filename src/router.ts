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
      path: '/hello',
      meta: {
        title: 'HelloWorld'
      },
      component: HelloComponent
    },{
      path: '/app',
      meta: {
        title: 'APP'
      },
      component: app
    }]
  })
}