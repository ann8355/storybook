<template>
    <a 
        :href="`${host}${post.url}`" 
        :title="post.title" 
        class="small-article"
        @mouseover="mouseover()"
        @mouseleave="mouseleave()"
        @click="click()"
        >
        <img :src="post.image" :alt="post.title" :style="{width: `${imgWidth}px`}">
        <div class="article-header" :style="{maxWidth: `${headerWidth}px`}">
            <span :style="{color:hover? color :'#282828'}">{{ post.title }}</span>
            <p>{{ post.description }}</p>
            <div class="small-bottom">
                <div v-for="(cat , i ) in post.cats" :key="i" class="small-cat">
                    <a :style="{color: color}" v-if=" i <= 1" :href="`${host}/category/${cat.slug}`">{{cat.name}}</a>
                </div>
                <div class="time-now">
                    {{ moment(post.post_date).fromNow() }}
                </div>
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
        host:{
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
}
.small-article img {
    display: inline-block;
    margin-right: 20px;
    max-width: 100%;
    vertical-align: middle;
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

span, p,a{
    margin: 0;
    text-decoration: none;
}

</style>
