/*
 * @Author: SunXiaochun 
 * @Date: 2021-02-21 20:56:04 
 * @Last Modified by: SunXiaochun
 * @Last Modified time: 2021-02-21 21:14:46
 */

import React            from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom'

// 页面
import VideoList      from 'page/video/index/index.jsx';//短视频列表
import VideoSave      from 'page/video/index/save.jsx';//新建短视频
import VideoDetail    from 'page/video/index/detail.jsx';//短视频详情

class VideoRouter extends React.Component{
    render(){
        return (
            <Switch>
                <Route path="/video/index" component={VideoList}/>
                <Route path="/video/save/:pid?" component={VideoSave}/>
                <Route path="/video/detail/:pid" component={VideoDetail}/>
                {/* <Redirect exact from="/video" to="/video/index"/> */}
            </Switch>
        )
    }
}
export default VideoRouter;