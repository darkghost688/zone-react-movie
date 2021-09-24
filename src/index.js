import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import zhCN from "antd/lib/locale/zh_CN";
import { ConfigProvider } from "antd";
// import root component
import App from "./App";

// import antd style
import "antd/dist/antd.css";

// alert app name
document.title = process.env.REACT_APP_APPNAME;

// render root component
ReactDOM.render(
    // 解决antd组件中文案默认为英文的问题
    <ConfigProvider locale={zhCN}>
        <Router>
            <App />
        </Router>
    </ConfigProvider>,
    document.getElementById("root")
);
