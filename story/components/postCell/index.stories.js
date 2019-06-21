import { storiesOf } from '@storybook/vue';
import { withKnobs, color, number, text, select } from '@storybook/addon-knobs';
import myComponent from './postCell.vue';

const stories = storiesOf('Presslogic|PostCell', module);
stories.addDecorator(withKnobs);
stories.add(
    'PostCell',
    () => ({
        components: { myComponent },
        props: {
            src: {
                default: text('src', 'https://d2hu9cc0x5vz48.cloudfront.net/wp-content/uploads/2016/08/sukeyotafumi-COVER2.jpg?w=300&auto=format')
            },
            title: {
                default: text('title', '不爽臉也可愛！喵喵不壞奴才不愛～超適合當表情包的兇兇臉總裁喵星人！')
            },
            mainColor: {
                default: color('mainColor', '#8c6239')
            },
            href: {
                default: text('href', 'http://u-cats.presslogic.com/article/5797/%E4%B8%8D%E7%88%BD%E8%87%89%E4%B9%9F%E5%8F%AF%E6%84%9B-%E5%96%B5%E5%96%B5%E4%B8%8D%E5%A3%9E%E5%A5%B4%E6%89%8D%E4%B8%8D%E6%84%9B-%E8%B6%85%E9%81%A9%E5%90%88%E7%95%B6%E8%A1%A8%E6%83%85%E5%8C%85%E7%9A%84%E5%85%87%E5%85%87%E8%87%89%E7%B8%BD%E8%A3%81%E5%96%B5%E6%98%9F%E4%BA%BA')
            },
            width: {
                default: number('width', 300)
            },
            category: {
                default: text('category', 'Funny News 貓趣聞')
            },
            postDate: {
                default: text('postDate', '2 days ago')
            },
            titleSize: {
                default: number('titleSize', 14)
            },
            categorySize: {
                default: number('categorySize', 12)
            },
            postDateSize: {
                default: number('postDateSize', 12)
            },
            target: {
                default: select('target', ['_blank', '_self'])
            },
            hoverTitle: {
                default: text('hoverTitle', '不爽臉也可愛！喵喵不壞奴才不愛～超適合當表情包的兇兇臉總裁喵星人！')
            }
        },
        propsDescription: {
            myComponent: {
                src: '圖片路徑',
                title: '文章標題',
                mainColor: '主色系(標題hover/文章分類)',
                href: '文章連結',
                width: '文章模板寬度(最低240px)',
                category: '文章分類',
                postDate: '發文時間',
                titleSize: '文章標題尺寸',
                categorySize: '文章分類尺寸',
                postDateSize: '發文時間尺寸',
                target: '連結開啟方式',
                hoverTitle: '游標移至模板時出現的提示訊息',
            }
        },
        template: `<myComponent :width="width" :src="src" :title="title" :titleSize="titleSize" :category="category" :categorySize="categorySize" :postDate="postDate" :postDateSize="postDateSize" :mainColor="mainColor" :href="href" :target="target" :hoverTitle="hoverTitle" />`
    }),
    {
        notes: '文章列表中的文章模板（小），提供『文章圖片/標題/文章分類/發文時間』等資訊',
        info: {
            summary: '文章連結模板：可放置文章代表圖片、標題、文章分類及發文時間等。'
        }
    }
);
