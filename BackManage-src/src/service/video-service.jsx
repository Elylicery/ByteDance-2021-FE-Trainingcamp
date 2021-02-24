/*
 * @Author: SunXiaochun 
 * @Date: 2021-02-21 23:10:45 
 * @Last Modified by: SunXiaochun
 * @Last Modified time: 2021-02-23 14:45:07
 */
import MUtil        from 'util/mm.jsx'

const _mm   = new MUtil();

class Video{
    // 获取短视频列表
    getVideoList(listParam){
        let url = 'https://qck2s3.fn.thelarkcloud.com/getVideoList';
        return _mm.request({
            type    : 'get',
            url     : url,
        });
    }
    // 删除商品
    deleteVideo(data){
      return _mm.request({
        type    : 'post',
        url     : '/https://qck2s3.fn.thelarkcloud.com/deleteVideo',
        data    : data
      });
    }
    // 保存商品
    saveVideo(live){
        return _mm.request({
            type    : 'post',
            url     : '/manage/live/save.do',
            data    : live
        });
    }
}

export default Video;