<template lang="html">
  <div id="academy">
    <div>
        <imgShowcase></imgShowcase>
        <HeaderComponent></HeaderComponent>
        <scrollHeader></scrollHeader>
        <section id="wrapper-content">
          <el-breadcrumb separator="/" class="bread-crumb" v-if="routeName !== 'main'">
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
          <router-view></router-view>
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
  },
  data () {
    return {
      routeName: ''
    }
  },
  watch: {
    '$route': 'onRouteChange'
  },
  computed: {
    ...mapState([
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
    },
    onRouteChange () {
      this.routeName = this.$route.name
      if (this.routeName === 'main') {
        this.goToMain()
      }
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
  min-height: 80vh;
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
