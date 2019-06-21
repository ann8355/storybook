<template>
    <div>
        <button v-if="!disableBtn" @click="clickAction" :style="{width: `${width}px`, height:`${height}px`, backgroundColor:`${backColor}`, borderRadius:`${radius}px`,border:border,boxShadow:boxShadow }">
            <img :src="iconSrc" :style="{marginRight:`${imgMargin}px`}" />
            {{text}}
        </button>
        <button v-else disabled :style="{width: `${width}px`, height:`${height}px`, backgroundColor:`${backColorDis}`, borderRadius:`${radius}px`,border:border,boxShadow:boxShadowDis}">
            <img :src="iconSrcDis" :style="{marginRight:`${imgMargin}px`}" />
            {{textDis}}
        </button>
    </div>

</template>
<script>
export default {
    props: {
        // 文字
        text: {
            type: String,
        },
        // 按鈕寬
        width: {
            type: [Number, String],
            default: 200
        },
        // 按鈕高
        height: {
            type: [Number, String],
            default: 44
        },
        // 背景色
        backColor: {
            type: String,
            default: '#ff5a5a'
        },
        // 按鈕圓角大小
        radius: {
            type: [Number, String],
            default: '100'
        },
        // 邊框樣式
        border: {
            type: String,
            default: 'none'
        },
        // 按鈕陰影
        boxShadow: {
            type: String,
            default: 'none'
        },
        // 按鈕icon路徑
        imgSrc: {
            type: String,
            default: ''
        },
        // 按鈕icon 大小
        imgSize: {
            type: [Number, String],
            default: 24
        },
        // icon 與文字間距
        imgMargin: {
            type: [Number, String],
            default: 10
        },
        // 按鈕是否diabled
        disableBtn: {
            type: Boolean,
            required: true
        },
        // diabled 時的文字
        textDis: {
            type: String,
        },
        // diabled 時的背景色
        backColorDis: {
            type: String,
            default: '#9b9b9b',

        },
        // diabled 時的陰影
        boxShadowDis: {
            type: String,
            default: 'none'
        },
        // diabled 時的icon
        imgSrcDis: {
            type: String,
            default: ''
        },

    },
    data () {
        return {
            iconSrc: this.imgSrc === '' ? '' : require(`${this.imgSrc}`),
            iconSrcDis: this.imgSrcDis === '' ? '' : require(`${this.imgSrcDisg}`)
        };
    },
    methods: {
        clickAction () {
            this.$emit('clickAction');
        }
    }
};
</script>
<style scoped>
button {
    color: inherit;
    font-size: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
}
</style>
