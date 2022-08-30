<template>
  <div id="app" class="no-touch">
    <!-- <img src="./assets/logo.png"> -->
    <router-view />
    <audio
      preload="preload"
      id="bgmusic"
      ref="MusicPlay"
      style="display: none;"
      :src="Puth"
      type="audio/mp3"
    />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      Puth: require("@/assets/MP3/Puth.mp3")
    };
  },
  mounted() {}
};
//得到手机屏幕的宽度
// let htmlWidth =
//   document.documentElement.clientWidth || document.body.clientWidth;
// console.log("htmlWidth", htmlWidth);
// 禁止ios自动放大
window.onload = function() {
  document.addEventListener("touchstart", function(event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  });
  var lastTouchEnd = 0;
  document.addEventListener(
    "touchend",
    function(event) {
      var now = new Date().getTime();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }
      lastTouchEnd = now;
    },
    false
  );
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
body {
  margin: 0;
  padding: 0;
}
.no-touch {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
</style>
