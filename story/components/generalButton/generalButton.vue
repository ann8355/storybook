<template>
    <button :disabled="disableBtn" :style="btnStyle" @click="clickAction">
        <img v-if="imgSrc||disImgSrc" :src="`${iconSrc}`" :style="imgStyle">
        {{disableBtn?disText:text}}
    </button>

</template>
<script>
const defaultBtnStyle = {
    width: '130px',
    height: '30px',
    backgroundColor: '#ff5a5a',
    borderRadius: '15px',
    color: '#fff',
    border: 'none',
    cursor: 'pointer'
};
export default {
    props: {
        // 按鈕是否diabled
        disableBtn: {
            type: Boolean,
            default: false
        },
        // 文字
        text: {
            type: String,
        },
        // diabled 時的文字
        disText: {
            type: String,
        },
        // 按鈕icon路徑
        imgSrc: {
            type: String,
        },
        // 按鈕diabled 時的icon
        disImgSrc: {
            type: String,
        },
        //按鈕樣式
        btnStyleProps: {
            type: Object
        },
        // disabled按鈕樣式
        disBtnStyleProps: {
            type: Object
        },
        // img style
        imgStyleProps: {
            type: Object
        },
        // 按鈕diabled 時 img style
        disImgStyleProps: {
            type: Object
        }
    },
    computed: {
        btnStyle () {
            return this.disableBtn ? { ...defaultBtnStyle, ...this.btnStyleProps, ...this.disBtnStyleProps } : { ...defaultBtnStyle, ...this.btnStyleProps }
        },
        imgStyle () {
            return this.disableBtn ? { ...this.imgStyleProps, ...this.disImgStyleProps } : { ...this.imgStyleProps }
        },
        iconSrc () {
            if (this.disableBtn) {
                if (this.disImgSrc) {
                    return require(`${this.disImgSrc}`)
                } else {
                    if (this.imgSrc && this.disImgSrc !== '') {
                        return require(`${this.imgSrc}`)
                    } else {
                        return ''
                    }
                }
            } else {
                return !this.imgSrc ? '' : require(`${this.imgSrc}`)
            }
        },
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
