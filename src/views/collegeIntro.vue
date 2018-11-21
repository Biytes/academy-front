<template lang="html">
  <div>
    <div class="about-content">
      <aside class="content-side-bar">
        <a v-for="(nav, navIndex) in navBarTitles" :class="{current:navIndex === current}" @click="navSwitch(navIndex, nav.routerLink)" :key="navIndex">{{nav.linkTitle}}</a>
        <!-- <router-link to="/about" tag="a" class="current">home</router-link>
        <router-link to="/about" tag="a">users</router-link>
        <router-link to="/about" tag="a">sechdule</router-link>
        <router-link to="/about" tag="a">info</router-link> -->
      </aside>
      <div class="news-container">
        <div class="figure-container">
          <div v-for="(news, newsIndex) in items" class="news-figure" :key="newsIndex">
            <h3 class="news-title"><a href="">{{news.title}}</a></h3>
            <p class="news-info clearfix">
              <span class="news-type orange"><a href="">学院简介</a></span>
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
export default {
  data () {
    return {
      navBarTitles: [
        {
          linkTitle: '学院简介',
          id: '',
          routerLink: '/collegeIntro/brief'
        },
        {
          linkTitle: '机构设置',
          id: '',
          routerLink: '/collegeIntro/facility'
        },
        {
          linkTitle: '师资队伍建设',
          id: '',
          routerLink: '/collegeIntro/teacher'
        },
        {
          linkTitle: '实验中心简介',
          id: '',
          routerLink: '/collegeIntro/lab'
        },
        {
          linkTitle: '专业设置',
          id: '',
          routerLink: '/collegeIntro/major'
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
  created () {
  },
  methods: {
    // padDate (val) { // 小于10的时间 在前面加个 0
    //   return val < 10 ? '0' + val : val
    // },
    navSwitch (index, routerLink) {
      console.log(index)
      this.$store.state.page.currentNav = index
      this.$router.push({ path: routerLink })
      // Swtich Data
    }
  },
  computed: {
    current () {
      return this.$store.state.page.currentNav
    }
  },
  filters: {
    formatDate: function (value) { // 时间转变格式
      var date = new Date(value)
      var year = date.getFullYear()
      var month = date.getMonth() + 1
      var day = date.getDate()
      month = month < 10 ? '0' + month : month
      day = day < 10 ? '0' + day : day
      // var hours = this.padDate(date.getHours())
      // var minutes = this.padDate(date.getMinutes())
      // var seconds = this.padDate(date.getSeconds())
      // 将整理好的数据传出去
      return year + '-' + month + '-' + day
    }
  }
}
</script>

<style lang="css" scoped>

/* External CSS */

.about-content{
  position: relative;
  margin:0 0 50px;
}
/* Content */

/* .side-barigation */

@media screen and (max-width: 1000px){

}
@media (min-width: 1200px) and (max-width: 1366px) {
  .newslist_dt li{
    height: 69px;
  }
  .side-bar{
    width: 230px;
    left:-150px;
  }
  .side-bar li a{
    font-size: 14px;
  }
}
</style>
