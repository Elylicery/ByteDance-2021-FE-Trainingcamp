/*
 * @Author: SunXiaochun 
 * @Date: 2021-02-21 20:34:55 
 * @Last Modified by: SunXiaochun
 * @Last Modified time: 2021-02-23 16:26:43
 */


import MUtil        from 'util/mm.jsx'

const _mm   = new MUtil();

class Comment{
    //获取某一直播间的评论
    getCommentList(liveId){
        return _mm.request({
            type    : 'post',
            url     : 'https://qck2s3.fn.thelarkcloud.com/getComment',
            data    : {
                live_id:liveId,//某直播源的id，先getLiveList之后，获取live_id，然后再获取评论
                time:1614058436000,
                all:true
            }
        });
    }
}

export default Comment;