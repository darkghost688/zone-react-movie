// 短信登录组件，输入手机号和短信验证码
import React, { Component, createRef } from "react";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined, SafetyOutlined } from "@ant-design/icons";
import Captcha from "@/components/Captcha";
// 导入模型
import model from "@/models/public";
import { withRouter } from "react-router-dom";

class MobileLogin extends Component {
    constructor(props) {
        super(props);
        this.capRef = createRef();
        // 非受控组件实现手机号与验证码值的先行获取
        this.mobRef = createRef(); // 手机号
        this.imgRef = createRef(); // 图形验证码的输入框
    }
    state = {
        key: "",
        time: 60, // 倒计时的时长，单位s
        canClick: true, // 默认是否可以被点击
    };
    render() {
        return (
            <Form
                name="basic"
                wrapperCol={{
                    span: 24,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    name="mobile"
                    rules={[
                        {
                            required: true,
                            message: "请输入手机号！",
                        },
                    ]}
                >
                    <Input ref={this.mobRef} maxLength="11" placeholder="手机号" prefix={<UserOutlined />} />
                </Form.Item>

                <Form.Item
                    name="captcha"
                    rules={[
                        {
                            required: true,
                            message: "请输入验证码！",
                        },
                    ]}
                >
                    <div>
                        <Input placeholder="验证码" prefix={<SafetyOutlined />} ref={this.imgRef} style={{ width: "50%", marginRight: "5px" }} />
                        <Captcha ref={this.capRef} h="32" setKey={this.setKey.bind(this)} />
                    </div>
                </Form.Item>

                <Form.Item
                    name="code"
                    rules={[
                        {
                            required: true,
                            message: "请输入短信验证码！",
                        },
                    ]}
                >
                    <div>
                        <Input maxLength="6" placeholder="短信验证码" prefix={<LockOutlined />} style={{ width: "50%", marginRight: "5px" }} />
                        <Button style={{ width: "48%" }} type="primary" disabled={!this.state.canClick} onClick={this.getCode.bind(this)}>
                            {this.state.canClick ? "获取验证码" : `重新获取（${this.state.time}s）`}
                        </Button>
                    </div>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        span: 24,
                    }}
                >
                    {/* 要想按钮100%宽度，除了给style属性外，还支持使用block属性，表示让按钮与父级一样宽度 */}
                    <Button type="primary" block htmlType="submit">
                        立即登录
                    </Button>
                </Form.Item>
            </Form>
        );
    }
    // 表单验证成功的回调
    onFinish = (values) => {
        // 发登录请求
        values["requestId"] = this.state.requestId;
        model.smsLogin(values).then((res) => {
            if (res.data.errNo === 0) {
                message.success("登录成功！", () => {
                    // 注意this指向问题
                    this.props.history.push("/admin/dashboard");
                });
            } else {
                // 刷新验证码
                this.capRef.current.loadCaptcha();
                message.error(res.data.errText);
            }
        });
    };
    // 获取验证码图片的key值
    setKey(key) {
        // 将key值保存在组件中
        this.setState({
            key,
        });
    }

    // 获取短信验证码
    getCode() {
        // 获取手机号和图形验证码的值
        let mobile = this.mobRef.current.props.value;
        let captcha = this.imgRef.current.state.value;
        if (/^1[3-9]\d{9}$/.test(mobile)) {
            // 继续验证码图形码
            if (captcha !== "") {
                // 校验图形验证码
                model
                    .verifyCaptcha({
                        key: this.state.key,
                        captcha: captcha,
                    })
                    .then((res) => {
                        // 判断图形验证码是否正确
                        if (res.data.errNo === 0) {
                            // 获取短信验证码
                            model
                                .sendSMS({
                                    token: res.data.context.token,
                                    mobile: mobile,
                                    type: 0,
                                })
                                .then((ret) => {
                                    // 判断是否发送成功
                                    if (ret.data.errNo === 0) {
                                        // 发送成功
                                        this.setState({
                                            requestId: ret.data.requestId,
                                        });
                                        // 开始倒计时
                                        this.timedown();
                                        message.success("短信发送成功！");
                                    } else {
                                        message.error("短信发送失败！");
                                        this.capRef.current.loadCaptcha();
                                    }
                                });
                        } else {
                            message.error("请输入正确的图形验证码！");
                            // 刷新验证码
                            this.capRef.current.loadCaptcha();
                        }
                    });
            } else {
                message.error("请输入图形验证码！");
            }
        } else {
            message.error("请输入正确的手机号！");
        }
    }

    //  倒计时
    timedown() {
        if (this.state.time === 1) {
            // 倒计时已经结束
            this.setState({
                time: 60,
                canClick: true,
            });
        } else {
            // 倒计时没有结束
            this.setState({
                time: this.state.time - 1,
                canClick: false,
            });
            // 定时器
            setTimeout(() => {
                this.timedown();
            }, 1000);
        }
    }
}

export default withRouter(MobileLogin);
