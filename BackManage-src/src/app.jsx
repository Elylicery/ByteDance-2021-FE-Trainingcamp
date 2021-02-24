/*
 * @Author: SunXiaochun
 * @Date: 2021-02-21 15:06:10
 * @Last Modified by: SunXiaochun
 * @Last Modified time: 2021-02-23 15:38:32
 */

import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link,
} from "react-router-dom";

//页面布局
import Layout from "component/layout/index.jsx";

//功能区子组件
import Home from "page/home/index.jsx";//首页
import CommentList from "page/comment/index.jsx";//评论
import VideoRouter from "page/video/router.jsx";//短视频管理
import LiveRouter from "page/live/router.jsx";//短视频管理
import Login from "page/login/index.jsx";
import CommentDetail from "page/comment/detail.jsx";
import ErrorPage from "page/error/index.jsx";

class App extends React.Component {
  render() {
    let LayoutRouter = (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/video" component={VideoRouter} />
          <Route path="/live" component={LiveRouter} />
          <Route path="/comment/index" component={CommentList} />
          <Route path="/comment/detail/:commentNumber" component={CommentDetail} />
          <Redirect exact from="/comment" to="/comment/index" />
          <Route path="/comment" component={CommentList} />
          <Route component={ErrorPage} />
        </Switch>
      </Layout>
    );
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" render={(props) => LayoutRouter} />
        </Switch>
      </Router>
    );
  }
}

//入口组件APP
ReactDOM.render(<App />, document.getElementById("app"));

