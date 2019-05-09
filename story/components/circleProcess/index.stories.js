import { storiesOf } from '@storybook/vue';
import { withKnobs, color, boolean, number } from '@storybook/addon-knobs';
import myComponent from './cirleProcess.vue';

const stories = storiesOf('Components|cirle-process', module);
stories.addDecorator(withKnobs);
stories.add(
    'cirle-process',
    () => ({
        components: { myComponent },
        props: {
            isShow: {
                default: boolean('isShow', true)
            },
            width: {
                default: number('width', 200)
            },
            radius: {
                default: number('radius', 20)
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
            barColor: {
                default: color('barColor', '#F2AE57')
            },
            backgroundColor: {
                default: color('backgroundColor', '#FFE8CC')
            }
        },
        template: `<myComponent :isShow="isShow" :width="width" :radius="radius" :progress="progress" :duration="duration" :delay="delay" :barColor="barColor" :backgroundColor="backgroundColor" />`
    }),
    {
        notes: 'vue 版圓形進度條，自帶進度動畫，各項可動式調整 ver 1.0.0',
        info: {
            summary: 'vue 圓形進度條，漸層顏色需要另寫 linearGradient'
        }
    }
);
