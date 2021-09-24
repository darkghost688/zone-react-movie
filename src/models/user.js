import uri from "@/config/uri";
import axios from "@/services/request";

const user = {
    // 获取用户列表
    getUserList(params) {
        return axios.get(uri.userList, {
            params,
        });
    },
    // 获取统计用户信息
    getPieData() {
        return axios.get(uri.userPie);
    },
};

export default user;
