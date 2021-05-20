import {request} from 'utils/request.js'

export function personalArticle({params}) {
  return request({
      url: '/api/user/article',
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
export function updateArticles({data}) {
  return request({
      url: '/api/article',
      method: 'put',
      data
  })
}
export function createArticles({data}) {
  return request({
      url: '/api/article',
      method: 'post',
      data
  })
}
export function deleteArticles({data}) {
  return request({
      url: '/api/article',
      method: 'delete',
      data
  })
}