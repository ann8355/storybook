<template>
    <div>
        <video
        id="player"
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
        }
    },
    data () {
        return {
            player: null,
        }
    },
    methods: {
        videoOptions() {
            this.player = videojs('player', this.options)
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
