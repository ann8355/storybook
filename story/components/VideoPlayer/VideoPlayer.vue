<template>
    <video
        id="player"
        class="video-js"
        @play="onPlayerPlay($event)"
        @pause="onPlayerPause($event)"
        @ended="onPlayerEnded($event)"
    ></video>
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
            console.log('player play!', player)
        },
        onPlayerPause(player) {
            console.log('player Pause!', player)
        },
        onPlayerEnded(player) {
            console.log('player Ended!', player)
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
