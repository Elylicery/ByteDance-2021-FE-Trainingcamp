/*
 * @Author: SunXiaochun 
 * @Date: 2021-02-23 15:19:12 
 * @Last Modified by:   SunXiaochun 
 * @Last Modified time: 2021-02-23 15:19:12 
 */

import React from 'react';

class PageTitle extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        document.title = this.props.title + ' - Video Manage';
    }
    render(){
        return (
            <div className="row">
                <div className="col-md-12">
                    <h1 className="page-header">{this.props.title}</h1>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default PageTitle;