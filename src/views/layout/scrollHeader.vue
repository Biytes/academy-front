<template lang="html">
  <div :class="[isShowScrollHeader ? 'show-scroll-header' : '', 'scroll-header']">
    <el-row class="scroll-header-container">
      <el-col :span="5" align="left" class="scroll-header-logo">
        <router-link to="/" tag="a"><img src="@img/logo/学院.png" alt=""></router-link>
      </el-col>
      <el-col :span="19"
              align="right">
        <ul class="scroll-menu">
          <li v-for="(item, scroll) in scrollHeaderData" :key="scroll" :class="{ 'current-page': currentPageSup === scroll }"><a @click.stop="switchCurrentPageSup(item.path, scroll)">{{item.menuItem}}</a></li>
          <div class="scroll-sub-menu">
            <ul class="sub-menu">
              <li v-for="(parent, sup) in scrollHeaderData" :key="sup" class="sub-menu-list">
                <ul>
                  <li v-for="(subItem, sub) in parent.subMenuItem" :key="sub"><a @click="switchNav(subItem.path, sub)">{{subItem.menuItem}}</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </ul>
        <!-- TODO: menu按钮 -->
        <!-- <i class="iconfont icon-menu"></i> -->
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
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
    currentPageSup () {
      return this.$store.state.page.currentPageSup
    },
    scrollHeaderData () {
      return this.$store.state.testData.headerMenuItem
    }
  },
  methods: {
    handleScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      let targetScrollTop = 0.95 * document.documentElement.clientHeight - 10
      this.isShowScrollHeader = scrollTop >= targetScrollTop
    },
    switchCurrentPageSup (routerLink, index) {
      this.$store.state.page.currentPageSup = index
      this.$router.push({ path: routerLink })
    },
    switchNav (routerLink, sub) {
      this.$store.state.page.currentNav = 0
      if (sub !== undefined) { // 判断sub是否存在
        this.$store.state.page.currentNav = sub
      }
      if (event.stopPropagation) {
        // 针对 Mozilla 和 Opera
        event.stopPropagation()
      } else if (window.event) {
        // 针对 IE
        window.event.cancelBubble = true
      }
      this.$router.push({ path: routerLink })
    }
  }
}
</script>

<style lang="scss" scoped>

.scroll-header {
  z-index: 10;
  position: fixed;
  top: 0;
  width: 100%;
  min-width: 992px;
  height:65px;
  background: rgba(53, 89, 198, 1);
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
    position: relative;
    padding: 10px;
    height: 65px;
    list-style: none;

    &:hover {
      .scroll-sub-menu{
        display: block;
      }
    }

    & > li {
      display: inline-block;
      width: 100px;
      height: 100%;
      line-height: 40px;
      cursor: pointer;
      text-align: center;
      -webkit-transition: background-position-x 0.9s linear;
      transition: background-position-x 0.9s linear;

      &:hover {
        background: url("../../assets/img/scrollMenu.svg");
        // -webkit-animation: line 1s;
        //         animation: line 1s;
        & > a {
          color: #dea066;
        }
      }
      & > a {
        font-size: 17px;
        font-weight: bold;
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
      top:65px;
      display: none;
      width: auto;
      padding: 10px;
      height:255px;
      background-color: rgba(53, 89, 198, 1);
      .sub-menu{
        width:100%;
        height:100%;
        .sub-menu-list{
          display: inline-block;
          height: 210px;
          width: 100px;
          vertical-align:top;
          ul {
            width: 100%;
            height:100%;
            li {
              padding: 6px 7px;
              text-align: center;
              cursor: pointer;
              /* transition: background 1s; */

              &:hover {
                background-color: rgba(53, 89, 198, 1);
              }
              a {
                font-size: 17px;
                color: #fff;
                transition: all 1s;
              }
            }
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
          font-weight: bold;
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

</style>
