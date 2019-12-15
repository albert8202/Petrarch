import request from '@/utils/request'

const group_name = "event_result";
export default {
    getEventResult(id) {
        return request({
            url: `/${group_name}/${id}`,
            method: 'get',
        })
    },
}