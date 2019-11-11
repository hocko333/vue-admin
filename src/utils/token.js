const TOKEN_KEY = 'user-token'

export function getToken() {
  return window.sessionStorage.getItem(TOKEN_KEY)
}

export function setToken(val) {
  window.sessionStorage.setItem(TOKEN_KEY, val)
}

export function removeToken() {
  window.sessionStorage.removeItem(TOKEN_KEY)
}
