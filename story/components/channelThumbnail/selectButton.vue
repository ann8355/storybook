<template>
    <button :disabled="mount !== 0" :style="channelBtn">
        <template v-if="mount > 0">
            <template v-if="lang !== 'ko'">
                {{ buttonText[lang][0] }} {{ mount }} {{ buttonText[lang][1] }}
            </template>
            <template v-else>
                {{ mount }} {{ buttonText[lang][0] }}
            </template>
        </template>
        <template v-else>
            {{ finishedText }}
        </template>
    </button>
</template>
<script>
export default {
    props: {
        /* data */
        // 語系
        lang: {
            type: String,
            default: 'en',
            required: true
        },
        // 按鈕數字
        countNum: {
            type: [Number, String],
            default: 3
        },
        // 按鈕文字
        buttonText: {
            type: Object,
            default: function () {
                return {}
            }
        },
        /* style */
        channelBtn: {
            type: Object,
            default: function () {
                return {}
            }
        }
    },
    computed: {
        mount: function () {
            return this.countNum < 0 ? 0 : this.countNum
        },
        finishedText: function () {
            const len = this.buttonText[this.lang].length;
            return this.buttonText[this.lang][len - 1]
        }
    }
}
</script>
<style scoped>
button {
    width: 80px;
    height: 30px;
    background-color: #ff5a5a;
    border: none;
    border-radius: 30px;
    padding: 0;
    margin: 0;
}
button:disabled {
    background-color: #9b9b9b;
    opacity: 0.6;
}
</style>
