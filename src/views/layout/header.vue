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
            <li><a href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&amp;email=AWVkcSxicnVBZmJ0L2RldC9ibw" target="_blank"><i class="iconfont icon-email"></i></a></li>
            <!-- <li><a href="http://10.5.1.246:8080/clock/" target="_blank"><i class="iconfont icon-alarm"></i></a></li> -->
            <!-- <li><i class="iconfont icon-search" @click="searchBar = true"></i></li> -->
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
            <li><a href="http://10.5.1.246:8080/clock/" target="_blank_">考试时钟</a></li>
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
          <div
            @click="jumpToArticle(errand.link)"
            class="errands-introduction"
          >
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
      errands: []
    }
  },
  computed: mapState([
    // errands: state => state.testData.errands,
    'headerMenuItem',
    'currentSection',
    'currentCategory',
    'currentArticle'
  ]),
  mounted () {
    getAcademyData('banners')
      .then(errands => {
        errands = errands.data.results
        this.errands = errands.map(item => {
          return {
            title: item.title,
            imageUrl: `https://schooltest.zunway.pw/media/${item.image_url}` || null,
            introduction: item.brief,
            link: item.link
          }
        })
      })
  },
  methods: {
    // 改变菜单中 当前页面的tab的样式
    changePage (sectionIndex = '', categoryIndex = 0) {
      $('html, body').animate({scrollTop: document.documentElement.clientHeight}, 800)
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
      this.switchArticle()
    },
    readMore () {
      console.log(document.documentElement.clientHeight)
      $('html, body').animate({scrollTop: document.documentElement.clientHeight}, 800)
    },
    jumpToArticle (path) {
      if (path) {
        let l = document.createElement('a')
        l.href = path
        this.$router.push({
          path: l.pathname
        })
      }
    },
    search () {
      return 'do something'
      // TODO:
    },
    ...mapMutations([
      'switchSection',
      'switchCategory',
      'switchArticle',
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
