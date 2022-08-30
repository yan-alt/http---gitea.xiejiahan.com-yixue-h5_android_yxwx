import Vue from "vue";
Vue.directive("longpress", function(el, binding) {
  var timer = null;
  var start = function(e) {
    // 如果是点击事件，不启动计时器，直接返回
    if (e.type === "click") {
      return;
    }
    if (timer == null) {
      // 创建定时器 ( 1s之后执行长按功能函数 )
      timer = setTimeout(function() {
        //执行长按功能函数
        binding.value();
      }, 1000);
    }
  };
  var cancel = function() {
    if (timer !== null) {
      clearTimeout(timer);
      timer = null;
    }
  };

  // 添加事件监听器
  el.addEventListener("mousedown", start);
  el.addEventListener("touchstart", start);

  // 取消计时器
  el.addEventListener("click", cancel);//点击
  el.addEventListener("mouseout", cancel);//指针离开
  el.addEventListener("touchmove", cancel);//滑动
  el.addEventListener("touchend", cancel);//触屏离开
  el.addEventListener("touchcancel", cancel);
});
