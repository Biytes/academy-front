<template lang="html">
  <div class="wrapper-header">
    <div id="searchPage" v-show="searchBar">
      <div class="block" @click="searchBar = false">

      </div>
      <div id="search-layout">
        <input id="search-input" v-model="searchKey" type="text" placeholder="Search Something" @keyup.enter="search">
        <div id="search-line"></div>
      </div>
    </div>
    <div class="main-menu">
      <router-link to="/">
        <div class="main-menu-logo">
          <img src="@img/logo/logo.png" alt="">
          <img src="@img/logo/学院.png" alt="">
        </div>
      </router-link>
      <div class="main-menu-bar">
        <div class="main-menu-top">
          <div class="weather">
            <iframe scrolling="no" frameborder="0" allowtransparency="true" src="http://i.tianqi.com/index.php?c=code&id=34&icon=1&num=3"></iframe>
          </div>
          <ul>
            <li><i class="iconfont icon-scan"></i><img src="@img/scan/scan-code.jpg"  alt=""></li>
            <li><a href="#" target="_blank"><i class="iconfont icon-email"></i></a></li>
            <li><a href="http://10.5.1.246:8080/clock/" target="_blank"><i class="iconfont icon-alarm"></i></a></li>
            <li><i class="iconfont icon-search" @click="searchBar = true"></i></li>
          </ul>
        </div>
        <div class="main-menu-bottom">
          <ul>
            <li v-for="(sectionItem, sectionIndex) in headerMenuItem"
                :key="sectionItem.id" @click.stop="changePage(sectionIndex)"
                :class="{'current-page': currentSection.index === sectionIndex}">
              <router-link :to="sectionItem.path" tag="a">{{ sectionItem.title }}
                <i v-if="sectionItem.subMenuItem" class="iconfont icon-down"></i>
              </router-link>
              <div class="second-nav-menu" v-if="sectionItem.subMenuItem">
                <!-- <div class="second-nav-menu-left">
                  <img src="@img/220.jpg" alt="">
                  <div>
                    <h3>链接简介</h3>
                    <p></p>
                  </div>
                </div> -->
                <div class="second-nav-menu-right">
                  <!-- <h3>{{ item.menuItem }}</h3> -->
                  <ul>
                    <li v-for="(categoryItem, categoryIndex) in sectionItem.subMenuItem"
                        :key="categoryItem.id" @click.stop="changePage(sectionIndex, categoryIndex)">
                      <router-link :to="categoryItem.path" tag="a">{{ categoryItem.title }}</router-link><i class="iconfont icon-search"></i>
                      <!-- <p>{{ categoryItem.brief }}</p> -->
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <el-carousel trigger="click"
                  indicator-position="inside"
                  class="header-carousel"
                  :interval="10000">
      <el-carousel-item v-for="(errand,index) in errands"
                        :key="index"
                        :style="{backgroundImage: 'url(' + errand.imageUrl + ')'}">
          <div class="errands-introduction">
            <h3>{{errand.title}}</h3>
            <p>{{errand.introduction}}</p>
          </div>
      </el-carousel-item>
    </el-carousel>
    <article class="quotes">
      <el-row class="quotes-content">
        <el-col :span="14" align="left" class="quotes-content-container">
            <span class="quotes-content__cn">“计算机天生就是用来解决以前没有过的问题的。”</span>
            <span class="quotes-content__en">Computers are designed to solve problems that have never been before.</span>
            <span class="quotes-content__writer">-比尔盖茨（Bill Gates）</span>
        </el-col>
        <el-col :span="10" align="center" class="quotes-content-button">
          <button @click="readMore">Read more <i class="iconfont icon-cloud"></i> </button>
          <!-- TODO: 重写滑动function -->
        </el-col>
      </el-row>
    </article>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { getAcademyData } from '@api/index'
export default {
  data () {
    return {
      searchBar: false,
      searchKey: '',
      allCategory: [],
      errands: []
    }
  },
  computed: mapState({
    headerMenuItemOrder: state => state.headerMenuItemOrder,
    // errands: state => state.testData.errands,
    headerMenuItem: state => state.headerMenuItem,
    currentSection: state => state.currentSection,
    currentCategory: state => state.currentCategory,
    currentArticle: state => state.currentArticle
  }),
  mounted () {
    let requests = []
    requests.push(getAcademyData('banners'))
    requests.push(getAcademyData('category'))
    Promise.all(requests)
      .then(([errands, allCategory]) => {
        errands = errands.data.results
        this.errands = errands.map(item => {
          return {
            title: item.title,
            imageUrl: `https://schooltest.zunway.pw/media/${item.image_url}` || null,
            introduction: item.brief
          }
        })
        console.log(allCategory)
        this.createMenu(allCategory.data)
      })
  },
  methods: {
    createMenu (allCategory) {
      let headerMenuItemOrder = this.headerMenuItemOrder
      let filteredMenu = allCategory.filter(item => headerMenuItemOrder.indexOf(item.id) >= 0)
      let orderedMenu = []
      for (let i of headerMenuItemOrder) {
        let index = filteredMenu.findIndex(item => item.id === i)
        orderedMenu.push(filteredMenu[index])
      }
      let complishedMenu = orderedMenu.map(item => {
        let section = item.name
        let subMenuItem = allCategory.filter(category => category.section === section)
        if (subMenuItem.length) {
          subMenuItem = subMenuItem.map(menuItem => {
            return {
              id: menuItem.id,
              title: menuItem.title,
              name: menuItem.name,
              path: `/${section}/${menuItem.name}`
            }
          })
        }
        return {
          id: item.id,
          title: item.title,
          name: item.name,
          path: subMenuItem.length ? `${subMenuItem[0].path}` : `/${item.name}`,
          subMenuItem: subMenuItem.length && item.id !== 8 ? subMenuItem : null
        }
      })
      this.saveMenu(complishedMenu)
      console.log(complishedMenu)
    },
    // 改变菜单中 当前页面的tab的样式
    changePage (sectionIndex = '', categoryIndex = 0) {
      let section = ''
      let category = ''
      if (sectionIndex >= 0) {
        section = {
          index: sectionIndex,
          title: this.headerMenuItem[sectionIndex].title,
          path: this.headerMenuItem[sectionIndex].path
        }
        this.switchSection(section)
      }
      if (categoryIndex >= 0 && this.headerMenuItem[sectionIndex].subMenuItem) {
        category = {
          index: categoryIndex,
          title: this.headerMenuItem[sectionIndex].subMenuItem[categoryIndex].title,
          path: this.headerMenuItem[sectionIndex].subMenuItem[categoryIndex].path
        }
        this.switchCategory(category)
      } else {
        this.switchCategory()
      }
    },
    readMore () {
      console.log(document.documentElement.clientHeight)
      $('html, body').animate({scrollTop: 0.95 * document.documentElement.clientHeight}, 800)
    },
    search () {
      return 'do something'
      // TODO:
    },
    ...mapMutations([
      'switchSection',
      'switchCategory',
      'saveMenu'
    ])
  }
}
</script>

<style lang="scss">
@import '@css/header/quotes.scss';
@import '@css/header/main-menu.scss';
@import '@css/header/header-carousel.scss';
@import '@css/header/searchPage.scss';
</style>
