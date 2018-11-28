<template lang="html">
  <div id="academy">
    <div>
        <imgShowcase></imgShowcase>
        <HeaderComponent></HeaderComponent>
        <scrollHeader></scrollHeader>
        <section id="wrapper-content">
          <el-breadcrumb separator="/" class="bread-crumb" v-if="routeName !== 'main'">
            <el-breadcrumb-item :to="{ path: '/' }" @click.native="goToMain"><i class="iconfont icon-home"></i></el-breadcrumb-item>
            <el-breadcrumb-item v-if="currentSection.path">{{ currentSection.title }}</el-breadcrumb-item>
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

/*

var wrapperHeader = new Vue({
  el: '#wrapper-header',
  data () {
    return {
      a: 1,
      errands: [
        { title: 'First Panel', introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aspernatur id, fuga quaerat laboriosam architecto maxime autem pariatur. Recusandae dolores iusto tempora cum libero, fugit inventore reiciendis laborum quo et officia quis voluptatibus non enim, exercitatione' },
        { title: 'Second Panel', introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aspernatur id, fuga quaerat laboriosam architecto maxime autem pariatur. Recusandae dolores iusto tempora cum libero, fugit inventore reiciendis laborum quo et officia quis voluptatibus non enim, exercitatione' },
        { title: 'Third Panel', introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aspernatur id, fuga quaerat laboriosam architecto maxime autem pariatur. Recusandae dolores iusto tempora cum libero, fugit inventore reiciendis laborum quo et officia quis voluptatibus non enim, exercitatione' },
        { title: 'Fourth Panel', introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aspernatur id, fuga quaerat laboriosam architecto maxime autem pariatur. Recusandae dolores iusto tempora cum libero, fugit inventore reiciendis laborum quo et officia quis voluptatibus non enim, exercitatione' },
        { title: 'Fifth Panel', introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aspernatur id, fuga quaerat laboriosam architecto maxime autem pariatur. Recusandae dolores iusto tempora cum libero, fugit inventore reiciendis laborum quo et officia quis voluptatibus non enim, exercitatione' }
      ]
    }
  }
})
*/
</script>

<style lang="scss">
@import '@css/custom/newsFigure.scss';
@import '@css/global.scss';
@import '@css/custom/side-bar.scss';
/*global*/
#wrapper-content {
  height: auto;
  min-height: 1200px;
  width: 100%;
  position: relative;
  // img.school-logo {
  //   position: absolute;
  //   bottom: 200px;
  //   right: 200px;
  //   width: 600px;
  //   opacity: 0.1;
  //   z-index: -1;
  // }
  .bread-crumb {
    width: 65%;
    margin: 5px auto;
    padding: 10px;
    min-width: 1000px;
    box-sizing: border-box;
  }
}
/*button-animate*/
</style>
