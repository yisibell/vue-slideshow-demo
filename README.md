# vue-slideshow-demo

a slideshow component for vue.js 

## Usage

``` html
<Slideshow :data="imgList" @jump="jumpTo" />
```

``` js
export default {
  name: "demo",
  data(){
    return {
      imgList: [
        // the object must have `src` property
        // `title` : img 's title
        // `src` : img 's src
        {title: "defalut" , src: "./images/1.jpg"},
        {title: "defalut2" , src: "./images/2.jpg"},
        // ...
      ]
    }
  },
  methods: {
    jumpTo(){
      // do somethig when you click the img ...
    }
  }
}
```

## Properties
| 属性 | 类型 | 说明 | 可选值 | 是否必需 |
| :----: | :----: | :----: | :----: | :----: |
| w | String | 轮播图宽度 | 100% (默认) | 否 |
| h | String | 轮播图高度 | 340px ( 默认) | 否 |
| data | Array of object | 轮播数据 | 默认展示的本地测试图片 </br> 使用 `:data` 覆盖即可 | 是 |
| autoplay | Boolean | 是否开启自动循环轮播 | true (默认) | 否 |
| interval | Number | 自动轮播间隔毫秒数 | 2000 (默认) | 否 |

**注意:**
1. `:data` prop 必须是对象数组类型，且该对象中必须包含 `src` 字段 （图片地址）


## Events

**@jump**
> 点击某张图片时触发句柄

``` html
<Slideshow @jump="jumpTo" />
```

``` js
export default {
  name: "demo",
  data(){
    return {}
  },
  methods: {
    jumpTo(info){
      // `info` is the data of current img
      // do somethig when you click the img ...
    }
  }
}
```
