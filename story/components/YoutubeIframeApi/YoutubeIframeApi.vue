<template>
    <div>
        <iframe 
            width="560" 
            height="315" 
            :src="`https://www.youtube.com/embed/${videoId}`" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
            {{videoId}}
    </div>
</template>
<script>
import getYouTubeID from 'get-youtube-id';
export default {
    props: {
        url: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
        }
    },
    computed: {
        videoId() {
            return this.url.slice(-11);
        }
    }
}
</script>
<style scoped>

</style>
