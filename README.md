# 🌈Vue跑马灯

简体中文 | [English](./README_en.md)

## 🎈[在线演示](http://aring1998.gitee.io/vue-marquee)

## ✨介绍
<img src="https://source.aring.cc/assets/project/vue-marquee/demo.gif" alt="" />

AringVueMarquee是一个类似LED滚动灯效果的小组件，通过CSS3 `Animation + Transform` 方案来实现文本滚动以适应移动端，并减轻间隔器方案造成的性能损耗。

您可以自定义 **颜色/尺寸/点击事件** 等来满足您的业务需求。

## 📦安装
```
npm install aring-vue-marquee -S
```

## 🔨使用

### 全局引用
在`main.js`中
```JavaScript
import VueMarquee from 'aring-vue-marquee';
Vue.use(VueMarquee);
```

### 组件内引用
```HTML
<template>
  <vue-marquee>
    <span>此处定义滚动内容</span>
  </vue-marquee>
</template>
<script>
  import VueMarquee from 'aring-vue-marquee';
  export default {
    components: { VueMarquee }
  };
</script>
```

## 🎨API

### Attributes
| 参数 | 类型 | 可选值 | 默认值 | 说明 |
| :----- | :----- | :----- | :----- | :----- |
| speed | Number | —— | 10 | 滚动速度，默认 10，大于 10 则更快，小于 10 则更慢 |
| direction | String | up/right/down/left | left | 滚动方向 |
| delayTime | Number | —— | 500 | 滚动间隔时间，单位ms |
| color | String | —— | #333 | 文本颜色 |
| cursor | String | —— | text | 鼠标放置文本时的光标 |
| size | String | small/large | —— | 尺寸 |
| mouseOver | Blooean | —— | true | 是否允许鼠标移入暂停滚动 |

### Event
| 事件名称 | 说明 | 回调参数 |
| :----- | :----- | :----- |
| click | 可在@click中自定义点击文本的事件 | —— |

### Methods
| 方法 | 说明 |
| :----- | :----- |
| stopRoll | 停止滚动 |
| continueRoll | 继续滚动 |
| reset | 重置 |

### Slot
| 插槽名 | 说明 |
| :----- | :----- |
| (default) | 插入滚动内容 |
| icon | 前置小图标 |

## 📜其它版本

### [vesion@1.2.1](https://gitee.com/aring1998/vue-marquee/tree/version/@1.2.1)