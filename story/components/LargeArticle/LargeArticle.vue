<template>
    <a 
        :href="`${host}${post.url}`" 
        :title="post.title"
        :style="{maxWidth: `${maxWidth}px`}"
        class="large-article"
        @mouseover="mouseover()"
        @mouseleave="mouseleave()"
        @click="click()"
        >
        <img :src="post.image" :alt="post.title" :style="{width: `${maxWidth}px`}">
        <div class="article-header">
            <div v-for="(cat , i ) in post.cats" :key="i" class="large-cat">
                <a :style="{color: color}" :href="`${host}/category/${cat.slug}`">{{cat.name}}</a>
            </div>
            <span :style="{color:hover? color :'#282828', fontSize: `${titleSize}px` }">{{ post.title }}</span>
            <p>{{ post.description }}</p>
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
        titleSize: {
            type: Number,
            default: 21
        },
        maxWidth: {
            type: Number,
            default: 700
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
    margin-top: 20px;
}
.large-article img {
    max-width: 100%;
}
.large-article .article-header {
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

a, span, p{
    margin: 0;
    text-decoration: none;
}

</style>
