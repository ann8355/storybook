import { storiesOf } from '@storybook/vue';
import { withKnobs, color, text } from '@storybook/addon-knobs';
import card from './card.vue';
import user from './user.vue';
import mainContent from './mainContent.vue';
import centered from '@storybook/addon-centered/vue';
const color_0 = '#000';
const stories = storiesOf('Components|Post', module);
stories.addDecorator(withKnobs);
stories.addDecorator(centered);
stories.add(
    'article post',
    () => ({
        components: { card },
        props: {
            color0: {
                default: color('title', color_0)
            },
            text: {
                default: text('Text', '今夜一起微醺吧！7-ELEVEN「春酒賞」～狐狸蘋果酒、哈密瓜風味絕對是少女系最愛酒單♡')
            }
        },
        template: `<card :color0="color0" :text="text"></card>`
    }),
    {
        notes: 'beautybee post card',
        info: {
            summary: 'Me and my last stubborn'
        }
    }
);
stories.add(
    'user info',
    () => ({
        components: { user },
        template: `<user/>`
    }),
    {
        notes: 'beautybee post card',
        info: {
            summary: 'Me and my last stubborn'
        }
    }
);
stories.add(
    'mainContent',
    () => ({
        components: { mainContent },
        template: `<mainContent/>`
    }),
    {
        notes: 'beautybee post card',
        info: {
            summary: 'Me and my last stubborn'
        }
    }
);
