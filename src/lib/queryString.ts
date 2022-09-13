const keyValueToString = ([key, value]: string[]) => {
  if (typeof value === 'object' && !Array.isArray(value)) {
    throw new Error('Please check your params')
  }
  return `${key}=${value}`
}

export function queryString(obj: object) {
  return Object.entries(obj).map(keyValueToString).join('&')
}

export function parse(queryString: string) {
  return Object.fromEntries(
    queryString.split('&').map(item => {
      // eslint-disable-next-line prefer-const
      let [key, value] = item.split('=')
      if (value.indexOf(',') > -1) {
        value = value.split(',') as unknown as string
      }
      return [key, value]
    })
  )
}
