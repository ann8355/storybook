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
        isAuth: {
            type: Boolean,
            required: true
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
            console.log('hihi');
            //  如果有登入, 跟父層調用 updateProfile api, 並傳遞當前所選語系
            if (this.isAuth) {
                this.$emit('updateProfile', lang);
            } else {
                // 未登入狀態，直接將當前所選語系儲存到 vuex、cookies
                this.$emit('updateLanguage', lang);
                this.$emit('setLangToCookie', lang);
            }
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
