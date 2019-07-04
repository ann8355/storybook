<template>
    <div v-if="mobile" class="meta-author-mobile" :style="`width: ${width}px;`">
        <div
            class="author-img"
            :style="authorImgStyle"
        ></div>
        <div class="author-name">
            <span>{{name}}</span>
        </div>
        <div class="author-description">
            <span>{{description}}</span>
        </div>
    </div>
    <div v-else class="meta-author" :style="`width: ${width}px;`">
        <div class="left">
            <div
                class="author-img"
                :style="authorImgStyle"
            ></div>
        </div>
        <div class="right">
            <div class="author-name">
                <span>{{name}}</span>
            </div>
            <div class="author-description">
                <span>{{description}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true,
            default: ''
        },
        name: {
            type: String,
            required: true,
            default: ''
        },
        description: {
            type: String,
            required: true,
            default: ''
        },
        width: {
            type: Number,
            required: true,
        },
        mobile: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    data () {
        return {
            
        }
    },
    computed: {
        authorImgStyle () {
            return {
                backgroundImage: `url(${this.src})`,
            };
        },
    },
    methods: {
        
    },
}
</script>
<style scoped>
.meta-author {
    display: flex;
    min-height: 100px;
}

.meta-author .left {
    width: 20%;
    min-width: 100px;
    display: flex;
    justify-content: center;
    padding-top: 10px;
}

.meta-author .right {
    width: 80%;
}

.meta-author .author-img {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background-size: cover;
    background-position: center;
}

.meta-author .author-name {
    font-weight: bold;
    color: #282828;
    font-size: 20px;
    padding: 5px 0px;
}

.meta-author .author-description {
    color: #a1a1a1;
    font-weight: 300;
    font-size: 14px;
}

.meta-author-mobile {
    display: flex;
    flex-direction: column;
}

.meta-author-mobile .author-img {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background-size: cover;
    background-position: center;
    margin: 5px auto;
}

.meta-author-mobile .author-name {
    text-align: center;
    font-weight: bold;
    color: #282828;
    font-size: 20px;
    padding: 5px 0px;
}

.meta-author-mobile .author-description {
    color: #a1a1a1;
    font-weight: 300;
    font-size: 14px;
}
</style>