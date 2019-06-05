<template>
  <div class="link-download-box">
    <a :href="iosUrl" v-if="ios">
	  	<img src="./images/ios.png" />
	  </a>
	  <a :href="androidUrl" v-if="android">
		  <img src="./images/android.png" />
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