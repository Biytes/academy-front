import $ from 'jquery'
// polyfill
import Promise from 'es6-promise'
import 'es6-promise/auto'
import 'babel-polyfill'

// 使 IE 支持 Promise
if (!window.Promise) {
  Promise.polyfill()
}

// jquery
window.$ = $
window.jQuery = $
export default $
