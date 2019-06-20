<template>
    <a 
        :href="`${host}${post.url}`" 
        :title="post.title" 
        class="sidebar-hottest"
        @mouseover="mouseover()"
        @mouseleave="mouseleave()"
        @click="click()"
        >
        <img :src="post.image" :alt="post.title" :style="{width: `${maxWidth}px`}">
        <header :style="{maxWidth: `${maxWidth}px`}">
            <div class="entry-meta">
                <div class="rank">{{ index + 1 }}</div>
                <div class="time-now">
                    {{ moment(post.post_date).format('DD MMM') }}
                </div>
            </div>
            <h2 :style="{color:hover? color :'#282828', fontSize: `${titleSize}px` }">{{ post.title }}</h2>
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
            default: 14
        },
        maxWidth: {
            type: Number,
            default: 300
        },
        index: {
           type: Number,
            default: 0
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
            this.$emit('sideBarHotTestMouseOver', this.hover);
        },
        mouseleave() {
            this.hover = false;
            this.$emit('sideBarHotTestMouseLeave', this.hover);
        },
        click() {
            this.$emit('sideBarHotTestClick', this.hover);
        }
    },
}
</script>
<style scoped>
.sidebar-hottest img {
    max-width: 100%;
}
.sidebar-hottest header {
    font-size: 0; 
    color: #424242;
    width: 300px;
    padding: 20px 5px;
    box-sizing: border-box;
    text-align: center;
    border-bottom: 1px solid #f0f0f0;
}
.sidebar-hottest header .entry-meta {
    display: inline-block;
    width: 50px;
}

.sidebar-hottest header .rank {
    text-align: center;
    font-style: italic;
    font-size: 27px;
    font-weight: 700;
}
.sidebar-hottest header .time-now {
    text-align: center;
    font-size: 13px;
}
.sidebar-hottest header h2 {
    display: inline-block;
    height: 44px;
    width: 240px;
    font-weight: initial;
    line-height: 22px;
    padding-left: 10px;
    box-sizing: border-box; 
    overflow: hidden;
}


h2, p,a{
    margin: 0;
    text-decoration: none;
}

</style>
s