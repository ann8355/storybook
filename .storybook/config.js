import { configure, addDecorator } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
addDecorator(withInfo);

function loadStories() {
    const req = require.context('../story', true, /\.stories\.js$/);
    req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);
