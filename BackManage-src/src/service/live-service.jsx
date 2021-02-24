/*
 * @Author: SunXiaochun 
 * @Date: 2021-02-21 23:10:45 
 * @Last Modified by: SunXiaochun
 * @Last Modified time: 2021-02-23 14:55:02
 */

import MUtil        from 'util/mm.jsx'

const _mm   = new MUtil();

class Live{
    // 获取直播间列表
    getLiveList(listParam){
        let url = 'https://qck2s3.fn.thelarkcloud.com/getLiveList';
        return _mm.request({
            type    : 'get',
            url     : url,
        });
    }
}

export default Live;