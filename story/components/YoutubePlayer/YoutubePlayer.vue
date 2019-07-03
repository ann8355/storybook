<template>
    <youtube :video-id="videoId" :player-vars="playerVars"></youtube>
</template>
<script>
import getYouTubeID from 'get-youtube-id';
export default {
    props: {
        url: {
            type: String,
            default: ''
        },
        playerVars: {
            type: Object
        }
    },
    data () {
        return {
            videoId: '',
        }
    },
  methods: {
    getId(url){
        this.videoId = getYouTubeID(url);
    }
  },
      mounted() {
        this.getId(this.url)
    }

}
</script>
<style scoped>

</style>
