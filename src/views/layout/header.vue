<template lang="html">
  <header>
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
              <li><i class="iconfont icon-search" @click="showSearch"></i></li>
            </ul>
          </div>
          <div class="main-menu-bottom">
            <ul>
              <li v-for="(item, supIndex) in headerMenuItem" :key="supIndex" @click="changeTab(supIndex)" :class="{'current-page': currentPageSup == supIndex}">
                <router-link :to="item.path" tag="a">{{item.menuItem}}<i v-if="item.subMenuItem" class="iconfont icon-down"></i></router-link>
                <div class="second-nav-menu" v-if="item.subMenuItem">
                  <div class="second-nav-menu-left">
                    <img src="@img/220.jpg" alt="">
                    <div>
                      <h3>链接简介</h3>
                      <p></p>
                    </div>
                  </div>
                  <div class="second-nav-menu-right">
                    <h3>Program</h3>
                    <ul>
                      <li v-for="(subItem, subIndex) in item.subMenuItem" :key="subIndex" @click="changeTab(supIndex, subIndex)">
                        <router-link :to="subItem.path" tag="a">{{subItem.menuItem}}</router-link><i class="iconfont icon-search"></i>
                        <p>{{subItem.brief}}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <el-carousel trigger="click" indicator-position="inside" class="header-carousel">
        <el-carousel-item v-for="(errand,index) in errands" :key="index" v-bind:style="{backgroundImage: 'url(' + errand.backgroundUrl + ')'}">
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
          </el-col>
        </el-row>
      </article>
    </div>
  </header>
</template>

<script>
import '@css/header/searchPage.css'

export default {
  data () {
    return {
      searchBar: false,
      searchKey: ''
    }
  },
  computed: {
    errands () {
      return this.$store.state.testData.errands
    },
    headerMenuItem () {
      return this.$store.state.testData.headerMenuItem
    },
    currentPageSup () {
      return this.$store.state.page.currentPageSup
    }
  },
  mounted () {
    $('.second-nav-menu-right ul li').on('mouseover', function () {
      let hoverText = $(this).find('p').text()
      $(this).parents('.second-nav-menu').children('.second-nav-menu-left').find('p').text(hoverText)
      if (event.stopPropagation) {
        // 针对 Mozilla 和 Opera
        event.stopPropagation()
      } else if (window.event) {
        // 针对 IE
        window.event.cancelBubble = true
      }
    })
  },
  methods: {

    // 改变菜单中 当前页面的tab的样式
    changeTab (supIndex, subIndex) {
      this.$store.state.page.currentPageSup = supIndex
      this.$store.state.page.currentNav = 0
      console.log(subIndex)
      if (subIndex !== undefined) {
        this.$store.state.page.currentNav = subIndex
      }
      if (event.stopPropagation) {
        // 针对 Mozilla 和 Opera
        event.stopPropagation()
      } else if (window.event) {
        // 针对 IE
        window.event.cancelBubble = true
      }
    },
    menuChangeText (e) {
    },
    readMore () {
      console.log(document.documentElement.clientHeight)
      $('html, body').animate({scrollTop: 0.95 * document.documentElement.clientHeight}, 800)
    },
    showSearch () {
      this.searchBar = true
    },
    search () {
      return 'do something'
    }
  }
}
</script>

<style lang="scss">
@import '@css/header/quotes.scss';
@import '@css/header/main-menu.scss';
@import '@css/header/header-carousel.scss';
</style>
