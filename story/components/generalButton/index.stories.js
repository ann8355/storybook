import { storiesOf } from '@storybook/vue';
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';
import myComponent from './generalButton.vue';

const stories = storiesOf('Beautybee|generalButton', module);
stories.addDecorator(withKnobs);
stories.add(
    'generalButton',
    () => ({
        components: { myComponent },
        props: {
            text: {
                default: text('text', 'Send')
            },
            boxShadow: {
                default: text('陰影', '0 6px 6px 0 rgba(246, 160, 148, 0.3)')
            },
            disableBtn: {
                default: boolean('是否disaled', true)
            },
            textDis: {
                default: text('disable時按鈕的文字', 'Sending...')
            },
            boxShadowDis: {
                default: text('disable時按鈕陰影', '0 6px 6px 0 rgba(0, 0, 0, 0.1)')
            }
        },
        data() {
            return {};
        },
        methods: {
            clickAction() {
                // 在此執行按下後按鈕的事件
            }
        },
        propsDescription: {
            myComponent: {
                // These description will appear in `description` column in props table
                // size: '收藏標籤大小',
                // isBooked: '是否已收藏(目前收藏的狀態)',
                // isLogin: '[必填]是否為登入狀態(登入時才能進行收藏動作)',
                // device: ' [必填]裝置類型，mobile或desktop（desktop才有hover效果）'
            }
        },
        template: `<myComponent :text="text" :disableBtn="disableBtn" :boxShadow="boxShadow" :boxShadowDis="boxShadowDis" :textDis="textDis" style="font-size: 15px;color: #fff;" @clickAction="clickAction"/>`
    }),
    {
        notes: `
        [ 版本紀錄 ]
        1.0.0 版

        [ 事件方法 ]

        1. handleLogin ()：
           處理未登入時按收藏的反饋（例如：跳出登入提示彈窗）
        2. collect ()：
            
        ex:
            collect() {
                // 在此執行bookmark API
                if (this.isbooked) {
                    this.isbooked = false;
                    console.log('取消收藏');
                } else {
                    this.isbooked = true;
                    console.log('已收藏');
                }
            }
        
    `,
        info: {
            summary: '收藏功能：可自訂收藏大小,按收藏後觸發的＠collect事件和處理未登入狀態的＠handleLogin事件'
        }
    }
);
