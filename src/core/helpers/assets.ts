/**
 * Get asset absolute path
 * @param {string} pathname
 */
export function toAbsoluteUrl(pathname: string) {
  return import.meta.env.BASE_URL + pathname
}
