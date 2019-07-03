import { storiesOf } from '@storybook/vue';
import { withKnobs, color, object, select, boolean, number } from '@storybook/addon-knobs';
import Index from './Carousel';

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

const COLUMN_OPTIONS = {
    '1 (default)': 1,
    '3': 3
};
const DEFAULT_COLUMN_OPTINS = 1;

const SLIDE_OPTIONS = {
    '首頁  (default)': 1,
    '404 頁面': 0
};
const DEFAULT_SlIDE_OPTINS = 1;

stories.add(
    'Index',
    () => ({
        components: { Index },
        props: {
            // Data
            regionPath: {
                default: select('GirlStyle 區域路徑', OPTIONS, DEFAULT_REGION)
            },
            posts: {
                default: object('文章內容', POSTS)
            },
            slides: {
                default: select('顯示幾個 slide ？', COLUMN_OPTIONS, DEFAULT_COLUMN_OPTINS)
            },
            slideContentType: {
                default: select('輪播內容', SLIDE_OPTIONS, DEFAULT_SlIDE_OPTINS)
            },

            // Style
            mainColor: {
                default: color('識別色', '#ffafa0')
            },
            spaceBetweenSlide: {
                default: number('Slide 的間距（px）', 20)
            },
            isNavShowing: {
                default: boolean('顯示導覽按鈕', false)
            },
            isSwiperPaginationShowing: {
                default: boolean('顯示頁籤', false)
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
            Index: {
                // These description will appear in `description` column in props table
                regionPath: 'GirlStyle 區域路徑',
                posts: '文章內容',
                slides: '顯示幾個 slide ？',
                slideContentType: 'Slide 的內容（1: 首頁輪播 0: 404 頁文章輪播）',
                mainColor: '識別色',
                spaceBetweenSlide: 'Slide 的間距（px）',
                isNavShowing: '顯示導覽按鈕',
                isSwiperPaginationShowing: '顯示頁籤',
                isInfiniteLoop: '無窮循環',
                isAutoplay: '自動播放',
                autoplayDelay: '自動播放延遲（ms）',
                speedWhenSwitchView: '分頁切換速度延遲（ms）'
            }
        },
        // 如果要傳 function 要怎麼做？
        template: `<Index 
            :regionPath="regionPath"
            :posts="posts"
            :slides="slides"
            :slideContentType="slideContentType"
            :mainColor="mainColor"
            :spaceBetweenSlide="spaceBetweenSlide"
            :isNavShowing="isNavShowing"
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
            2.0.0 版

            [ 事件方法 ]
            無
            
            作者：Tim
        `,
        info: {
            summary: '我只是個單純的 Carousel'
        }
    }
);
