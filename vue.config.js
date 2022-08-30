// vue.config.js
module.exports = {
    css: {
      loaderOptions: {
        // 给 sass-loader 传递选项
        sass: {
            // 共享sass 全局变量
            data: `@import "~@/styles/variables.scss";`
          },
      }
    }
  }