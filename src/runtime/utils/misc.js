var storage = window.localStorage

// expiration 毫秒为单位
export const setStorageExpirable = (key, value, expireTimeMS) => {
  storage.setItem(key, value)
  storage.setItem(`${key}@set_date`, Date.now())
  storage.setItem(`${key}@expire`, expireTimeMS)
}

export const getStorageExpirable = key => {
  let value = storage.getItem(key)
  let now = Date.now()
  let date = storage.getItem(`${key}@set_date`)
  let expire = storage.getItem(`${key}@expire`)
  if (now - date < expire) {
    return value
  }
  storage.removeItem(key)
  return null
}

export const random = (max, min) => {
  if (typeof max !== 'number') {
    return Math.random()
  } else if (typeof min !== 'number') {
    min = 0
  }
  return Math.random() * (max - min) + min
}
export const randomColor = _ => {
  var r = this.random(256) | 0
  var g = this.random(256) | 0
  var b = this.random(256) | 0
  return 'rgb(' + r + ',' + g + ',' + b + ')'
}

export const scrollTo = id => {
  var target = document.querySelector(id).offsetTop
  var scrollT = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset
  let timer
  if (scrollT > target) {
    timer = setInterval(_ => {
      var scrollT = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop
      var step = Math.floor(-scrollT / 6)
      window.pageYOffset = document.documentElement.scrollTop = document.body.scrollTop = step + scrollT
      if (scrollT <= target) {
        window.pageYOffset = document.body.scrollTop = document.documentElement.scrollTop = target
        clearTimeout(timer)
      }
    }, 30)
  } else if (scrollT === 0) {
    timer = setInterval(_ => {
      var scrollT = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset
      var step = Math.floor(300 / 3 * 0.7)
      window.pageYOffset = document.body.scrollTop = document.documentElement.scrollTop = step + scrollT
      console.log(scrollT)
      if (scrollT >= target) {
        window.pageYOffset = document.body.scrollTop = document.documentElement.scrollTop = target
        clearTimeout(timer)
      }
    }, 30)
  } else if (scrollT < target) {
    timer = setInterval(_ => {
      var scrollT = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset
      var step = Math.floor(scrollT / 6)
      window.pageYOffset = document.body.scrollTop = document.documentElement.scrollTop = step + scrollT
      if (scrollT >= target) {
        window.pageYOffset = document.body.scrollTop = document.documentElement.scrollTop = target
        clearTimeout(timer)
      }
    }, 30)
  } else if (target === scrollT) {
    return false
  }
}

export const dateFormatter = (value, format) => {
  // 使用 {{ date | date 'yyyy-MM-dd hh:mm:ss' }}

  value = new Date(value)
  var o = {
    'M+': value.getMonth() + 1, // 月份
    'd+': value.getDate(), // 日
    'h+': value.getHours(), // 小时
    'm+': value.getMinutes(), // 分
    's+': value.getSeconds() // 秒
  }

  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (value.getFullYear() + '').substr(4 - RegExp.$1.length))
  }

  for (let k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k].length))))
    }
  }

  return format
}
