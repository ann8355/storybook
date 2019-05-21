<template>
  <div class="barCodeButtons">
    <el-popover ref="android" :placement="place" :width="popSize" trigger="hover" popper-class="b-barCode">
      <img src="./images/ic_qr_android.png" :width="qrCodeSize" :height="qrCodeSize" />
    </el-popover>
    <el-popover ref="ios" :placement="place" :width="popSize" trigger="hover" popper-class="b-barCode">
      <img src="./images/ic_qr_ios.png" :width="qrCodeSize" :height="qrCodeSize" />
    </el-popover>
    <a href="javascript:void(0)" v-popover:android v-if="android">
      <img src="./images/android.png" />
    </a>
    <a href="javascript:void(0)" v-popover:ios v-if="ios">
      <img src="./images/ios.png" />
    </a>
  </div>
</template>
<script>
export default {
  props: {
        // 使用android 下載圖示和qr code
        android: {
            type: Boolean,
            default: false
        },
        // 使用ios 下載圖示和qr code
        ios: {
            type: Boolean,
            default: false
        },
        // qr code外框大小
        popSize: {
            type: [Number, String],
            default: 128
        },
        // qr code大小
        qrCodeSize: {
            type: [Number, String],
            default: 96
        },
        //qr code位置
        place: {
            type: String,
            default: 'bottom'
        }
  },
  data () {
    return {
    }
  }
}
</script>
<style>
.barCodeButtons img {
    width: 100%;
}
.el-popover.el-popper.b-barCode {
    background-color: rgba(0, 0, 0, 0.9);
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
    text-align: center;
    border-color: black;
    height: 128px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.el-popover.el-popper.b-barCode .popper__arrow::after {
    border-top-color: black;
    border-bottom-color: black;
}
</style>
