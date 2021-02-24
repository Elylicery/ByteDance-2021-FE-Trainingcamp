/*
 * @Author: SunXiaochun
 * @Date: 2021-02-23 15:19:32
 * @Last Modified by: SunXiaochun
 * @Last Modified time: 2021-02-23 16:02:30
 */

import React from "react";
import MUtil from "util/mm.jsx";
import Comment from "service/comment-service.jsx";
import PageTitle from "component/page-title/index.jsx";
import TableList from "util/table-list/index.jsx";

import "./detail.scss";
const _mm = new MUtil();
const _comment = new Comment();

class CommentDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liveNumber: this.props.match.params.liveNumber,
      commentInfo: {},
    };
    console.log("liveNumber!!!:", this.state.liveNumber);
  }
  componentDidMount() {
    this.loadCommentDetail();
  }
  // 加载直播间
  loadCommentDetail() {
    console.log("加载的直播间id好：！！！", this.state.liveNumber);
    // _comment.getCommentDetail(this.state.liveNumber).then(
    // );
    //    let list =
    //     [ { _id: '603493c9b53a97007953e135',
    //     author: 'user1',
    //     content: 'test comment',
    //     t: 1614058441000 },
    //   { _id: '603493cd42ea8a00b26bc075',
    //     author: 'user1',
    //     content: 'test comment',
    //     t: 1614058445000 },
    //   { _id: '60349fd4a6d15b0079645331',
    //     author: 'newauthor',
    //     content: 'new content',
    //     t: 1614061524000 } ];
    //     this.setState({
    //         commentInfo : list
    //     });
  }
  //时间戳转字符串
  timestampToTime(timestamp) {
    var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    var D = date.getDate() + ' ';
    var h = date.getHours() + ':';
    var m = date.getMinutes() + ':';
    var s = date.getSeconds();
    return Y+M+D+h+m+s;
    }
  render() {
    //let commentList = this.state.commentInfo;
    let commentList = [
      {
        _id: "603493c9b53a97007953e135",
        author: "user1",
        content: "test comment",
        t: 1614058441000,
      },
      {
        _id: "603493cd42ea8a00b26bc075",
        author: "user1",
        content: "test comment",
        t: 1614058445000,
      },
      {
        _id: "60349fd4a6d15b0079645331",
        author: "newauthor",
        content: "new content",
        t: 1614061524000,
      },
    ];
    let tableHeads = [
      { name: "id", width: "20%" },
      { name: "用户名", width: "10%" },
      { name: "评论内容", width: "30%" },
      { name: "评论时间", width: "40%" },
    ];
    return (
      <div id="page-wrapper">
        <PageTitle title="直播间评论详情" />
        <div className="form-group">
          <label className="col-md-2 control-label">评论列表</label>
          <div className="col-md-10">
            <TableList tableHeads={tableHeads}>
              {commentList.map((comment, index) => {
                return (
                  <tr key={index}>
                    <td>{comment._id}</td>
                    <td>{comment.author}</td>
                    <td>{comment.content}</td>
                    <td>{this.timestampToTime(comment.t)}</td>
                  </tr>
                );
              })}
            </TableList>
          </div>
        </div>
      </div>
    );
  }
}
export default CommentDetail;
