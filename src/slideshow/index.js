import Slideshow from './slideshow.vue'

Slideshow.install = function(Vue){
  Vue.component( Slideshow.name , Slideshow )
}

export default Slideshow;