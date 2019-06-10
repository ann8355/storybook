import { storiesOf } from '@storybook/vue';
import { withKnobs, color, number, boolean, text, object } from '@storybook/addon-knobs';
import Index from './Footer';
// import FooterLogo from './FooterLogo';
// import FooterNav from './FooterNav';
// import FooterCopyright from './FooterCopyright';

const stories = storiesOf('Presslogic | Footer', module);
stories.addDecorator(withKnobs);

const navLinkList = [
    {
        name: 'About',
        reference: 'http://www.presslogic.com/#about',
        isExternalLink: true
    },
    {
        name: 'Advertise',
        reference: 'http://www.presslogic.com/advertise',
        isExternalLink: true
    },
    {
        name: 'Career',
        reference: 'http://www.presslogic.com/career',
        isExternalLink: false
    },
    {
        name: 'Contact US',
        reference: 'http://www.presslogic.com/contact',
        isExternalLink: true
    }
]

stories.add(
    'Index',
    () => ({
        components: { Index },
        props: {
            bgColor: {
                default: color('Footer 背景色', '#ffafa0')
            },
            height: {
                default: number('Footer 高度', 300)
            },
            logoHeight: {
                default: number('LOGO 的高度', 80)
            },
            spacingBetweenLogoAndDividingline: {
                default: number('LOGO 和分隔線的間距', 20)
            },
            companyLogoReference: {
                default: text('公司 LOGO 圖片來源', 'https://assets.presslogic.com/presslogic-hk-hd/images/presslogic_logo_PL_white.png')
            },
            companyLink: {
                default: text('公司網址', 'https://www.presslogic.com/')
            },
            magazineLogoReference: {
                default: text('雜誌 LOGO 圖片來源', 'https://assets.presslogic.com/girlstyle-hk/images/girls/logo_HK.png')
            },
            magazineLink: {
                default: text('雜誌網址', 'https://pretty.presslogic.com/')
            },
            spacingBetweenLogoAndNavlink: {
                default: number('導覽列和 LOGO 的間距', 40)
            },
            spacingBetweenNavlinkAndCopyright: {
                default: number('導覽列和 Copyright 的間距', 40)
            },
            spacingBetweenNavlinks: {
                default: number('導覽列連結之間的間距', 40)
            },
            fontSize: {
                default: number('文字大小', 14)
            },
            isFontItalic: {
                default: boolean('文字是斜體', true)
            },
            navLinkColor: {
                default: color('導覽列文字顏色', "white")
            },
            navLinkList: {
                default: object('導覽列內的連結內容', navLinkList)
            },
            copyrightColor: {
                default: color('Copyright 文字顏色', '#fff')
            },
            magazineName: {
                default: text('雜誌名稱', 'GirlStyle')
            }
        },
        propsDescription: {
            Index: {
                // These description will appear in `description` column in props table
                bgColor: 'Footer 背景色',
                height: 'Footer 高度',
                logoHeight: 'Logo 的高度',
                spacingBetweenLogoAndDividingline: 'Logo 和分隔線的間距',
                companyLogoReference: '公司 Logo',
                companyLink: '公司網址',
                magazineLogoReference: '品牌雜誌 Logo',
                magazineLink: '雜誌網址',
                spacingBetweenLogoAndNavlink: '導覽列和 LOGO 的間距',
                spacingBetweenNavlinkAndCopyright: '導覽列和 Copyright 的間距',
                spacingBetweenNavlinks: '導覽列連結之間的間距',
                fontSize: '文字大小',
                isFontItalic: '文字是斜體',
                navLinkColor: '導覽列文字顏色',
                navLinkList: '導覽列內的連結內容',
                copyrightColor: 'Copyright 文字顏色',
                magazineName: '雜誌名稱'
            }
        },
        template: `<Index
            :bgColor='bgColor'
            :height='height'
            :logoHeight="logoHeight"
            :spacingBetweenLogoAndDividingline="spacingBetweenLogoAndDividingline"
            :companyLogoReference="companyLogoReference"
            :companyLink="companyLink"
            :magazineLogoReference="magazineLogoReference"
            :magazineLink="magazineLink"
            :spacingBetweenLogoAndNavlink="spacingBetweenLogoAndNavlink"
            :spacingBetweenNavlinkAndCopyright="spacingBetweenNavlinkAndCopyright"
            :spacingBetweenNavlinks="spacingBetweenNavlinks"
            :fontSize='fontSize'
            :isFontItalic='isFontItalic'
            :navLinkColor="navLinkColor"
            :navLinkList="navLinkList"
            :copyrightColor="copyrightColor"
            :magazineName="magazineName"
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
            summary: '我只是個單純的 Footer'
        }
    }
);

// stories.add(
//     'FooterLogo',
//     () => ({
//         components: { FooterLogo },
//         props: {
//             logoHeight: {
//                 default: number('LOGO 的高度', 80)
//             },
//             spacingBetweenLogoAndDividingline: {
//                 default: number('LOGO 和間隔線的距離', 20)
//             },
//             companyLogoReference: {
//                 default: text('公司 LOGO 圖片來源', 'https://assets.presslogic.com/presslogic-hk-hd/images/presslogic_logo_PL_white.png')
//             },
//             companyLink: {
//                 default: text('公司網址', 'https://www.presslogic.com/')
//             },
//             magazineLogoReference: {
//                 default: text('雜誌 LOGO 圖片來源', 'https://assets.presslogic.com/girlstyle-hk/images/girls/logo_HK.png')
//             },
//             magazineLink: {
//                 default: text('雜誌網址', 'https://pretty.presslogic.com/')
//             },
//         },
//         propsDescription: {
//             FooterLogo: {
//                 // These description will appear in `description` column in props table
//                 logoHeight: 'Logo 的高度',
//                 spacingBetweenLogoAndDividingline: 'Logo 與分割線的距離',
//                 companyLogoReference: '公司 Logo',
//                 companyLink: '公司網址',
//                 magazineLogoReference: '品牌雜誌 Logo',
//                 magazineLink: '雜誌網址'
//             }
//         },
//         template: `<div style="background: black; padding: 20px;">
//             <FooterLogo
//                 :logoHeight="logoHeight"
//                 :spacingBetweenLogoAndDividingline= "spacingBetweenLogoAndDividingline"
//                 :companyLogoReference="companyLogoReference"
//                 :companyLink="companyLink"
//                 :magazineLogoReference="magazineLogoReference"
//                 :magazineLink="magazineLink"
//             />
//         </div>`
//     }),
//     {
//         notes: `
//             [ 版本紀錄 ]
//             1.0.0 版

//             [ 事件方法 ]
//             無

//             作者：Tim
//         `,
//         info: {
//             summary: 'PressLogic Magazine Footer Logo'
//         }
//     }
// );

// stories.add(
//     'FooterNav',
//     () => ({
//         components: { FooterNav },
//         props: {
//             spacingBetweenNavlinks: {
//                 default: number('導覽列連結之間的間距', 40)
//             },
//             navLinkColor: {
//                 default: color('導覽列文字顏色', "white")
//             },
//             navLinkList: {
//                 default: array('導覽列內的連結內容', navLinkList)
//             },
//         },
//         propsDescription: {
//             FooterNav: {
//                 // These description will appear in `description` column in props table
//                 spacingBetweenNavlinks: '導覽列連結之間的間距',
//                 navLinkColor: '導覽列文字顏色',
//                 navLinkList: '導覽列內的連結內容',
//                 spacingBetweenLogoAndNavlink: '導覽列和 LOGO 的間距',
//                 spacingBetweenNavlinkAndCopyright: '導覽列和 Copyright 的間距'
//             }
//         },
//         template: `<div style="background: black; padding: 20px;">
//             <FooterNav
//                 :spacingBetweenNavlinks= "spacingBetweenNavlinks"
//                 :navLinkColor="navLinkColor"
//                 :navLinkList="navLinkList"
//             />
//         </div>`
//     }),
//     {
//         notes: `
//             [ 版本紀錄 ]
//             1.0.0 版

//             [ 事件方法 ]
//             無

//             作者：Tim
//         `,
//         info: {
//             summary: 'PressLogic Magazine Nav'
//         }
//     }
// );

// stories.add(
//     'FooterCopyright',
//     () => ({
//         components: { FooterCopyright },
//         props: {
//             copyrightColor: {
//                 default: color('Copyright 文字顏色', '#fff')
//             },
//             magazineName: {
//                 default: text('雜誌名稱', 'GirlStyle')
//             }
//         },
//         propsDescription: {
//             FooterCopyright: {
//                 // These description will appear in `description` column in props table
//                 copyrightColor: 'Copyright 文字顏色',
//                 magazineName: '雜誌名稱'
//             }
//         },
//         template: `<div style="background: black; padding: 20px;">
//             <FooterCopyright 
//                 :copyrightColor="copyrightColor"
//                 :magazineName="magazineName"
//             />
//         <div/>`
//     }),
//     {
//         notes: `
//             [ 版本紀錄 ]
//             1.0.0 版

//             [ 事件方法 ]
//             無

//             作者：Tim
//         `,
//         info: {
//             summary: 'PressLogic Magaizine Copyright'
//         }
//     }
// );
