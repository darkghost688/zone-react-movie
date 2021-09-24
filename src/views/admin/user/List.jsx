import React, { Component } from "react";
import { PageHeader, Button, Descriptions, Table, Space, Pagination, Modal, message } from "antd";
import model from "@/models/user";
import * as echarts from "echarts/core";
import { TitleComponent, TooltipComponent, LegendComponent } from "echarts/components";
import { PieChart } from "echarts/charts";
import { LabelLayout } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([TitleComponent, TooltipComponent, LegendComponent, PieChart, CanvasRenderer, LabelLayout]);
// 表头
const columns = [
    {
        title: "序号", // 表头字段的显示名称
        dataIndex: "id", // 该列的数据源属性名（后端返回的属性名）
        key: "id", // 是用于保持唯一的
        // render: (text) => <a>{text}</a>,    // 对于数据进行加工后展示的
    },
    {
        title: "用户名",
        dataIndex: "username",
        key: "username",
    },
    {
        title: "手机号",
        dataIndex: "mobile",
        key: "mobile",
    },
    {
        title: "邮箱",
        dataIndex: "email",
        key: "email",
    },
    {
        title: "状态",
        key: "status",
        dataIndex: "status",
        render: (text) => {
            return text === "1" ? "正常" : "禁用";
        },
    },
    {
        title: "性别",
        key: "gender",
        dataIndex: "gender",
        render: (text) => {
            if (text === "1") {
                return "男";
            }
            if (text === "2") {
                return "女";
            }
            if (text === "3") {
                return "保密";
            }
        },
    },
    {
        title: "操作",
        key: "action",
        // text：当前单元格对应的数据
        // record：当前整条数据的对象
        render: (text, record) => (
            <Space size="middle">
                <span>编辑</span>
                <span>删除</span>
            </Space>
        ),
    },
];

class List extends Component {
    state = {
        data: [],
        page: 1, // 当前页码
        search: "", // 搜索关键词
        // 模态窗口
        isModalVisible: false,
    };
    render() {
        return (
            <>
                {/* 页头部分 */}
                <PageHeader
                    ghost={false}
                    title="用户列表"
                    subTitle="以列表的形式呈现出会员的基本信息"
                    extra={[
                        <Button key="2" type="primary">
                            添加用户
                        </Button>,
                        <Button key="1" onClick={this.showModal.bind(this)} type="primary">
                            报表展示
                        </Button>,
                    ]}
                >
                    <Descriptions size="small" column={3}>
                        <Descriptions.Item label="功能简介">
                            该功能属于用户管理下的子功能，你可以通过这个功能来查询本站会员的基本信息，当然你也可以通过这里进行对会员信息的修改。我们也很高兴为你提供相关的报表功能！
                        </Descriptions.Item>
                    </Descriptions>
                </PageHeader>

                {/* 表格 */}
                {/* 自己给数据加上key，通过table组件的rowKey属性 */}
                <Table pagination={false} rowKey={(record) => record.id} columns={columns} dataSource={this.state.data.data} />

                {/* 分页器 */}
                <div style={{ textAlign: "center", marginTop: "25px", background: "#fff", height: "60px", lineHeight: "60px", paddingTop: "15px" }}>
                    {/* 
                        defaultCurrent：当前的页码
                        total：总记录数
                     */}
                    <Pagination
                        onChange={this.changePage.bind(this)}
                        defaultCurrent={this.state.page}
                        total={this.state.data.total}
                        showSizeChanger={false}
                    />
                    {/* showSizeChanger={false} */}
                </div>

                {/* 模态窗口 */}
                <Modal
                    title="会员性别统计"
                    visible={this.state.isModalVisible}
                    closable={false}
                    width={888}
                    footer={[
                        <Button key="submit" type="primary" onClick={this.handleOk.bind(this)}>
                            确定
                        </Button>,
                    ]}
                >
                    {/* pie图的渲染容器 */}
                    <div id="main" style={{ width: "888px", height: "450px" }}></div>
                </Modal>
            </>
        );
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        model.getUserList({ page: this.state.page, keyword: this.state.search }).then((res) => {
            if (res.data.errNo === 0) {
                this.setState({
                    data: res.data.paginate,
                });
            }
        });
    }

    // 页码改变的事件处理程序
    changePage(page) {
        console.log(page);
        // 更新页码
        this.setState(
            {
                page,
            },
            () =>
                // 根据页码去更新数据
                this.loadData()
        );
    }

    // 关闭模态窗口
    handleOk = () => {
        this.setState({
            isModalVisible: false,
        });
    };

    // 显示模态窗口
    showModal() {
        // 获取数据
        model.getPieData().then((res) => {
            if (res.data.errNo === 0) {
                this.setState(
                    {
                        isModalVisible: true,
                    },
                    () => {
                        // 展示pie图
                        var chartDom = document.getElementById("main");
                        var myChart = echarts.init(chartDom);
                        var option;

                        option = {
                            title: {
                                text: "本站会员男女比例饼图",
                                subtext: "数据来自于数据库",
                                left: "center",
                            },
                            tooltip: {
                                trigger: "item",
                                // 显示百分比
                                formatter: '{a} <br/>{b} : {c} ({d}%)'
                            },
                            legend: {
                                orient: "vertical",
                                left: "left",
                            },
                            series: [
                                {
                                    name: "性别",
                                    type: "pie",
                                    radius: "50%",
                                    data: res.data.data,
                                    emphasis: {
                                        itemStyle: {
                                            shadowBlur: 10,
                                            shadowOffsetX: 0,
                                            shadowColor: "rgba(0, 0, 0, 0.5)",
                                        },
                                    },
                                },
                            ],
                        };

                        option && myChart.setOption(option);
                    }
                );
            } else {
                message.error("数据获取失败！");
            }
        });
    }
}

export default List;
