import { storiesOf } from '@storybook/vue';
import myComponent from './popupMessage.vue';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/vue';
const stories = storiesOf('Components|popupMessage', module);
stories.addDecorator(centered);
stories.add(
    'popupMessage',
    () => ({
        components: { myComponent },
        props: {
            type: {
                default: 'success'
            }
        },
        template: `<myComponent @click.native="action" :type="type" />`,
        methods: {
            action: action('clicked')
        }
    }),
    {
        notes: '各式彈出懸浮訊息',
        info: {
            summary: 'Me and my last stubborn'
        }
    }
);
