import Vue from 'vue'
import Router from 'vue-router'

import HelloComponent from "./components/hello.vue";
import app from "./app.vue";

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [{
      path: '/',
      children: [{
        path: 'index',
        component: app,
      },{
        path: 'hello',
        component: HelloComponent,
      }]
    }]
  })
}