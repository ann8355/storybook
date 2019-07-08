<template>
    <div>
        <video
        v-if="type == 'youtube'"
        :id="`video-player-${index}`"
        class="video-js"
        :poster="image"
        data-setup='{ "techOrder": ["youtube"]}'
        @play="onPlayerPlay($event)"
        @pause="onPlayerPause($event)"
        @ended="onPlayerEnded($event)"
    > 
     <source :src="url" type="video/youtube" >
    </video>
        <video
        v-else
        :id="`video-player-${index}`"
        class="video-js"
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
            this.player = videojs(`video-player-${this.index}`, this.options)
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
