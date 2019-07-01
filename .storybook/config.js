import { configure, addDecorator } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import Vue from 'vue';
import elementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import PopupMessage from '../story/components/popupMessage/popupMessage';
import '../story/components/popupMessage/popupMessage.css';
import truncate from 'html-truncate';
import animate from 'animate.css';
import 'animate.css/animate.min.css';
import VueLazyLoad from 'vue-lazyload';
import VueAwesomeSwiper from 'vue-awesome-swiper/dist/ssr';
import 'swiper/dist/css/swiper.css';

Vue.use(VueLazyLoad, {
    error: '/images/loading.png',
    loading: '/images/loading.png'
});
Vue.use(animate);

Vue.use(elementUI);
Vue.use(PopupMessage);
Vue.use(VueAwesomeSwiper);
Vue.filter('truncate', function(text, length) {
    text = text || '';
    length = length || 30;

    return truncate(text, length);
});
addDecorator(withInfo);

function loadStories() {
    const req = require.context('../story', true, /\.stories\.js$/);
    req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);
