<template>
  <div class="box bjt">
    <div class="goBack imgbox" @click="goQuit">
      <img :src="back" alt="" />
    </div>
    <div class="table bjt">
      <p>圆周率40位</p>
    </div>
    <div class="content bjt">
      <div class="li" v-for="(item, index) in data" :key="index">
        {{ item }}
      </div>
    </div>
    <div class="goStudy bjt" @click="goStudy">去学习</div>
  </div>
</template>

<script>
import { Toast } from "vant";
import "vant/lib/toast/style";

export default {
  components: {},
  data() {
    return {
      back: require("@/assets/returnBut.png"),
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
  mounted() {
    let token = this.$route.query.accessToken;
    let accessToken = decodeURIComponent(token);
    sessionStorage.setItem("token", accessToken);
  },
  methods: {
    goQuit() {
      this.$parent.$refs.MusicPlay.play();
      android.back();
    },
    goStudy() {
      this.$parent.$refs.MusicPlay.play();
      this.$router.push({
        path: `/memory`,
        query: { type: "Pi40" }
      });
    }
  }
};
</script>

<style scoped>
@import "../../styles/style.css";
.box {
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-image: url("../../assets/studyBj.png");
  position: relative;
}
.content {
  margin: 7rem auto 1.5rem;
  width: 75.625rem;
  height: 35rem;
  padding: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  background-image: url("../../assets/textBj.png");
}
.content .li {
  font-size: 2rem;
  font-weight: 500;
  width: 12.5%;
  height: 7rem;
  line-height: 7rem;
  text-align: center;
  color: #fff;
  border: 1px solid #00ffff;
  box-sizing: border-box;
  /* background: wheat; */
}
.goStudy {
  background-image: url("../../assets/buttonH.png");
  /* border-radius: 2rem; */
  font-size: 2rem;
  color: #ffffff;
  font-weight: 500;
  width: 10rem;
  height: 3.5rem;
  line-height: 3.5rem;
  /* padding: 0 3rem; */
  margin: 0 auto;
}
@media screen and (width: 1098px) {
  .content .li,
  .goStudy {
    font-size: 1.739126517050094rem;
  }
}
</style>
