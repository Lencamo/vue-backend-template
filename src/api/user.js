import request from '@/utils/request'

/**
 * 用户登录接口
 * @param {} data {email: 邮箱, password: 密码}
 * @returns
 */
export function loginAPI(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

/**
 * 根据token获取用户信息接口
 * @param {*} tokenValue token值
 * @returns
 */
export function getUserInfoAllAPI(tokenValue) {
  const url = '/user/info/all/token/' + tokenValue
  return request({
    url,
    method: 'get'
  })
}

