<template>
    <div>
        <button type="button" @click="showPopup">按我顯示提示</button>
        <section v-if="popup" class="popup">{{ type }}</section>
    </div>
</template>
<script>
export default {
    props: ['type'],
    data () {
        return {
            popup: false
        }
    },
    methods: {
        showPopup () {
            this.popup = true;
            setTimeout(() => {
                this.popup = false;
            }, 2000);
        }
    }
}
</script>
<style scoped>
button {
    color: #fff;
    background-color: #ff5a5a;
    font-weight: 700;
    padding: 0 20px;
    border-radius: 30px;
    display: block;
    line-height: 40px;
    outline: none;
    cursor: pointer;
}
button:hover {
    opacity: 0.8;
}
button:disabled {
    background-color: #999;
    cursor: not-allowed;
}
.popup {
    width: 100px;
    padding: 10px 30px;
    color: #fff;
    text-align: center;
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    margin: auto;
    background: #5cac34;
    border: 1px #458327 solid;
    border-radius: 6px;
    animation: top-in 1s forwards;
}
@keyframes top-in {
    0% {
        top: -20px;
    }
    100% {
        top: 50px;
    }
}
</style>
