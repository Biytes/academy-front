<template lang="html">
  <div>
    <div class="about-content page-container">
      <aside class="content-side-bar">
        <a v-for="(nav, navIndex) in navBarTitles"
           :class="{ current: navIndex === currentCategory.index }"
           @click="navSwitch(navIndex, nav)"
           :key="navIndex"><i class="iconfont icon-triangle-arrow-r"></i>{{nav.linkTitle}}</a>
      </aside>
      <div class="news-container">
        <div class="figure-container">
          <div v-for="(news, newsIndex) in items" class="news-figure" :key="newsIndex">
            <h3 class="news-title"><router-link :to="news.href" tag="a">{{ news.title }}</router-link></h3>
            <p class="news-info clearfix">
              <span class="news-date">{{ news.publicTime | formatDate }}</span>
              <span class="news-read"><i class="iconfont icon-eye"></i><em class="views-time">12900</em></span>
            </p>
            <div class="news-img" v-if="news.imgUrl">
              <img :src="news.imgUrl" alt="">
            </div>
            <p class="simple-brief">{{news.content}}</p>
          </div>
        </div>
      </div>
      <div style="text-align:center;font-size:18px;margin-top:15px;">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { dateFormatter } from '@utils/index'
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      navBarTitles: [
        {
          linkTitle: '国际合作',
          id: '',
          routerLink: '/cooperateInfo/international'
        },
        {
          linkTitle: '校企合作',
          id: '',
          routerLink: '/cooperateInfo/enterprise'
        }
      ],
      items: [
        {
          publicTime: 'Mon Jul 02 2018 10:40:35 GMT+0800 (台北标准时间)',
          title: '延安新区党政代表团到访我校',
          imgUrl: '',
          content: '2017年9月2日，延安新区党工委副书记、延安市新区管委会主任薛鹏春一行到访我校，俞峰院长在南大殿会见来访，双方就开展交流合作事宜进行了商谈。',
          href: ''
        },
        {
          publicTime: 'Mon Jul 02 2018 10:40:35 GMT+0800 (台北标准时间)',
          title: '延安新区党政代表团到访我校',
          imgUrl: require('@img/school/学院日落景.jpg'),
          content: '2017年9月2日，延安新区党工委副书记、延安市新区管委会主任薛鹏春一行到访我校，俞峰院长在南大殿会见来访，双方就开展交流合作事宜进行了商谈。',
          href: ''
        },
        {
          publicTime: 'Mon Jul 02 2018 10:40:35 GMT+0800 (台北标准时间)',
          title: '延安新区党政代表团到访我校',
          content: '2017年9月2日，延安新区党工委副书记、延安市新区管委会主任薛鹏春一行到访我校，俞峰院长在南大殿会见来访，双方就开展交流合作事宜进行了商谈。',
          href: ''
        },
        {
          publicTime: 'Mon Jul 02 2018 10:40:35 GMT+0800 (台北标准时间)',
          title: '延安新区党政代表团到访我校',
          content: '2017年9月2日，延安新区党工委副书记、延安市新区管委会主任薛鹏春一行到访我校，俞峰院长在南大殿会见来访，双方就开展交流合作事宜进行了商谈。',
          href: ''
        },
        {
          publicTime: 'Mon Jul 02 2018 10:40:35 GMT+0800 (台北标准时间)',
          title: '延安新区党政代表团到访我校',
          content: '2017年9月2日，延安新区党工委副书记、延安市新区管委会主任薛鹏春一行到访我校，俞峰院长在南大殿会见来访，双方就开展交流合作事宜进行了商谈。',
          href: ''
        },
        {
          publicTime: 'Mon Jul 02 2018 10:40:35 GMT+0800 (台北标准时间)',
          title: '延安新区党政代表团到访我校',
          content: '2017年9月2日，延安新区党工委副书记、延安市新区管委会主任薛鹏春一行到访我校，俞峰院长在南大殿会见来访，双方就开展交流合作事宜进行了商谈。',
          href: ''
        }
      ]
    }
  },
  computed: {
    ...mapState([
      'currentCategory'
    ])
  },
  watch: {
    '$route': 'onRouteChange'
  },
  mounted () {
    this.section = this.$route.name
    this.category = this.$route.params.category
  },
  methods: {
    navSwitch (index, nav) {
      // Swtich Data
      let category = {
        index,
        title: nav.linkTitle,
        path: nav.routerLink
      }
      this.switchCategory(category)
      this.$router.push({ path: nav.routerLink })
    },
    onRouteChange () {

    },
    ...mapMutations([
      'showImagePage',
      'switchCategory'
    ])
  },
  filters: {
    formatDate: function (date) { // 时间转变格式
      return dateFormatter(date, 'yyyy-M-d')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
