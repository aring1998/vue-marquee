// 导入组件，组件必须声明 name
import VueMarquee from './VueMarquee.vue';

// 为组件提供 install 安装方法，供按需引入
VueMarquee.install = function(Vue) {
  Vue.component(VueMarquee.name, VueMarquee);
};

// 默认导出组件
export default VueMarquee;
