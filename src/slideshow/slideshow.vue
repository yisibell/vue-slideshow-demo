<template>
  <div class="carousel" :style="{width: w , height: h}">
    <ul @mouseover="stop" @mouseout="isloop && loop()">
      <li v-for="(v,i) in data" :key="i" :style="{display: curr == i ? 'block' : 'none'}">
        <a href="javascript:;" @click="go(v)"><img :src="v.src" alt="图跑了" :title="v.title"></a>
      </li>
    </ul>
  
    <!--小圆点 S-->
    <ol :style="{ marginLeft : '-' + dots * 40 / 2 + 'px' }">
      <li v-for="(v,i) in dots" :key="i" :class="{ on : curr == i }" @mouseover="clickDots(i)"></li>
    </ol>
    
    <!--左右箭头 S-->
    <a href="javascript:;" class="prev" @click="prev">&lt;</a>
    <a href="javascript:;" class="next" @click="next">&gt;</a>
    
  </div>
</template>

<script>
export default {
  name: "slideshow",
  data(){
    return {
      curr: 0,
      timer: null,
      cardStyle: []
    }
  },
  props: {
    w: {
      type: String,
      default: '100%'
    },
    h: {
      type: String,
      default: '340px'
    },
    data: {
      type: Array,
      default: function(){
        return new Array({src: '../images/1.jpg' , title: "default"} , {src: '../images/2.jpg' , title: "default2"})
      }
    },
    isloop: {
      type: Boolean,
      default: true
    },
    gap: {
      type: Number,
      default: 2000
    },
    
  },
  computed: {
    dots : function(){
      return this.data.length;
    },

  },
  created(){
    // 循环切换
    this.isloop && this.loop()
  },
  methods : {
    next(){
      this.curr != this.data.length-1 ? this.curr++ : this.curr = 0;
    },
    prev(){
      this.curr != 0 ? this.curr-- : this.curr = this.data.length-1
    },
    clickDots(i){
      this.curr = i;
    },
    go(data){
      this.$emit('jump' , data)
    },
    loop(){

      this.timer = setInterval( ()=>{
        this.next()
      } , this.gap )

    },
    stop(){
      clearInterval( this.timer );
      this.timer = null;
    }

  }
}
</script>


<style lang="scss" scoped>

  ul,ol,li{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  a{
    text-decoration:none;
    display: block;
    img{
      display: block;
      margin: 0 auto;
    }
  }

  .carousel {
    margin: 0px auto;
    background-color: rgba(0,0,0,.5);
    overflow: hidden;
    position: relative;

    ul{
      width: 100%;
      height: 100%;
      li{
        width: 100%;
        height: 100%;
        display: none;
        transition: all .5s ease;
      }
    }

    //小圆点
    ol{
      position: absolute;
      left: 50%;
      bottom: 20px;
      border-radius: 10px;
      li{
        width: 30px;
        height: 2px;
        background-color: #fff;
        float: left;
        margin: 2px 5px;
        cursor: pointer;

        &.on{
          background-color: rgba(0,0,0,.4);
        }
      }
    }

    //左右箭头
    a{

      &.prev , &.next{
        position : absolute;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: rgba(255,255,255,0.5);
        top : 50%;
        margin-top:-25px;
        line-height :50px;
        text-align :center;
        font-size : 24px;
        font-family: "simsun";
        color:#fff;
        transition : all .2s;
      }

    }

    .next{
      right: -1000px;
    }
    .prev{
      left : -1000px;
    }

    &:hover{
      .next{ right: 10px;}
    }

    &:hover{
      .prev{ left: 10px;}
    }

  }


</style>
