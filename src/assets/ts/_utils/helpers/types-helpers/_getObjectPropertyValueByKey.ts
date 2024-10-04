export function getObjectPropertyValueByKey(obj: any, key: string): any | undefined {
  const map = new Map(Object.entries(obj))
  if (Object.prototype.hasOwnProperty.call(obj, key) && map) {
    return map.get(key)
  }
}
