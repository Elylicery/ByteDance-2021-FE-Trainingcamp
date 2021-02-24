/*
 * @Author: SunXiaochun 
 * @Date: 2021-02-21 20:56:04 
 * @Last Modified by: SunXiaochun
 * @Last Modified time: 2021-02-23 14:52:50
 */

import React            from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom'

// 页面
import LiveList      from 'page/live/index/index.jsx';//直播间列表
import LiveSave      from 'page/live/index/save.jsx';//新建直播间
import LiveDetail    from 'page/live/index/detail.jsx';//直播间详情

class LiveRouter extends React.Component{
    render(){
        return (
            <Switch>
                <Route path="/live/index" component={LiveList}/>
                <Route path="/live/save/:pid?" component={LiveSave}/>
                <Route path="/live/detail/:pid" component={LiveDetail}/>
                {/* <Redirect exact from="/live" to="/live/index"/> */}
            </Switch>
        )
    }
}
export default LiveRouter;