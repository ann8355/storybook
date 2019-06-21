<template>
    <div class="copyNotice" :style="msgStyle">
        <img v-if="propsStyleImg" :src="`${iconSrc}`" :style="propsStyleImg">
        <p>{{txt}}</p>
    </div>
</template>
<script>
export default {
    props: {
        // 提示文字
        txt: {
            type: String,
            required: true
        },
        // icon 路徑
        iconImg: {
            type: String,
        },
        // 外框style
        propsStyleMsg: {
            type: Object
        },
        // 圖片icon style
        propsStyleImg: {
            type: Object
        }
    },
    computed: {
        msgStyle () {
            let defaultStyle = {  // 外框default樣式
                width: '150px',
                height: '150px',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                borderRadius: '10px',
                color: '#fff',
                zIndex: 1000000,
                padding: '15px',
                lineHeight: '1.2em',
                letterSpacing: '-0.4px',
                textAlign: 'center'
            };
            let propsStyle = {};
            if (this.propsStyleMsg) {
                propsStyle = this.propsStyleMsg
            }
            let style = Object.assign({}, defaultStyle, propsStyle)
            return style
        },
        // imgStyle () {

        //     let propsStyle = {};
        //     if (this.propsStyleImg) {
        //         propsStyle = this.propsStyleImg
        //     }
        //     let style = Object.assign({}, defaultStyle, propsStyle)
        //     return style

        // }

    },
    data () {
        return {
            iconSrc: !this.iconImg ? '' : require(`${this.iconImg}`)
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
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    font-size: inherit;
    border-radius: inherit;
    color: inherit;
}
</style>
