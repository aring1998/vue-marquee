# 🌈AringVueMarquee

[简体中文](./README.md) | English

## 🎈[Demo](http://aring1998.gitee.io/vue-marquee)

## ✨Introduce
<img src="https://source.aring.cc/assets/project/vue-marquee/demo.gif" alt="" />

AringVueMarquee is a small component similar to the effect of LED rolling light. It realizes text rolling through CSS3 `Animation + Transform` scheme to adapt to the mobile terminal and reduce the performance loss caused by interval.

You can customize **color / size / click event** to meet your business needs.

## 📦Install
```
npm install aring-vue-marquee -S
```

## 🔨Usage

### In global
In `main.js`
```JavaScript
import VueMarquee from 'aring-vue-marquee';
Vue.use(VueMarquee);
```

### In component
```HTML
<template>
  <vue-marquee>
    <span>Customize roll content here</span>
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

### Props
| Name | Type | Options | Default | Description |
| :----- | :----- | :----- | :----- | :----- |
| speed | Number | —— | 10 | Speed of roll, default 10, faster if it is greater than 10, slower if it is less than 10 |
| direction | String | up/right/down/left | left | Direction of roll |
| delayTime | Number | —— | 500 | Rolling interval, unit: ms |
| color | String | —— | #333 | Text color |
| cursor | String | —— | text | Cursor when mouse over |
| size | String | small/large | —— | Size of marquee |
| mouseover | Blooean | —— | true | Allow stop rolling on mouseover |

### Event
| Name | Description | Parameters |
| :----- | :----- | :----- |
| click | You can customize the event of clicking text in @click | —— |

### Methods
| Name | Description |
| :----- | :----- |
| stopRoll | Stop rolling |
| continueRoll | Continue rolling |
| reset | Reset marquee |

### Slot
| Name | Description |
| :----- | :----- |
| (default) | Insert Roll content |
| icon | pre-icon |

## 📜Other Version

### [vesion@1.2.1](https://gitee.com/aring1998/vue-marquee/tree/version/@1.2.1)