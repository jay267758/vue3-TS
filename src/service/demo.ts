import { service } from '@/utils/request'

export default {
  demo() {
    const url = '/api/v1/login';
    return service.get(url).then((res) => {
      if (res) {
        return res.data
      } else {
        return null
      }
    })
  },
  getUsers() {
    const url = '/getUsers';
    return service.get(url).then((res) => {
      if (res) {
        return res.data
      } else {
        return null
      }
    })
  }
}