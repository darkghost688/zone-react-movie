// 常规登录组件，输入用户名和密码
import React, { Component, createRef } from "react";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined, SafetyOutlined } from "@ant-design/icons";
import Captcha from "@/components/Captcha";
// 导入模型
import model from "@/models/public";
import { withRouter } from "react-router-dom";
class NormalLogin extends Component {
    constructor(props) {
        super(props);
        this.capRef = createRef();
    }
    state = {
        key: ""
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
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "请输入用户名！",
                        },
                    ]}
                >
                    <Input placeholder="用户名" prefix={<UserOutlined />} />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "请输入密码！",
                        },
                    ]}
                >
                    <Input.Password placeholder="密码" prefix={<LockOutlined />} />
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
                        <Input placeholder="验证码" prefix={<SafetyOutlined />} style={{ width: "50%", marginRight: "5px" }} />
                        <Captcha ref={this.capRef} h="32" setKey={this.setKey.bind(this)} />
                    </div>
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        span: 24,
                    }}
                >
                    <Button type="primary" style={{ width: "100%" }} htmlType="submit">
                        立即登录
                    </Button>
                </Form.Item>
            </Form>
        );
    }
    // 表单验证成功的回调
    onFinish = (values) => {
        // 发登录请求
        values["key"] = this.state.key;
        model.normalLogin(values).then((res) => {
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
}

export default withRouter(NormalLogin);
