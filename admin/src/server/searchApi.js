import {request} from 'utils/request.js'

export function oneArticle({params}) {
  return request({
      url: '/api/article',
      method: 'get',
      params
  })
}