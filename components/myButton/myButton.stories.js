import { storiesOf } from '@storybook/vue';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import myButton from './myButton.vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
const stories = storiesOf('Example|Button', module);
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
        components: { myButton },
        props: {
            isDisabled: {
                default: boolean('Disabled', false)
            },
            text: {
                default: text('Text', '返回按鈕')
            }
        },
        template: `<myButton @click.native="link" :isDisabled="isDisabled" type="button">{{ text }}</myButton>`,
        methods: {
            link: linkTo('Example|Button', 'Main btn')
        }
    }),
    {
        info: {
            summary: 'GO TO YOUR HOME'
        },
        notes: 'The snow glows white On the mountain tonight'
    }
);
