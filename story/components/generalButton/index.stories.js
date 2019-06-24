import { storiesOf } from '@storybook/vue';
import { withKnobs, boolean, number, text, object } from '@storybook/addon-knobs';
import myComponent from './generalButton.vue';

const stories = storiesOf('Beautybee|generalButton', module);
stories.addDecorator(withKnobs);
stories.add(
    'generalButton',
    () => ({
        components: { myComponent },
        props: {
            disableBtn: {
                default: boolean('是否disaled', false)
            },
            text: {
                default: text('按鈕文字', 'Send')
            },
            disText: {
                default: text('按鈕disable文字', 'Send...')
            },
            btnStyleProps: {
                default: object('按鈕樣式', {
                    width: '110px',
                    height: '44px',
                    borderRadius: '22px',
                    boxShadow: '0 6px 6px 0 rgba(246, 160, 148, 0.3)',
                    fontSize: '15px'
                })
            },
            disBtnStyleProps: {
                default: object('disabled按鈕樣式', {
                    backgroundColor: '#9b9b9b',
                    boxShadow: '0 6px 6px 0 rgba(0, 0, 0, 0.1)'
                })
            }
        },
        methods: {
            clickAction() {
                // 在此執行按下後按鈕的事件
                console.log('執行按下後按鈕的事件');
            }
        },
        propsDescription: {
            myComponent: {
                disableBtn: '按鈕狀態',
                text: '按鈕文字',
                disText: 'disabled時的按鈕文字',
                imgSrc: '按鈕圖示路徑',
                disImgSrc: 'disabled時按鈕圖示路徑',
                btnStyleProps: '按鈕style',
                disBtnStyleProps: 'disabled時按鈕style',
                imgStyleProps: 'img style',
                disImgStyleProps: '按鈕diabled 時 img style'
            }
        },
        template: `<myComponent :text="text" :disText="disText"  :disableBtn="disableBtn" :btnStyleProps="btnStyleProps" :disBtnStyleProps="disBtnStyleProps"  @clickAction="clickAction"/>`
    }),
    {
        notes: `
        [ 版本紀錄 ]
        1.0.0 版

        [ 事件方法 ]

        1. clickAction()：
          處理按下按鈕後的事件
            
        ex:
        clickAction() {
                console.log('執行事件');
            }
        
    `,
        info: {
            summary: '按鈕：可自訂按鈕樣式、文字、圖示，預設為beautybee 常見的按鈕樣式'
        }
    }
);
