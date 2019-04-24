<template>
    <button :disabled="isDisabled">
        <slot></slot>
    </button>
</template>
 
<script>
export default {
    props: {
        isDisabled: {
            type: Boolean,
            default: false
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
</style>
