export { default as style } from './style'

const objectToString = style => {
  if (style && typeof style === 'object') {
    let styleStr = ''
    Object.keys(style).forEach(key => {
      const lowerCaseKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
      styleStr += `${lowerCaseKey}:${style[key]};`
    })
    return styleStr
  } else if (style && typeof style === 'string') {
    return style
  }
  return ''
}

/**
 * @param {*} style1 
 * @param {*} style2 
 * mergeStyle
 */
export function mergeStyle (style1, style2) {
  if ((style1 && typeof style1 === 'object')
    && (style2 && typeof style2 === 'object')
  ) {
    return Object.assign({}, style1, style2)
  }
  return objectToString(style1) + objectToString(style2)
}

export function paramsToUrl (url, params) {
  Object.keys(params).map(key => (
    url += key + '=' + params[key] + '&'
  ))
  url = url.substring(url.length - 1, 1)
  return url
}