<template>
    <div class="copyNotice" :style="`background-color:${backColor};width:${width}px;height:${height}px`">
        <img :src="`${iconSrc}`" :style="`width:${imgW}px;height:${imgH}px`">
        <p>{{txt}}</p>
    </div>
</template>
<script>
export default {
    props: {
        // 提示文字
        txt: {
            type: String,
            default: 'Link copied.'
        },
        // icon 路徑
        iconImg: {
            type: [String, Number],
            default: require('./images/ic-prompt-tick.svg')
        },
        // 背景顏色
        backColor: {
            type: String,
            default: 'rgba(0, 0, 0, 0.8)'
        },
        // 提示框寬度
        width: {
            type: [Number, String],
            default: 150
        },
        // 提示框高度
        height: {
            type: [Number, String],
            default: 150
        },
        // icon寬度
        imgW: {
            type: [Number, String],
            default: 'auto'
        },
        // icon高度
        imgH: {
            type: [Number, String],
            default: 'auto'
        }

    },
    data () {
        return {
            iconSrc: this.iconImg === '' ? '' : require(`${this.iconImg}`)

        }
    }
}

</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
}
div {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000000;
    padding: 15px;
    line-height: 1.2em;
    letter-spacing: -0.4px;
    font-size: inherit;
    border-radius: inherit;
    color: inherit;
}
</style>
