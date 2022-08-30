<template>
  <div class="box bjt">
    <div class="goBack imgbox" @click="goQuit">
      <img :src="back" alt="" />
    </div>
    <div class="table bjt">
      <p>词汇29位</p>
    </div>
    <div class="content bjt">
      <div class="ul" v-for="(items, index) in data" :key="index">
        <div class="li" v-for="(item, index) in items" :key="index">
          {{ item }}
        </div>
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
        ["数字", "飞机", "墨水", "阿姨", "美国"],
        ["蔬菜", "阿婆", "按摩", "电影院", "小鸟"],
        ["联合国", "猪八戒", "卫星", "大海", "兴奋"],
        ["可口可乐", "武汉", "奥运会", "跳舞", "尘土飞扬"],
        ["小狗", "天安门", "汽车", "英语", "外星人"],
        ["报警", "诚实", "培训", "掌声鼓励", ""],
      ],
    };
  },
  mounted() {
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
        query: { type: "vocabulary25" },
      });
    },
  },
};
</script>

<style scoped >
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
  background-image: url("../../assets/textBj.png");
}
.content .ul {
  width: 100%;
  height: 5.833333333333333rem;
  display: flex;
  justify-content: space-between;
}
.content .li {
  font-size: 2rem;
  font-weight: 500;
  color: #fff;
  width: 20%;
  height: 5.833333333333333rem;
  line-height: 5.833333333333333rem;
  text-align: center;
  border: 1px solid #00ffff;
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
  .content .li,.goStudy  {
  font-size: 1.739126517050094rem;
}
}
</style>
