/*
 * @Author: SunXiaochun
 * @Date: 2021-02-21 18:23:30
 * @Last Modified by: SunXiaochun
 * @Last Modified time: 2021-02-23 16:18:43
 */
import React from "react";
import { Link, NavLink } from "react-router-dom";

class NavSide extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="navbar-default navbar-side">
        <div className="sidebar-collapse">
          <ul className="nav">
            <li>
              <NavLink exact activeClassName="active-menu" to="/">
                <i className="fa fa-dashboard"></i>
                <span>首页</span>
              </NavLink>
            </li>
            <li className="active">
              <Link to="/live">
                <i className="fa fa-list"></i>
                <span>直播间</span>
                <span className="fa arrow"></span>
              </Link>
              <ul className="nav nav-second-level collapse in">
                <li>
                  <NavLink to="/live/index" activeClassName="active-menu">
                    直播间管理
                  </NavLink>
                </li>
              </ul>
              <ul className="nav nav-second-level collapse in">
                <li>
                  <NavLink to="/live/save" activeClassName="active-menu">
                    新建直播间
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="active">
              <Link to="/video">
                <i className="fa fa-list"></i>
                <span>短视频</span>
                <span className="fa arrow"></span>
              </Link>
              <ul className="nav nav-second-level collapse in">
                <li>
                  <NavLink to="/video/index" activeClassName="active-menu">
                    短视频管理
                  </NavLink>
                </li>
              </ul>
              <ul className="nav nav-second-level collapse in">
                <li>
                  <NavLink to="/video/save" activeClassName="active-menu">
                    发布短视频
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="active">
              <Link to="/comment">
                <i className="fa fa-user-o"></i>
                <span>评论</span>
                <span className="fa arrow"></span>
              </Link>
              <ul className="nav nav-second-level collapse in">
                <li>
                  <NavLink to="/comment" activeClassName="active-menu">
                    评论管理
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavSide;
