import { storiesOf } from '@storybook/vue';
import MyAwesomeComponent from './test.vue';
const fav = 'ok';
storiesOf('MyComponent', module).add(
    'foo',
    () => ({
        components: { MyAwesomeComponent },
        template: `<my-awesome-component :text="${fav}" />`
    }),
    {
        info: {
            summary: 'Summary for MyComponent'
        }
    }
);
