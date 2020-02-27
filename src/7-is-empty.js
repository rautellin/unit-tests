export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  if (type === 'string') {
    if (stringArrayOrObject === '') {
      return true
    }
    return false
  } else if (type === 'object') {
    let objectLength = Object.keys(stringArrayOrObject).length
    if (objectLength == 0) {
      return true
    }
    return false
  }
  return false
}
