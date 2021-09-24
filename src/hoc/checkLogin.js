// HOC：高阶组件
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import model from "@/models/public";
function chckLogin(Cmp) {
    return class hoc_cmp extends Component {
        state = {
            // 是否有登录
            isLogin: false,
            // 是否请求结束
            isFinish: false,
        };

        render() {
            // props会丢失，需要在此携带原来的props
            return <>{this.state.isFinish ? this.state.isLogin ? <Cmp {...this.props} /> : <Redirect to="/login" /> : <div />}</>;
        }

        componentDidMount() {
            // 获取jwt
            let jwt = sessionStorage.getItem("jwt");
            if (jwt) {
                // 初步认为已经登录（发送网络请求去校验jwt）
                model.preCheckJwt().then((res) => {
                    if (res.data.errNo === 0) {
                        this.setState({
                            isLogin: true,
                            isFinish: true,
                        });
                    } else {
                        this.setState({
                            isLogin: false,
                            isFinish: true,
                        });
                    }
                });
            } else {
                this.setState({
                    isLogin: false,
                    isFinish: true,
                });
            }
        }
    };
}

export default chckLogin;
