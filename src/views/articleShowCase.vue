<template lang="html">
  <div v-if="article" v-loading="isLoading" class="article-container">
    <h3 class="article-title">{{  article.title }}</h3>
    <div v-html="article.content" class="article-content"></div>
  </div>
</template>

<script>
import { editAcademyData } from '@api/index'
import { mapMutations } from 'vuex'
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
  mounted () {
    console.log(this.$route)
    this.section = this.$route.params.section
    this.category = this.$route.params.category
    this.id = this.$route.params.id

    editAcademyData(this.section, this.id)
      .then(res => {
        if (res.status === 200) {
          this.article = res.data
          let article = {
            id: this.id,
            title: this.article.title,
            path: this.$route.fullPath
          }
          this.switchArticle(article)
        }
        this.isLoading = false
      })
      .catch(error => {
        console.log(error.response)
        if (error.response.status === 404) {
          this.$message.error('该文章不存在')
          this.$router.go(-1)
        }
      })
  },
  methods: {
    ...mapMutations([
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
  article {
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
}
</style>
