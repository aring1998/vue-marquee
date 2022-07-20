<template>
  <div class="vue-marquee" :class="{ small: size === 'small', large: size === 'large' }">
    <slot></slot>
    <div class="vue-marquee-wrapper" ref="wrap">
      <div
        v-bind="$attrs"
        v-on="$listeners"
        class="vue-marquee-text"
        ref="text"
        @click="$emit('click', text)"
        @mouseover="mouseOver && stopRoll()"
        @mouseout="mouseOver && continueRoll()"
        :style="{ left: textLeft, transition: textTransition, color, cursor }"
      >
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: 'VueMarquee',
  data() {
    return {
      textLeft: '',
      textTransition: '',
      timer: null
    };
  },
  props: {
    text: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#333'
    },
    // 滚动时间(单位: ms)
    rollTime: {
      type: Number,
      default: 15000
    },
    cursor: {
      type: String,
      default: 'text'
    },
    size: {
      type: String,
      default: ''
    },
    mouseOver: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    // 监听文本变化重新运作
    text: {
      handler() {
        this.reset();
        this.$emit('change', this.text);
      }
    },
    // 监听滚动时间变化
    rollTime: {
      handler() {
        this.reset();
      }
    }
  },
  mounted() {
    this.marquee();
  },
  methods: {
    // 跑马灯运作
    marquee() {
      if (this.text === '') return console.error('[AringVueMarquee Warn] Params of [Text] is necessary.');
      this.textRoll();
    },
    // 文本滚动
    textRoll() {
      const wrapWidth = this.$refs.wrap.clientWidth;
      const textLeft = this.$refs.text.offsetLeft;
      const textWidth = this.$refs.text.clientWidth;
      // 暂停/开始滚动时需要判断当前文本滚动的进度
      const rollTime = this.rollTime * ((textLeft + textWidth) / (wrapWidth + textWidth));
      const againTime = rollTime + 500; // 重新开始滚动时间计算
      this.textTransition = `left ${rollTime}ms linear`; // 滚动前绑定过渡属性
      setTimeout(() => {
        // 向容器最左移动
        this.textLeft = `-${textWidth}px`;
      });
      this.timer = setTimeout(() => {
        this.reset();
      }, againTime);
    },
    // 停止滚动
    stopRoll() {
      clearTimeout(this.timer);
      this.textLeft = `${this.$refs.text.offsetLeft}px`;
    },
    // 继续滚动
    continueRoll() {
      clearTimeout(this.timer);
      this.textRoll();
    },
    // 重置
    reset() {
      clearTimeout(this.timer);
      // 还原文本位置
      this.textTransition = 'none'; // 还原前需清除过渡
      this.textLeft = '100%';
      setTimeout(() => {
        this.textRoll();
      });
    }
  },
  beforeDestory() {
    clearTimeout(this.timer);
  }
};
</script>

<style scoped>
.vue-marquee {
  display: flex;
  align-items: center;
  height: 40px;
  margin: 0 16px;
}

.vue-marquee-wrapper {
  display: flex;
  align-items: center;
  flex: 1;
  height: 40px;
  overflow: hidden;
  position: relative;
}

.vue-marquee img {
  width: 14px;
  height: 12px;
  margin-right: 7px;
}

.vue-marquee-text {
  white-space: nowrap;
  position: absolute;
  left: 100%;
}

.vue-marquee.small {
  height: 30px;
  font-size: 12px;
}

.vue-marquee.large {
  height: 50px;
  font-size: 20px;
  font-weight: bold;
}
</style>
