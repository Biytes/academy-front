<template lang="html">
  <div :class="[isShowScrollHeader ? 'show-scroll-header' : '', 'scroll-header']">
    <el-row class="scroll-header-container">
      <el-col :span="5" align="left" class="scroll-header-logo">
        <router-link to="/" tag="a"><img src="@img/logo/学院.png" alt=""></router-link>
      </el-col>
      <el-col :span="19"
              align="right">
        <ul class="scroll-menu">
          <li v-for="(sectionItem, sectionIndex) in scrollHeaderItem"
              :key="sectionItem.id"
              :class="{ 'current-page': currentSection.index === sectionIndex }"
              @click="changePage(sectionIndex)">
              <router-link tag="a" :to="sectionItem.path">{{ sectionItem.title }}</router-link>

              <div
                v-if="sectionItem.subMenuItem"
                class="scroll-sub-menu"
              >
                <li v-for="(categoryItem, categoryIndex) in sectionItem.subMenuItem"
                    :key="categoryIndex"
                    @click="changePage(sectionIndex, categoryIndex)">
                    <router-link :to="categoryItem.path"
                                  tag="a"
                                  :class="{ 'current-page': currentCategory.index === categoryIndex && currentSection.index === sectionIndex }">{{ categoryItem.title }}</router-link>
                </li>
              </div>
          </li>

        </ul>
        <!-- TODO: menu按钮 -->
        <!-- <i class="iconfont icon-menu"></i> -->
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  data () {
    return {
      isShowScrollHeader: false
    }
  },
  computed: {
    ...mapState({
      scrollHeaderItem: state => state.headerMenuItem,
      currentSection: state => state.currentSection,
      currentCategory: state => state.currentCategory,
      currentArticle: state => state.currentArticle
    })
  },
  methods: {
    handleScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      let targetScrollTop = document.documentElement.clientHeight - 10
      this.isShowScrollHeader = scrollTop >= targetScrollTop
    },
    // 改变菜单中 当前页面的tab的样式
    changePage (sectionIndex = '', categoryIndex = 0) {
      let section = ''
      let category = ''
      console.log(sectionIndex, categoryIndex)
      if (sectionIndex >= 0) {
        section = {
          index: sectionIndex,
          title: this.scrollHeaderItem[sectionIndex].title,
          path: this.scrollHeaderItem[sectionIndex].path
        }
        this.switchSection(section)
      }
      if (categoryIndex >= 0 && this.scrollHeaderItem[sectionIndex].subMenuItem) {
        category = {
          index: categoryIndex,
          title: this.scrollHeaderItem[sectionIndex].subMenuItem[categoryIndex].title,
          path: this.scrollHeaderItem[sectionIndex].subMenuItem[categoryIndex].path
        }
        this.switchCategory(category)
      } else {
        this.switchCategory()
      }
      this.switchArticle()
    },
    ...mapMutations([
      'switchSection',
      'switchCategory',
      'switchArticle'
    ])
  }
}
</script>

<style lang="scss" scoped>

.scroll-header {
  z-index: 9999;
  position: fixed;
  top: 0;
  width: 100%;
  min-width: 992px;
  height:65px;
  background: rgba(41, 62, 145, 1);
  transition: transform 0.66s;
  transform: rotateX(90deg);
  transform-origin: 0% 0%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;

  &.show-scroll-header {
    transform: rotate(0deg);
  }

  *,
  *::before,
  *:after {
    padding: 0;
    margin: 0;
    letter-spacing: 1.1px;
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
  }

  .scroll-header-container {
    margin: 0 auto;
    width: 1200px;
  }
  .scroll-header-logo {
    a {
      display: block;
      img{
        width: 204px;
        height: 59.5px;
        cursor: pointer;
      }
    }
  }

  .scroll-menu {
    height: 65px;
    list-style: none;

    & > li {
      display: inline-block;
      width: 100px;
      padding: 10px 0;
      height: 100%;
      line-height: 40px;
      position: relative;
      cursor: pointer;
      text-align: center;
      -webkit-transition: background-position-x 0.9s linear;
      transition: background-position-x 0.9s linear;

      &:hover {
        // -webkit-animation: line 1s;
        //         animation: line 1s;
        & > a {
          color: #dea066;
        }

        & > a + .scroll-sub-menu{
          display: block;
        }
      }
      & > a {
        font-size: 17px;
        color: #e4e0dc;
        text-decoration: none;
        -webkit-transition: all 0.45s;
        transition: all 0.45s;
      }

    }

    & > li.current-page {
      & > a {
        color: #dea066;
      }
    }

    .scroll-sub-menu {
      z-index: 10;
      position: absolute;
      right: 0px;
      left: -15px;
      top:65px;
      display: none;
      width: 130px;
      padding: 10px;
      box-sizing: border-box;
      background-color: rgba(26, 65, 133, 0.7);
      li {
        padding: 4px 0px;
        text-align: center;
        text-indent: 4px;
        cursor: pointer;
        /* transition: background 1s; */

        &:hover {
          background-color: rgba(53, 89, 198, 1);
          a {
            color: #dea066;
          }
        }
        a {
          font-size: 17px;
          color: #fff;
          transition: all 1s;
          &.current-page {
            color: #dea066;
          }
        }
      }
    }
  }
}

/* @-webkit-keyframes line {
  0% {
    background-position-x: 390px;
  }
}

@keyframes line {
  0% {
    background-position-x: 390px;
  }
} */

/* Extra Large Devices, Wide Screens */
@media only screen and (max-width : 1400px) {
  .scroll-header {
    height:55px;

    .scroll-header-logo {
      a {
        img{
          width: 174.2px;
          height: 52.6px;
        }
      }
    }

    .scroll-menu {
      padding: 10px;
      height: 55px;
      margin-right: 60px;
      list-style: none;

      &:hover {
        .scroll-sub-menu{
          display: block;
        }
      }

      & > li {
        line-height: 35px;
        width: 80px;
        & > a {
          font-size: 16px;
          color: #e4e0dc;
          text-decoration: none;
          -webkit-transition: all 0.45s;
          transition: all 0.45s;
        }
      }

      .scroll-sub-menu {
        top:55px;
        padding: 10px;
        height:220px;
        .sub-menu{
          .sub-menu-list{
            height: 210px;
            width: 80px;
            ul {
              li {
                padding: 4px 6px;
                a {
                  font-size: 15px;
                }
              }
            }
          }
        }
      }
    }
  }
}

/* Large Devices, Wide Screens */
@media only screen and (max-width : 1200px) {
  .scroll-header {

    .scroll-menu {
      margin-right: 40px;
      list-style: none;

      & > li {
        width: 80px;
        & > a {
          font-size: 16px;
        }
      }
      .scroll-sub-menu {
        padding: 8px;
        height:210px;
        .sub-menu{
          .sub-menu-list{
            height: 210px;
            width: 80px;
            ul {
              li {
                padding: 3px 6px;
                a {
                  font-size: 15px;
                }
              }
            }
          }
        }
      }
    }
  }
}

/* Medium Devices, Desktops */
@media only screen and (max-width : 992px) {

}

/* Small Devices, Tablets */
@media only screen and (max-width : 768px) {

}

// @media only screen and (max-width : 480px) {

// }

</style>
