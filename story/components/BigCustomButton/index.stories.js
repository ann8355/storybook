import { storiesOf } from '@storybook/vue';
import { withKnobs, color, text , number, boolean } from '@storybook/addon-knobs';
import BigCustomButton from './BigCustomButton.vue';

const stories = storiesOf('Presslogic|element/BigCustomButton', module);
stories.addDecorator(withKnobs);
stories.add(
    'BaBigCustomButtonk',
    () => ({
        components: { BigCustomButton },
        props: {
            url:{
                default: text('url', 'https://www.facebook.com/sharer.php?u=https://girlstyle.com/twundefined&amp;display=popup&amp;ref=plugin&amp;src=like&amp;app_id=1686107568269712')
            },
            text:{
                default: text('text', 'Share to Facebook')
            },
            title: {
                default: text('title', '分享')
            },
            hover: {
                default: boolean('hover', false)
            },
            color: {
                default: color('color', '#fff')
            },
            btnColor: {
                default: color('btnColor', '#3b5998')
            },
            width: {
                default: number('width', 700)
            },
            height: {
                default: number('height', 50)
            },
            radius: {
                default: number('radius', 50)
            },
            imgShow: {
                default: boolean('imgShow', true)
            },
            imgSrc: {
                default: text('imgSrc', 'https://assets.girlstyle.com/girlstyle-tw/static/images/facebook-white.png')
            },
            imgWidth: {
                default: number('imgWidth', 18)
            }
        },
        propsDescription: {
            BigCustomButton: {
                url: '按鈕點擊後的連結',
                text: '按鈕裡面文字',
                title: '按鈕連結title',
                hover: '按鈕是否hover',
                color: '按鈕文字顏色',
                btnColor: '按鈕背景顏色',
                width: '按鈕寬度',
                height: '按鈕高度',
                radius: '按鈕圓角',
                imgShow: '按鈕裡面圖片是否顯示',
                imgSrc: '按鈕裡面圖片連結',
                imgWidth: '按鈕裡面圖片寬度',
            }
        },
        template: `<BigCustomButton :url="url" :text="text" :title="title" :color="color" :btnColor="btnColor" :width="width" :height="height" :radius="radius" :imgShow="imgShow" :imgSrc="imgSrc" :imgWidth="imgWidth"   />`
    }),
    {
        notes: '自定義大按鈕',
        info: {
            summary: '自定義大按鈕'
        }
    }
);