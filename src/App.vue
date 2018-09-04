<template>
  <div>
    <slideshow @jump="go" :data="imgList" :autoplay="false" />
  </div>
</template>

<script>
export default {
  data(){
    return {
      imgList : [
        {title: "1" , src: "./images/1.jpg"},
        {title: "2" , src: "./images/2.jpg"},
        {title: "3" , src: "./images/3.jpg"},
        {title: "4" , src: "./images/4.jpg"},
        // {title: "5" , src: "./images/1.jpg"}
      ]
    }
  },
  methods: {
    go(data){
      console.log(data)
    }
  }
}
</script>
