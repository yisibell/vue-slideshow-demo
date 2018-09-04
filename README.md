# vue-slideshows
a  slideshow component for vue.js 

## Installation
**Using npm**
``` bash
npm install vue-slideshows --save
#or
cnpm install vue-slideshows --save
```

## Usage
**In main.js**
``` js
import Vue from 'vue'
import slideShows from 'vue-slideshows'

Vue.use(slideShows)

// new Vue({ //... })

```

**In_.vue**

``` html
<slideshow :data="imgList" @jump="jumpTo" />
```

``` js
export default {
  name: "demo",
  data(){
    return {
      imgList: [
        // the object must have `src` property
        {title: "this is the img title" , src: "this is the img uri"}
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
| data | Array of object | 轮播数据 | [{ title: "default" , src: "./images/1.jpg"},</br>{ title: "default2" , src: "./images/2.jpg"}] (默认) | 是 |
| isloop | Boolean | 是否开启自动循环轮播 | true (默认) | 否 |

**注意:**
1. `:data` prop 必须是对象数组类型，且该对象中必须包含 `src` 字段 （图片地址）


## Events
**@jump**
> 点击某张图片时触发句柄

``` html
<slideshow @jump="jumpTo" />
```

``` js
export default {
  name: "demo",
  data(){
    return {}
  },
  methods: {
    jumpTo(){
      // do somethig when you click the img ...
    }
  }
}
```

## Logs
> 2018/9/4
