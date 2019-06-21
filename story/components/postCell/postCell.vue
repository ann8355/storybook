<template>
    <a :href="href" :target="target">
        <div class="postcell-box" :style="{width: `${width}px`}" @mouseover="hover=true" @mouseleave="hover=false" :title="hoverTitle">
            <img :src="src" />
            <div class="article-info">
                <div class="article-title" :style="{color: titleColor, fontSize: titleFontSize}">{{title}}</div>
                <div>
                    <div class="article-category" :style="{color: mainColor, fontSize: categoryFontSize}">{{category}}</div>
                    <div class="article-post-date" :style="{fontSize: postDateFontSize}">{{postDate}}</div>
                </div>
            </div>
        </div>
    </a>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true,
            default: ''
        },
        title: {
            type: String,
            required: true,
            default: ''
        },
        mainColor: {
            type: String,
            required: true,
            default: ''
        },
        href: {
            type: String,
            required: true,
            default: ''
        },
        width: {
            type: Number,
            default: 300
        },
        category: {
            type: String,
            default: ''
        },
        postDate: {
            type: String,
            default: ''
        },
        titleSize: {
            type: [Number, String],
            default: 14
        },
        categorySize: {
            type: [Number, String],
            default: 12
        },
        postDateSize: {
            type: [Number, String],
            default: 12
        },
        target: {
            type: String,
            default: '_blank'
        },
        hoverTitle: {
            type: String,
            default: ''
        },
    },
    data () {
        return {
            hover: false,
        }
    },
    computed: {
        titleColor () {
            return (this.hover? this.mainColor: '');
        },
        titleFontSize() {
            return (this.titleSize || 14) + 'px';
        },
        categoryFontSize () {
            return (this.categorySize || 12) + 'px';
        },
        postDateFontSize () {
            return (this.postDateSize || 12) + 'px';
        },
    },
}
</script>
<style scoped>
a {
    text-decoration: none;
}

.postcell-box {
    display: inline-block;
    color: #282828;
    min-width: 240px;

    /* tmp */
    padding: 10px;
    box-shadow: 1px 1px 5px #a0a0a0;
    margin: 0px;
}

.postcell-box img {
    width: 100%;
    height: auto;
}

.article-info {
    width: 100%;
    height: 80px;
    margin-top: 5px;
}

.article-title {
    height: 60px;
    overflow: hidden;
}

.article-category {
    float: left;
    font-size: 12px;
    overflow: hidden;
    height: 20px;
    width: 60%;
}

.article-post-date {
    float: right;
    font-size: 12px;
    text-align: right;
    color: #adadad;
    overflow: hidden;
    height: 20px;
    width: 40%;
}
</style>