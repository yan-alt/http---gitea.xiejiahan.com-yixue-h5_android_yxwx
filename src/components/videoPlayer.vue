<template>
  <div id="video" class="video">
    <div class="quit" @click="quitClick">
      <img :src="close" alt="" />
    </div>
    <video
      class="myPlayer"
      id="myPlayer"
      ref="myPlayer"
      :width="width"
      preload
      controls
      controlsList="nodownload noplaybackrate"
      :disablePictureInPicture="true"
      oncontextmenu="return false"
    >
      <!-- poster="http://caizhidanao-yixuewangxiao.oss-cn-zhangjiakou.aliyuncs.com/yxwx/desk/fwh/rankingList/userBg.png" -->
      <source :src="src" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  name: "Video",
  props: {
    //时间
    src: {
      type: String
    }
  },
  data() {
    return {
      width: "100%",
      close: require("@/assets/close.png")
    };
  },
  mounted() {
    // this.$refs.myPlayer.currentTime=10
  },
  methods: {
    //退出全屏
    quitClick() {
      if (!this.$refs.myPlayer.paused) this.$refs.myPlayer.pause();
      this.$emit("quitClick");
    }
  }
};
</script>

<style scoped>
.video {
  background-color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  line-height: 100vh;
  display: flex;
}
.myPlayer {
  /* margin-top:2.5rem ; */
}
.quit {
  position: absolute;
  right: 0rem;
  top: 2.5rem;
  width: 3rem;
  height: 3rem;
  line-height: 3rem;
  z-index: 9999;
  vertical-align: top;
}
.quit img {
  width: 100%;
  height: 100%;
}
video::-webkit-media-controls-fullscreen-button {
  display: none;
}
/* @media only screen and (min-width: 1280px) {
.quit {
  top: 0rem;
}
} */
</style>
