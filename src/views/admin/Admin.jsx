// 后台布局组件
// 后台所有的页面都需要使用它（父组件）
// 将公共的内容（左侧的菜单、logo、顶部信息等等）写在该组件中
import React, { Component } from "react";
// 导入父组件的路由
import AdminRouter from "../../router/AdminRouter";
import { Layout, Menu, Breadcrumb, Modal } from "antd";
import { DesktopOutlined, FileOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import checkLogin from "@/hoc/checkLogin";
import model from "@/models/public";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Admin extends Component {
    state = {
        collapsed: false,
        selectedKeys: "1", // 默认选中的key
        defaultOpenKeys: [],
        visible: false, // 模态窗口的显示控制
        urls: [
            {
                key: "1",
                path: "/admin/dashboard",
                pkey: "",
                bread: ["后台", "欢迎页"],
            },
            {
                key: "sub1",
                path: "",
                pkey: "",
            },
            {
                key: "2",
                path: "/admin/user/list",
                pkey: "sub1",
                bread: ["后台", "用户管理", "用户列表"],
            },
            {
                key: "sub2",
                path: "",
                pkey: "",
            },
            {
                key: "3",
                path: "/admin/film/Filmlist",
                pkey: "sub2",
                bread: ["后台", "电影管理", "电影列表"],
            },
            {
                key: "4",
                path: "/admin/cinema/Location",
                pkey: "",
                bread: ["后台", "影院管理", "影院列表"],
            },
        ],
        adminInfo: {
            last_login_addr: {},
        },
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const { collapsed } = this.state;
        // 获取路径，为了获取具体地址对应的面包屑
        let path = this.props.location.pathname;
        let breads = [];
        this.state.urls.forEach((el) => {
            if (el.path === path) {
                // 面包屑
                breads = el.bread;
            }
        });
        return (
            <Layout style={{ minHeight: "100vh" }}>
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                    <div className="logo">
                        <img src="https://www.baidu.com/img/PCfb_5bf082d29588c07f842ccde3f97243ea.png" width="100%" alt="" />
                    </div>
                    <Menu
                        selectedKeys={this.state.selectedKeys}
                        openKeys={this.state.defaultOpenKeys}
                        theme="dark"
                        mode="inline"
                        onOpenChange={this.open.bind(this)}
                    >
                        <Menu.Item key="1" onClick={this.go.bind(this, "/admin/dashboard", "1")} icon={<DesktopOutlined />}>
                            主页
                        </Menu.Item>
                        <SubMenu key="sub1" icon={<UserOutlined />} title="用户管理">
                            <Menu.Item onClick={this.go.bind(this, "/admin/user/list", "2")} key="2">
                                用户列表
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<TeamOutlined />} title="电影管理">
                            <Menu.Item onClick={this.go.bind(this, "/admin/film/Filmlist", "3")} key="3">
                                电影列表
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="4" onClick={this.go.bind(this, "/admin/cinema/Location", "4")} icon={<FileOutlined />}>
                            影院分布
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0, color: "#fff" }}>
                        {/* 输出管理员基本信息 */}
                        您好：{this.state.adminInfo.username}（{this.state.adminInfo.role}）！您上次于{this.state.adminInfo.last_ip}（
                        {this.state.adminInfo.last_login_addr.state} - {this.state.adminInfo.last_login_addr.isp}）登录！[
                        <span style={{ cursor: "pointer" }} onClick={this.logout.bind(this)}>
                            注销登录
                        </span>
                        ]
                    </Header>
                    <Content style={{ margin: "0 16px" }}>
                        <Breadcrumb style={{ margin: "16px 0" }}>
                            {breads.map((item, index) => {
                                return <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>;
                            })}
                        </Breadcrumb>
                        {/* 添加子路由的渲染容器 */}
                        <div style={{ padding: 24, minHeight: 360 }}>
                            <AdminRouter />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>©GP25 版权所有</Footer>
                </Layout>
            </Layout>
        );
    }

    // 跳转
    go(url, key) {
        this.props.history.push(url);
        // 修改选中的key
        this.setState({
            selectedKeys: key,
        });
    }

    // 页面菜单选中展开的纠正（如果不刷新的话只走1次）
    componentDidMount() {
        // 获取路径，为了获取具体地址对应的面包屑
        let path = this.props.location.pathname;
        this.state.urls.forEach((el) => {
            if (el.path === path) {
                this.setState({
                    defaultOpenKeys: [el.pkey],
                    selectedKeys: el.key,
                });
            }
        });
        // 获取管理员信息
        model.getAdminInfo().then((res) => {
            this.setState({
                adminInfo: res.data.accountInfo,
            });
        });
    }

    // 展开操作
    open(key) {
        this.setState({
            defaultOpenKeys: [key[1]],
        });
    }

    // 注销登录
    logout() {
        Modal.confirm({
            title: "操作确认",
            content: "您确认注销本次登录吗？",
            okText: "确认",
            cancelText: "取消",
            onOk: () => {
                // 清除jwt
                sessionStorage.removeItem("jwt");
                // 跳转到登录页面
                this.props.history.push("/login");
            },
        });
    }
}

export default checkLogin(Admin);
