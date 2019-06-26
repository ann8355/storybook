<template>
    <div class="category-selector" :style="{ 'margin-left':device=='desktop' ? '-10px' : '0px' }">
        <el-row>
        <span
            @click="changeCategory({ slug: 'page', id: 0 })"
            :class="{ active: active === 'page' }"
            :style="{ color: active === 'page' ? color : '#aaa' }"
        >
        {{ latestArticles }}
        </span>
        <div>
            <span v-for="category in cats1"
                :key="category.slug"
                @click="changeCategory(category)"
                :class="{ active: active === category.slug }"
                :style="{ color: active === category.slug ? color : '#aaa' }">{{ category.name }}</span>
        </div>
        <el-button class="down" icon="el-icon-arrow-down"  @click="show=!show">
        </el-button>
        </el-row>
        <el-row class="layer" v-show="show">
        <span v-for="category in cats2"
            :key="category.slug"
            @click="changeCategory(category)"
            :class="{ active: active === category.slug }"
            :style="{ color: active === category.slug ? color : '#aaa' }">{{ category.name }}</span>
        </el-row>
    </div>
</template>

<script>

export default {
    name: "HomeCategorySelector",
    props:{
        device: {
            type: String,
            default: 'desktop'
        },
        categorySelectorIsEnglish: {
            type: Boolean,
            default: true
        },
        categories: {
            type: Array,
            default: []
        }
    },
    data(){
        return {
            // 變數命名要調整
            show: false,
            active: 'page',
            cats1 : [],
            cats2 : []
        }
    },
    watch: {},
    computed: {
        latestArticles() {
            if (this.categorySelectorIsEnglish) {
                return 'Latest Articles'
            } else if (this.device==='desktop') {
                return 'Latest Articles 最新文章'
            } else if (this.device==='mobile') {
                return '最新文章'
            }
        }
    },
    created() {
        for(var i in this.categories){
            var j = this.device === 'desktop' ? 2 : 1
            if (i < j) {
                this.cats1.push(this.categories[i])
            } else {
                this.cats2.push(this.categories[i])
            }
        }
    },
    mounted () {},
    destroyed () {},
    methods: {
        changeCategory(val) {
            this.active = val.slug
            this.$emit('changeCat', val.id)
        },
    }
}
</script>

<style scoped>
.category-selector {
    margin: 15px 0;
    font-size: 16px;
    color: #aaa;
    font-weight: 400;
    font-family: NotoSans-Regular,noto sans tc;
    font-display: swap;
    overflow: hidden;
}
.category-selector span {
    margin: 0;
    cursor: pointer;
    font-family: noto sans,sans-serif;
    font-display: swap;
    font-size: 16px;
    color: #aaa;
    padding: 0 10px;
    border-right: 1px solid #f0f0f0;
    float: left;
    margin: 0 0 10px;
}
.down{
    border: 0;
    padding: 2px;
    color:#adadad;
    font-size:18px;
}
.active {
    font-size: 17px;
    font-family: noto sans,sans-serif;
    font-display: swap;
    font-weight: 700;
}
</style>