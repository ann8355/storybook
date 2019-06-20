<template>
    <a 
        :href="`${host}${post.url}`" 
        :title="post.title" 
        class="large-article"
        @mouseover="hover=true"
        @mouseleave="hover=false"
        >
        <img :src="post.image" :alt="post.title" :style="{width: `${maxWidth}px`}">
        <header :style="{maxWidth: `${maxWidth}px`}">
            <div v-for="(cat , i ) in post.cats" :key="i" class="large-cat">
                <a :style="{color: color}" :href="`${host}/category/${cat.slug}`">{{cat.name}}</a>
            </div>
            <h2 :style="{color:hover? color :'#282828', fontSize: `${titleSize}px` }">{{ post.title }}</h2>
            <p>{{ post.description }}</p>
            <div class="time-now">
                {{ moment(post.post_date).fromNow() }}
            </div>
        </header>
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
            default: 'https://girlstyle.com/tw'
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
        }
    },
}
</script>
<style scoped>
.large-article img {
    max-width: 100%;
}
.large-article header {
    height: 230px;
    box-sizing: border-box;
    text-align: center;
    border-bottom: 1px solid #f0f0f0;
}
.large-article header .large-cat{
    padding: 15px 0;
    font-size: 18px;
}
.large-article header h2 {
    padding: 0 50px;
    font-weight: initial;
    margin-bottom: 15px;
}
.large-article header p {
    font-size: 16px;
    color: #9c9c9c;
    line-height: 28px;
    margin: 7px 130px;
}
.large-article header .time-now {
    text-align: right;
    font-size: 13px;
    color: #adadad;
}

.large-article h2,
.large-article p,
.large-article{
    margin: 0;
    text-decoration: none;
}

</style>
