//路由拦截

router.beforeEach((to, from, next) => {
    //UA()==2我这里2表示ios 1是安卓 判断机器代码可以自行百度
    
      if (isiOS) {
      //是ios的情况下
        if (to.query.wechat !== undefined && to.query.wechat === '1') {
           //判断是不是首次进入 记录一下url
            window.wechaturl = window.location + '';
            //然后去获取签名 
            getWxSignature();
        } else {
         //不是首次进入，那说明就是url没有小标识 不知道wechaturl哪里来的点击一下这个上面的wechaturl哪里来的这个链接进去看一下。
          if(window.wechaturl){
            //我们的需求是/a页面是活动页面，要求分享出去带上当前用户的信息，自定义分享的链接我在/a页面下的mounted调用了一下setShare里面写上了就懒得贴了。
             if(from.path == "/a"){
               //其他页面自定义分享内容设置成初始化，如果不执行这一步的话，那么只要进过a页面，以后的链接分享出去就都是a页面设置的内容了。如果没有这个需求可以直接省略，不重要。
               setShare();
             }
          }else{
          //这一步！最！最！最！重要
          //当页面被点击刷新后wechaturl是null，这个时候就要把当前的页面再做上小标记。记录一下。
            let url = location.href;
            if (url.indexOf('?') >= 0) {
              url += "&wechat=1";
            }else{
              url += "?wechat=1";
            }
            window.wechaturl = url;
            setTimeout(function () {
            //这一步很救命 试了location.assign(url)和location.replace(url)，最终选择用location.replace(url)
            //相当于加载一下当前界面，如果不执行这一步的话，微信只是重新渲染了dom，而不重新执行wx.config;
            //之前我就getWxSignature()发现wx.ready根本不执行。只有重新加载一下才会执行。太重要了。
              location.replace(url);
            }, 300);
          }
        }
      } else {
      //是安卓的情况下
        setTimeout(function () {
          getWxSignature();
        }, 300);
      }
      //不要忘了不然不执行了
      next();
    })
    