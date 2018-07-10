<template lang="html">
  <header>
    <div id="wrapper-header">
      <div id="searchPage" v-show="searchBar">
        <div class="block" @click="searchBar = false">

        </div>
        <div id="search-layout">
          <input id="search-input" value="" type="text" placeholder="Search Something">
          <div id="search-line"></div>
        </div>
      </div>
      <div id="main-menu">
        <router-link to="/">
          <div class="main-menu-logo">
            <img src="../assets/img/logo/logo.png" alt="">
            <img src="../assets/img/logo/学院.png" alt="">
          </div>
        </router-link>
        <div class="main-menu-bar">
          <div class="main-menu-top">
            <div class="weather" style="margin: 5px 5px 5px 0px">
              <iframe scrolling="no" frameborder="0" allowtransparency="true" src="http://i.tianqi.com/index.php?c=code&id=34&icon=1&num=3"></iframe>
            </div>
            <ul>
              <li><i class="iconfont icon-scan"></i><img src="../assets/img/scan/scan-code.jpg"  alt=""></li>
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
                    <img src="../assets/img/220.jpg" alt="">
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
      <el-carousel trigger="click" indicator-position="inside">
        <el-carousel-item v-for="(errand,index) in errands" :key="index" v-bind:style="{backgroundImage: errand.backgroundUrl}">
            <div class="errands-introduction">
              <h3>{{errand.title}}</h3>
              <p>{{errand.introduction}}</p>
            </div>
        </el-carousel-item>
      </el-carousel>
      <article class="quotes">
        <div>
          <p>
            <span>“计算机天生就是用来解决以前没有过的问题的。”</span>
            <span>Computers are designed to solve problems that have never been before.</span>
            <span>-比尔盖茨（Bill Gates）</span>
          </p>
          <button @click="readMore">Read more <i class="iconfont icon-cloud"></i> </button>
        </div>
      </article>
    </div>
  </header>
</template>

<script>
import $ from '../assets/jquery-vender'
import '@css/header/main-menu.css'
import '@css/header/header-carousel.css'
import '@css/header/quotes.css'
import '@css/header/searchPage.css'
export default {
  data () {
    return {
      searchBar: false
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
    changeTab (supIndex, subIndex) {
      this.$store.state.page.currentPageSup = supIndex
      this.$store.state.page.currentNav = 0
      console.log(subIndex)
      if (subIndex !== undefined) {
        console.log('abc')
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
      $('html,body').animate({scrollTop: 0.95 * document.documentElement.clientHeight}, 800)
    },
    showSearch () {
      this.searchBar = true
    }
  }
}
</script>

<style>
/*responsive 1366*/
@media (min-width: 1200px) and (max-width: 1366px) {
  .material-dialog{
    font-size: 14.5px;
  }
  #main-menu{
    min-width: 900px;
    width: 900px;
    max-height:90px;
    height: 90px;
    margin-left: -450px;
  }
  #main-menu .main-menu-logo{
    width: 19%;
  }
  #main-menu .main-menu-logo img{
    width: 152px;
    height: 44.625px;
  }
  #main-menu .main-menu-logo img:first-child{
    margin:6px 0 0 12.5px;
  }
  #main-menu .main-menu-logo img:last-child{
    margin:-5px 0 0 10px;
  }
  #main-menu .main-menu-bar{
    width: 81%;
  }
  #main-menu .main-menu-top .weather iframe{
    padding:0;
  }
  #main-menu .main-menu-top ul li i{
    line-height: 35px;
  }
  #main-menu .main-menu-top li:first-child img{
    width: 90px;
    height: 90px;
  }
  #main-menu .main-menu-bottom>ul {
    line-height: 58.5px;
  }
  .main-menu-bottom>ul>li{
    font-size: 14.1px;
  }
  .main-menu-bottom>ul>li>a{
    padding: 0px 7.5px;
  }
  .second-nav-menu{
    width: 390.5px;
    padding: 11px 10px 5px 11px;
    font-size: 14.5px;
  }
  .second-nav-menu-left p{
    font-size: 13px;
  }
  .second-nav-menu-left img{
    width: 180px;
    height: 162px;
  }
  .second-nav-menu-left h3{
    margin:-8px 0 10px;
    height:42px;
  }
  .second-nav-menu-right{
    width: 45%;
  }
  .second-nav-menu-right h3{
    height:40px;
  }
  .second-nav-menu-right ul{
    line-height: 34px;
  }
  header .errands-introduction{
    bottom: 70px;
    line-height: 23px;
    padding:3px;
    padding-top: 3px;
    font-size: 11.5px;
    min-width: 332px;
    max-width: 32%;
  }
  header .errands-introduction h3{
    font-size: 1.17rem;
  }
  header .errands-introduction p{
    margin-bottom: 5px;
  }
  .quotes div{
    width: 75%;
  }
  .quotes div p{
    height:calc(100% - (18px));
    margin-top:12px;
    font-size:13px;
  }
  .quotes button{

  }
  .quotes div p{
    width: 66%;
  }
  .second-nav-menu-right ul li i{
    font-size: 18px;
  }
}
</style>
