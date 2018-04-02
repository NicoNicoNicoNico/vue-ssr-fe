import Vue from 'vue'
import Router from 'vue-router'
import hello from './components/Hello.vue'
import helloDecorator from './components/HelloDecorator.vue'
Vue.use(Router)
export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: hello },
      { path: '/item/:id', component: helloDecorator }
    ]
  })
}