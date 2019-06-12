<template>
  <div class="langSelector">
    <div v-for="item in language" :key="item.code"
      class="langBtn" :class="{active: selectedLang.code === item.code }"
      type="text" @click="handleChangeLanguage(item)">
      {{ item.name }}
    </div>
  </div>

</template>

<script type="text/javascript">
export default {
    props: {
        lang: {
            type: String,
            required: true
        },
        language: {
            type: Array,
            required: true
        },
        user: {
            type: Object,
            default: function() {
                return null;
            }
        }
    },
    computed: {
        selectedLang() {
            return this.language.find(item => item.code === this.lang);
        }
    },
    methods: {
        handleChangeLanguage(currentLang) {
            let lang = currentLang.code;

            //  如果有登入, 跟父層調用 updateProfile api, 並傳遞當前所選語系
            if (this.user) {
                this.$emit('updateProfile', lang);
            } else {
                // 未登入狀態，直接將當前所選語系儲存到 cookies
                this.$emit('updateLanguage', lang);
                this.setCookie('language_test', lang, 365);

                // 原本 nuxt 設置 cookies 方法
                // this.$cookies.set('language', lang, {
                //     path: '/',
                //     maxAge: 60 * 60 * 24 * 365
                // });
            }
        },
        // 因 storybook 沒有安裝 nuxt cookies 插件，只能使用原生方法設置 cookies
        setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
            var expires = 'expires=' + d.toUTCString();
            document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
        }
    }
};
</script>
<style scoped>
.langSelector {
    display: flex;
    align-items: center;
    flex-flow: row wrap;
}

.langBtn {
    padding: 0;
    font-size: 15px;
    color: #4a4a4a;
    flex: 0 0 auto;
    cursor: pointer;
    user-select: none;
}

.langBtn + .langBtn {
    position: relative;
    margin-left: 16px;
}

.langBtn + .langBtn::before {
    content: '.';
    position: absolute;
    top: -25%;
    left: -11px;
    color: #4a4a4a;
}

.langBtn:hover,
.langBtn.active {
    color: #ff5a5a;
}
</style>
