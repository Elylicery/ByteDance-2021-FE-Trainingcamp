/*
 * @Author: SunXiaochun
 * @Date: 2021-02-21 21:38:51
 * @Last Modified by: SunXiaochun
 * @Last Modified time: 2021-02-23 14:46:33
 */

import React from "react";
import { Link } from "react-router-dom";
import MUtil from "util/mm.jsx";
import Video from "service/video-service.jsx";
import PageTitle from "component/page-title/index.jsx";
import ListSearch from "./index-list-search.jsx";
import TableList from "util/table-list/index.jsx";
import Pagination from "util/pagination/index.jsx";

import "./index.scss";

const _mm = new MUtil();
const _video = new Video();

class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      pageNum: 1,
      listType: "list",
    };
  }
  componentDidMount() {
    this.loadVideoList();
  }
  //加载短视频列表
  loadVideoList() {
    _video.getVideoList().then(
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
  //删除短视频
  deleteVideo(videoId) {
    console.log("删除该短视频吗？？",videoId);
    let confrimTips =  "确定要删除该短视频？";
    if (window.confirm(confrimTips)) {
      this.loadVideoList();
      _mm.successTips("删除短视频成功！");
      // _video
      //   .deleteVideo({
      //     id: videoId,
      //   })
      //   .then(
      //     (res) => {
      //       // _mm.successTips(res);
      //       this.loadVideoList();
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
      { name: "短视频ID", width: "10%" },
      { name: "主播名", width: "5%" },
      { name: "详情", width: "15%" },
      { name: "喜欢次数", width: "10%" },
      { name: "分享次数", width: "10%" },
      { name: "评论次数", width: "10%" },
      { name: "标签", width: "5%" },
      { name: "直播时间", width: "13%" },
      { name: "删除", width: "8%" },
      { name: "操作", width: "25%" },
    ];
    return (
      <div id="page-wrapper">
        <PageTitle title="短视频列表">
          <div className="page-header-right">
            <Link to="/video/save" className="btn btn-primary">
              <i className="fa fa-plus"></i>
              <span>新建短视频</span>
            </Link>
          </div>
        </PageTitle>
        <ListSearch
          onSearch={(searchType, searchKeyword) => {
            this.onSearch(searchType, searchKeyword);
          }}
        />
        <TableList tableHeads={tableHeads}>
          {this.state.list.map((video, index) => {
            return (
              <tr key={index}>
                <td>{video._id}</td>
                <td>
                  <p>{video.author}</p>
                </td>
                <td>{video.description}</td>
                <td>{video.likes}</td>
                <td>{video.shares}</td>
                <td>{video.comments}</td>
                <td>{video.tagList[0]}</td>
                <td>{video.createdAt.substr(0,10)}</td>
                <td>
                  <button
                    className="btn btn-xs btn-warning"
                    onClick={(e) => {
                      this.deleteVideo(video._id);
                    }}
                  >
                    删除
                  </button>
                </td>
                <td>
                  <Link className="opear" to={`/video/detail/${video.id}`}>
                    详情
                  </Link>
                  <Link className="opear" to={`/video/save/${video.id}`}>
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

export default VideoList;
