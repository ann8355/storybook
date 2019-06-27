import { storiesOf } from '@storybook/vue';
import { withKnobs, color, object, select } from '@storybook/addon-knobs';
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
    'GS-US': '/us',
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
]

stories.add(
    'Index',
    () => ({
        components: { Index },
        props: {
            mainColor: {
                default: color('識別色', '#ffafa0'),
            },
            regionPath: {
                default: select('GirlStyle 區域路徑', OPTIONS, DEFAULT_REGION)
            },
            posts: {
                default: object('文章內容', POSTS)
            }
        },
        propsDescription: {
            Index: {
                // These description will appear in `description` column in props table
                mainColor: '識別色',
                regionPath: 'GirlStyle 區域路徑',
                posts: '文章內容'
            }
        },
        template: `<Index 
            :mainColor="mainColor"
            :regionPath="regionPath"
            :posts="posts"
        />`,
    }),
    {
        notes: `
            [ 版本紀錄 ]
            1.0.0 版

            [ 事件方法 ]
            無
            [ TODO ]
            - 在專案中使用顯示正常，但在 StoryBook 環境中顯示異常
            
            作者：Tim
        `,
        info: {
            summary: '我只是個單純的 Carousel'
        }
    }
);
