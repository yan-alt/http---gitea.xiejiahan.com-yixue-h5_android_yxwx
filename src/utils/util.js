const isPone = pone => {
    var myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;//增加199
    if (!myreg.test(pone)) {
      return false;
    } else {
      return true;
    }
  }
  module.exports = {
    isPone: isPone,
  }