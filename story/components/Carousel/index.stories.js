import { storiesOf } from '@storybook/vue';
import { withKnobs, color, object, select, boolean, number } from '@storybook/addon-knobs';
import PinnedPostCarousel from './PinnedPostCarousel/PinnedPostCarousel';
import ArticleCarousel from './ArticleCarousel/ArticleCarousel';

const stories = storiesOf('Presslogic | Carousel', module);
stories.addDecorator(withKnobs);

const OPTIONS = {
    'General (default)': '',
    'GS-TW': '/tw',
    'GS-SG': '/sg',
    'GS-IN': '/in',
    'GS-KR': '/kr',
    'GS-MY': '/my',
    'GS-US': '/us'
};
const DEFAULT_REGION = '';

const POSTS = [
    {
        cats: [
            {
                id: 20,
                name: "女生物。语",
                slug: "items"
            }
        ],
        guid: "http://girlstyle.com/my/?p=15372",
        id: 15372,
        image: "https://girlstyle-my.imgix.net/wp-content/uploads/2019/06/中国-starbucks-草泥马系列.jpg",
        post_date: "2019-06-15T16:07:27Z",
        terms: [ 20, 342, 662, 1042, 1702, 3479, 3480, 3490],
        title: "星爸爸又来抢钱啦！中国 Starbucks 第二波巨萌「草泥马」夏季系列 ，可爱逗趣的萌样瞬间融化你心赶走艳阳天 ♡",
        url: "/article/15372/星爸爸又来抢钱啦-中国-starbucks-第二波巨萌-草泥马-夏季系列-可爱逗趣的萌样瞬间融化你心赶走艳阳天"
    },
    {
        cats: [
            {
                id: 23,
                name: "流行热话",
                posts: [],
                slug: "hottopics"
            }
        ],
        guid: "http://girlstyle.com/my/?p=15022",
        id: 15022,
        image: "https://girlstyle-my.imgix.net/wp-content/uploads/2019/06/何炅语录0625.jpg",
        post_date: "2019-06-25T11:39:41Z",
        terms: [ 23, 2377, 2477],
        title: "「人总要学着穿过迷雾，独自长大」，成为光芒万丈的你！何炅老师的8句「治愈系语录」，让你那疲惫的身心感受温暖力量～",
        url: "/article/15022/人总要学着穿过迷雾-独自长大-成为光芒万丈的你-何炅老师的8句-治愈系语录-让你那疲惫的身心感受温暖力量"
    },
    {
        cats: [
            {
                id: 20,
                name: "女生物。语",
                slug: "items"
            }
        ],
        guid: "http://girlstyle.com/my/?p=15372",
        id: 12345,
        image: "https://girlstyle-my.imgix.net/wp-content/uploads/2019/06/中国-starbucks-草泥马系列.jpg",
        post_date: "2019-06-15T16:07:27Z",
        terms: [ 20, 342, 662, 1042, 1702, 3479, 3480, 3490],
        title: "星爸爸又来抢钱啦！中国 Starbucks 第二波巨萌「草泥马」夏季系列 ，可爱逗趣的萌样瞬间融化你心赶走艳阳天 ♡",
        url: "/article/15372/星爸爸又来抢钱啦-中国-starbucks-第二波巨萌-草泥马-夏季系列-可爱逗趣的萌样瞬间融化你心赶走艳阳天"
    },
    {
        cats: [
            {
                id: 23,
                name: "流行热话",
                posts: [],
                slug: "hottopics"
            }
        ],
        guid: "http://girlstyle.com/my/?p=15022",
        id: 12346,
        image: "https://girlstyle-my.imgix.net/wp-content/uploads/2019/06/何炅语录0625.jpg",
        post_date: "2019-06-25T11:39:41Z",
        terms: [ 23, 2377, 2477],
        title: "「人总要学着穿过迷雾，独自长大」，成为光芒万丈的你！何炅老师的8句「治愈系语录」，让你那疲惫的身心感受温暖力量～",
        url: "/article/15022/人总要学着穿过迷雾-独自长大-成为光芒万丈的你-何炅老师的8句-治愈系语录-让你那疲惫的身心感受温暖力量"
    },
    {
        cats: [
            {
                id: 20,
                name: "女生物。语",
                slug: "items"
            }
        ],
        guid: "http://girlstyle.com/my/?p=15372",
        id: 13265,
        image: "https://girlstyle-my.imgix.net/wp-content/uploads/2019/06/中国-starbucks-草泥马系列.jpg",
        post_date: "2019-06-15T16:07:27Z",
        terms: [ 20, 342, 662, 1042, 1702, 3479, 3480, 3490],
        title: "星爸爸又来抢钱啦！中国 Starbucks 第二波巨萌「草泥马」夏季系列 ，可爱逗趣的萌样瞬间融化你心赶走艳阳天 ♡",
        url: "/article/15372/星爸爸又来抢钱啦-中国-starbucks-第二波巨萌-草泥马-夏季系列-可爱逗趣的萌样瞬间融化你心赶走艳阳天"
    },
    {
        cats: [
            {
                id: 23,
                name: "流行热话",
                posts: [],
                slug: "hottopics"
            }
        ],
        guid: "http://girlstyle.com/my/?p=15022",
        id: 65022,
        image: "https://girlstyle-my.imgix.net/wp-content/uploads/2019/06/何炅语录0625.jpg",
        post_date: "2019-06-25T11:39:41Z",
        terms: [ 23, 2377, 2477],
        title: "「人总要学着穿过迷雾，独自长大」，成为光芒万丈的你！何炅老师的8句「治愈系语录」，让你那疲惫的身心感受温暖力量～",
        url: "/article/15022/人总要学着穿过迷雾-独自长大-成为光芒万丈的你-何炅老师的8句-治愈系语录-让你那疲惫的身心感受温暖力量"
    },
]

stories.add(
    'PinnedPostCarousel',
    () => ({
        components: { PinnedPostCarousel },
        props: {
            // Data
            device: {
                default: select('選擇裝置', {'桌機': 'desktop', '手機': 'mobile'}, 'desktop')
            },
            regionPath: {
                default: select('GirlStyle 區域路徑', OPTIONS, DEFAULT_REGION)
            },
            posts: {
                default: object('文章內容', POSTS)
            },

            // Style
            mainColor: {
                default: color('識別色', '#ffafa0')
            },
            isSwiperPaginationShowing: {
                default: boolean('顯示頁籤', true)
            },

            // Animate
            isInfiniteLoop: {
                default: boolean('無窮循環', true)
            },
            isAutoplay: {
                default: boolean('自動播放', true)
            },
            autoplayDelay: {
                default: number('自動播放延遲（ms）', 5000)
            },
            speedWhenSwitchView: {
                default: number('分頁切換速度延遲（ms）', 1000)
            }
        },
        propsDescription: {
            PinnedPostCarousel: {
                // These description will appear in `description` column in props table
                device: '裝置',
                regionPath: 'GirlStyle 區域路徑',
                posts: '文章內容',
                mainColor: '識別色',
                isSwiperPaginationShowing: '顯示頁籤',
                isInfiniteLoop: '無窮循環',
                isAutoplay: '自動播放',
                autoplayDelay: '自動播放延遲（ms）',
                speedWhenSwitchView: '分頁切換速度延遲（ms）'
            }
        },
        // 如果要傳 function 要怎麼做？
        template:
            `<PinnedPostCarousel
                :device="device"
                :regionPath="regionPath"
                :posts="posts"
                :mainColor="mainColor"
                :isSwiperPaginationShowing="isSwiperPaginationShowing"
                :isInfiniteLoop="isInfiniteLoop"
                :isAutoplay="isAutoplay"
                :autoplayDelay="autoplayDelay"
                :speedWhenSwitchView="speedWhenSwitchView"
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
            summary: '我只是個單純的 Carousel'
        }
    }
);

stories.add(
    'ArticleCarousel',
    () => ({
        components: { ArticleCarousel },
        props: {
            // Data
            device: {
                default: select('選擇裝置', {'桌機': 'desktop', '手機': 'mobile'}, 'desktop')
            },
            regionPath: {
                default: select('GirlStyle 區域路徑', OPTIONS, DEFAULT_REGION)
            },
            posts: {
                default: object('文章內容', POSTS)
            },
            isNavShowing: {
                default: boolean('顯示導覽按鈕', true)
            },

            // Style
            mainColor: {
                default: color('識別色', '#ffafa0')
            },
            spaceBetweenSlide: {
                default: number('Slide 的間距（px）', 20)
            },
            articleMaxWidth: {
                default: number('Article 寬度（px）', 270)
            },
            
            // Animate
            isInfiniteLoop: {
                default: boolean('無窮循環', false)
            },
            isAutoplay: {
                default: boolean('自動播放', false)
            },
            autoplayDelay: {
                default: number('自動播放延遲（ms）', 5000)
            },
            speedWhenSwitchView: {
                default: number('分頁切換速度延遲（ms）', 1000)
            }
        },
        propsDescription: {
            ArticleCarousel: {
                // These description will appear in `description` column in props table
                device: '裝置',
                regionPath: 'GirlStyle 區域路徑',
                posts: '文章內容',
                isNavShowing: '顯示導覽按鈕',
                mainColor: '識別色',
                spaceBetweenSlide: 'Slide 的間距（px）',
                maxWidth: 'Article 寬度',
                isInfiniteLoop: '無窮循環',
                isAutoplay: '自動播放',
                autoplayDelay: '自動播放延遲（ms）',
                speedWhenSwitchView: '分頁切換速度延遲（ms）'
            }
        },
        // 如果要傳 function 要怎麼做？
        template: 
            `<ArticleCarousel
                :device="device"
                :regionPath="regionPath"
                :posts="posts"
                :slides="slides"
                :isNavShowing="isNavShowing"
                :mainColor="mainColor"
                :spaceBetweenSlide="spaceBetweenSlide"
                :maxWidth="articleMaxWidth"
                :isInfiniteLoop="isInfiniteLoop"
                :isAutoplay="isAutoplay"
                :autoplayDelay="autoplayDelay"
                :speedWhenSwitchView="speedWhenSwitchView"
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
            summary: '我只是個單純的 Carousel'
        }
    }
);
