<template>
  <div id="music">
    <audio
      preload="preload"
      id="bgmusic"
      ref="click"
      style="display: none;"
      :src="Click"
      type="audio/mp3"
    />
    <audio
      preload="preload"
      id="bgmusic"
      ref="key"
      style="display: none;"
      :src="Key"
      type="audio/mp3"
    />
  </div>
</template>

<script>
export default {
  name: "Music",
  data() {
    return {
      Click: require("@/assets/MP3/Click.mp3"),
      Key: require("@/assets/MP3/Key.mp3")
    };
  },
  mounted() {}
};
</script>

<style>
</style>
