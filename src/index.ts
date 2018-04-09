import Vue from 'vue'
import Router from 'vue-router'

import App from './app.vue'
import Hello from './components/hello.vue'
import { createRouter } from './router'
import { createStore } from './store/store'
import { sync } from 'vuex-router-sync'

export default function () {
  const router = createRouter()
  const store = createStore()
  
  sync(store, router)

  const app = new Vue({
    router: router,
    store: store,    
    render: h => h('router-view')
  });
  return { app, router, store}
  
}
