// 公共的模型文件
// 作用：将对请求获取到的数据进行处理，使得原本应该写在组件中的代码转到这里，这样的话组件更加干净

// 导入成员
import axios from "@/services/request";
import uri from "@/config/uri";

// 定义模型中的方法
const model = {
    // 常规登录方法
    normalLogin(params) {
        return axios.post(uri.NormalLogin, params);
    },
    // 图形验证码的验证
    verifyCaptcha(params) {
        return axios.post(uri.VerifyCaptcha, params);
    },
    // 短信获取
    sendSMS(params) {
        return axios.post(uri.SendSMSCode, params);
    },
    // 短信登录
    smsLogin(params) {
        return axios.post(uri.SmsLogin, params);
    },
    // jwt预检
    preCheckJwt() {
        return axios.get(uri.preCheck);
    },
    // 获取管理员信息
    getAdminInfo() {
        return axios.get(uri.adminInfo);
    },
    // 获取城市信息
    getCitiesInfo(){
        return axios.get(uri.citiesInfo);
    },
    // 获取正在热映列表
    getnowPlaying(){
        return axios.get(uri.nowPlaying);
    },
    // 获取即将上映列表
    getComingSoon(){
        return axios.get(uri.comingSoon);
    },
    // 获取电影详情
    getFilmInfo(){
        return axios.get(uri.filmDetail);
    },
    // 其它的后续用到再加....
};

export default model;
