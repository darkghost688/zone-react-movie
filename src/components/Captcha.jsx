// 封装组件：验证码组件

// 封装意义：复用
// 注意事项：
// 1. 对于组件的封装，要考虑可移植性（开箱即用），所以本次封装的组件中涉及到的网络请求地址不建议走config/uri.js中去读取地址，建议写死。
// 2. 图形验证码调用地址去获取，返回数据有三个：
//      sensitive：对于大小写是否敏感
//      key：唯一凭证，在验证时需要传递给服务器
//      img：图形的base64的值
// 3. 适配表单的宽高
// 4. key的保存（父存，子传父）
//       - 父组件在调用验证码的时候，传递一个方法，子调用并且传入key
//       - 父组件在调用验证码的时候，使用ref对象绑定子组件，然后调用子的方法获取key值
// 5. 以方案1为例，此处约定一个方法名称（对于父来讲就是一个属性名）：setKey

import React, { Component } from "react";
import axios from "axios";
class Captcha extends Component {
    state = {
        base64: "", // 图片默认的base64的值
        height: 36, // 验证码默认的高度
        width: 120, // 验证码默认的宽度
    };
    render() {
        return (
            <>
                <img
                    src={this.state.base64}
                    height={this.props.h ? this.props.h : this.state.height}
                    width={this.props.w ? this.props.w : this.state.width}
                    onClick={this.loadCaptcha.bind(this)}
                    alt="点击刷新验证码"
                />
            </>
        );
    }

    // 发起网络请求
    componentDidMount() {
        // 调用发起请求的方法
        this.loadCaptcha();
    }

    // 请求验证码
    loadCaptcha() {
        let url = "https://reactapi.iynn.cn/captcha/api/math";
        axios.get(url).then((res) => {
            if (res.data.img) {
                this.setState({
                    base64: res.data.img,
                });
                // 调用父传递来的setKey方法获取验证码的key值
                this.props.setKey(res.data.key);
            }
        });
    }
}

export default Captcha;
