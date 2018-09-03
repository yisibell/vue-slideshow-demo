import Vue from 'vue'
import App from './App.vue'

import slideshow from './slideshow'

Vue.use(slideshow)

new Vue({
  el: "#app",
  render(h){
    return h(App)
  }
})