<template>
    <div id="site-navigation" class="container" @mouseleave="active = ''">
        <ul>
            <li v-for="category in categories" :key="category.slug">
                <a 
                    :href="`${regionPath}/category/${category.slug}`"
                    @mouseover="hover(category)"
                    :style="{ color: active === category.slug ? mainColor :'#000'}"
                    
                >
                    {{ category.name }}
                </a>
                <transition
                    name="fade"
                    enter-active-class="animated fadeIn faster"
                    leave-active-class="animated fadeOut faster"
                >
                    <div class="sub-menu" v-show="active === category.slug">
                        <ul>
                            <li>
                                <a
                                    :href="`${regionPath}/category/${category.slug}`"
                                    :style="{ color: subactive.slug===category.slug ? mainColor :'#c5c5c5'}"
                                    @mouseover="subhover(category)"
                                >All 全部</a>
                            </li>
                            <li v-for="subcategory in category.subcategories" :key="subcategory.slug">
                                <a
                                    :href="`${regionPath}/category/${subcategory.slug}`"
                                    :style="{ color: subactive.slug===subcategory.slug ? mainColor :'#c5c5c5'}"
                                    @mouseover="subhover(subcategory)"
                                >
                                    {{ subcategory.name }}
                                </a>
                            </li>
                        </ul>
                        <div>
                            <i  v-show="isSubmenuLoading"
                                class="el-icon-loading" 
                                style="font-size:25px"
                            ></i>
                        </div>
                        <div class="sub-category-posts">
                            <div v-for="post in posts" :key="post.image"> 
                                <NavPost 
                                    :post="post"
                                    :mainColor="mainColor"
                                    :setPost="setPost"
                                />
                            </div>
                        </div>
                    </div>
                </transition>
            </li>
        </ul>
    </div>
</template>

<script>
import NavPost from './NavPost';
import axios from 'axios';

export default {
    components: {
        NavPost
    },
    props: {
        mainColor: {
            type: String,
            default: '#ffafa0'
        },
        regionPath: {
            type: String,
            default: ''
        },
        categories: {
            type: Array,
            default: [
                {
                    name: '流行热话',
                    slug: 'hottopics',
                    id: 23,
                    subcategories: [] // 要做防呆喔
                },
                {
                    name: '美妆',
                    slug: 'beauty',
                    id: 4,
                    subcategories: [
                        { name: '化妆', slug: 'makeup', id: 10 },
                        { name: '发型', slug: 'hair', id: 9 },
                        { name: '护肤', slug: 'skincare', id: 12 },
                        { name: '美甲', slug: 'nails', id: 11 }
                    ]
                },
                {
                    name: '时尚',
                    slug: 'fashion',
                    id: 5,
                    subcategories: [
                        { name: '穿搭', slug: 'mixandmatch', id: 15 },
                        { name: '鞋履', slug: 'footwear', id: 14 },
                        { name: '配件', slug: 'accessories', id: 13 },
                        { name: '刺青', slug: 'tattoo', id: 16 }
                    ]
                },
                {
                    name: '生活',
                    slug: 'lifestyle',
                    id: 6,
                    subcategories: [
                        { name: '旅游', slug: 'travel', id: 18 },
                        { name: '家居', slug: 'living', id: 17 },
                        { name: '吃货', slug: 'food', id: 19 },
                        { name: '女生物。语', slug: 'items', id: 20 },
                        { name: '摄影', slug: 'photography', id: 21 },
                        { name: '闺蜜', slug: 'bff', id: 22 }
                    ]
                },
                {
                    name: '瘦身',
                    slug: 'fitness',
                    id: 7,
                    subcategories: []
                },
                {
                    name: '恋爱',
                    slug: 'love',
                    id: 8,
                    subcategories: []
                }
            ]
        },
        setPost: {
            type: Function,
            default: async post => {
                await this.$store.dispatch('updatePost', { post })
            }
        }
    },
    data() {
        return {
            active: '',
            subactive: '',
            isSubmenuLoading: false,
            posts: []
        };
    },
    watch: {
        subactive: function (category) {
            this.getPosts(category)
        }
    },
    methods: {
        hover(category) {
            this.posts = [];
            if (this.active === '' || this.active === category.slug) {
                this.posts = category.posts;
            }
            this.active = category.slug;
            this.subactive = category;
        },
        subhover(category) {
            this.posts = [];
            if (this.subactive === category) {
                this.posts = category.posts;
            }
            this.subactive = category;
        },
        async getPosts(category) {
            if (category.posts) {
                this.posts = category.posts
            } else {
                this.isSubmenuLoading = true
                let result = await axios.get(`https://release-webapi.girlstyle.com/my/api/presslogic/${"830932787095569"}/term/${category.id}?limit=4&offset=0&bloggers=${category.slug == 'bloggers'}`)
                this.posts = result.data.data
                category.posts = this.posts
                this.isSubmenuLoading = false
            }
        }
    },
    computed: {},
    mounted() {},
    updated() {},
    destroyed() {},
};
</script>

<style scoped>
#site-navigation {
    margin-top: 30px;
    margin-bottom: 20px;
}

#site-navigation > ul {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
    border-width: 2px 0 1px;
    font-size: 0;
}

#site-navigation > ul > li {
    display: inline-block;
}

#site-navigation > ul > li > a {
    display: block;
    text-decoration: none;
    line-height: 20px;
    padding: 13px 18px;
    color: #000;
    font-size: 14px;
    font-family: noto sans, sans-serif;
    font-display: swap;
}

#site-navigation .sub-menu {
    position: absolute;
    width: 1053px;
    margin: -1px auto 0;
    background: #f9f9f9;
    left: 0;
    right: 0;
    z-index: 100;
    height: 270px;
}

#site-navigation .sub-menu > ul {
    list-style: none;
    font-size: 0;
    height: 50px;
    overflow: hidden;
}

#site-navigation .sub-menu > ul > li {
    display: inline-block;
}

#site-navigation .sub-menu > ul > li > a {
    display: block;
    text-decoration: none;
    line-height: 20px;
    padding: 13px 20px;
    color: #c5c5c5;
    font-size: 15px;
    font-style: italic;
}

#site-navigation .sub-category-posts {
    position: absolute;
    left: 5px;
    right: 5px;
}
</style>