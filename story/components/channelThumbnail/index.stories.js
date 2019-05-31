import { storiesOf } from '@storybook/vue';
import { withKnobs, select, text, number, object, boolean } from '@storybook/addon-knobs';
import channelThumbnail from './channelThumbnail.vue';

const stories = storiesOf('Beautybee|channelThumbnail', module);
stories.addDecorator(withKnobs);
stories.add(
    'channelThumbnail',
    () => ({
        components: { channelThumbnail },
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
                    flexWrap: select('flexWrap', ['wrap', 'nowrap']),
                    justifyContent: select('justifyContent', ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'])
                })
            },
            nothing: {
                default: text('===== breakline ===== breakline ===== breakline ===== breakline ===== breakline ===== ', '')
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
        propsDescription: {
            channelThumbnail: {
                // These description will appear in `description` column in props table
                channelList: '（必填）頻道資料',
                lang: '（必填）目前語系，預設"en"',
                inputType: '單選或是複選，預設"複選"',
                channelThumb: `
                    width: '頻道卡片父層寬度，預設"100%"'，
                    flexDirection: '卡片排列方向，預設 row'，
                    flexWrap: '卡片是否需要斷行排列，預設 wrap'，
                    justifyContent: '卡片水平對齊方式'
                `,
                channelEle: `
                    width: '頻道卡片寬度，預設"104px"'，
                    height: '頻道卡片高度，預設"104px"'，
                    borderRadius: '頻道卡片圓角，預設"6px"'，
                    margin: '頻道卡片元素的間距，預設"0 7px 15px"'
                `
            }
        },
        template: `
            <div style="color: #fff; font-weight: bold; font-size: 12px;">
                <!-- ↑好孩子要養成好習慣，記得把樣式定義在 class 或是 id 裡面喔！ -->
                <channelThumbnail :channelList="channelList" :lang="lang" :inputType="inputType" :channelThumb="channelThumb" :channelEle="channelEle" />
            </div>
        `
    }),
    {
        notes: `
            [ 版本紀錄 ]
            1.0.0 版

            [ 事件方法 ]
            無
        `,
        info: {
            summary: '頻道卡片：可自訂單選或複選、卡片大小、圓角樣式、排版方式'
        }
    }
);
