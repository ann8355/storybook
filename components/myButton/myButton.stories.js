import { storiesOf } from '@storybook/vue';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import myButton from './myButton.vue';
import { action } from '@storybook/addon-actions';

const stories = storiesOf('A|example', module);
stories.addDecorator(withKnobs);

stories.add('Main btn', () => ({
    components: { myButton },
    props: {
        isDisabled: {
            default: boolean('Disabled', false)
        },
        text: {
            default: text('Text', 'Z 按鈕')
        }
    },
    template: `<myButton @click.native="action" :isDisabled="isDisabled" type="button">{{ text }}</myButton>`,
    methods: {
        action: action('ccc')
    }
}));
