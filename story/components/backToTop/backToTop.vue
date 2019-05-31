<template>
    <transition name="fade">
        <div id="back-top" v-show="show" 
            :style="{background: backgroundColor, width: `${size}px`, height:`${size}px`, bottom:`${yscroll}%`, right:`${xscroll}%`}" 
            :class="{'radius': circle}"
            @click="top()">
            <i class="el-icon-arrow-up" :style="{fontSize: `${arrowSize}px`}"></i>
        </div>
    </transition>
</template>

<script>
export default {
    props:{
        //背景顏色
        backgroundColor: {
            type: String,
            default: '#ffafa0'
        },
        //icon 尺寸
        size: {
            type: Number,
            default: 40
        },
        arrowSize: {
            type: Number,
            default: 20
        },
        //icon 是否顯示
        show: {
            type: Boolean,
            default: false
        },
        //捲軸下拉至多少時顯示icon
        scroll: {
            type: Number,
            default: 300
        },
        //icon是否有圓角
        circle: {
            type: Boolean,
            default: true
        },
        //icon X軸位置
        xscroll: {
            type: Number,
            default: 5
        },
        //icon Ｙ軸位置
        yscroll: {
            type: Number,
            default: 5
        }
    },
    data(){
        return {
            show: false
        }
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll);
        },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
        },
    methods:{
        handleScroll (event) {
            if (window.scrollY > this.scroll) {
              this.show = true
            } else {
              this.show = false
            }
          },
        top(){
            window.scrollTo({top: 0, behavior: 'smooth'});
          }
    }
}
</script>

<style scoped>
    #back-top {
        position: fixed;
        z-index: 99;
        cursor: pointer;
    }
    #back-top:hover {
        opacity: .7;
    }
    #back-top i {
        position: absolute; 
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        color:#fff;
        font-weight: bold;
    }
    .radius {
        border-radius: 50%;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>