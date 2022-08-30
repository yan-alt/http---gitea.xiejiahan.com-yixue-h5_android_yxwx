<template>
  <div class="box bjt">
    <div class="promptBox bjt">
      <p class="top">
        {{ wrongItemNum == 0 ? "恭喜你挑战通过" : "很遗憾,你挑战失败了" }}
      </p>

      <div class="middle">
        <div>
          记忆用时:&nbsp;<span
            >{{
              10 > Math.floor(this.timerNum / 3600)
                ? "0" + Math.floor(this.timerNum / 3600)
                : Math.floor(this.timerNum / 3600)
            }}:
            {{
              10 > Math.floor(this.timerNum / 60) % 60
                ? "0" + (Math.floor(this.timerNum / 60) % 60)
                : Math.floor(this.timerNum / 60) % 60
            }}:
            {{
              10 > this.timerNum % 60
                ? "0" + (this.timerNum % 60)
                : this.timerNum % 60
            }}</span
          >
        </div>
        <div>
          正确:&nbsp;<span>{{ sum - wrongItemNum }}/{{ sum }}</span>
        </div>
      </div>
      <div class="bottom bjt" @click="confirmClick">确定</div>
    </div>
  </div>
</template>

<script>
import { Field } from "vant";
import "vant/lib/field/style";
export default {
  components: {
    "van-field": Field
  },
  props: {
    //时间
    timerNum: {
      type: Number,
      default: 0
    },
    //总数
    sum: {
      type: Number,
      default: 29
    },
    //答错
    wrongItemNum: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      hour: "",
      minute: "",
      sekunde: ""
    };
  },
  mounted() {},
  methods: {
    confirmClick() {
      this.$emit("handleConfirm");
    }
  }
};
</script>

<style scoped>
@import "../styles/style.css";
.box {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  z-index: 999;
}
.promptBox {
  width: 34.4375rem;
  height: 23.4375rem;
  margin: 11.75rem auto 0;
  background-image: url("../assets/promptBox.png");
  color: #fff;
  overflow: hidden;
}
.top {
  margin: 5.5625rem 0 0;
  font-size: 2.25rem;
  font-family: SourceHanSansCN-Bold, SourceHanSansCN;
  font-weight: bold;
  color: #56ffff;
}
.middle {
  margin: 3rem 0 0;
  padding: 0 6rem;
  box-sizing: border-box;
  font-size: 1.375rem;
  font-family: SourceHanSansCN-Normal, SourceHanSansCN;
  font-weight: 400;
  color: #56ffff;
  display: flex;
  justify-content: space-between;
}
.middle span {
  color: #ffffff;
}
.bottom {
  font-weight: 500;
  color: #ffffff;
  font-size: 1.5rem;
  width: 7.5rem;
  height: 2.64375rem;
  line-height: 2.64375rem;
  margin: 2.5625rem auto 0;
  background-image: url("../assets/buttonH.png");
}
</style>
