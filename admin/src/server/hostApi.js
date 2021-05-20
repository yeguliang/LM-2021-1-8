import {request} from 'utils/request.js'

export function getAllArticle({params}) {
  return request({
      url: '/api/article',
      method: 'get',
      params
  })
}
export function oneArticle({params}) {
  return request({
      url: '/api/article',
      method: 'get',
      params
  })
}