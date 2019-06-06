<template>
    <nav :style="{ 
        marginTop: `${spacingBetweenLogoAndNavlink}px`,
        marginBottom: `${spacingBetweenNavlinkAndCopyright}px`
    }">
        <ul>
            <li v-for="(link, i) in navLinkList" :key='i'>
                <a 
                    :style="{ 
                        color: navLinkColor,
                        marginRight: (i < navLinkList.length-1) ? `${spacingBetweenNavlinks}px` : '0'
                    }"
                    :href="link.reference"
                    :target="link.isExternalLink ? '_blank': '_self'"
                >{{ link.name }}</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    props:{
        navLinkList: {
            type: Array,
            default: []
        },
        navLinkColor: {
            type: String,
            default: 'black'
        },
        spacingBetweenNavlinks: {
            type: Number,
            default: 20
        },
        spacingBetweenLogoAndNavlink: {
            type: Number,
            default: 0
        },
        spacingBetweenNavlinkAndCopyright: {
            type: Number,
            default: 0
        },
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
nav {
    text-align: center;
}
ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
}
li {
    display: inline-block;
}
a {
    display: inline-block;
    text-decoration: none;
}
</style>