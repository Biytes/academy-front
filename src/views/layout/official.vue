<template lang="html">
  <div id="academy">
    <div>
        <imgShowcase></imgShowcase>
        <HeaderComponent></HeaderComponent>
        <scrollHeader></scrollHeader>
        <section id="wrapper-content">
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
    console.log('official')
    console.log(this.$route)
    if (this.$route.path !== '/') {
      this.locateCategory()
    } else {
      this.isCategoryLocated = true
    }
  },
  data () {
    return {
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
      let category = this.$route.params.category || ''
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
      if (category !== '') {
        let subMenuItem = this.headerMenuItem[sectionIndex].subMenuItem
        console.log(subMenuItem, category)
        let categoryIndex = subMenuItem.findIndex(item => item.name === category)
        category = {
          index: categoryIndex,
          title: subMenuItem[categoryIndex].title,
          path: subMenuItem[categoryIndex].path
        }
        this.switchCategory(category)
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
/*button-animate*/
</style>
