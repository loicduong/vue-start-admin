export function stringSnakeToCamel(str: string): string {
  return str.replace(/(\-\w)/g, (m) => {
    return m[1].toUpperCase()
  })
}
