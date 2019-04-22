import { storiesOf } from '@storybook/vue';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import MyButton from './myButton.vue';

const stories = storiesOf('example', module);
stories.addDecorator(withKnobs);

stories.add('with a button', () => ({
    components: { MyButton },
    props: {
        isDisabled: {
            default: boolean('Disabled', false)
        },
        text: {
            default: text('Text', 'Hello Storybook')
        }
    },
    template: `<MyButton className="btn" :isDisabled="isDisabled" type="button">{{ text }}</MyButton>`
}));
stories.add('action test', () => <MyButton onClick={action('button-click')}>Hello World!</MyButton>);
