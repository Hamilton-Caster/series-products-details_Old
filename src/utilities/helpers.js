const getKeyByValue = function (obj, value) {
  return Object.keys(obj).find(key => obj[key] === value)
}

export default {
  getKeyByValue
}
