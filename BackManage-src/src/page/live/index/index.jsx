/*
 * @Author: SunXiaochun
 * @Date: 2021-02-21 21:38:51
 * @Last Modified by: SunXiaochun
 * @Last Modified time: 2021-02-23 15:05:55
 */
import React from "react";
import { Link } from "react-router-dom";
import MUtil from "util/mm.jsx";
import Live from "service/live-service.jsx";
import PageTitle from "component/page-title/index.jsx";
import ListSearch from "./index-list-search.jsx";
import TableList from "util/table-list/index.jsx";
import Pagination from "util/pagination/index.jsx";

import "./index.scss";

const _mm = new MUtil();
const _live = new Live();

class LiveList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      pageNum: 1,
      listType: "list",
    };
  }
  componentDidMount() {
    this.loadLiveList();
  }
  //加载直播间列表
  loadLiveList() {
    _live.getLiveList().then(
      (res) => {
        this.setState({
            list:res,
            total:100,
        });
        console.log('res:',res);
      },
      (errMsg) => {
        this.setState({
          list: [],
        });
        _mm.errorTips(errMsg);
      }
    );
  }
  //删除直播间
  deleteLive(liveId) {
    console.log("删除该直播间吗？？",liveId);
    let confrimTips =  "确定要删除该直播间？";
    if (window.confirm(confrimTips)) {
      this.loadLiveList();
      _mm.successTips("删除直播间成功！");
      // _live
      //   .deleteLive({
      //     id: liveId,
      //   })
      //   .then(
      //     (res) => {
      //       // _mm.successTips(res);
      //       this.loadLiveList();
      //     },
      //     (errMsg) => {
      //       _mm.errorTips(res);
      //     } 
      //   );
    }
  }
  render() {
    console.log("列表数据:",this.state.list);
    let tableHeads = [
      { name: "ID", width: "10%" },
      { name: "主播名", width: "10%" },
      { name: "详情", width: "10%" },
      { name: "直播地址", width: "20%" },
      { name: "图标", width: "5%" },
      { name: "观看数", width: "13%" },
      { name: "直播时间", width: "15%" },
      { name: "删除", width: "8%" },
      { name: "操作", width: "25%" },
    ];
    return (
      <div id="page-wrapper">
        <PageTitle title="直播间列表">
          <div className="page-header-right">
            <Link to="/live/save" className="btn btn-primary">
              <i className="fa fa-plus"></i>
              <span>新建直播间</span>
            </Link>
          </div>
        </PageTitle>
        <ListSearch
          onSearch={(searchType, searchKeyword) => {
            this.onSearch(searchType, searchKeyword);
          }}
        />
        <TableList tableHeads={tableHeads}>
          {this.state.list.map((live, index) => {
            return (
              <tr key={index}>
                <td>{live._id}</td>
                <td>
                  <p>{live.author}</p>
                </td>
                <td>{live.description}</td>
                <td>{live.url}</td>
                <td>
                  <img src={live.icon} alt="替换icon" width="40px"></img>
                </td>
                <td>{live.views}</td>
                <td>{live.createdAt.substr(0,10)}</td>
                <td>
                  <button
                    className="btn btn-xs btn-warning"
                    onClick={(e) => {
                      this.deleteLive(live._id);
                    }}
                  >
                    删除
                  </button>
                </td>
                <td>
                  <Link className="opear" to={`/live/detail/${live.id}`}>
                    详情
                  </Link>
                  <Link className="opear" to={`/live/save/${live.id}`}>
                    编辑
                  </Link>
                </td>
              </tr>
            );
          })}
        </TableList>
        <Pagination
          current={this.state.pageNum}
          total={this.state.total}
          onChange={(pageNum) => this.onPageNumChange(pageNum)}
        />
      </div>
    );
  }
}

export default LiveList;
