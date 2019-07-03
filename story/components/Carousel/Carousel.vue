<template>
    <div style="display: flex; margin-bottom:20px; overflow:hidden; align-items: center;">
        <IconButton
            v-if="isNavShowing"
            class="prev-element"
            direction="el-icon-arrow-left"
            :customStyle="{ background: mainColor }"
        />
        <div
            v-show="hasPosts"
            v-swiper:mySwiper="swiperOption"
        >
            <div class="swiper-wrapper">                
                <Slide
                    v-for="(post, index) in posts"
                    :key="post.id"
                >  
                    <component
                        :is="currentComponent"
                        v-bind="{
                            post,
                            index,
                            regionPath,
                            mainColor
                        }"
                        @setPost="$emit('setPost', post)"
                    />
                </Slide>
            </div>
            <div v-if="isSwiperPaginationShowing" class="swiper-pagination"></div>
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
import Slide from './Slide.vue'
import PinnedPost from './PinnedPost'
import Hottest from '../SidebarHottestArticle/SidebarHottestArticle'
import IconButton from '../IconButton/IconButton'

export default {
    components: {
        Slide,
        PinnedPost,
        Hottest,
        IconButton
    },
    props: {
        // Data
        regionPath: {
            type: String,
            default: ''
        },
        posts: {
            type: Array
        },
        slides: {
            type: Number,
            default: 1
        },
        slideContentType: {
            type: Number,
            default: 1
        },

        // Style
        mainColor: {
            type: String,
            default: 'ffafa0'
        },
        spaceBetweenSlide: {
            type: Number,
            default: 20
        },
        isNavShowing: {
            type: Boolean,
            default: false
        },
        isSwiperPaginationShowing: {
            type: Boolean,
            default: false
        },

        // Animate
        isInfiniteLoop: {
            type: Boolean,
            default: false
        },
        isAutoplay: {
            type: Boolean,
            default: false
        },
        autoplayDelay: {
            type: Number,
            default: 5000
        },
        speedWhenSwitchView: {
            type: Number,
            default: 1000
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
            currentComponent: this.slideContentType ? 'PinnedPost' : 'Hottest',
            loading: true,
            swiperOption: {
                lazy: true,
                navigation: { prevEl: '.prev-element', nextEl: '.next-element' },
                pagination: {
                    el: '.swiper-pagination',
                    bulletActiveClass: 'my-bullet-active',
                    clickable: true
                },
                loop: this.isInfiniteLoop,
                autoplay: this.isAutoplay && { delay: this.autoplayDelay, disableOnInteraction: false },
                speed: this.speedWhenSwitchView,
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

<style scoped>
.swiper-container {
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>