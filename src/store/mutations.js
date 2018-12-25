import {
  SHOW_IMAGE_PAGE,
  HIDE_IMAGE_PAGE,
  SWITCH_SECTION,
  SWITCH_CATEGORY,
  SWITCH_ARTICLE,
  SAVE_MENU
} from './mutations-type'

export default {

  // 切换图片
  [SHOW_IMAGE_PAGE] (state, imageUrl) {
    state.imagePage.currentImage = imageUrl
    state.imagePage.isShow = true
  },

  // 关闭显示图片页面
  [HIDE_IMAGE_PAGE] (state) {
    state.imagePage.isShow = false
  },

  // 切换模块
  [SWITCH_SECTION] (state, section = '') {
    state.currentSection = section
  },

  // 切换标签
  [SWITCH_CATEGORY] (state, category = '') {
    state.currentCategory = category
  },

  // 切换文章
  [SWITCH_ARTICLE] (state, article = '') {
    state.currentArticle = article
  },

  // 保存菜单
  [SAVE_MENU] (state, headerMenuItem) {
    state.headerMenuItem = headerMenuItem
  }
}
