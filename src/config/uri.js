let prefix = "https://reactapi.iynn.cn";
let baseUrl = "/api/"
// let baseUrl = process.env.VUE_APP_API_BASEURL;
//可以把"https://reactapi.iynn.cn";放到。env中

const uri = {
    // 密码登录
    NormalLogin: prefix + "/api/common/auth/login",
    // 验证图形验证码
    VerifyCaptcha: prefix + "/api/common/captcha/verify",
    // 短信下发
    SendSMSCode: prefix + "/api/common/sms/send",
    // 短信登录
    SmsLogin: prefix + "/api/common/auth/mobile",
    // 验证jwt
    preCheck: prefix + "/api/common/auth/jwtPreCheck",
    // 管理员信息获取
    adminInfo: prefix + "/api/common/auth/adminInfo",
    // 用户模块，用户列表
    userList: prefix + "/api/users",
    // 用户模块，统计用户
    userPie: prefix + "/api/users/statistics/getData",
    // 影院分布数据
    cinemaLoca: prefix + "/api/cinemas/infos/loca",
    // 获取城市信息
    citiesInfo: baseUrl + "getCitiesInfo",
    // 获取正在热映列表
    nowPlaying: baseUrl + "getNowPlayingFilmList",
    // 获取即将上映列表
    comingSoon: baseUrl + "getComingSoonFilmList",
    // 获取电影详情
    filmDetail: baseUrl + "getFilmInfo",
    // 其它的后续用到再加....
};

// 地址声明
export default uri;