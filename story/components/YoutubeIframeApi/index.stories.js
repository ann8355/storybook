import { storiesOf } from '@storybook/vue';
import { withKnobs, text, color, number, boolean, object, select } from '@storybook/addon-knobs';
import YoutubeIframeApi from './YoutubeIframeApi.vue';

const stories = storiesOf('Presslogic|video/YoutubeIframeApi', module);
const playertype = {
    autoplay: 1,
    controls: 1
}

stories.addDecorator(withKnobs);
stories.add(
    'YoutubeIframeApi',
    () => ({
        components: { YoutubeIframeApi },
        props: {
            url: {
                default: text('url', 'https://www.youtube.com/watch?v=Qbp7_IPbugI')
            },
        },
        propsDescription: {
            YoutubeIframeApi: {
                options: 'Youtube 設定參數',
                url: 'Youtube url',
            }
        },
        template: `<YoutubeIframeApi :url="url"/>`
    }),
    {
        notes: `
        [ 版本紀錄 ]
        1.0.0 版

        [ 注意事項 ]

        1. 安裝此元件前須確認該專案已有‘vue-youtube’,'get-youtube-id',套件
        `,
        info: {
            summary: 'Youtube Iframe Api for Presslogic'
        }
    }
);
