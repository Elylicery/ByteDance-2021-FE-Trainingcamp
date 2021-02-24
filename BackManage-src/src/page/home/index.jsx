/*
 * @Author: SunXiaochun
 * @Date: 2021-02-21 17:33:09
 * @Last Modified by: SunXiaochun
 * @Last Modified time: 2021-02-23 16:23:08
 */

import React from "react";
import { Link } from "react-router-dom";

// import MUtil from "util/mm.jsx";
// import Statistic from "service/statistic-service.jsx";

// const _mm = new MUtil();
// const _statistic = new Statistic();

import PageTitle from "component/page-title/index.jsx";
import "./index.scss";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userCount: "2,263",
      productCount: "12,234",
      orderCount: "87,123",
    };
  }
  componentDidMount() {
    this.loadCount();
  }
  loadCount() {
    //TODO：无后端接口
    // _statistic.getHomeCount().then(
    //   (res) => {
    //     this.setState(res);
    //   },
    //   (errMsg) => {
    //     _mm.errorTips(errMsg);
    //   }
    // );
  }
  render() {
    return (
      <div id="page-wrapper">
        <PageTitle title="首页" />
        <div className="row">
          <div className="col-md-4">
            <Link to="/live" className="color-box brown">
              <p className="count">{this.state.userCount}</p>
              <p className="desc">
                <i className="fa fa-user-o"></i>
                <span>直播间总数</span>
              </p>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/video" className="color-box green">
              <p className="count">{this.state.productCount}</p>
              <p className="desc">
                <i className="fa fa-list"></i>
                <span>短视频总数</span>
              </p>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/comment" className="color-box blue">
              <p className="count">{this.state.orderCount}</p>
              <p className="desc">
                <i className="fa fa-check-square-o"></i>
                <span>评论总数</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
