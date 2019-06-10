<template>
    <footer id="footer"
        :style="{
            background: bgColor,
            height: `${height}px`,
            fontStyle: isFontItalic ? 'italic' : 'static',
            fontSize: `${fontSize}px`
        }"
    >
        <Logo
            :logoHeight="logoHeight"
            :spacingBetweenLogoAndDividingline="spacingBetweenLogoAndDividingline"
            :companyLogoReference="companyLogoReference"
            :companyLink="companyLink"
            :magazineLogoReference="magazineLogoReference"
            :magazineLink="magazineLink"
        />
        <Nav
            :navLinkList="navLinkList"
            :navLinkColor="navLinkColor"
            :spacingBetweenLogoAndNavlink="spacingBetweenLogoAndNavlink"
            :spacingBetweenNavlinkAndCopyright="spacingBetweenNavlinkAndCopyright"
            :spacingBetweenNavlinks="spacingBetweenNavlinks"
        />
        <Copyright
            :magazineName="magazineName"
            :copyrightColor="copyrightColor"
        />
    </footer>
</template>

<script>
import Logo from './FooterLogo'
import Nav from './FooterNav'
import Copyright from './FooterCopyright'

export default {
    components: {
        Logo,
        Nav,
        Copyright
    },  
    props:{
        bgColor: {
            type: String,
            default: '#ffafa0'
        },
        height: {
            type: Number,
            default: 300
        },
        fontSize: {
            type: Number,
            default: 14
        },
        isFontItalic: {
            type: Boolean,
            default: true
        },
        companyLogoReference: {
            type: String,
            default: 'https://assets.presslogic.com/presslogic-hk-hd/images/presslogic_logo_PL_white.png'
        },
        companyLink: {
            type: String,
            default: 'https://www.presslogic.com/'
        },
        magazineLogoReference: {
            type: String,
            default: 'https://assets.presslogic.com/girlstyle-hk/images/girls/logo_HK.png'
        },
        magazineLink: {
            type: String,
            default: 'https://pretty.presslogic.com/'
        },
        logoHeight: {
            type: Number,
            default: 80
        },
        spacingBetweenLogoAndDividingline: {
            type: Number,
            default: 20
        },
        navLinkList: {
            type: Array,
            default: []
        },
        navLinkColor: {
            type: String,
            default: 'black'
        },
        spacingBetweenLogoAndNavlink: {
            type: Number,
            default: 40
        },
        spacingBetweenNavlinkAndCopyright: {
            type: Number,
            default: 30
        },
        spacingBetweenNavlinks: {
            type: Number,
            default: 30
        },
        magazineName: {
            type: String,
            default: 'Magazine'
        },
        copyrightColor: {
            type: String,
            default: 'black'
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
#footer {
    display: flex;
    flex-flow: column wrap;
    align-content: center;
    justify-content: center;
}
</style>