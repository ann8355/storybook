<template>
    <a 
        :href="`${host}${post.url}`" 
        :title="post.title"
        :style="{maxWidth: device == 'desktop'? `${maxWidth}px` : ''}"
        class="large-article"
        :class="[device == 'desktop'? '' :'mobile']"
        @mouseover="mouseover()"
        @mouseleave="mouseleave()"
        @click="click()"
        >
        <img 
            :src="`${static_host}/images/loading.png`" 
            v-lazy="`${post.image}?w=400&auto=format`"
            :alt="post.title" 
            :style="{width: device == 'desktop'? `${maxWidth}px`: ''}">
        <div class="article-header">
            <div class="large-cat">
                <a v-if="post.cats[0]" :style="{color: color}" :href="`${host}/category/${post.cats.slug}`">{{post.cats[0].name}}</a>
            </div>
            <span :style="{color:hover? color :'#282828'}">{{ post.title }}</span>
            <p v-if="device == 'desktop'">{{ post.description | truncate(45) }}</p>
            <div class="time-now">
                {{ moment(post.post_date).fromNow() }}
            </div>
        </div>
    </a>
</template>
<script>
import moment from 'moment';
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
        maxWidth: {
            type: Number,
            default: 700
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
        mouseover() {
            this.hover = true;
            this.$emit('largeArticleMouseOver', this.hover);
        },
        mouseleave() {
            this.hover = false;
            this.$emit('largeArticleMouseLeave', this.hover);
        },
        click() {
            this.$emit('largeArticleClick', this.hover);
        }
    },
}
</script>
<style scoped>
.large-article {
    display: inline-block;
    margin-bottom: 20px;
}
.large-article img {
    max-width: 100%;
}
.large-article .article-header {
    position: relative;
    height: 230px;
    box-sizing: border-box;
    text-align: center;
    border-bottom: 1px solid #f0f0f0;
}
.large-article .article-header .large-cat{
    padding: 15px 0;
    font-size: 18px;
}
.large-article .article-header span {
    display: inline-block;
    font-size: 21px;
    line-height: 29px;
    padding: 0 50px;
    font-weight: initial;
    margin-bottom: 15px;
}
.large-article .article-header p {
    font-size: 16px;
    color: #9c9c9c;
    line-height: 28px;
    margin: 7px 130px;
}
.large-article .article-header .time-now {
    text-align: right;
    font-size: 13px;
    color: #adadad;
}

.large-article.mobile{
    margin-bottom: 15px;
}

.large-article.mobile .article-header {
    height: initial;
}

.large-article.mobile .article-header span {
    text-align: left;
    font-size: 15px;
    line-height: 25px;
    overflow: hidden;
    padding: 15px 10px 0 3px;
    margin-bottom: 35px;
}

.large-article.mobile .article-header .large-cat {
    font-size: 14px;
    position: absolute;
    left: 3px;
    bottom: 8px;
    padding: 0;
}

.large-article.mobile .article-header .time-now {
    position: absolute;
    right: 10px;
    bottom: 8px;
    
}

a, span, p{
    margin: 0;
    text-decoration: none;
}

</style>
