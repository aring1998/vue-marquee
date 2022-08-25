<template>
  <div class="vue-marquee" :class="{ small: size === 'small', large: size === 'large' }">
    <slot name="icon"></slot>
    <div class="vue-marquee-wrapper" ref="wrap">
      <div
        v-bind="$attrs"
        v-on="$listeners"
        class="vue-marquee-text"
        ref="text"
        @click="$emit('click')"
        @mouseover="mouseOver && stopRoll()"
        @mouseout="mouseOver && continueRoll()"
        @animationend="reset"
        :style="{
          transform: textTransform,
          animation: textAnimation,
          animationPlayState: textAnimationState,
          color,
          cursor
        }"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: 'VueMarquee',
  data() {
    return {
      rollTime: 0,
      textAnimation: '',
      textAnimationState: '',
      textTransform: '',
      timer: null
    };
  },
  props: {
    speed: {
      type: Number,
      default: 10
    },
    direction: {
      type: String,
      default: 'left'
    },
    delayTime: {
      type: Number,
      default: 500
    },
    color: {
      type: String,
      default: '#333'
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
    // 监听滚动速度变化
    speed: {
      handler() {
        this.initRollTime();
        this.reset();
      }
    },
    direction: {
      handler() {
        this.initTransform();
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
      if (!['up', 'right', 'down', 'left'].includes(this.direction)) {
        return console.error(
          `[AringVueMarquee Error] Please define the correct param of [direction]("up", "right", "down", "left"). Current Value: "${this.direction}".`
        );
      }
      this.initRollTime();
      this.initTransform();
      this.textRoll();
    },
    // 动态计算滚动时间
    initRollTime() {
      if (this.speed < 0) {
        throw new Error(`[AringVueMarquee Error] Param of [speed] can not be less then 0 (Current speed: ${this.speed}).`);
      }
      if (this.speed < 0.5) {
        console.warn(`[AringVueMarquee Warn] You should not set too low param of [speed] (Current speed: ${this.speed}).`);
      }
      if (['up', 'down'].includes(this.direction)) {
        this.rollTime = ((this.$refs.text.clientHeight + this.$refs.wrap.clientHeight) * 10) / (this.speed / 10);
      } else {
        this.rollTime = ((this.$refs.text.clientWidth + this.$refs.wrap.clientWidth) * 10) / (this.speed / 10);
      }
    },
    // 根据方向判定文本初始位置
    initTransform() {
      switch (this.direction) {
        case 'up': {
          this.textTransform = `translateY(${this.$refs.text.clientHeight}px)`;
          break;
        }
        case 'right': {
          this.textTransform = `translateX(${-this.$refs.text.clientWidth}px)`;
          break;
        }
        case 'down': {
          this.textTransform = `translateY(${-this.$refs.wrap.clientHeight}px)`;
          break;
        }
        case 'left': {
          this.textTransform = `translateX(${this.$refs.wrap.clientWidth}px)`;
          break;
        }
      }
    },
    // 文本滚动
    textRoll() {
      this.textAnimation = `AringVueMarquee-${this.direction}Roll ${this.rollTime}ms linear`;
    },
    // 停止滚动
    stopRoll() {
      this.textAnimationState = 'paused';
    },
    // 继续滚动
    continueRoll() {
      this.textAnimationState = 'running';
    },
    // 重置
    reset() {
      // 重置动画
      this.textAnimation = '';
      this.timer = setTimeout(() => {
        this.textRoll();
      }, this.delayTime);
    }
  },
  beforeDestory() {
    clearTimeout(this.timer);
  }
};
</script>

<style scoped>
@import url('./animation.css');
.vue-marquee {
  display: flex;
  align-items: center;
  margin: 0 16px;
  padding: 5px 0;
}

.vue-marquee-wrapper {
  display: flex;
  align-items: center;
  flex: 1;
  overflow: hidden;
  padding: 5px 0;
}

.vue-marquee img {
  width: 14px;
  height: 12px;
  margin-right: 7px;
}

.vue-marquee-text {
  white-space: nowrap;
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
