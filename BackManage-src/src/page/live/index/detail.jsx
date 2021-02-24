/*
 * @Author: SunXiaochun 
 * @Date: 2021-02-21 23:51:17 
 * @Last Modified by: SunXiaochun
 * @Last Modified time: 2021-02-23 16:25:45
 */


import React from "react";
import MUtil from "util/mm.jsx";
import Live from "service/live-service.jsx";
import PageTitle from "component/page-title/index.jsx";

import "./save.scss";

const _mm = new MUtil();
const _product = new Live();

class LiveDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.pid,
      name: "",
      subtitle: "",
      subImages: [],
      price: "",
      stock: "",
      detail: "",
    };
  }
  componentDidMount() {
    this.loadLive();
  }
  // 加载直播间详情
  loadLive() {
    // 有id的时候，表示是编辑功能，需要表单回填
    if (this.state.id) {
      _product.getLive(this.state.id).then(
        (res) => {
          let images = res.subImages.split(",");
          res.subImages = images.map((imgUri) => {
            return {
              uri: imgUri,
              url: res.imageHost + imgUri,
            };
          });
          this.setState(res);
        },
        (errMsg) => {
          _mm.errorTips(errMsg);
        }
      );
    }
  }
  render() {
    return (
      <div id="page-wrapper">
        <PageTitle title="短视频详情" />
        <div className="form-horizontal">
          <div className="form-group">
            <label className="col-md-2 control-label">主播名</label>
            <div className="col-md-5">
              <p className="form-control-static">{this.state.name}</p>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">短视频名称</label>
            <div className="col-md-5">
              <p className="form-control-static">{this.state.subtitle}</p>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">bgm</label>
            <div className="col-md-5">
              <p className="form-control-static">{this.state.subtitle}</p>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">标签</label>
            <div className="col-md-3">
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  value={this.state.stock}
                  readOnly
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">主图图片</label>
            <div className="col-md-10">
              {this.state.subImages.length ? (
                this.state.subImages.map((image, index) => (
                  <div className="img-con" key={index}>
                    <img className="img" src={image.url} />
                  </div>
                ))
              ) : (
                <div>暂无图片</div>
              )}
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">短视频详情</label>
            <div
              className="col-md-10"
              dangerouslySetInnerHTML={{ __html: this.state.detail }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}
export default LiveDetail;
