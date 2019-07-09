<template>
    <div :style="{padding:device=='desktop'?'0px':'0px 10px 0px'}">
        <component 
            v-for="(post,index) in hotPosts.articles" 
            :device="device"  
            :key="index" 
            :post="post" 
            :is="Article(index)" 
        />
        
        <LargeHotVideo
            v-for="(post,index) in hotPosts.videos"
            :key="post.title"
            :post="post"
            :headerShow="false"
            :videoProps="videoOptions"
            :index="`${index}`"
        />
    </div>
</template>
<script>
import LargeArticle from "../LargeArticle/LargeArticle.vue";
import SmallArticle from "../SmallArticle/SmallArticle.vue";
import LargeHotVideo from "../LargeHotVideo/LargeHotVideo.vue";

export default {
    props: {
        hotPosts: {
            type: Object
        },
        device: {
            type: String,
            default: 'desktop'
        },
        videoOptions: {
            type: Object,
            default: function() {
                return {
                    autoplay: false,
                    controls: true,
                    width: '700',
                    }
            }
        }
    },
    components: {
        LargeArticle,
        SmallArticle,
        LargeHotVideo
    },
    data () {
        return {

        }
    },
    methods: {
        Article(index){
            return index % 4 == 0 ? LargeArticle : SmallArticle;
        }
    },
    mounted() {
    }
}
</script>
<style scoped>

</style>
