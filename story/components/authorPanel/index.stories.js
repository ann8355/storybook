import { storiesOf } from '@storybook/vue';
import { withKnobs, number, text, boolean } from '@storybook/addon-knobs';
import myComponent from './authorPanel.vue';

const stories = storiesOf('Presslogic|AuthorPanel', module);
stories.addDecorator(withKnobs);
stories.add(
    'AuthorPanel',
    () => ({
        components: { myComponent },
        props: {
            src: {
                default: text('src', 'https://mami-image.presslogic.com/wp-content/uploads/2018/03/29547272_10159988099130618_1813952574_n.jpg')
            },
            name: {
                default: text('name', 'mami')
            },
            description: {
                default: text('description', '兒時曾夢想成為畫家和作家，最喜歡上美勞堂，從事設計N年。2014年當媽媽後更喜歡畫更喜歡分享。每日的願望是囡囡肯食肯瞓唔嗌唔捵，每晚的願望仍然是一覺瞓天光。希望自己的創作能傳達愛和暖給各位爸媽，並以微笑陪伴子女成長。自囡囡踏入Trouble Two，人生格言是 「今日唔乖，聽日應該會乖⋯⋯啩？」著作：《新手爸媽打氣書 —— 與你經歷0-1歲最甜蜜的負荷》《新手爸媽打氣書2 —— 陪你湊大1-2歲停不了的孩子》期待打氣 x 互相分享 www. facebook.com/drawthedrops')
            },
            width: {
                default: number('width', 700)
            },
            mobile: {
                default: boolean('mobile', false)
            },
        },
        methods : {
            
        },
        propsDescription: {
            myComponent: {
                src: '作者圖片路徑',
                name: '作者名稱',
                description: '作者介紹',
                width: '欄位寬度',
                mobile: '是否為行動裝置',
            }
        },
        template: `<myComponent 
                        :src="src"
                        :name="name"
                        :description="description"
                        :width="width"
                        :mobile="mobile"
                     />`
    }),
    {
        notes: '作者文章列表上方的作者資訊，呈現『作者頭像/作者名稱/作者介紹』等資訊',
        info: {
            summary: '作者資訊模板：可放置作者頭像、作者名稱及作者介紹等。'
        }
    }
);
