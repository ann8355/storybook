<template>
    <button :style="`width:${size}px;height:${size}px`" :class="isBooked?'isBook':''" @click="collect()"></button>
</template>
<script>
export default {
    props: {
        // 收藏標籤大小
        size: {
            type: [Number, String],
            default: 18
        },
        // 是否已收藏
        isBooked: {
            type: Boolean,
            default: false
        },
        // 登入狀態
        isLogin: {
            type: Boolean,
            required: true
        }

    },
    data () {
        return {

        };
    },
    methods: {
        collect () {
            if (!this.isLogin) {
                this.$emit('handleLogin');
            } else {
                this.$emit('collect');
            }
        }
    }
};
</script>
<style scoped>
button {
    padding: 0;
    border: none;
    background-color: transparent;
    background-image: url('./images/ic-general-bookmark-off.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    outline: none;
}
.isBook {
    background-image: url('./images/ic-general-bookmark-on.svg');
}
button:hover {
    transition: 0.3s;
    background-image: url('./images/ic-general-bookmark-on.svg');
}
</style>
