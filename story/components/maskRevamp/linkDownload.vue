<template>
  <div class="link-download-box">
    <a :href="iosUrl" v-if="ios">
	  	<img :src="iosSrc" />
	  </a>
	  <a :href="androidUrl" v-if="android">
		  <img :src="androidSrc" />
	  </a>
	</div>
</template>

<script>
export default {
  props:{
		android: {
      type: Boolean,
      default: true
    },
  	ios: {
      type: Boolean,
      default: true
    },
    androidSrc: {
      type: String,
      default: 'https://assets.girlstyle.com/uat/girlstyle-tw/static/images/beautybee/playstore.png'
    },
    iosSrc: {
      type: String,
      default: 'https://assets.girlstyle.com/uat/girlstyle-tw/static/images/beautybee/appstore.png'
    },
    androidUrl: {
      type: String,
      default: 'https://www.google.com.tw'
    },
    iosUrl: {
      type: String,
      default: 'https://www.google.com.tw'
    },
  },
  data(){
    return {
    }
  }
}
</script>
<style scoped>
.link-download-box a {
  display: inline-block;
}

.link-download-box a:nth-child(2) {
  margin-left: 10px;
}

.link-download-box img{
  width: 130px;
}
</style>