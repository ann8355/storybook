import { storiesOf } from '@storybook/vue';
import { withKnobs, text, color, number, boolean, object, select } from '@storybook/addon-knobs';
import VideoPlayer from './VideoPlayer.vue';

const stories = storiesOf('Presslogic|element/VideoPlayer', module);
const youtubeOptions = {
    autoplay: true,
    controls: true,
    width: '600',
    height: '400',
    poster: 'https://images.girlsdaily.com/wp-content/uploads/2019/03/奶蜜.jpg?w=400&auto=format',
    techOrder: ['youtube'],
    sources: [
        {
            src:'https://www.youtube.com/watch?v=uNjny3_HaxA',
            type: 'video/youtube'
        }
    ]
};
const MP4Options = {
    autoplay: true,
    controls: true,
    width: '600',
    height: '400',
    poster: 'https://images.girlsdaily.com/wp-content/uploads/2019/03/奶蜜.jpg?w=400&auto=format',
    sources: [
        {
            type: 'video/mp4',
            src:'//vjs.zencdn.net/v/oceans.mp4'
        }
    ]
};

stories.addDecorator(withKnobs);
stories.add(
    'VideoPlayer',
    () => ({
        components: { VideoPlayer },
        props: {
            options: {
                default: object('post', MP4Options)
            },
        },
        propsDescription: {
            VideoPlayer: {

            }
        },
        template: `<VideoPlayer :options="options" />`
    }),
    {
        notes: `
        [ 版本紀錄 ]
        1.0.0 版

        [ 注意事項 ]

        1. 安裝此元件前須確認該專案已有‘video.js’,'videojs-youtube',套件
        `,
        info: {
            summary: 'LargeArticle for Presslogic'
        }
    }
);
