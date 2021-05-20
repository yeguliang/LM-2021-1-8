import {request} from 'utils/request.js'

export function login({data}) {
  return request({
      url: '/api/login',
      method: 'post',
      data
  })
}
export function repassword({data}) {
  return request({
      url: '/api/reset',
      method: 'put',
      data
  })
}
export function getVcode({params}) {
  return request({
      url: '/api/login/mailer',
      method: 'get',
      params
  })
}
export function register({data}) {
  return request({
      url: '/api/register',
      method: 'post',
      data
  })
}