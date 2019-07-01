<template>
    <a 
        :href="`${host}${post.url}`" 
        :title="post.title" 
        class="small-article"
        :class="[device == 'desktop'? '' :'mobile']"
        @mouseover="mouseover()"
        @mouseleave="mouseleave()"
        @click="click()"
        >
        <div class="img-box">
            <img 
                :src="`${static_host}/images/loading.png`" 
                v-lazy="`${post.image}?w=400&auto=format`" 
                :key="`${post.image}?w=400&auto=format`"
                :alt="post.title" 
                :style="{width: device == 'desktop'? `${imgWidth}px`: '152px'}">
        </div>
        <div class="article-header" :style="{maxWidth: device == 'desktop'? `${headerWidth}px`: 'calc(100% - 110px)'}">
            <span :style="{color:hover? color :'#282828'}">{{truncate( post.title, 40) }}</span>
            <p v-if="device == 'desktop'">{{ post.description }}</p>
            <div class="small-bottom">
                <div class="small-cat" v-if="catShow">
                    <a :style="{color: color}" v-if="post.cats[0]" :href="`${host}/category/${post.cats[0].slug}`">{{post.cats[0].name}}</a>
                </div>
                <div class="time-now" :style="{width: catShow ? '': '100%'}">  
                    {{ moment(post.post_date).fromNow() }}
                </div>
            </div>
        </div>
    </a>
</template>
<script>
import moment from 'moment';
import truncate from 'html-truncate';
export default {
    props: {
        post: {
            type: Object
        },
        device: {
            type: String,
            default: 'desktop'
        },
        host:{
            type: String,
            default: ''
        },
        static_host:{
            type: String,
            default: ''
        },
        active: {
            type: Boolean,
            default: false
        },
        color: {
            type: String,
            default: '#ffafa0'
        },
        imgWidth: {
            type: Number,
            default: 375
        },
        headerWidth: {
            type: Number,
            default: 300
        },
        catShow: {
            type: Boolean,
            default: true
        }
    },
    data () {
        return {
            hover: this.active
        }
    },
    methods: {
        moment (time) {
            return moment(time);
        },
        truncate(string, length){
            return truncate(string, length)
        },
        mouseover() {
            this.hover = true;
            this.$emit('smallArticleMouseOver', this.hover);
        },
        mouseleave() {
            this.hover = false;
            this.$emit('smallArticleMouseLeave', this.hover);
        },
        click() {
            this.$emit('smallArticleClick', this.hover);
        }
    },
}
</script>
<style scoped>
.small-article {
    display: inline-block;
    margin-bottom: 20px;
    font-size: 0;
}

.small-article .img-box {
    display: inline-block;
    vertical-align: middle;
    margin-right: 20px;
}
.small-article .article-header {
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    text-align: left;
    border-bottom: 1px solid #f0f0f0;
    height: 195px;
    vertical-align: middle;
}
.small-article .article-header span {
    font-weight: initial;
    font-size: 18px;
    line-height: 29px;
}
.small-article .article-header p {
    font-size: 13px;
    color: #9c9c9c;
    line-height: 21px;
    height: 42px;
    overflow: hidden;
    margin: 7px 0;
}

.small-article .article-header .small-bottom{
    position: absolute;
    bottom: 20px;
    width: 100%;
    font-size: 0;
}

.small-article .article-header .small-cat{
    display: inline-block;
    text-align: left;
    width: 50%;
    font-size: 14px;
}
.small-article .article-header .time-now {
    display: inline-block;
    width: 50%;
    text-align: right;
    font-size: 13px;
    color: #adadad;
}

.small-article.mobile .img-box {
    overflow: hidden;
    width: 100px;
    margin-right: 10px;
}

.small-article.mobile .img-box img {
    max-width: initial;
    margin-left: -26px;
}

.small-article.mobile .article-header {
    height: 80px;
}

.small-article.mobile .article-header span{
    display: inline-block;
    height: 54px;
    overflow: hidden;
    font-size: 15px;
    line-height: 25px;
}

.small-article.mobile .article-header .small-bottom{
    bottom: 5px;
}

span, p,a{
    margin: 0;
    text-decoration: none;
}

</style>
