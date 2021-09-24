// 该组件为登录操作的主要组件，显示上包含了普通登录与短信登录
import React, { Component } from "react";
// 如果样式不需要复用，直接写在组件内，如果需要复用，建议单独写.js文件
import styled from "styled-components";
import { Card, Tabs } from "antd";
import bg from "@/assets/images/bg.png";
// 导入需要的表单组件
import NormalLogin from "./NormalLogin";
import MobileLogin from "./MobileLogin";
class Index extends Component {
    state = {
        // 默认选择的登录方式，0=常规登录，1=短信登录
        defaultTab: "0",
    };
    render() {
        return (
            <Container>
                <LoginForm>
                    <Card style={{ width: 300 }}>
                        <Tabs type="card" centered activeKey={this.state.defaultTab} onChange={this.changeTab.bind(this)}>
                            <Tabs.TabPane tab="密码登录" key="0">
                                <NormalLogin />
                            </Tabs.TabPane>
                            <Tabs.TabPane tab="短信登录" key="1">
                                <MobileLogin />
                            </Tabs.TabPane>
                        </Tabs>
                    </Card>
                </LoginForm>
            </Container>
        );
    }

    // 改变tab的回调
    changeTab(activeKey) {
        this.setState({
            defaultTab: activeKey,
        });
        // 此处应该刷新验证码...
    }
}

// 样式
// 大容器
const Container = styled.div`
    width: 100%;
    height: 100%;
    background: url(${bg});
    background-size: 100%;
    position: fixed;
`;

// 登录窗口容器
const LoginForm = styled.div`
    width: 300px;
    margin: 16% auto;
`;

export default Index;
