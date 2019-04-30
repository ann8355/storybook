import { storiesOf } from '@storybook/vue';
import { withKnobs, color, text } from '@storybook/addon-knobs';
import card from './card.vue';
import user from './user.vue';
import mainContent from './mainContent.vue';
const color_0 = '#000';
const stories = storiesOf('Components|Post Card', module);
stories.addDecorator(withKnobs);
stories.add(
    'article post',
    () => ({
        components: { card },
        props: {
            titleColor: {
                default: color('titleColor', color_0)
            },
            title: {
                default: text('title', '今夜一起微醺吧！7-ELEVEN「春酒賞」～狐狸蘋果酒、哈密瓜風味絕對是少女系最愛酒單♡')
            },
            avatar: {
                default: text('avatar', 'https://beautybee.imgix.net/girlstyle/system/images/girlstyle-tw_icon.jpg?w=150')
            },
            authorName: {
                default: text('authorName', 'Girlstyle 官方')
            },
            cover: {
                default: text('cover', 'https://girlstyle-tw.imgix.net/wp-content/uploads/2019/04/711%E9%85%92.jpg')
            },
            date: {
                default: text('date', '10 min')
            }
        },
        template: `<card :titleColor="titleColor" :title="title" :avatar="avatar" :authorName="authorName" :cover="cover" :date="date"></card>`,
        propsDescription: {
            card: {
                // These description will appear in `description` column in props table
                avatar: '使用者大頭貼網址',
                title: '文章標題',
                titleColor: '標題顏色',
                authorName: '作者名稱',
                cover: '文章圖片',
                date: '發文時間'
            }
        }
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
