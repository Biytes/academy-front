<template lang="html">
  <div :class="['layout-header', isPC ? '' : 'mobile']">

    <!-- 搜索页 -->
    <section
      class="search-page"
      v-show="searchBar"
    >
      <div class="block" @click="searchBar = false" />
      <div class="search-layout">
        <input
          class="search-input"
          v-model="searchKey"
          type="text"
          placeholder="Search Something"
          @keyup.enter="search"
        >
        <div class="search-line"></div>
      </div>
    </section>

    <!-- 主菜单 -->
    <section class="main-menu">
      <router-link to="/">
        <div class="main-menu-logo">
          <img src="@img/logo/logo.png" alt="">
          <img src="@img/logo/学院.png" alt="">
        </div>
      </router-link>
      <div class="main-menu-bar">
        <div class="main-menu-top">
          <div class="weather">
            <iframe
              scrolling="no"
              frameborder="0"
              allowtransparency="true"
              src="http://i.tianqi.com/index.php?c=code&id=34&icon=1&num=3"
            />
          </div>
          <ul>
            <li>
              <i class="iconfont icon-scan"></i>
              <img src="@img/scan/scan-code.jpg"  alt="">
            </li>
            <li>
              <a
                href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&amp;email=AWVkcSxicnVBZmJ0L2RldC9ibw"
                target="_blank"
              >
                <i class="iconfont icon-email"></i>
              </a>
            </li>
            <!-- <li><a href="http://10.5.1.246:8080/clock/" target="_blank"><i class="iconfont icon-alarm"></i></a></li> -->
            <!-- <li><i class="iconfont icon-search" @click="searchBar = true"></i></li> -->
          </ul>
        </div>
        <div class="main-menu-bottom">
          <ul>
            <li
              v-for="(sectionItem, sectionIndex) in headerMenuItem"
              :key="sectionItem.id" @click.stop="changePage(sectionIndex)"
              :class="{'current-page': currentSection.index === sectionIndex}"
            >
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
                    <li
                      v-for="(categoryItem, categoryIndex) in sectionItem.subMenuItem"
                      :key="categoryItem.id" @click.stop="changePage(sectionIndex, categoryIndex)"
                    >
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
    </section>

    <!-- 轮播图 -->
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

    <!-- quotes -->
    <section class="quotes">
      <el-row class="quotes-content">
        <el-col :span="14" align="left" class="quotes-content-container">
            <!-- <span class="quotes-content__cn">“计算机天生就是用来解决以前没有过的问题的。”</span> -->
            <span class="quotes-content__en">Computers are designed to solve problems that have never been before.</span>
            <span class="quotes-content__writer">-比尔盖茨（Bill Gates）</span>
        </el-col>
        <el-col :span="10" align="center" class="quotes-content-button">
          <button @click="readMore">Read more <i class="iconfont icon-cloud"></i> </button>
          <!-- TODO: 重写滑动function -->
        </el-col>
      </el-row>
    </section>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { getAcademyData } from '@api/index'
export default {
  data () {
    return {
      isPC: false,
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
    this.deviceHeight = window.screen.height
    this.isPC = this.isDevicePC()
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
    isDevicePC () {
      var userAgentInfo = navigator.userAgent.toLowerCase()
      var Agents = ['android', 'iphone', 'symbianOS', 'windows phone', 'ipad', 'ipod']
      var flag = true
      for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break }
      }
      return flag
    },
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
.layout-header {
  .main-menu {
    position: absolute;
    max-height: 120px;
    min-width: 1200px;
    margin-left: -600px;
    margin-top: 10px;
    width: 60%;
    height: 120px;
    left: 50%;
    line-height: normal;
    z-index: 3;
    background-color: rgba(92, 91, 105, 0.55);

    &-logo {
      height: 100%;
      float: left;
      width: 20%;
      vertical-align: top;
      align-items: center;
      background-color: #293d91;

      img {
        cursor: pointer;
        width: 204px;
        height: 59.5px;

        &:first-child {
          margin: 6px 0 0 15px;
        }

        &:last-child {
          margin: -5px 0 0 15px;
        }
      }
    }

    &-bar {
      float: left;
      width: 80%;
      height: 100%;
    }

    /* main-menu-top */
    &-top {
      width: 100%;
      height: 35%;
      position: relative;
      .weather {
        position: absolute;
        right: 167px;
        margin: 5px 5px 5px 0px;
        iframe {
          padding: 5px;
          width: 235px;
          height: 24px;
          transition: background 0.33s;
        }

        &:hover iframe {
          background-color: rgba(173, 173, 181, 0.8);
        }
      }

      ul {
        position: absolute;
        height: 100%;
        right: 0px;
        background-color: rgba(78, 138, 217, 0.71);
        li {
          float: left;
          height: 100%;
          padding: 0 9px;
          transition: background 0.33s;

          &:hover {
            background-color: rgba(78, 138, 217, 0.9);
            i {
              color: white;
            }
          }

          a {
            text-decoration: none;

            &:visited, &:link {
              color: black;
            }
          }

          i {
            font-size: 24px;
            line-height: 42px;
            cursor: pointer;
            transition: color 0.33s;
          }

          &:first-child {
            position: relative;
            img {
              display: none;
              position: absolute;
              border-radius: 8px;
              left: -10px;
              z-index: 5;
              width:120px;
              height:120px;
            }

            &:hover img {
              display: block;
            }
          }
        }
      }
    }

    /*main-menu-bottom*/

    &-bottom {
      width: 100%;
      height: 65%;
      background: rgba(41, 62, 145, 0.651);
      & > ul {
        width: 100%;
        height: 100%;
        margin: auto;
        line-height: 78px;

        & > li {
          float: left;
          height: 100%;
          font-size: 15px;
          box-sizing: border-box;
          width: 10%;
          position: relative;
          transition: all 0.33s;

          &:hover {
            background-color: rgba(26, 65, 133, 0.6);

            & > a {
              border-bottom: 1.5px solid rgb(246, 68, 2);

              & > i {
                opacity: 0;
              }
            }

            & > .second-nav-menu {
              display: block;
            }
          }

          & > a {
            display: block;
            color: white;
            text-align: center;
            height: 100%;
            box-sizing: border-box;
            padding: 0 5.5px;
            text-decoration: none;

            & > i {
              font-size: 14px;
              color: #bbb;
              transition: opacity 0.5s;
            }
          }

          .second-nav-menu {
            position: absolute;
            right: 0;
            padding: 10px;
            width: 250px;
            height: auto;
            z-index: 5;
            background-color: rgba(26, 65, 133, 0.8);
            display: none;

            &-left {
              float: left;
              width: 45%;
              img {
                border-radius: 8px;
                width:280px;
                height:220px;
              }
              h3 {
                color: #fff;
                font-size: 18px;
                height: 50px;
                font-weight: bold;
                margin: 0 0 10px;
                width: 200px;
                padding-bottom: 5px;
                border-bottom: 1px solid #f1bd57;
              }

              p {
                color: white;
                font-size: 15px;
                margin-top: 10px;
                line-height: 15px;
                margin: 0;
                width: 100%;
              }
            }

            &-right {
              width: 100%;
              float: right;
              h3 {
                color: #fff;
                letter-spacing: 1px;
                font-size: 18px;
                height:55px;
                margin: 0 0 10px;
              }

              ul {
                line-height: 45px;
                li {
                  display: block;
                  width: 100%;
                  text-indent: 10px;
                  position: relative;
                  transition: background 0.33s;

                  &:hover {
                    background-color: rgb(55, 103, 249);
                    /*待定*/
                    a {
                      display: block;
                      color: rgb(241, 181, 64);
                      /*待定*/
                    }

                    i {
                      transform: translateX(-8px);
                    }
                  }

                  p {
                    display: none;
                  }

                  a {
                    // color: rgba(205, 149, 39, 0.98);
                    color: #fff;
                    font-size: 14px;
                    font-weight: 500;
                    letter-spacing: 0.5px;
                  }

                  i {
                    top: 0;
                    position: absolute;
                    right: 0px;
                    font-size: 22px;
                    color: rgba(255, 250, 250, 0.73);
                    transition: transform 1s;
                  }
                }
              }

            }
          }

          &:first-child {
            .second-nav-menu {
              left: 0px;
            }

          }
        }
      }

      /*当前页面*/
      .current-page{
        background-color: rgba(26, 65, 133, 0.6);
        & > a{
          border-bottom: 1.5px solid rgb(246, 68, 2);
          & > i{
            opacity: 0;
          }
        }
      }
    }
  }

  .header-carousel {
    .el-carousel__container {
      height: 87vh;
      min-height: 545px;
      min-width: 900px;
    }

    // carousel 导航的位置
    .el-carousel__indicators {
      transform: translateX(-50%);
      line-height: 20px
    }

    .el-carousel__item{
      -moz-background-size: 100% 100%;
      background-size: 100% 100%
    }

    /*errands-introduction*/
    // 介绍那一栏的位置
    .errands-introduction {
      position: absolute;
      bottom: 100px;
      left: 100px;
      line-height: 25px;
      padding: 6px;
      min-width: 500px;
      max-width: 34%;
      border-left: 4px solid rgba(255, 255, 255, 0.7);
      background-color:  rgba(0, 0, 0, 0.4);
      transition: all 0.33s;

      &:hover {
        background-color: rgba(26, 65, 133, 0.62);
      }

      h3 {
        margin: 10px;
        color: white;
      }

      p {
        margin: 10px;
        padding: 5px;
        text-indent: 20px;
        word-break: keep-all;
        white-space: normal;
        color: white
      }
    }
  }

  .quotes {
    height: 13vh;
    display: block;
    min-height: 82px;
    width: 100%;
    line-height: 20px;
    background-color: #293D91;
    .quotes-content {
      width: 80%;
      min-width: 930px;
      margin: 0 auto;
      height: 100%;
      .quotes-content-container {
        padding: 1.4vh 0 ;
        height: 100%;
      }
      span {
        display: block;
        white-space: nowrap;
        height: 2vh;
        color: #fff;
        font-size: 19px;
        padding: 1vh;
      }
      &__cn {

      }
      &__en {
        text-indent: 10px;
      }
      &__writer {
        text-align: right;
      }

      &-button {
        line-height: 13vh;
        button {
          background-color: grey;
          padding: 1em 2em;
          cursor: pointer;
          border-radius: 4px;
          color: #fff;
          font-size: 17px;
          border: none;
          text-transform: uppercase;
          transition: background 0.5s;
          &:hover {
            background-color: #fda84b;
          }
        }
      }
    }
  }

  .search-page {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(28, 27, 27, 0.77);
    z-index: 11;
    .search-layout{
      width: 48%;
      margin: 40vh auto;
      text-align: center;
    }
    .block{
      z-index: -1;
      position: fixed;
      width: 100%;
      height: 100%;
    }
    .search-input{
      border: none;
      padding: 0 3%;
      width: 100%;
      background-color: inherit;
      outline: none;
      color: #fff;
      font-size: 3em;
    }
    .search-line{
      width: 100%;
      height: 8px;
      margin: 20px auto 5px auto;
      background-color: rgb(15, 111, 237);
    }

  }
}

@media only screen and (max-width : 1400px) {
  .layout-header {
    .main-menu {
      max-height: 100px;
      min-width: 1000px;
      margin-left: -500px;

      &-logo {
        img {
          width: 170px;
          height: 49.583px;
        }

      }
      /* main-menu-top */
      &-top {
        .weather {
          right: 136px;
          margin: 0;
          iframe {
            padding: 5px;
          }
        }

        ul {
          li {
            padding: 0 6px;
            i {
              font-size: 22px;
              line-height: 35px;
            }

            &:first-child {
              img {
                width:100px;
                height:100px;
              }
            }
          }
        }
      }

      /*main-menu-bottom*/

      &-bottom {
        & > ul {
          line-height: 65px;
          & > li {
            font-size: 13px;

            & > a {
              padding: 0 3.5px;
            }

            .second-nav-menu {

              &-left {
                padding: 5px;
                img {
                  border-radius: 8px;
                  height:140px;
                }
                h3 {
                  font-size: 17px;
                  height: 20px;
                  line-height: 20px;
                }

                p {
                  line-height: 16px;
                }
              }

              &-right {
                h3 {
                  font-size: 16px;
                  height:45px;
                }

              }
            }
          }
        }
      }
    }

    .header-carousel {
      /*errands-introduction*/

      // 介绍那一栏的位置
      .errands-introduction {
        bottom: 50px;
        left: 50px;
        line-height: 22px;
        padding: 3px;

        h3 {
          margin: 8px;
          font-size: 17px;
        }

        p {
          margin: 5px;
          font-size: 15px;
        }
      }
    }

    .quotes {
      line-height: 18px;
      .quotes-content {
        span {
          display: block;
          color: #fff;
          font-size: 15px;
        }

        &-button {
          button {
            padding: 0.8em 1.6em;
            font-size: 15px;
          }
        }
      }
    }
  }

}

@media only screen and (max-width : 1200px) {
  .layout-header {
    position: relative;

    .header-carousel {
      /*errands-introduction*/
      min-width: 1200px;
      .el-carousel__container {
        height: 87vh;
        min-height: 545px;
        min-width: 900px;
      }

      // 介绍那一栏的位置
      .errands-introduction {
        bottom: 50px;
        left: 50px;
        line-height: 20px;
        padding: 2px;

        h3 {
          margin: 4px;
          font-size: 16px;
        }

        p {
          margin: 3px;
          font-size: 14px;
        }
      }
    }

    .main-menu {
      max-height: 90px;
      min-width: 900px;
      margin-left: -450px;

      &-logo {
        width: 18%;
        img {
          width: 137.7px;
          height: 42.2px;
        }
      }

      &-bar {
        width: 82%;
      }
      /* main-menu-top */
      &-top {
        height: 35%;
        .weather {
          right: 130px;
          margin: 3px;
          iframe {
            padding: 1px 0 1px 5px;
          }
        }

        ul {
          li {
            padding: 0 5px;
            i {
              font-size: 22px;
              line-height: 34px;
            }

            &:first-child {
              img {
                width:90px;
                height:90px;
              }
            }
          }
        }
      }

      /*main-menu-bottom*/

      &-bottom {
        & > ul {
          line-height: 58.5px;
          & > li {
            font-size: 13px;

            & > a {
              padding: 0 1.5px;
              & > i {
                font-size: 13px;
              }
            }

            .second-nav-menu {

              &-left {
                width: 200px;

                h3 {
                  font-size: 16px;
                }

                p {
                  line-height: 16px;
                  font-size: 14px;
                }
              }
            }
          }
        }
      }
    }

    .quotes {
      line-height: 18px;
      min-width: 1200px;
      .quotes-content {
        span {
          display: block;
          color: #fff;
          font-size: 15px;
        }

        &-button {
          button {
            padding: 0.8em 1.4em;
            font-size: 15px;
          }
        }
      }
    }
  }
}

/* Small Devices, Tablets */
@media only screen and (max-width : 768px) {
  .layout-header {
    .quotes {
      // height: 13vh;
      display: block;
      min-height: 60px;
      width: 100%;
      line-height: 1.5;
      background-color: #293D91;
    }

    .header-carousel {
      .el-carousel__container {
        height: auto;
        min-height: 545px;
        min-width: 900px;
      }
    }
  }
}

@media only screen and (max-width : 480px) {
  .layout-header {

    .header-carousel {
      .el-carousel__container {
        height: auto;
        // height: 50vh;
        min-height: unset;
        min-width: 900px;
      }
    }

    .quotes {
      // height: 13vh;
      display: block;
      min-height: 60px;
      width: 100%;
      line-height: 1.5;
      background-color: #293D91;
    }
  }
}

@import '@css/header/mobile.scss';
</style>
