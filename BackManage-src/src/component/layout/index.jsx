/*
 * @Author: SunXiaochun 
 * @Date: 2021-02-21 18:10:35 
 * @Last Modified by: SunXiaochun
 * @Last Modified time: 2021-02-21 18:28:00
 */

import React from 'react';

import NavTop from 'component/nav-top/index.jsx';
import NavSide from 'component/nav-side/index.jsx';

import './theme.css';
import './index.scss';

class Layout extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div id="wrapper">
                {/* 头部导航 */}
                <NavTop />
                {/* 侧边导航 */}
                <NavSide />
                {/* 子组件 */}
                {this.props.children}
            </div>
        );
    }
}

export default Layout;