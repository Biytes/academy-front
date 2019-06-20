<template lang="html">
  <div v-if="article" v-loading="isLoading" class="article-container">
    <h3 class="article-title">{{ article.title }}</h3>
    <div v-html="article.content" class="article-content"></div>
    <div class="attached-file" v-if="article.file_detail">
      <h3 v-if="article.file_detail.length">附件:</h3>
      <a v-for="file in article.file_detail"
         :href="file.file"
         download
         :key="file.id"
         target="_blank"><i class="iconfont icon-file" style="padding: 0 5px 0 0;"></i>{{ file.name }}</a>
    </div>
  </div>
</template>

<script>
import { editAcademyData } from '@api/index'
import { mapMutations, mapState } from 'vuex'
export default {
  data () {
    return {
      id: null,
      section: null,
      category: null,
      articleContent: '',
      article: {},
      isLoading: true
    }
  },
  computed: {
    ...mapState([
      'headerMenuItem'
    ])
  },
  mounted () {
    console.log(this.$route)
    this.section = this.$route.params.section
    this.category = this.$route.params.category
    this.id = this.$route.params.id
    this.locateCategory()

    editAcademyData(this.section, this.id)
      .then(res => {
        if (res.status === 200) {
          // 将文本里的图片 改成自适应
          res.data.content = res.data.content.replace(/(<img[\s\S]+?)(>)/g, function (_, p1, p2) {
            return `${p1} style="width: 100%; height: auto;" ${p2}`
          })
          this.article = res.data

          let article = {
            id: this.id,
            title: this.article.title,
            path: this.$route.fullPath
          }
          this.switchArticle(article)
          document.title = this.article.title
        }
        this.isLoading = false
      })
      .catch(error => {
        console.log(JSON.stringify(error))
        if (error.response.status === 404) {
          this.$message.error('该文章不存在')
          this.$router.go(-1)
        }
      })
  },
  methods: {
    locateCategory () {
      // 当headerMenuItem 加载完才执行
      let section = this.$route.name === 'articleShowCase' ? this.$route.params.section : this.$route.params.name
      let category = this.$route.params.category
      let sectionIndex = this.headerMenuItem.findIndex(item => item.name === section)
      // 预加载加载当前section
      console.log('section', this.headerMenuItem[sectionIndex])
      section = {
        index: sectionIndex,
        title: this.headerMenuItem[sectionIndex].title,
        path: this.headerMenuItem[sectionIndex].path
      }
      this.switchSection(section)
      // 如果有category 预加载当前category
      console.log(category !== 'independent')
      if (category !== 'independent') {
        let subMenuItem = this.headerMenuItem[sectionIndex].subMenuItem
        if (subMenuItem) {
          let categoryIndex = subMenuItem.findIndex(item => item.name === category)
          console.log(`subMenuItem`, subMenuItem)
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

<style lang="scss" scoped>
.article-container {
  width: 900px;
  min-height: 80vh;
  margin: 0 auto;
  .article {
    &-title {
      text-align: center;
    }

    &-content {
      img {
        width: 90%;
        margin: 0 auto;
      }
    }
  }

  .attached-file {
    margin: 30px 0 0;
    h3 {
      margin: 10px 0;
    }
    a {
      display: block;
      padding: 5px;
      &:hover {
        color: rgb(20, 115, 223);
      }
    }
  }
}

// @media only screen and (max-width : 480px) {
// .article-container {
//   width: 100%;
//   box-sizing: border-box;
//   padding: 10px;
//   min-height: 80vh;
//   margin: 0 auto;
// }

// }
</style>
