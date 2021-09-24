import React, { Component } from "react";
import { Carousel } from "antd";
import { Card } from "antd";
import model from "../../../models/public";
import { Input } from "antd";
import { PageHeader, Button } from "antd";
// import styled from "styled-components";

// import bg1 from "../../../assets/images/bg1.jpeg";
const { Search } = Input;
const { Meta } = Card;

// const contentStyle = {
//   height: "500px",
//   color: "#fff",
//   lineHeight: "500px",
//   textAlign: "center",
//   background: '#364d79',
// };
const contentStyle = {
  height: "500px",
  color: "#fff",
    background: "url(bg1.jpeg)",
};
// const background1={background:url(${bg1})};
console.log(contentStyle);

// const background1={background2}
// const background1={background3}
// const background1={background4}
// const background1={background5}

class Dashboard extends Component {
  render() {
    return (
      <div>
        <PageHeader
          className="site-page-header"
          //   onBack={() => window.history.back()}
          title="GP25电影网"
          subTitle="这个地方放logo"
          extra={[
            <Button key="3">排行榜</Button>,
            <Button key="2">观看记录</Button>,
            <Button key="1" type="primary">
              登陆
            </Button>,
          ]}
        ></PageHeader>
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          loading
        />
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>
              1{/* <img src="../../../assets/images/bg1.jpeg" alt="" /> */}
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              2
              {/* <img src="../../../assets/images/bg2.jpeg" alt="" /> */}
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
                3
              {/* <img src="../../../assets/images/bg3.jpeg" alt="" /> */}
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
                4
              {/* <img src="../../../assets/images/bg4.jpeg" alt="" /> */}
            </h3>
          </div>
        </Carousel>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        ,
      </div>
    );
  }
  componentDidMount() {
    model.getnowPlaying().then((res) => {
      console.log(res);
    });
  }
  //   componentDidMount() {
  //     this.loadData();
  // }

  // loadData() {
  //     films.getUserList({ page: this.state.page, keyword: this.state.search }).then((res) => {
  //         // if (res.data.errNo === 0) {
  //         //     this.setState({
  //         //         data: res.data.paginate,
  //         //     });
  //         // }
  //         console.log(res);
  //     });
  // }
}

export default Dashboard;
