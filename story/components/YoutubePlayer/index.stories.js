import { storiesOf } from '@storybook/vue';
import { withKnobs, text, color, number, boolean, object, select } from '@storybook/addon-knobs';
import YoutubePlayer from './YoutubePlayer.vue';

const stories = storiesOf('Presslogic|video/YoutubePlayer', module);
const playertype = {
    autoplay: 1,
    controls: 0
}

stories.addDecorator(withKnobs);
stories.add(
    'YoutubePlayer',
    () => ({
        components: { YoutubePlayer },
        props: {
            url: {
                default: text('url', 'https://www.youtube.com/watch?v=uNjny3_HaxA')
            },
            playerVars: {
                default: object('playerVars', playertype)
            }
        },
        propsDescription: {
            YoutubePlayer: {
                url: '',
                playerVars: ''
            }
        },
        template: `<YoutubePlayer :url="url" :playerVars="playerVars" />`
    }),
    {
        notes: `
        [ 版本紀錄 ]
        1.0.0 版

        [ 注意事項 ]

        1. 安裝此元件前須確認該專案已有‘vue-youtube’,'get-youtube-id',套件
        `,
        info: {
            summary: 'LargeArticle for Presslogic'
        }
    }
);
