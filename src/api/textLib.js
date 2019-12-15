import request from '@/utils/request'

const group_name = "textlibrary";
export default {
  getTextLibData(lib,page,size=10){
    return request({
      url: `/${group_name}/${lib}/${page}/${size}`,
      method: 'get',
    })
  }

}
