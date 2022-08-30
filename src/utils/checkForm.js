// 校验数字 正整数
export const checkNumber = (rule, value, callback) => {
    let reg = /^[1-9]+\d*$/;
    if (reg.test(value)) {
      callback();
    } else {
      return callback(new Error("请输入大于0的整数字"));
    }
  };
  // 校验输入不能为空
  export const checkEmpty = (rule, value, callback) => {
    if (!value.trim()) {
      callback(new Error("输入不能为空"));
    } else {
      callback();
    }
  };
  // 校验 不包含汉字
  export const checkEnglish = (rule, value, callback) => {
    let reg = /^[^\u4e00-\u9fa5]+$/;
    if (reg.test(value.trim())) {
      callback();
    } else {
      return callback(new Error("请输入英文"));
    }
  };
  // 校验 不包含字母
  export const checkChinese = (rule, value, callback) => {
    let reg = /^[^a-zA-Z]+$/;
    if (reg.test(value)) {
      callback();
    } else {
      return callback(new Error("请输入中文"));
    }
  };
// 校验 手机号
export const checkPhone = (rule, value, callback) => {
    let reg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (reg.test(value)) {
        callback();
    }else{
        callback(new Error("请填写正确手机号"));
        
    }
    };