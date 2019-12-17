import request from '@/utils/request'

const group_name = "event_result";
export default {
    getEventResult(pro_id, text_id) {
        return request({
            url: `/${group_name}/detail/${pro_id}/${text_id}`,
            method: 'get',
        })
    },
}