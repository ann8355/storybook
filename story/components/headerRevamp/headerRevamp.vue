<template>
  <div class="header-beauty-mobile" :style="{height:`${barHeight}px` }" v-show="showHeader">
    <img :src="src" :style="{width:`${srcWidth}px`}">
    <p :style="{lineHeight:`${barHeight}px` }">
      發稿撰文，前往下載
      <span>BeautyBee</span>
    </p>
    <div
      class="btn beautyBeeApp"
      :style="{backgroundColor:btnBackground,color:btncolor}"
    >{{firstBtnTxt}}</div>
    <div
      class="btn beautyBeeApp"
      :style="{backgroundColor:btnBackground,color:btncolor}"
    >{{secondBtnTxt}}</div>
    <i class="el-icon-close" :style="{lineHeight:`${barHeight}px` }" @click="clodeHeader()"></i>
  </div>
</template>
<script>
export default {
    props: {
        show: {
            type: Boolean,
            default: true
        },
        barHeight: {
            type: Number,
            default: 54
        },
        src: {
            type: String,
            default: 'https://assets.girlstyle.com/uat/girlstyle-tw/static/images/beautybee/logo_ic_beautybee.png'
        },
        srcWidth: {
            type: Number,
            default: 28
        },
        firstBtnTxt: {
            type: String,
            default: '下載'
        },
        secondBtnTxt: {
            type: String,
            default: '開啟'
        },
        btnBackground: {
            type: String,
            default: '#ff5a5a'
        },
        btncolor: {
            type: String,
            default: '#ffffff'
        }
    },
    data() {
        return {
            showHeader: this.show
        };
    },
    methods: {
        clodeHeader() {
            this.showHeader = !this.showHeader;
        }
    }
};
</script>
<style scoped>
.header-beauty-mobile {
    position: fixed;
    top: 0;
    left: 0;
    text-align: center;
    z-index: 1001;
    width: 100vw;
    background-color: #4a4a4a;
}

.header-beauty-mobile img {
    vertical-align: middle;
}

.header-beauty-mobile p {
    display: inline-block;
    font-size: 12px;
    color: #ffffff;
    margin: 0;
}

.header-beauty-mobile p span {
    color: #ff5a5a;
}

.header-beauty-mobile .btn {
    display: inline-block;
    font-size: 15px;
    padding: 5px 10px;
    border-radius: 16px;
    cursor: pointer;
}

.header-beauty-mobile i {
    color: #fff;
    font-weight: bold;
    cursor: pointer;
}
</style>