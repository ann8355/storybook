import { configure } from '@storybook/vue';
function loadStories() {
    const req = require.context('../components/list', true, /\.stories\.js$/);
    req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);
