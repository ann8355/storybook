<template>
    <div>
        <button>
            <slot></slot>
        </button>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
button {
    border: 3px #ff5a5a solid;
    padding: 5px 10px;
    border-radius: 4px;
    color: #ff5a5a;
    cursor: pointer;
}
</style>