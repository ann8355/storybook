import { configure, addDecorator } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import Vue from 'vue';
import elementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import PopupMessage from '../story/components/popupMessage/popupMessage';
import '../story/components/popupMessage/popupMessage.css';
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
  error:'/images/loading.png',
  loading: '/images/loading.png'
})

Vue.use(elementUI);
Vue.use(PopupMessage);
addDecorator(withInfo);

function loadStories() {
    const req = require.context('../story', true, /\.stories\.js$/);
    req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);
