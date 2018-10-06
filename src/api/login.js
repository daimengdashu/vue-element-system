import Request from '@/utils/request'

export function login(username, password) {
  const data = {
    username,
    password
  }
  return Request({
    url: '/login',
    method: 'post',
    data
  })
}

export function getMenus(role) {
	return Request({
		url: '/getMenus',
		method: 'post',
		data: {
			role
		}
	})
}
