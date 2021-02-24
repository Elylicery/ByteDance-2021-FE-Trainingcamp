/*
 * @Author: SunXiaochun
 * @Date: 2021-02-21 18:24:46
 * @Last Modified by: SunXiaochun
 * @Last Modified time: 2021-02-23 16:17:14
 */

import React from "react";
import { Link } from "react-router-dom";
import MUtil from "util/mm.jsx";
import User from "service/user-service.jsx";

const _mm = new MUtil();
const _user = new User();

class NavTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: _mm.getStorage("userInfo").username || "",
    };
  }
  // 退出登录
  onLogout() {
    window.location.href = "/login";
    // _user.logout().then(
    //   (res) => {
    //      _mm.removeStorage("userInfo");
    //     window.location.href = "/login";
    //   },
    //   (errMsg) => {
    //     _mm.errorTips(errMsg);
    //   }
    // );
  }
  render() {
    return (
      <div className="navbar navbar-default top-navbar">
        {/*左侧标题名*/}
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            <b>视频</b>后台管理系统
          </Link>
        </div>
        {/*右侧下拉菜单1-用户*/}
        <ul className="nav navbar-top-links navbar-right">
          <li className="dropdown">
            <a className="dropdown-toggle" href="javascript:;">
              <i className="fa fa-user fa-fw"></i>
              {this.state.username ? (
                <span>欢迎，{this.state.username}</span>
              ) : (
                <span>欢迎admin</span>
              )}
              <i className="fa fa-caret-down"></i>
            </a>
            <ul className="dropdown-menu dropdown-user">
              <li>
                <a
                  onClick={() => {
                    this.onLogout();
                  }}
                >
                  <i className="fa fa-sign-out fa-fw"></i>
                  <span>退出登录</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavTop;
