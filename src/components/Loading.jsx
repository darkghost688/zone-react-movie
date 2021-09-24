// 封装组件：加载中组件

// 封装意义：修改原来Spin组件显示的位置，设置文案，修改大小

import React, { Component } from "react";
import { Spin } from "antd";
import styled from "styled-components";
class Loading extends Component {
    render() {
        return (
            <Container>
                <Spin size="large" tip="疯狂加载中..." />
            </Container>
        );
    }
}

const Container = styled.div`
    width: 100%;
    text-align: center;
    padding: 25% 0;
`;

export default Loading;
