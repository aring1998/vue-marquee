# 🌈AringVueMarquee

[简体中文](./README.md) | English

## 🎈[Demo](http://aring1998.gitee.io/vue-marquee)

## ✨Introduce
<img src="http://aring.3vfree.cc/my-img/vue-marquee/demo.gif" alt="" />

AringVueMarquee is a small component similar to the effect of LED rolling light. It realizes text rolling through CSS3 transition scheme to adapt to the mobile terminal and reduce the performance loss caused by interval.

You can customize **color / size / click event** to meet your business needs

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
  <vue-marquee text="Text is necessary"></vue-marquee>
</template>
<script>
  import VueMarquee from 'aring-vue-marquee';
  export default {
    components: {
      VueMarquee
    }
  };
</script>
```

## 🎨API

### Props
| Name | Type | Options | Default | Description |
| :----- | :----- | :----- | :----- | :----- |
| text | String | —— | —— | Text content |
| color | String | —— | #333 | Text color |
| rollTime | Number | —— | 15000 | Rolling time，unit:ms |
| cursor | String | —— | text | Cursor when mouse over |
| size | String | small/large | —— | Size of marquee |
| mouseOver | Blooean | —— | true | Allow stop rolling on mouse over |

### Event
| Name | Description |
| :----- | :----- |
| click | You can customize the event of clicking text in @click |

### Methods
| Name | Description |
| :----- | :----- |
| stopRoll | Stop rolling |
| continueRoll | continue rolling |
| reset | reset marquee |