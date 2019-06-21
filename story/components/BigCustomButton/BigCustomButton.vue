<template>
    <a 
        :href="url" 
        :title="title" 
        class="custom-button"
        :class="{'custom-button-hover': active}"
        @click="click()"
        @mouseover="mouseover()"
        @mouseleave="mouseleave()"
        :style="{color:color, backgroundColor:btnColor,width: `${width}px`, height: `${height}px`, borderRadius: `${radius}px`}"
    >
        <img v-if="imgShow" :src="imgSrc" :alt="title" :style="{width: `${imgWidth}px`}">
        <span :style="{lineHeight: `${height}px`}">{{ text }}</span>
    </a>
</template>

<script>
export default {
    props:{
        url: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        hover: {
            type: Boolean,
            default: false
        },
        color: {
            type: String,
            default: '#fff'
        },
        btnColor: {
            type: String,
            default: '#3b5998'
        },
        width: {
            type: Number,
            default: 700
        },
        height: {
            type: Number,
            default: 50
        },
        radius: {
            type: Number,
            default: 50
        },
        imgShow: {
            type: Boolean,
            default: false
        },
        imgSrc: {
            type: String,
            default: ''
        },
        imgWidth: {
            type: Number,
            default: 18
        }
    },
    data(){
        return {
            showIcon: this.show,
            active: this.hover
        }
    },
    methods:{
        click(){
            this.$emit('customButtonclick');
        },
        mouseover() {
            this.active = true;
            this.$emit('customButtonMouseOver', this.active);
        },
        mouseleave() {
            this.active = false;
            this.$emit('customButtonMouseLeave', this.active);
        },
    }
}
</script>

<style scoped>
.custom-button {
    text-align: center;
    display: inline-block;
}
.custom-button img{
    display: inline-block;
    vertical-align: middle;
}

.custom-button span {
    display: inline-block;
    vertical-align: middle;
    font-weight: bold;
}

a {
    text-decoration: none;
}
</style>