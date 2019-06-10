<template>
    <transition name="fade">
        <div v-if="isAdOpening"
            id="gs-ad"
            class="background" 
            :style="{
                background: `rgba(0, 0, 0, ${opacity})`
            }"
        >
            <div class="close-button" @click="closeAd"
                :style="{
                    top: `${spacingBetweenEdgeAndClosebutton}px`,
                    right: `${spacingBetweenEdgeAndClosebutton}px`,
                    fontSize: `${closeButtonFontSize}px`,
                    lineHeight: `${closeButtonSize}px`,
                    height: `${closeButtonSize}px`,
                    width: `${closeButtonSize}px`
                }"
            >x</div>
            <div class="advertise">
                <a :href="firstImageLink"
                    target="_blank"
                >
                    <img 
                        :width="adWidth"
                        :height="firstImageHeight"
                        :src="firstImageReference"
                    >
                </a>
                <iframe 
                    :width="adWidth"
                    :height="videoHeight"
                    :src="`https://www.youtube.com/embed/${videoId}?autoplay=${isVideoAutoplay}`"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
                <a :href="secondImageLink"
                    target="_blank"
                >
                    <img
                        :width="adWidth"
                        :height="secondImageHeight"
                        :src="secondImageReference">
                </a>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    components: {},  
    props:{
        backgroundOpacity: {
            type: Number,
            default: 50
        },
        adWidth: {
            type: Number,
            default: 350
        },
        firstImageHeight: {
            type: Number,
            default: 300
        },
        firstImageReference: {
            type: String,
            default: 'https://fakeimg.pl/350x150/?text=Hello'
        },
        firstImageLink: {
            type: String,
            default: 'https://www.presslogic.com/'
        },
        secondImageHeight: {
            type: Number,
            default: 300
        },
        secondImageReference: {
            type: String,
            default: 'https://fakeimg.pl/350x150/?text=World'
        },
        secondImageLink: {
            type: String,
            default: 'https://www.presslogic.com/'
        },
        videoHeight: {
            type: Number,
            default: 350
        },
        videoId: {
            type: String,
            default: 'Ky5jvklJ3WM'
        },
        isVideoAutoplay: {
            type: Boolean,
            default: true
        },
        closeButtonSize: {
            type: Number,
            default: 50
        },
        closeButtonFontSize: {
            type: Number,
            default: 30
        },
        spacingBetweenEdgeAndClosebutton: {
            type: Number,
            default: 20
        }
    },
    watch: {},
    computed: {
        opacity() {
            return this.backgroundOpacity/100
        }
    },
    data() {
        return {
            isAdOpening: true
        }
    },
    mounted () {},
    destroyed () {},
    methods: {
        closeAd() {
            this.isAdOpening = !this.isAdOpening
        }
    }
}
</script>

<style scoped>
a, iframe {
    display: flex; 
}

.close-button {
    cursor: pointer;
    z-index: 1000;
    position: absolute;
    background: black;
    border: 2px solid white;
    border-radius: 50%;
    text-align: center;
    font-family: sans-serif;
    color: white;
}

.background {
    width: 100vw;
    height: 100vh;
}

.advertise {
    z-index: 500;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.fade-enter-active, .fade-leave-active {
    transition: .2s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>