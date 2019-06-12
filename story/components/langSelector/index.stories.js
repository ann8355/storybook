import { storiesOf } from '@storybook/vue';
import langSelector from './langSelector.vue';
import { withKnobs, object, text } from '@storybook/addon-knobs';

const stories = storiesOf('Beautybee|langSelector', module);
stories.addDecorator(withKnobs);

// 假資料
const language = [
    {
        name: 'English',
        code: 'en',
        active: false
    },
    {
        name: '繁體',
        code: 'zh-TW',
        active: false
    },
    {
        name: '简体',
        code: 'zh-CN',
        active: false
    },
    {
        name: '한국어',
        code: 'ko',
        active: false
    }
];
const user = {
    _id: '5cff4eb5dfd6fd1cba1fae84',
    avatar: ['https://beautybee.imgix.net/girlstyle/user/images/154095988057836F9DXcNPJa.jpg'],
    cover: ['https://beautybee.imgix.net/girlstyle/posts/images/15357095957302V4A0rjfEtF.jpg'],
    avatar_list: [],
    sub_user_count: 0,
    fol_count: 0,
    post_count: 0,
    sub_user: [],
    sub_cha: ['5b7f8fa433c4680ebf163cad', '5b4c6aa20832663e0b23cad9', '5b7f980633c4680f0d287ba2', '5b7f9a3433c4680f55395a1d'],
    fol: [],
    display_name: '陳阿喜',
    real_name: 'xgae502',
    about: null,
    fb_v: true,
    gol_v: false,
    email_v: false,
    language: 'zh-CN',
    location: ['5a97c763e8e9e492ff2985d6'],
    country_id: '5a97c763e8e9e492ff2985d6',
    account_status: 0,
    account_type: 2,
    auth_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJTSEEyNTYifQ.eyJzdWIiOiI1Y2ZmNGViNWRmZDZmZDFjYmExZmFlODQiLCJnaXJsc3R5bGUiOiIiLCJpc3MiOiJodHRwOlwvXC91YXBpLmJlYXV0eWJlZS5jb21cL2FwaVwvdjJcL3VzZXJcL2luZm8iLCJpYXQiOjE1NjAzMjA0NDIsImV4cCI6MTU2MDQwNjg0MiwibmJmIjoxNTYwMzIwNDQyLCJqdGkiOiJxSEx3Z0oyWml6U2E0azdKIn0.3c8CKbWo3BlJ_vulnYNVd5IHEMOEDkVUnLDvyMLwhN0',
    auth_token_expired_at: 1560406842
};

stories.add(
    'langSelector',
    () => ({
        components: { langSelector },
        props: {
            lang: {
                default: text('lang', 'en')
            },
            language: {
                default: object('language', language)
            },
            user: {
                default: object('user', user)
            }
        },
        data() {
            return {
                currentLang: this.lang
            };
        },
        propsDescription: {
            langSelector: {
                lang: '（必填）目前語系',
                language: '（必填）所有語系列表資料',
                user: '若有傳值，用戶已登入狀態，切換語系時將會調用 updateProfile 方法, 否則調用 updateLanguage 方法'
            }
        },
        eventsDescription: {
            langSelector: {
                updateProfile: ''
            }
        },
        methods: {
            async updateProfile(lang) {
                console.log('send updateProfile api');
                console.log('lang', lang);

                // 發送 api, 將當前語系更新到 user profile
                // await axios
                //     .patch(`${process.env.MIX_API_URL}/api/v2/user/profile`, {
                //         headers: { Authorization: `Bearer${this.user.auth_token}`, 'API-MIN-NO': 9 },
                //         data: { language: lang }
                //     })
                //     .then(({ data }) => {
                //         if (data.code === 100) {
                //             // 更新成功，同步更新 vuex 語系
                //             this.updateLanguage(data.language);
                //         }
                //     });
            },
            // 將當前語系儲存到 vuex
            updateLanguage(lang) {
                console.log('selected lang', lang);
                this.currentLang = lang;
                // this.$store.commit('setLanguage', lang);
            }
        },
        template: `<langSelector :language="language" :lang="currentLang" @updateProfile="updateProfile" @updateLanguage="updateLanguage"/>`
    }),
    {
        notes: `
          [ 版本紀錄 ]
          1.0.0 版

          [ 作者 ]
          Mars
        `,
        info: {
            summary: '標籤元素：可自訂標籤的樣式（在customStyle屬性寫自訂樣式的class name）以及標籤名字前的小圖示或特殊符號'
        }
    }
);
