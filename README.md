# 🌈Vue跑马灯

## ✨介绍
VueMarquee是一个类似LED滚动灯效果的小组件，通过CSS3过渡方案来实现文本滚动以适应移动端，并减轻间隔器方案造成的性能损耗。

您可以自定义 **颜色/尺寸/点击事件** 等来满足您的业务需求。

## 🔨使用
复制[VueMarquee](./src/components/VueMarquee.vue)至您的项目中，注意修改`module.exports 为 export default`，然后引用它。
```JavaScript
  <template>
    <vue-marquee></vue-marquee>
  </template>
  import VueMarquee from 'xxx/VueMarquee.vue'
  export default {
    components: {
      VueMarquee
    }
  }
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