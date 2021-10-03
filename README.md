# 🌈Vue跑马灯


## 🎈[在线演示](http://aring1998.gitee.io/vue-marquee)

## ✨介绍
![Image text](src/assets/img/demo.gif)

VueMarquee是一个类似LED滚动灯效果的小组件，通过CSS3过渡方案来实现文本滚动以适应移动端，并减轻间隔器方案造成的性能损耗。

您可以自定义 **颜色/尺寸/点击事件** 等来满足您的业务需求。

## 🔨使用

### 全局引用
```JavaScript
import VueMarquee from "aring-vue-marquee";
Vue.use(VueMarquee);
```

### 组件内引用
```HTML
<script>
  import VueMarquee from 'aring-vue-marquee';
  export default {
    components: {
      VueMarquee
    }
  };
</script>
```

### 在页面中使用aring-vue-marquee
```HTML
<template>
  <vue-marquee text="请注意文本属性是必不可少的"></vue-marquee>
</template>
```

## 🎨API

### Attributes
| 参数 | 类型 | 可选值 | 默认值 | 说明 |
| :----- | :----- | :----- | :----- | :----- |
| text | String | —— | —— | 文本内容 |
| color | String | —— | #333 | 文本颜色 |
| rollTime | Number | —— | 15 | 滚动时间 |
| cursor | String | —— | text | 鼠标放置文本时的光标 |
| size | Number | small/large | —— | 尺寸 |
| mouseOver | Blooean | —— | true | 是否禁用暂停滚动 |

### Event
| 事件名称 | 说明 |
| :----- | :----- |
| click | 可在@click中自定义点击文本的事件 |

### Methods
| 方法 | 说明 |
| :----- | :----- |
| stopRoll | 停止滚动 |
| continueRoll | 继续滚动 |
| reset | 重置 |