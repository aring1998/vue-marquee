export const base = `
  <template>
    <vue-marquee>
      <span>海外徒闻更九州，他生未卜此生休。 空闻虎旅传宵柝，无复鸡人报晓筹。 此日六军同驻马，当时七夕笑牵牛。 如何四纪为天子，不及卢家有莫愁。</span>
    </vue-marquee>
  </template>
`;

export const style = `
  <-- 
    容器直接包裹marquee，作为背景板可自定义样式
    可通过color, cursor分别定义跑马灯下文本的颜色及光标样式
    也可直接在文本标签中自定义样式
  -->
  <template>
    <div style="width: 80%; margin: 0 auto; background-color: #eee;">
      <vue-marquee color="red" cursor="pointer">
        <p>海外徒闻更九州，他生未卜此生休。 空闻虎旅传宵柝，无复鸡人报晓筹。 此日六军同驻马，当时七夕笑牵牛。 如何四纪为天子，不及卢家有莫愁。</p>
        <p style="color: skyblue;">海外徒闻更九州，他生未卜此生休。 空闻虎旅传宵柝，无复鸡人报晓筹。 此日六军同驻马，当时七夕笑牵牛。 如何四纪为天子，不及卢家有莫愁。</p>
      </vue-marquee>
    </div>
  </template>
`;

export const speed = `
  <-- 通过传入[speed]控制滚动速度，speed默认 10，大于 10 则更快，小于 10 则更慢 -->
  <template>
    <button @click="speed = 30">跑得快些</button>
    <button @click="speed = 1" style="margin-bottom: 10px;">跑得慢些</button>
    <div>
      <vue-marquee color="red" :speed="speed">
        <span>海外徒闻更九州，他生未卜此生休。 空闻虎旅传宵柝，无复鸡人报晓筹。 此日六军同驻马，当时七夕笑牵牛。 如何四纪为天子，不及卢家有莫愁。</span>
      </vue-marquee>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          speed: 10
        }
      }
    }
  </script>
`;

export const size = `
  <-- 通过传入[size]控制文本大小 -->
  <template>
    <h2>定义尺寸</h2>
    <button @click="size = ''">默认</button>
    <button @click="size = 'small'">小型</button>
    <button @click="size = 'large'" style="margin-bottom: 10px;">大型</button>
    <div>
      <vue-marquee :size="size">
        <span>海外徒闻更九州，他生未卜此生休。 空闻虎旅传宵柝，无复鸡人报晓筹。 此日六军同驻马，当时七夕笑牵牛。 如何四纪为天子，不及卢家有莫愁。</span>
      </vue-marquee>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          size: ''
        }
      }
    }
  </script>
`;

export const mouseover = `
  <-- 通过传入[mouseover="false"]禁用鼠标移入文本框暂停滚动功能，但仍可以使用组件中[stopRoll, continueRoll]方法操纵滚动 -->
  <template>
    <span>您仍可以动态指定其暂停/继续滚动</span>
    <button @click="$refs.marquee.stopRoll()">暂停</button>
    <button @click="$refs.marquee.continueRoll()" style="margin-bottom: 10px;">继续</button>
    <div>
      <vue-marquee :mouseover="false" ref="marquee">
        <span>海外徒闻更九州，他生未卜此生休。 空闻虎旅传宵柝，无复鸡人报晓筹。 此日六军同驻马，当时七夕笑牵牛。 如何四纪为天子，不及卢家有莫愁。</span>
      </vue-marquee>
    </div>
  </template>
`;

export const clickEvent = `
  <template>
    <div>
      <vue-marquee cursor="pointer" @click="changeText = '您好呀，感谢来访~'">
        <span>{{ changeText }}</span>
      </vue-marquee>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          changeText: '尝试点击我吧~'
        }
      }
    }
  </script>
`;

export const direction = `
  <-- 
    通过传入direction控制marquee移动方向
    left: 左, right: 右, up: 上, down: 下
    请留意传入错误的direction属性将会导致marquee无法正常运行
  -->
  <template>
    <button @click="direction = 'left'">向左</button>
    <button @click="direction = 'right'">向右</button>
    <button @click="direction = 'up'">向上</button>
    <button @click="direction = 'down'" style="margin-bottom: 10px;">向下</button>
    <div>
      <vue-marquee :direction="direction">
        <span>您希望我以什么方向移动呢？</span>
      </vue-marquee>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          direction: 'left'
        }
      }
    }
  </script>
`;

export const icon = `
  <-- 通过具名插槽\`icon\`可定义前置图标 -->
  <template>
    <div>
      <vue-marquee>
        <template #icon>
          <img src="./src/assets/img/notice.png" alt="" />
        </template>
        <span>{{ text }}</span>
      </vue-marquee>
    </div>
  </template>
`;
