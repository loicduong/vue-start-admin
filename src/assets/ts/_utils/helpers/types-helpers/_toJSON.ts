export function toJSON(value: string | JSON): JSON | undefined {
  if (typeof value !== 'string') {
    return value
  }

  if (!value) {
    return undefined
  }

  // ("'" => "\"");
  const result = value.toString().split('').map(el => el !== '\'' ? el : '"').join('')
  const jsonStr = result.replace(/(\w+:)|(\w+ :)/g, (matched) => {
    return `"${matched.substring(0, matched.length - 1)}":`
  })
  try {
    return JSON.parse(jsonStr)
  }
  catch {
    return undefined
  }
}
