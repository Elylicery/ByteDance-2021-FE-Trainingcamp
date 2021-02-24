/*
 * @Author: SunXiaochun 
 * @Date: 2021-02-23 16:11:54 
 * @Last Modified by:   SunXiaochun 
 * @Last Modified time: 2021-02-23 16:11:54 
 */

import React        from 'react';
import RcPagination   from 'rc-pagination';
import 'rc-pagination/dist/rc-pagination.min.css';

// 通用分页组件
class Pagination extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="row">
                <div className="col-md-12">
                    <RcPagination {...this.props} 
                        hideOnSinglePage
                        showQuickJumper/>
                </div>
            </div>
        );
    }
}

export default Pagination;