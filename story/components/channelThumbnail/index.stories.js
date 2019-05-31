import { storiesOf } from '@storybook/vue';
import { withKnobs, select, text, number, object } from '@storybook/addon-knobs';
import myComponent from './channelThumbnail.vue';

const stories = storiesOf('Beautybee|channelThumbnail', module);
stories.addDecorator(withKnobs);
stories.add(
    'channelThumbnail',
    () => ({
        components: { myComponent },
        props: {
            channelList: {
                default: object('channelList', [
                    {
                        _id: '5b4c6aa20832663e0b23cad5',
                        thumbnail: 'https://images.girlstyle.com/girlstyle/channel/images/thumbnail_beauty.jpg',
                        names: {
                            en: 'Beauty',
                            ko: '뷰티',
                            'zh-CN': '美容',
                            'zh-HK': '美容',
                            'zh-TW': '美容'
                        }
                    },
                    {
                        _id: '5b4c6aa20832663e0b23cad7',
                        thumbnail: 'https://images.girlstyle.com/girlstyle/channel/images/thumbnail_fashion.jpg',
                        names: {
                            en: 'Fashion',
                            ko: '패션',
                            'zh-CN': '时尚',
                            'zh-HK': '時尚',
                            'zh-TW': '時尚'
                        }
                    }
                ])
            },
            lang: {
                default: select('language', ['en', 'ko', 'zh-CN', 'zh-HK', 'zh-TW'])
            },
            inputType: {
                default: select('inputType', ['checkbox', 'radio'])
            },
            channelThumb: {
                default: object('channelThumb', {
                    width: text('channelThumbWidth', '100%'),
                    flexDirection: select('flexDirection', ['column', 'column-reverse', 'row', 'row-reverse']),
                    flexWrap: select('flexWrap', ['wrap', 'nowrap'])
                })
            },
            nothing: {
                default: text('==========', '===== breakline =====')
            },
            channelEle: {
                default: object('channelEle', {
                    width: text('channelEleWidth', '104px'),
                    height: text('channelEleHeight', '104px'),
                    borderRadius: text('borderRadius', '6px'),
                    margin: text('margin', '0 7px 15px')
                })
            }
        },
        methods: {},
        propsDescription: {},
        template: `<myComponent :channelList="channelList" :lang="lang" :inputType="inputType" :channelThumb="channelThumb" :channelEle="channelEle" />`
    }),
    {
        notes: `
            [ 版本紀錄 ]
            1.0.0 版

            [ 事件方法 ]
        `,
        info: {
            summary: '123'
        }
    }
);
