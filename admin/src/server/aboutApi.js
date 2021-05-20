import {request} from 'utils/request.js'

export function personalArticle({params}) {
  return request({
      url: '/api/user/article',
      method: 'get',
      params
  })
}