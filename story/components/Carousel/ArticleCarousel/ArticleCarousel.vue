<template>
    <div
        v-show="hasPosts"
        style="display: flex; margin-bottom:20px; overflow:hidden; align-items: center;"
    >
        <IconButton
            v-if="isNavShowing"
            class="prev-element"
            direction="el-icon-arrow-left"
            :customStyle="{ background: mainColor }"
        />
        <div
            v-swiper:mySwiper="swiperOption"
        >
            <div class="swiper-wrapper">                
                <Slide
                    v-for="(post, index) in posts"
                    :key="post.id"
                >  
                    <Hottest
                        v-bind="{
                            post,
                            index,
                            regionPath,
                            mainColor,
                            maxWidth
                        }"
                        @setPost="$emit('setPost', post)"
                    />
                </Slide>
            </div>
        </div>
        <IconButton 
            v-if="isNavShowing"
            class="next-element"
            direction="el-icon-arrow-right"
            :customStyle="{ background: mainColor }"
        />
    </div>
</template>

<script>
import Carousel from '../Carousel'
import IconButton from '../../IconButton/IconButton'
import Hottest from '../../SidebarHottestArticle/SidebarHottestArticle'

export default {
    extends: Carousel,
    components: { 
        IconButton,
        Hottest
    },
    props: {
        // Data
        slides: {
            type: Number,
            default: 3
        },
        isNavShowing: {
            type: Boolean,
            default: true
        },

        // Style
        spaceBetweenSlide: {
            type: Number,
            default: 20
        },
        maxWidth: {
            type: Number,
            default: 270
        },

        // Animate
        isInfiniteLoop: {
            type: Boolean,
            default: false
        },
        isAutoplay: {
            type: Boolean,
            default: false
        }
    },
    watch: {},
    computed: {},
    data() {
        return {
            swiperOption: {
                navigation: { 
                    prevEl: '.prev-element', 
                    nextEl: '.next-element'
                },
                spaceBetween: this.spaceBetweenSlide,
                slidesPerView: this.slides,
            },
        };
    },
    mounted() {},
    updated() {},
    destroyed() {},
    methods: {}
};
</script>

<style>
.swiper-slide .sidebar-hottest .article-header {
    display: flex;
}

.swiper-slide a.sidebar-hottest .article-header {
    border-bottom: 0px;
}
</style>
