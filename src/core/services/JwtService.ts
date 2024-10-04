const ID_TOKEN_KEY = 'id_token' as string

/**
 * @description get
 */
export function getToken(): string | null {
  return window.localStorage.getItem(ID_TOKEN_KEY)
}

/**
 * @description initialize app
 * @param token
 */
export function saveToken(token: string): void {
  window.localStorage.setItem(ID_TOKEN_KEY, token)
}

/**
 * @description initialize app
 */
export function destroyToken(): void {
  window.localStorage.removeItem(ID_TOKEN_KEY)
}

export default { getToken, saveToken, destroyToken }
