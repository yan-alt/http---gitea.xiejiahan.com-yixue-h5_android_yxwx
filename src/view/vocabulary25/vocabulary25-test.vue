<template>
  <div
    class="box bjt"
    :class="{ bookBox1: bookBox1, bookBox2: bookBox2, bookBox3: bookBox3 }"
    ref="bookBox"
  >
    <div class="goBack imgbox" @click="goQuit">
      <img :src="back" alt="" />
    </div>
    <div class="table bjt">
      <p>词汇29位-测试</p>
    </div>
    <div class="content bjt">
      <div
        class="li"
        :class="{
          wrongActive: isFinish && item != correctData[index]
        }"
        v-for="(item, index) in dataList"
        :key="index"
      >
        <van-field
          :ref="'field' + index"
          :readonly="isFinish"
          v-model="dataList[index]"
          @input="inputReplace(dataList[index], index)"
          @blur="fieldBlur(index)"
          @focus="fieldFocus(index)"
          :maxlength="4"
        >
        </van-field>
      </div>
      <div class="li abandon"></div>
    </div>
    <div class="bottomBox">
      <div class="goStudy active bjt" @click="empty">清空</div>
      <div
        class="submit bjt"
        :class="{ active: canSubmit && !isFinish }"
        @click="submitClick"
      >
        提交
      </div>
    </div>
    <PromptBox
      v-if="showPromptBox"
      :timerNum="timerNum"
      :wrongItemNum="wrongItemNum"
      :sum="29"
      @handleConfirm="showPromptBox = !showPromptBox"
    />
    <Music ref="music" />
  </div>
</template>

<script>
import PromptBox from "@/components/promptBox";
import music from "@/components/music";
import { Field } from "vant";
import { Toast } from "vant";
import "vant/lib/toast/style";
import "vant/lib/field/style";
export default {
  components: {
    "van-field": Field,
    PromptBox: PromptBox,
    Music: music
  },
  data() {
    return {
      bookBox1: false, //BookBox样式
      bookBox2: false,
      bookBox3: false,
      focusIndex: -1, //焦点所在索引
      showPromptBox: false,
      timerNum: 0, //学习时间
      wrongItemNum: 0, //错误项数目
      isFinish: false, //结束
      active: 0,
      canSubmit: false,
      back: require("@/assets/returnBut.png"),
      correctData: [
        "数字",
        "飞机",
        "墨水",
        "阿姨",
        "美国",
        "蔬菜",
        "阿婆",
        "按摩",
        "电影院",
        "小鸟",
        "联合国",
        "猪八戒",
        "卫星",
        "大海",
        "兴奋",
        "可口可乐",
        "武汉",
        "奥运会",
        "跳舞",
        "尘土飞扬",
        "小狗",
        "天安门",
        "汽车",
        "英语",
        "外星人",
        "报警",
        "诚实",
        "培训",
        "掌声鼓励"
      ],
      dataList: []
    };
  },
  mounted() {
    this.timerNum = this.$route.query.timerNum * 1;
    for (let index = 0; index < 29; index++) {
      this.$set(this.dataList, index, "");
    }
    document.addEventListener("keyup", this.enterKey); //创建keyup事件捕捉器,监听到后触发enterKey事件
    this.$once("hook:beforeDestroy", () => {
      document.removeEventListener("keyup", this.enterKey);
    });
  },

  watch: {
    dataList: {
      handler(newVal, oldVal) {
        this.isFinish = false;
        let isEnd = true;
        for (const item of newVal) {
          if (!item) isEnd = false;
        }
        this.canSubmit = isEnd;
      },
      deep: true
    }
  },
  methods: {
    //当回车事件时
    enterKey(event) {
      const code = event.keyCode
        ? event.keyCode
        : event.which
        ? event.which
        : event.charCode;
      if (code == 13) {
        if (0 <= this.focusIndex && this.focusIndex < 28) {
          this.focusIndex++;
          this.$refs["field" + this.focusIndex][0].focus();
        }
      }
    },

    //当输入框得到焦点时
    fieldFocus(i) {
      if (i != this.focusIndex) this.focusIndex = i;
      this.bookBox1 = false;
      this.bookBox2 = false;
      this.bookBox3 = false;
      if (15 <= i && i < 20) {
        this.bookBox1 = true;
      } else if (20 <= i && i < 25) {
        this.bookBox2 = true;
      } else if (25 <= i && i < 29) {
        this.bookBox3 = true;
      }
    },
    //当输入框失去焦点时
    fieldBlur(i) {
      if (i == this.focusIndex) {
        this.bookBox1 = false;
        this.bookBox2 = false;
        this.bookBox3 = false;
      }
    },
    inputReplace(v, i) {
      //input输入框校验
      // console.log(1);
      // this.dataList[i] = v.replace(/[^\u4e00-\u9fa5a]/g, "");
    },
    //提交
    submitClick() {
      if (this.isFinish || !this.canSubmit) return false;
      this.$refs.music.$refs.click.play();
      this.wrongItemNum = 0;
      for (const i in this.dataList) {
        if (this.dataList[i] != this.correctData[i]) {
          this.wrongItemNum++;
        }
      }
      // this.active = -1;
      this.isFinish = true;
      this.showPromptBox = true;
      // Toast("答错" + this.wrongItemNum + "位");
    },
    empty() {
      this.$refs.music.$refs.click.play();
      for (const i in this.dataList) {
        this.$set(this.dataList, i, "");
        this.active = 0;
      }
    },
    goQuit() {
      this.$parent.$refs.MusicPlay.play();
      this.$router.push({
        path: `/memory`,
        query: { type: "vocabulary25" }
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
.bookBox1 {
  height: calc(100vh + 5.833333333333333rem);
  top: -5.833333333333333rem;
}
.bookBox2 {
  height: calc(100vh + 11.66666666666667rem);
  top: -11.66666666666667rem;
}
.bookBox3 {
  height: calc(100vh + 17.5rem);
  top: -17.5rem;
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
  box-sizing: border-box;
  font-size: 2rem;
  font-weight: 500;
  color: #fff;
  width: 20%;
  height: 5.833333333333333rem;
  line-height: 5.833333333333333rem;
  text-align: center;
  border: 1px solid #00ffff;
}
.content .li.abandon {
  background-color: rgba(12, 6, 6, 0.5);
}
.bottomBox {
  box-sizing: border-box;
  margin: 1.5rem auto 0rem;
  width: 75.625rem;
  padding: 0 15rem;
  display: flex;
  justify-content: space-between;
}
.bottomBox div {
  width: 7.5rem;
  height: 2.64375rem;
  line-height: 2.64375rem;
  font-family: SourceHanSansCN-Medium, SourceHanSansCN;
  font-weight: 500;
  color: #ffffff;
  background-image: url("../../assets/submitFeedback.png");
  font-size: 1.5rem;
}
.bottomBox div.active {
  background-image: url("../../assets/buttonH.png");
}
.van-cell {
  background-color: rgba(12, 6, 6, 0);
  height: 100%;
}
.content .li >>> .van-field__body {
  height: 100% !important;
}
.content .li >>> .van-field__control {
  font-size: 2rem;
  font-weight: 500;
  color: #00ffff;
  height: 100% !important;
}
.content .li.wrongActive >>> .van-field__control {
  color: #fa6400;
}
@media screen and (width: 1098px) {
  .content .li >>> .van-field__control,
  .content .li {
    font-size: 1.739126517050094rem;
  }
  .bottomBox div {
    font-size: 1.304344887787571rem;
  }
}
</style>
