<template>
    <div>
        <video
        v-if="type == 'youtube'"
        class="video-js vjs-default-skin"
        ref="videoPlayer"
        :poster="image"
        :data-setup='`{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "${url}"}] }`'
        @play="onPlayerPlay($event)"
        @pause="onPlayerPause($event)"
        @ended="onPlayerEnded($event)"
    >
    </video>

    <video
        v-else
        class="video-js vjs-default-skin"
        ref="videoPlayer"
        :poster="image"
        @play="onPlayerPlay($event)"
        @pause="onPlayerPause($event)"
        @ended="onPlayerEnded($event)"
    > 
        <source :src="url" :type="`video/${type}`" />
    </video>
    </div>
</template>
<script>
import videojs from 'video.js'
import 'videojs-youtube'
export default {
    props: {
        options: {
            type: Object
        },
        url: {
            type: String,
            default: ''
        },
        image: {
           type: String,
            default: '' 
        },
        type: {
            type: String,
            default: ''
        },
        index: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            player: null,
        }
    },
    methods: {
        videoOptions() {
            this.player = videojs(this.$refs.videoPlayer, this.options)
        },
        onPlayerPlay(player) {
            this.$emit('onPlayerPlay', player);
        },
        onPlayerPause(player) {
            this.$emit('onPlayerPause', player);
        },
        onPlayerEnded(player) {
            this.$emit('onPlayerEnded', player);
        }
    },
    mounted () {
        this.videoOptions();
    },
    beforeDestroy() {
        if (this.player) {
            this.player.dispose()
        }
    }
}
</script>
<style scoped>

</style>
