import Vue from "vue";
import axios from "axios";
import { getToken } from "@/utils/auth";

// const BASE_URL = "https://fwh.yixuewang.cn";//线上 加wsh
// const BASE_URL = "http://192.168.3.202:9004";//个人
const BASE_URL = "http://test.yixuewang.cn:9004";//个人
// const BASE_NAME = "/wsh";
const BASE_NAME = "";
const API = {
  

};
const config = {
  API,
  BASE_URL
};

// 添加请求拦截器
const service = axios.create({
  baseURL: config.BASE_URL,
  timeout: 30000
});
service.interceptors.request.use(
  config => {
    // 设置请求头信息
    // this.headers["Authorization"] = `Basic c2FiZXI6c2FiZXJfc2VjcmV0`; //系统授权码
    // this.headers["Tenant-Id"] = "000000"; //租户id
    // this.headers["Blade-Auth"] = "bearer " + this.$route.query.token; //登录授权码 token由app传值
    config.headers["Authorization"] = `Basic c2FiZXI6c2FiZXJfc2VjcmV0`;
    config.headers["Tenant-Id"] = "000000"; 
    config.headers["Blade-Auth"] = "bearer " + getToken();
    

    // if (config.method === "post") {
    //   config.data = Qs.stringify(config.data);
    // }
    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

export default {
  service,
  BASE_URL,
  API
};
