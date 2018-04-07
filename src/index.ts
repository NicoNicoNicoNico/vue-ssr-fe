import Vue from 'vue'
import Router from 'vue-router'

import App from './app.vue'
import { createRouter } from './router'
import { createStore } from './store/store'

Vue.use(Router)

export default function () {
  const router = createRouter()
  const store = createStore()
  
  const app = new Vue({
    router,
    store,    
    render: h => h(App)
  });
  return { app, router, store }
  
}
