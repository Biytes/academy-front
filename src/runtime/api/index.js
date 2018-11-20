import {
  http
} from './axios'

const api = 'https://schooltest.zunway.pw/api/v1/'
// 获取登陆权限和刷新登陆的token
export const checkAuth = params => http('POST', `${api}auth/refresh-token`, params)

// 获取模块的数据
export const getAcademyData = (section, params) => http('GET', `${api}${section}?`, params)

// 获取单个的数据
export const editAcademyData = (section, id) => http('GET', `${api}${section}/${id}`)
