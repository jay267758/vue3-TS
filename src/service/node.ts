import { service } from '@/utils/request'

export default {
  demo(data = {}) {
    const url = '/api/v1/user';
    return service.post(url, data).then((res) => {
      if (res) {
        return res.data
      } else {
        return null
      }
    })
  },
  getUsers(params = {}) {
    const url = '/api/v1/getUsers';
    return service.get(url, { params }).then((res) => {
      if (res) {
        return res.data
      } else {
        return null
      }
    })
  }
}