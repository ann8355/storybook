<template>
    <div style="height:440px; margin-bottom:20px; overflow:hidden">
        <div 
            v-show="hasPosts"
            v-swiper:mySwiper="swiperOption"
        >
            <div 
                class="swiper-wrapper"
            >
                <div 
                    class="swiper-slide"
                    v-for="(post, i) in posts"
                    :key="post.id"
                    style="overflow: hidden"
                >
                    <div class="pinned-post"
                        :class="{ slide_left: i%2===0, slide_right: i%2===1 }"
                    >
                        <a
                            :href="`${regionPath}${post.url}`"
                            class="link"
                            @click="$emit('setPost', post)"
                        >
                            <div class="greyBg" />
                            <img 
                                class="image swiper-lazy"
                                :data-src="`${post.image}?auto=format&w=830`"
                            >
                            <div class="swiper-lazy-preloader-white"></div>
                            <div class="block">
                                <h3 :style="{ background: mainColor }">{{ post.title }}</h3>
                                <span
                                    class="meta-category"
                                    :style="{ color: mainColor }"
                                >
                                    <span
                                        v-for="(category, i) in post.cats"
                                        :key="category.id"
                                        :href="`${regionPath}/category/${category.slug}`"
                                    >
                                        <span>{{ category.name }}</span>
                                        <span v-if="i !== post.cats.length-1">．</span>
                                    </span>
                                </span>
                            </div>
                        </a>
                        <div class="clearfix" />
                    </div>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    props: {
        mainColor: {
            type: String,
        },
        regionPath: {
            type: String,
        },
        posts: {
            type: Array
        }
    },
    watch: {},
    computed: {
        hasPosts() {
            return Boolean(this.posts.length)
        }
    },
    data() {
        return {
            loading: true,
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    bulletActiveClass: 'my-bullet-active',
                },
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false
                },
                loop: true,
                lazy: true
            },
        };
    },
    mounted() {},
    destroyed() {},
    methods: {}
};
</script>

<style scoped>
.carousel-cell {
    width: 100%; /* full width */
    height: auto; /* height of carousel */
    margin-right: 10px;
}
.pinned-post {
    margin-top: 0;
    display: block;
    width:1058px;
}
.pinned-post .link {
    width: 100%;
    display: block;
}
.pinned-post .link .greyBg {
    width: 100%;
    height: 283px;
    background-color: #f8f8f8;
    position: absolute;
    top: 120px;
    z-index: 0;
}
.pinned-post .link .image {
    width: auto;
    height: 435px;
    position: relative;
}
.slide_left .link .block {
    position: absolute;
    top: 0;
    left: 0;
    width: 264px;
}
.pinned-post .link .block h3 {
    padding: 30px 15px;
    margin: 0;
    font-size: 24px;
    line-height: 38px;
    color: #fff;
    text-align: center;
    width: 224px;
    font-weight: 400;
}
.slide_right .link .block {
    position: absolute;
    top: 0;
    right: 0;
    width: 264px;
}
.pinned-post .link .block {
    margin: 20px 0px 0 0;
    padding: 20px;
}
.slide_left .link {
    text-align: right;
}
.slide_right .link {
    text-align: left;
}
.pinned-post .link .block .meta-category {
    font-size: 16px;
    display: block;
    text-align: center;
    width: 200px;
    background-color: #fff;
    font-weight: 500;
    padding: 5px;
    margin: 10px auto 0;
}
</style>