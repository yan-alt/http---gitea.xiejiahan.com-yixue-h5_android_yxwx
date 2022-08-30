<template>
  <div class="box bjt">
    <div class="goBack imgbox" @click="goStudy">
      <img :src="back" alt="" />
    </div>
    <div class="table bjt">
      <p>圆周率40位-测试</p>
    </div>
    <div class="middle bjt">
      <p>请从圆周率小数点后第1位填写至第40位</p>
      <div class="content bjt">
        <div
          class="li bjt"
          :class="{
            active: index === active && !isFinish,
            wrongActive: isFinish && item != correctData[index],
            correctActive: isFinish && item == correctData[index],
            isvalue: !isFinish && item != null
          }"
          v-for="(item, index) in data"
          :key="index"
          @click="!isFinish ? (active = index) : ''; $refs.music.$refs.click.play();"
        >
          {{ item }}
        </div>
      </div>
      <div class="keyboard bjt">
        <div
          class="li"
          :class="{active:touchClassNum==index}"
          v-for="(item, index) in keyboardData"
          :key="index"
          @touchstart='touchClassNum=index'
          @touchend='touchClassNum=-1'
          @click="fillData(item)"
        >
          {{ item }}
        </div>
      </div>
      <div
        class="submit bjt button"
        :class="{ active: submit && !isFinish }"
        @click="submitClick"
      >
        提交
      </div>
      <div
        class="deleteEle bjt button"
        :class="{ active: !isFinish }"
        @click="deleteEleClick"
      >
        退位
      </div>
      <div class="reset bjt button active" @click="empty">重置</div>
    </div>
    <PromptBox
      v-if="showPromptBox"
      :timerNum="timerNum"
      :wrongItemNum="wrongItemNum"
      :sum="40"
      @handleConfirm="showPromptBox = !showPromptBox"
    />
    <Music ref="music" />
  </div>
</template>

<script>
import PromptBox from "@/components/promptBox";
import music from "@/components/music";
import { Toast } from "vant";
import "vant/lib/toast/style";
export default {
  components: {
    Music: music,
    PromptBox: PromptBox
  },
  data() {
    return {
      touchClassNum:-1,
      timerNum: 0,
      showPromptBox: false,
      wrongItemNum: 0, //错误项数目
      isFinish: false, //结束,是否提交完成
      active: 0,
      submit: false, //是否可以提交
      back: require("@/assets/returnBut.png"),
      keyboardData: [7, 8, 9, 4, 5, 6, 1, 2, 3, 0],
      correctData: [
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
      ],
      data: []
    };
  },
  mounted() {
    this.timerNum = this.$route.query.timerNum * 1;
    for (let index = 0; index < 40; index++) {
      this.$set(this.data, index, null);
    }
  },
  watch: {
    data: {
      handler(newVal, oldVal) {
        this.isFinish = false;
      },
      deep: true
    }
  },
  methods: {
    //添加
    fillData(res) {
      if (this.isFinish) return false;
       this.$refs.music.$refs.key.play();
      this.$set(this.data, this.active, res);
      if (
        this.active < this.data.length - 1 &&
        !this.data[this.active + 1] &&
        this.data[this.active + 1] != 0
      )
        this.active += 1;
      let submit = true;
      for (const iterator of this.data) {
        if (iterator == null) submit = false;
      }
      this.submit = submit;
    },
    //删除
    deleteEleClick() {
      if (this.isFinish) return false;
      this.$refs.music.$refs.click.play();
      this.$set(this.data, this.active, null);
      if (this.active > 0) this.active -= 1;
    },
    //提交
    submitClick() {
      if (this.isFinish || !this.submit) return false;
      this.$refs.music.$refs.click.play();
      this.wrongItemNum = 0;
      for (const i in this.data) {
        if (this.data[i] != this.correctData[i]) {
          this.wrongItemNum++;
        }
      }
      this.active = -1;
      this.isFinish = true;
      this.showPromptBox = true;
    },
    goStudy() {
      this.$parent.$refs.MusicPlay.play();
      this.$router.push({
        path: `/memory`,
        query: { type: "Pi40" }
      });
    },
    empty() {
      this.$refs.music.$refs.click.play();
      this.submit = false;
      for (const i in this.data) {
        this.$set(this.data, i, null);
        this.active = 0;
      }
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
  position: relative;
  background-image: url("../../assets/studyBj.png");
}
.middle {
  width: 75rem;
  height: 40.8125rem;
  margin: 7.625rem auto 0;
  background-image: url("../../assets/PiAnswerBj.png");
  overflow: hidden;
  position: relative;
}
.middle p {
  margin: 0;
  position: absolute;
  height: 1.375rem;
  font-size: 1.375rem;
  top: 1.375rem;
  left: 2.5rem;
  font-weight: 400;
  color: #85c1ff;
  line-height: 2.0625rem;
}
.content {
  margin: 3.75rem 0 2.8125rem 2.5rem;
  padding-bottom: 0.75rem;
  box-sizing: border-box;
  width: 40.8125rem;
  height: 34.25rem;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  background-image: url("../../assets/Pi40/PiMetalFrame.png");
}
.content .li {
  font-size: 2rem;
  font-weight: 500;
  width: 12.5%;
  height: 6.7rem;
  line-height: 6.7rem;
  text-align: center;
  border: 1px solid #323d50;
  box-sizing: border-box;
  background: rgb(27, 41, 98);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  color: #ffffff;
}
.content .li.isvalue {
  border: 0px solid #323d50;
  background-image: url("../../assets/Pi40/li.png");
}
.content .li.active {
  line-height: 5.7rem;
  border: 0.5rem solid #fff24a;
}
.content .li.correctActive {
  border: 0px solid #323d50;
  background-image: url("../../assets/Pi40/correctLi.png");
}
.content .li.wrongActive {
  border: 0px solid #323d50;
  background-image: url("../../assets/Pi40/wrongLi.png");
}
.keyboard {
  background-image: url("../../assets/Pi40/KeyboardBox.png");
  /* margin: 4rem 1rem 1rem; */
  width: 19.75rem;
  height: 29.25rem;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  position: absolute;
  top: 5.8125rem;
  right: 3.1875rem;
  border-radius: 1rem;
  overflow: hidden;
  padding: 0.2rem;
  box-sizing: border-box;
}
.keyboard .li {
  font-weight: bold;
  color: #ffffff;
  line-height: 7.3125rem;
  box-sizing: border-box;
  font-size: 2rem;
  font-weight: 500;
  width: 33.33333%;
  height: 25%;
  text-align: center;
  background: #191b46;
  border: 1px solid #323d50;
}
.keyboard .li.active {
  background: #3299FF;
  }
.keyboard .li:nth-child(1) {
  border-top-left-radius: 0.7rem;
}
.keyboard .li:nth-child(3) {
  border-top-right-radius: 0.7rem;
}
.keyboard .li:nth-child(10) {
  width: 100%;
  border-bottom-right-radius: 0.7rem;
  border-bottom-left-radius: 0.7rem;
}
.button {
  position: absolute;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
  background-image: url("../../assets/submitFeedback.png");
}
.button.active {
  background-image: url("../../assets/buttonH.png");
}
.submit {
  bottom: 0;
  left: 33.75rem;
  width: 7.5rem;
  height: 2.6875rem;
  line-height: 2.6875rem;
  font-size: 1.5rem;
}
.reset,
.deleteEle {
  font-size: 1.75rem;
  width: 8.75rem;
  height: 3.0625rem;
  line-height: 3.0625rem;
  bottom: 2rem;
  right: 14rem;
}
.reset {
  right: 3.25rem;
}
@media screen and (width: 1098px) {
  .keyboard .li,.content .li,.goTest {
  font-size: 1.739126517050094rem;
}
.submit {
  font-size: 1.304344887787571rem;
}
.middle p{
  font-size: 1.19564948047194rem;
}
.reset,
.deleteEle {
   font-size: 1.521735702418833rem;
}
}
</style>
