<template lang="html">
  <div id="academy">
    <div>
        <imgShowcase></imgShowcase>
        <HeaderComponent></HeaderComponent>
        <scrollHeader></scrollHeader>
        <section
          :class="[isPC ? '' : 'pc-device']"
          id="wrapper-content"
        >
          <el-breadcrumb separator="/" class="bread-crumb" v-if="routeName !== 'main' && isCategoryLocated">
            <el-breadcrumb-item :to="{ path: '/' }" @click.native="goToMain"><i class="iconfont icon-home"></i></el-breadcrumb-item>
            <el-breadcrumb-item v-if="currentSection.path"
                                :to="{ path: currentSection.path }"
                                @click.native="goToCategory">{{ currentSection.title }}</el-breadcrumb-item>
            <el-breadcrumb-item v-if="currentCategory.path"
                                :to="{ path: currentCategory.path }"
                                @click.native="goToCategory">{{ currentCategory.title }}</el-breadcrumb-item>
            <el-breadcrumb-item v-if="currentArticle.path"
                                :to="{ path: currentArticle.path }">{{ currentArticle.title }}</el-breadcrumb-item>
          </el-breadcrumb>
          <router-view v-if="isCategoryLocated"></router-view>
          <!-- <img class="school-logo"
               src="../../assets/img/logo/logo-grey.png"
               alt=""> -->
        </section>
        <FooterComponent></FooterComponent>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import HeaderComponent from '@views/layout/header.vue'
import FooterComponent from '@views/layout/footer.vue'
import scrollHeader from '@views/layout/scrollHeader.vue'
import imgShowcase from '@views/layout/showImg.vue'
export default {
  mounted () {
    this.onRouteChange()
    this.isPC = this.isDevicePC()
    console.log('official')
    if (this.$route.path !== '/') {
      this.locateCategory()
    } else {
      this.isCategoryLocated = true
    }
  },
  data () {
    return {
      isPC: '',
      routeName: '',
      isCategoryLocated: false
    }
  },
  watch: {
    '$route': 'onRouteChange'
  },
  computed: {
    ...mapState([
      'headerMenuItem',
      'currentSection',
      'currentCategory',
      'currentArticle'
    ])
  },
  components: {
    HeaderComponent,
    FooterComponent,
    scrollHeader,
    imgShowcase
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
    goToMain () {
      this.switchSection()
      this.switchCategory()
      this.switchArticle()
    },
    goToCategory () {
      this.switchArticle()
      let item = this.headerMenuItem[this.currentSection.index].subMenuItem
      console.log(item)
      this.switchCategory({
        index: 0,
        title: item ? item[0].title : '',
        path: item ? item[0].path : ''
      })
    },
    onRouteChange () {
      this.routeName = this.$route.name
      if (this.routeName === 'main') {
        this.goToMain()
      }
    },
    locateCategory () {
      // 当headerMenuItem 加载完才执行
      console.log('locateCategory')
      let section = this.$route.name === 'articleShowCase' ? this.$route.params.section : this.$route.name
      let category = this.$route.params.category || '1'
      let sectionIndex = this.headerMenuItem.findIndex(item => item.name === section)
      console.log(section)
      console.log(this.headerMenuItem)
      console.log(sectionIndex)
      // 预加载加载当前section
      section = {
        index: sectionIndex,
        title: this.headerMenuItem[sectionIndex].title,
        path: this.headerMenuItem[sectionIndex].path
      }
      this.switchSection(section)
      // 如果有category 预加载当前category
      if (category !== 'undefined') {
        let subMenuItem = this.headerMenuItem[sectionIndex].subMenuItem
        console.log(subMenuItem, category)
        if (subMenuItem) {
          let categoryIndex = subMenuItem.findIndex(item => item.name === category)
          category = {
            index: categoryIndex,
            title: subMenuItem[categoryIndex].title,
            path: subMenuItem[categoryIndex].path
          }
          this.switchCategory(category)
        }
      }
      this.isCategoryLocated = true
    },
    ...mapMutations([
      'switchSection',
      'switchCategory',
      'switchArticle'
    ])
  }
}

</script>

<style lang="scss">
@import '@css/custom/newsFigure.scss';
@import '@css/global.scss';
@import '@css/custom/side-bar.scss';
/*global*/
#wrapper-content {
  height: auto;
  min-height: 800px;
  width: 100%;
  position: relative;
  .bread-crumb {
    width: 65%;
    margin: 0 auto;
    padding: 15px;
    min-width: 1000px;
    box-sizing: border-box;
    .el-breadcrumb__item {
      cursor: pointer;
    }
  }
}
@media only screen and (max-width : 1200px) {
  .header-carousel {
    /*errands-introduction*/
    min-width: 900px;
  }
}
// @media only screen and (max-width : 480px) {
//   #wrapper-content {
//   .bread-crumb {
//     margin: 0 auto;
//     padding: 15px 10px;
//     line-height: 1.5;
//     min-width: unset;
//     width: 100%;
//     box-sizing: border-box;
//     .el-breadcrumb__item {
//       cursor: pointer;
//     }
//   }
// }
// }
/*button-animate*/
</style>
