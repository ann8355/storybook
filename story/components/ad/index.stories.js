import { storiesOf } from '@storybook/vue';
import { withKnobs, number, boolean, text } from '@storybook/addon-knobs';
import Index from './index';

const stories = storiesOf('Presslogic | Mobile Video Ad', module);
stories.addDecorator(withKnobs);

stories.add(
    'Index',
    () => ({
        components: { Index },
        props: {
            backgroundOpacity: {
                default: number('背景色透明度（%）', 50)
            },
            adWidth: {
                default: number('廣告寬度（px）', 350)
            },
            firstImageHeight: {
                default: number('上方圖片高度（px）', 150)
            },
            firstImageReference: {
                default: text('上方圖片來源', 'https://fakeimg.pl/350x150/?text=Hello')
            },
            firstImageLink: {
                default: text('上方圖片連結', 'https://www.presslogic.com/')
            },
            secondImageHeight: {
                default: number('下方圖片高度（px）', 150)
            },
            secondImageReference: {
                default: text('下方圖片來源', 'https://fakeimg.pl/350x150/?text=World')
            },
            secondImageLink: {
                default: text('下方圖片連結', 'https://www.presslogic.com/')
            },
            videoHeight: {
                default: number('YouTube 影片高度（px）', 260)
            },
            videoId: {
                default: text('YouTube 影片 ID', 'Ky5jvklJ3WM')
            },
            isVideoAutoplay: {
                default: boolean('YouTube 影片是否自動播放', true)
            },
            closeButtonSize: {
                default: number('關閉廣告按鈕的大小（px）', 30)
            },
            closeButtonFontSize: {
                default: number('關閉廣告按鈕的叉叉大小（px）', 20)
            },
            spacingBetweenEdgeAndClosebutton: {
                default: number('關閉廣告按鈕與螢幕邊緣的距離（px）', 20)
            }
        },
        propsDescription: {
            Index: {
                // These description will appear in `description` column in props table
                backgroundOpacity: '背景色透明度（%）',
                adWidth: '廣告寬度（px）',
                firstImageHeight: '上方圖片高度（px）',
                firstImageReference: '上方圖片來源',
                firstImageLink: '上方圖片連結',
                secondImageHeight: '下方圖片高度（px）',
                secondImageReference: '下方圖片來源',
                secondImageLink: '下方圖片連結',
                videoHeight: 'YouTube 影片高度（px）',
                videoId: 'YouTube 影片 ID',
                isVideoAutoplay: 'YouTube 影片是否自動播放',
                closeButtonSize: '關閉廣告按鈕的大小',
                closeButtonFontSize: '關閉廣告按鈕的叉叉大小',
                spacingBetweenEdgeAndClosebutton: '關閉廣告按鈕與螢幕邊緣的距離（px）'
            }
        },
        template: `<Index
            :backgroundOpacity='backgroundOpacity'
            :adWidth='adWidth'
            :firstImageHeight='firstImageHeight'
            :firstImageReference='firstImageReference'
            :firstImageLink='firstImageLink'
            :secondImageHeight='secondImageHeight'
            :secondImageReference='secondImageReference'
            :secondImageLink='secondImageLink'
            :videoHeight='videoHeight'
            :videoId='videoId'
            :isVideoAutoplay='isVideoAutoplay'
            :closeButtonSize='closeButtonSize'
            :closeButtonFontSize='closeButtonFontSize'
            :spacingBetweenEdgeAndClosebutton='spacingBetweenEdgeAndClosebutton'
        />`,
    }),
    {
        notes: `
            [ 版本紀錄 ]
            1.0.0 版

            [ 事件方法 ]
            無

            作者：Tim
        `,
        info: {
            summary: 'GirlStyle Mobile Video Ad'
        }
    }
);