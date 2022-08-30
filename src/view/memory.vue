<template>
  <div class="box bjt">
    <div class="goBack imgbox" @click="goQuit">
      <img :src="back" alt="" />
    </div>
    <div class="table bjt">
      <p>{{ this.pathType == "Pi40" ? "圆周率40位-记忆" : "词汇29位-记忆" }}</p>
    </div>
    <div class="contentBox bjt">
      <div class="content bjt">
        <div class="imgBjBox">
          <div class="imgBj" @click="showSpanClick">
            <img :src="bj" alt="" />
            <span :style="{ left: '333px', top: '5px' }" v-show="showSpan"
              >1</span
            >
            <span :style="{ left: '3px', top: '15px' }" v-show="showSpan"
              >2</span
            >
            <span :style="{ left: '223px', top: '5px' }" v-show="showSpan"
              >3</span
            >
            <span :style="{ left: '333px', top: '25px' }" v-show="showSpan"
              >4</span
            >
            <span :style="{ left: '334px', top: '55px' }" v-show="showSpan"
              >5</span
            >
            <span :style="{ left: '553px', top: '55px' }" v-show="showSpan"
              >6</span
            >
            <span :style="{ left: '999px', top: '55px' }" v-show="showSpan"
              >7</span
            >
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="middle bjt">
          <div class="text">
            22阿诗丹顿多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多
            多多多多多多多多多多多多多多萨顶顶多多
            asddddddddddddddddddddddddddddd
            asdddddddddddddddddddddddddddasdddddddddddd多多多多多多多多多多多多多多多多多多多多多多多多多多多多
            多多多多诗丹顿多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多
            多多多多多多多多多多多多多多萨顶顶多多
            asddddddddddddddddddddddddddddd
            asdddddddddddddddddddddddddddasdddddddddddd多多多多多多多多多多多多多多多多多多多多多多
            多多多多多多多多多多多多多多多多多多多多多多多阿诗丹顿多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多
            多多多多多多多多多多多多多多萨顶顶多多
            asddddddddddddddddddddddddddddd
            asdddddddddddddddddddddddddddasdddddddddddd多多多多多多多多多多多多多多多多多多
            多多多多多多多多多多多多多多多多多多多多多多多多多多多阿诗丹顿多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多
            多多多多多多多多多多多多多多萨顶顶多多
            asddddddddddddddddddddddddddddd
            asdddddddddddddddddddddddddddasdddddddddddd多多多多多多多多多多多多多多多多多
            多多多多多多多多多多多多多多多多多多多多多多多多多多多多阿多多多多多多多多多多多多多阿诗丹顿多多多多多多多多多多多多多
          </div>
        </div>
        <div class="bottom-right">
          <div class="video" @click="setMyPlayer">
            <img :src="video" alt="" />
          </div>

          <div
            class="goTest imgBox bjt"
            @click="goTest"
            v-if="pathType == 'vocabulary25'"
          >
            去测试
          </div>
          <div class="goTest imgBox bjt" v-else>
            <div
              class="bjt left"
              :class="{ active: isOne === 1 }"
              @click="isOne === 1 ? (isOne = 0) : ''"
            >
              {{ pathType == "Pi40" && isOne === 0 ? "上一步" : "上一步" }}
            </div>
            <div
              class="bjt right"
              @click="isOne === 1 ? goTest() : (isOne = 1)"
            >
              {{ pathType == "Pi40" && isOne === 0 ? "下一步" : " 去测试" }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <VideoPlayer
      ref="videoPlayer"
      :src="src"
      v-show="isVideo"
      @quitClick="quitVideoClick"
    />
    <Music ref="music" />
  </div>
</template>

<script>
import music from "@/components/music";
import videoPlayer from "@/components/videoPlayer";

export default {
  components: {
    Music: music,
    VideoPlayer: videoPlayer
  },
  data() {
    return {
      src:
        "https://caizhidanao-yixuewangxiao.oss-cn-zhangjiakou.aliyuncs.com/yxwx/chinese/scqj/1/up/video/ye_x.mp4",
      isVideo: false,
      timerNum: 0,
      pathType: "",
      showSpan: true, //便签显示
      back: require("@/assets/returnBut.png"),
      video: require("@/assets/Pi40/video.png"),
      bj: require("@/assets/Pi40/bj.jpeg"),
      isOne: 0,
      data: [
        1,
        4,
        1,
        5,
        9,
        2,
        6,
        5,
        3,
        5,
        8,
        9,
        7,
        9,
        3,
        2,
        3,
        8,
        4,
        6,
        2,
        6,
        4,
        3,
        3,
        8,
        3,
        2,
        7,
        9,
        5,
        0,
        2,
        8,
        8,
        4,
        1,
        9,
        7,
        1
      ]
    };
  },

  created() {
    //监听视频全屏事件
    // let that = this;
    // document.addEventListener("fullscreenchange", function(e) {
    //   if (document.fullscreenElement) {
    //     // console.log(document.fullscreenElement);返回当前触发全屏事件的元素,没有为null
    //     that.isRequestFullscreen = true;
    //   } else {
    //     that.isRequestFullscreen = false;
    //     that.quitRequestFullscreen();
    //   }
    // });
  },
  mounted() {
    this.isOne = 0;
    this.pathType = this.$route.query.type;
    let timer = null;
    timer = setInterval(() => {
      this.timerNum++;
    }, 1000);
    this.$once("hook:beforeDestroy", () => {
      clearInterval(timer);
      timer = null;
    });
  },
  methods: {
    //进入全屏
    setMyPlayer() {
      this.isVideo = true;
      // var ele = document.documentElement;
      // if (ele.requestFullscreen) {
      //   this.$refs.myPlayer.requestFullscreen();
      // } else if (ele.mozRequestFullScreen) {
      //   this.$refs.myPlayer.mozRequestFullScreen();
      // } else if (ele.webkitRequestFullScreen) {
      //   this.$refs.myPlayer.webkitRequestFullScreen();
      // }
    },
    //退出全屏
    quitVideoClick() {
      this.isVideo = false;
    },
    showSpanClick() {
      this.showSpan = !this.showSpan;
      this.$refs.music.$refs.click.play();
    },
    // quitRequestFullscreen() {
    //   //判断视频是否在播放，播放则暂停
    //   if (!this.$refs.myPlayer.paused) this.$refs.myPlayer.pause();
    // },
    goQuit() {
      this.$parent.$refs.MusicPlay.play();
      if (this.pathType == "Pi40") {
        this.$router.push(`/Pi40`);
      } else {
        this.$router.push(`/vocabulary25`);
      }
    },
    //去测试
    goTest() {
      this.$parent.$refs.MusicPlay.play();
      if (this.pathType == "Pi40") {
        this.$router.push({
          path: `/Pi40-test`,
          query: { timerNum: this.timerNum }
        });
      } else {
        this.$router.push({
          path: `/vocabulary25-test`,
          query: { timerNum: this.timerNum }
        });
      }
    }
  }
};
</script>

<style scoped>
@import "../styles/style.css";
.box {
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-image: url("../assets/studyBj.png");
  position: relative;
  padding: 5.416666666666667rem 0 0;
  box-sizing: border-box;
}
.contentBox {
  overflow: hidden;
  width: 77rem;
  height: 43.5rem;
  margin: 0 auto;
  padding: 1.5rem 2.75rem 0;
  box-sizing: border-box;
  background-image: url("../assets/contentBox.png");
}
.content {
  background-image: url("../assets/memoryLongFigure.png");
  /* margin: 2rem auto 3rem; */
  width: 71.41666666666667rem;
  height: 31.75rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  box-sizing: border-box;
}
.imgBjBox {
  overflow-x: scroll;
  width: 100%;
  height: 100%;
}
.imgBj {
  /* height: 100%; */
  height: calc(100% - 0.25rem);
  position: relative;
}
.imgBj > span {
  position: absolute;
  display: inline-block;
  width: 3rem;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  background-color: rgb(98, 157, 218);
  color: #fff;
  border-radius: 50%;
}
.imgBj > img {
  height: 100%;
}
.bottom {
  width: 100%;
  height: 6.416666666666667rem;
  margin: 2rem auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.video {
  border-radius: 0.5rem;
  width: 3.3333333rem;
  height: 3.3333333rem;
  position: relative;
  top: -1rem;
  margin: 0 auto;
}
.video img {
  width: 100%;
  height: 100%;
}
.middle {
  width: 55.91666666666667rem;
  height: 6.416666666666667rem;
  line-height: 2.2rem;
  font-size: 2rem;
  color: #ffffff;
  font-weight: 400;
  padding: 1rem 1.5rem;
  box-sizing: border-box;
  background-image: url("../assets/textbox.png");
}
/* .bottom-right{
  
  } */
.text {
  width: 100%;
  height: 100%;
  overflow: scroll;
  text-align: left;
}
.goTest {
  position: relative;
  top: -0.5rem;
  width: 13.58333333333333rem;
  height: 3.833333333333333rem;
  line-height: 3.833333333333333rem;
  font-size: 2rem;
  color: #ffffff;
  font-weight: 500;
  background-image: url("../assets/buttonH.png");
}
.goTest div {
  display: inline-block;
  width: 6rem;
  line-height: 2.5rem;
  font-size: 1.5rem;
  background-image: url("../assets/buttonH.png");
}
.goTest div.left {
  margin-right: 1rem;
  background-image: url("../assets/submitFeedback.png");
}
.goTest div.left.active {
  background-image: url("../assets/buttonH.png");
  margin-right: 1rem;
}
@media screen and (width: 1098px) {
  .middle,
  .goTest {
    font-size: 1.739126517050094rem;
  }
  .goTest div {
    font-size: 1.304344887787571rem;
  }
}
</style>
