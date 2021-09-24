// 做网络请求发送的
import axios from "axios";

// 请求拦截器
axios.interceptors.request.use((cfg) => {
    // 获取jwt
    let jwt = sessionStorage.getItem("jwt");
    if (jwt) {
        cfg.headers.Authorization = jwt;
    }
    return cfg;
});

// 响应拦截器
axios.interceptors.response.use((res) => {
    // 存token
    if (res.data.context && res.data.context.jwt) {
        sessionStorage.setItem("jwt", res.data.context.jwt);
    }
    return res;
});

// 导出axios
export default axios;
