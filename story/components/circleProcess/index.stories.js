import { storiesOf } from '@storybook/vue';
import { withKnobs, color, number } from '@storybook/addon-knobs';
import myComponent from './circleProgressBar.vue';

const stories = storiesOf('Components|ProgressBar', module);
stories.addDecorator(withKnobs);
stories.add(
    'Circle-ProgressBar',
    () => ({
        components: { myComponent },
        props: {
            width: {
                default: number('width', 200)
            },
            radius: {
                default: number('radius', 10)
            },
            progress: {
                default: number('progress', 70)
            },
            duration: {
                default: number('duration', 1000)
            },
            delay: {
                default: number('delay', 20)
            },
            colorStart: {
                default: color('colorStart', '#ffc16f')
            },
            colorEnd: {
                default: color('colorEnd', '#ffe191')
            },
            backgroundColor: {
                default: color('backgroundColor', '#ededed')
            }
        },
        template: `<myComponent :width="width" :radius="radius" :progress="progress" :duration="duration" :delay="delay" :colorStart="colorStart" :colorEnd="colorEnd" :backgroundColor="backgroundColor" />`
    }),
    {
        notes: 'vue 版圓形進度條，自帶進度動畫，各項可動式調整 ver 1.0.0',
        info: {
            summary: 'vue 圓形進度條，漸層顏色需要另寫 linearGradient'
        }
    }
);
