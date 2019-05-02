import { storiesOf } from '@storybook/vue';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import myButton from './myButton.vue';
import backButton from './backButton.vue';
const stories = storiesOf('Components|Button', module);
stories.addDecorator(withKnobs);
stories.add(
    'Main btn',
    () => ({
        components: { myButton },
        props: {
            isDisabled: {
                default: boolean('Disabled', false)
            },
            text: {
                default: text('Text', 'Go 按鈕')
            }
        },
        template: `<my-button @click.native="action" :isDisabled="isDisabled" type="button">{{ text }}</my-button>`,
        methods: {
            action: action('ccc'),
            link: linkTo('A|example', 'Button')
        }
    }),
    {
        notes: 'cccc',
        info: {
            summary: 'Me and my last stubborn'
        }
    }
);
stories.add(
    'Back btn',
    () => ({
        components: { backButton },
        props: {
            isDisabled: {
                default: boolean('Disabled', false)
            },
            text: {
                default: text('Text', '返回按鈕')
            }
        },
        template: `<backButton @click.native="link" :isDisabled="isDisabled" type="button">{{ text }}</backButton>`,
        methods: {
            link: linkTo('Components|Button', 'Main btn')
        }
    }),
    {
        info: {
            summary: 'GO TO YOUR HOME'
        },
        notes: 'The snow glows white On the mountain tonight'
    }
);
