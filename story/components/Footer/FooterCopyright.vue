<template>
    <div 
        class="copyright"
        :style="{ 
            color: copyrightColor, 
            background: copyrightBgColor
        }"
    >Copyright &copy; {{ new Date().getFullYear() }} PressLogic {{ magazineName }}. All right reserved</div>
</template>

<script>
export default {
    props:{
        copyrightColor: {
            type: String,
            default: 'black'
        },
        magazineName: {
            type: String,
            default: 'Magazine Name'
        }
    },
    watch: {},
    computed: {},
    data() {
        return {}
    },
    mounted () {},
    destroyed () {},
    methods: {}
}
</script>

<style scoped>
.copyright {
    text-align: center;
}
</style>