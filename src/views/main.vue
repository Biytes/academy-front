<template lang="html">
  <div>
    <section class="campus-event">
      <div class="campus-news important">
        <div class="panel-header">
          <img src="@assets/icons/item.png">
          <span class="mytitle">
            学院要闻
            <small>Top News</small>
          </span>
        </div>
        <div class="campus-news-content">
          <a class="img-news clearfloat" v-for="(item, index) in topNews" :key="index" v-if="index === 0">
            <img v-if="item.imgUrl" :src="item.imgUrl" alt="">
            <span class="img-title"><a href="">{{item.title}}</a></span>
            <span class="img-describe">{{item.brief}}</span>
            <span class="img-news-date">{{item.time}}</span>
          </a>
          <ul>
            <el-tooltip v-for="(item, index) in topNews" :key="index" v-if="index!==0" class="item" effect="dark" :content="item.brief" placement="top-end">
              <li :id="item.id"><a :href="item.path" >{{item.title}}</a><span class="campus-news-content-date">{{item.time}}</span></li>
            </el-tooltip>
          </ul>
          <p class="campus-news-more"><a href="">继续阅读<img src="@assets/icons/right-arrow.png" alt=""></a></p>
        </div>
      </div>
      <div class="campus-news comprehensive">
        <div class="panel-header">
          <img src="@assets/icons/item.png">
          <span class="mytitle">
            综合新闻
            <small>Academy News</small>
          </span>
        </div>
        <div class="campus-news-content">
          <ul>
            <el-tooltip v-for="(item, index) in news" :key="index" class="item" effect="dark" :content="item.brief" placement="top-end">
              <li :id="item.id"><a :href="item.path" >{{item.title}}</a><span class="campus-news-content-date">{{item.time}}</span></li>
            </el-tooltip>
          </ul>
          <p class="campus-news-more"><a href="">继续阅读<img src="@assets/icons/right-arrow.png" alt=""></a></p>
        </div>
      </div>
      <div class="campus-news events">
        <div class="panel-header">
          <img src="@assets/icons/events.png">
          <span class="mytitle">
            最近活动
            <small>Events</small>
          </span>
        </div>
        <div class="campus-news-content">
          <article v-for="(item, index) in events" :key="index"  :class="[ isEnd(item.endTime) ? 'end-event':(isStart(item.startTime) ? 'pickup-appointment':'on-hold-arrival')]">
            <p>
              <span class="event-day">{{item.startTime | getDay}}</span>
              <br>
              <span class="event-month">{{item.startTime | getMonthEnglish}}</span>
            </p>
            <p>
              <span class="event-name">{{item.title}}</span>
              <span class="event-describe">{{item.brief}}</span>
            </p>
            <p></p>
          </article>
          <p class="campus-news-more"><a href="">更多活动<img src="@assets/icons/right-arrow.png" alt=""></a></p>
        </div>
      </div>
    </section>
    <section class="campus-event">
      <div class="campus-news important">
        <div class="panel-header">
          <img src="@assets/icons/item.png">
          <span class="mytitle">
            教学管理
            <small>Education</small>
          </span>
        </div>
        <div class="campus-news-content">
          <a class="img-news clearfloat" v-for="(item, index) in educationManagement" :key="index" v-if="index ===0">
            <img v-if="item.imgUrl" :src="item.imgUrl" alt="">
            <span class="img-title"><a href="">{{item.title}}</a></span>
            <span class="img-describe">{{item.brief}}</span>
            <span class="img-news-date">{{item.time}}</span>
          </a>
          <ul>
            <el-tooltip v-for="(item, index) in educationManagement" :key="index" v-if="index!==0" class="item" effect="dark" :content="news.brief" placement="top-end">
              <li :id="item.id"><a :href="item.path" >{{item.title}}</a><span class="campus-news-content-date">{{item.time}}</span></li>
            </el-tooltip>
          </ul>
          <p class="campus-news-more"><a href="">继续阅读<img src="@assets/icons/right-arrow.png" alt=""></a></p>
        </div>
      </div>
      <div class="campus-news comprehensive">
        <div class="panel-header">
          <img src="@assets/icons/item.png">
          <span class="mytitle">
            学生工作
            <small>Student Work</small>
          </span>
        </div>
        <div class="campus-news-content">
          <ul>
            <el-tooltip v-for="(item, index) in studentWork" :key="index" class="item" effect="dark" :content="news.brief" placement="top-end">
              <li :id="item.id"><a :href="item.path" >{{item.title}}</a><span class="campus-news-content-date">{{item.time}}</span></li>
            </el-tooltip>
          </ul>
          <p class="campus-news-more"><a href="">继续阅读<img src="@assets/icons/right-arrow.png" alt=""></a></p>
        </div>
      </div>
      <div class="campus-news">
          <div class="panel-header">
            <img src="@assets/icons/item.png">
            <span class="mytitle">
              招生就业
              <small>Recruit</small>
            </span>
          </div>
          <div class="campus-news-content">
            <ul>
              <el-tooltip v-for="(item, index) in recruitInfo" :key="index" class="item" effect="dark" :content="news.brief" placement="top-end">
                <li :id="item.id"><a :href="item.path" >{{item.title}}</a><span class="campus-news-content-date">{{item.time}}</span></li>
              </el-tooltip>
            </ul>
            <p class="campus-news-more"><a href="">继续阅读<img src="@assets/icons/right-arrow.png" alt=""></a></p>
          </div>
      </div>
    </section>
    <section class="campus-teacher">
      <div class="campus-teacher-inner">
        <div class="clearfloat">
          <div class="majorSet">
            <div class="majorSetContent">
              <h3 class="smallTitle">
                <img src="@assets/icons/atom.png" width="48" height="48"  style="vertical-align:bottom" alt="">
                <span>专业设置</span>
                <span class="english">About Major</span>
                <img src="@assets/icons/more.png" width="32.58" height="16.15"  style="float:right;margin-top:20px;cursor:pointer;" alt="">
              </h3>
              <p>We zijn een alles-in-één bureau voor online en offline communicatie. Wij gaan graag voor jouw organisatie aan de slag om samen het verschil te maken.</p>
              <ul class="majorList">
                <li v-for="(major, index) in majorList" :key="index" @click="testIndex(index)">
                  <h4>{{major.name}}<i class="iconfont icon-arrowsleftline"></i></h4>
                  <p>{{major.brief}}</p>
                </li>
              </ul>
              <a href="" class="customButton blue-btn">Learn more</a>
            </div>
          </div>
          <div class="teacher-carousel">
            <h3 class="smallTitle">
              <img src="@assets/icons/team.png" width="48" height="48" style="vertical-align:bottom" alt="">
              <span>教师队伍</span>
              <span class="english">Our Team</span>
              <img src="@assets/icons/more.png" width="32.58" height="16.15"  style="float:right;margin-top:20px;cursor:pointer;" alt="">
            </h3>
            <el-carousel indicator-position="none">
              <el-carousel-item v-for="(teacher,index) in teacherCarousel" :key="index
              " v-bind:style="{backgroundImage: teacher.backgroundUrl}">
                <div class="teacher-introduction">
                  <h4>{{teacher.name}}</h4>
                  <p>{{teacher.position}}</p>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
    </section>
    <section class="campus-highlight">
      <h3 class="smallTitle"><img src="@assets/icons/yearbook.png" alt=""><span>学院风采</span><span class="english">YearBook</span> </h3>
      <!-- <h1>Horizontal Portfolio Layout With CSS3 Animations and jQuery</h1> -->
      <ul class="portfolio-items">
       <li class="item" v-for="(highlight, index) in highlights" :key="index">
         <figure>
           <div class="view">
             <img :src="highlight.imgUrl" />
           </div>
           <figcaption>
             <p><span><a href="">{{highlight.detail}}</a></span></p>
             <p><span>{{highlight.time}}</span></p>
           </figcaption>
         </figure>
         <div class="date">{{highlight.year}}</div>
       </li>
     </ul>
    </section>
  </div>
</template>

<script type="text/javascript">
import $ from '@assets/jquery-vender'
import '@css/custom/campusNews.css'
import '@css/main/campusHighlight.css'
import '@css/main/majorSet.css'
import '@css/main/teacherCarousel.css'
import { mapState } from 'vuex' // 引入mapState
export default {
  data () {
    return {
      teacherCarousel: [
        {
          title: 'First Panel',
          name: '李仲麟',
          position: '计算机学院顾问',
          introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aspernatur id, fuga quaerat laboriosam architecto maxime autem pariatur. Recusandae dolores iusto tempora cum libero, fugit inventore reiciendis laborum quo et officia quis voluptatibus non enim, exercitatione',
          backgroundUrl: 'url(' + require('@img/teacher/tec1.jpg') + ')'
        },
        {
          title: 'Second Panel',
          name: '邓春晖',
          position: '计算机学院院长',
          introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aspernatur id, fuga quaerat laboriosam architecto maxime autem pariatur. Recusandae dolores iusto tempora cum libero, fugit inventore reiciendis laborum quo et officia quis voluptatibus non enim, exercitatione',
          backgroundUrl: 'url(' + require('@img/teacher/tec2.jpg') + ')'
        },
        {
          title: 'Third Panel',
          name: '岑有文',
          position: '计算机学院副院长',
          introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aspernatur id, fuga quaerat laboriosam architecto maxime autem pariatur. Recusandae dolores iusto tempora cum libero, fugit inventore reiciendis laborum quo et officia quis voluptatibus non enim, exercitatione',
          backgroundUrl: 'url(' + require('@img/teacher/tec3.jpg') + ')'
        },
        {
          title: 'Fourth Panel',
          name: '蔡沂',
          position: '计算机学院副院长',
          introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aspernatur id, fuga quaerat laboriosam architecto maxime autem pariatur. Recusandae dolores iusto tempora cum libero, fugit inventore reiciendis laborum quo et officia quis voluptatibus non enim, exercitatione',
          backgroundUrl: 'url(' + require('@img/teacher/tec4.jpg') + ')'
        },
        {
          title: 'Fifth Panel',
          name: '周小明',
          position: '计算机科学与技术教研室副主任，讲师',
          introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aspernatur id, fuga quaerat laboriosam architecto maxime autem pariatur. Recusandae dolores iusto tempora cum libero, fugit inventore reiciendis laborum quo et officia quis voluptatibus non enim, exercitatione',
          backgroundUrl: 'url(' + require('@img/teacher/tec5.jpg') + ' )'
        },
        {
          title: 'Second Panel',
          name: '邓春晖',
          position: '计算机学院院长',
          introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aspernatur id, fuga quaerat laboriosam architecto maxime autem pariatur. Recusandae dolores iusto tempora cum libero, fugit inventore reiciendis laborum quo et officia quis voluptatibus non enim, exercitatione',
          backgroundUrl: 'url(' + require('@img/teacher/tec2.jpg') + ')'
        },
        {
          title: 'Third Panel',
          name: '岑有文',
          position: '计算机学院副院长',
          introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aspernatur id, fuga quaerat laboriosam architecto maxime autem pariatur. Recusandae dolores iusto tempora cum libero, fugit inventore reiciendis laborum quo et officia quis voluptatibus non enim, exercitatione',
          backgroundUrl: 'url(' + require('@img/teacher/tec3.jpg') + ')'
        },
        {
          title: 'Fourth Panel',
          name: '蔡沂',
          position: '计算机学院副院长',
          introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aspernatur id, fuga quaerat laboriosam architecto maxime autem pariatur. Recusandae dolores iusto tempora cum libero, fugit inventore reiciendis laborum quo et officia quis voluptatibus non enim, exercitatione',
          backgroundUrl: 'url(' + require('@img/teacher/tec4.jpg') + ')'
        },
        {
          title: 'Fifth Panel',
          name: '周小明',
          position: '计算机科学与技术教研室副主任，讲师',
          introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aspernatur id, fuga quaerat laboriosam architecto maxime autem pariatur. Recusandae dolores iusto tempora cum libero, fugit inventore reiciendis laborum quo et officia quis voluptatibus non enim, exercitatione',
          backgroundUrl: 'url(' + require('@img/teacher/tec5.jpg') + ' )'
        }
      ],
      majorList: [
        {
          name: '软件工程',
          brief: 'C程序设计基础、数据结构、计算机组成原理、用、Java面向对象程序设计、人机交互'
        },
        {
          name: '计算机科学与技术',
          brief: 'Unieke concepten &amp; (web)ontwerpen'
        },
        {
          name: '网络工程',
          brief: 'Unieke concepten &amp; (web)ontwerpen'
        },
        {
          name: '数学/信息与计算科学',
          brief: 'Unieke concepten &amp; (web)ontwerpen'
        }
      ],
      highlights: [
        {
          imgUrl: require('@img/appearance/2016.jpg'),
          detail: '计算机工程学院学生工作大会',
          time: '2016年**月**日',
          year: '2016'
        },
        {
          imgUrl: require('@img/appearance/2015.jpg'),
          detail: '第八届中国大学生计算机设计大赛',
          time: '2015年**月**日',
          year: '2015'
        },
        {
          imgUrl: require('@img/appearance/8.jpg'),
          detail: '粤港澳大学生移动互联网创新设计大赛',
          time: '2014年**月**日',
          year: '2014'
        },
        {
          imgUrl: require('@img/appearance/4.jpg'),
          detail: 'detail',
          time: 'time',
          year: 'year'
        },
        {
          imgUrl: require('@img/appearance/5.jpg'),
          detail: 'detail',
          time: 'time',
          year: 'year'
        },
        {
          imgUrl: require('@img/appearance/6.jpg'),
          detail: 'detail',
          time: 'time',
          year: 'year'
        },
        {
          imgUrl: require('@img/appearance/3.jpg'),
          detail: 'detail',
          time: 'time',
          year: 'year'
        },
        {
          imgUrl: require('@img/appearance/7.jpg'),
          detail: 'detail',
          time: 'time',
          year: 'year'
        }
      ]
    }
  },
  computed: {
    localComputed () {
      // 不依赖state的属性写这里
      let a = 2
      return a
    },
    ...mapState({
      item: state => state.testData.article,
      topNews: state => state.testData.topNews.slice(0, 6),
      news: state => state.testData.news.slice(0, 9),
      events: state => state.testData.events.slice(0, 4),
      educationManagement: state => state.testData.educationManagement.slice(0, 6),
      studentWork: state => state.testData.studentWork.slice(0, 9),
      recruitInfo: state => state.testData.recruitInfo.slice(0, 9)
    })
  },
  filters: {
    getDay: (val) => {
      let day = new Date(val).getDate()
      return day
    },
    getMonthEnglish: (val) => {
      let monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      let month = new Date(val).getMonth()
      return monthArray[month]
    }
  },
  mounted () {
    // campus-highlight
    var $window = $(window)

    $.fn.isVisible = function () {
      var $this = $(this)
      var Left = $this.offset().left
      var visibleWidth = $window.width()

      return Left < visibleWidth
    }
    var list = $('.portfolio-items')
    var showVisibleItems = function () {
      list.children('.item:not(.falldown)').each(function (el, i) {
        var $this = $(this)
        if ($this.isVisible()) {
          $this.addClass('falldown')
        }
      })
    }
    // initially show all visible items before any scroll starts
    showVisibleItems()

    // then on scroll check for visible items and show them
    list.scroll(function () {
      showVisibleItems()
    })
    // image hover pan effect
    list.on('mousemove', 'img', function (ev) {
      var $this = $(this)
      var posX = ev.pageX
      var posY = ev.pageY
      var data = $this.data('cache')
      // cache necessary variables
      if (!data) {
        data = {}
        data.marginTop = -parseInt($this.css('top'))
        data.marginLeft = -parseInt($this.css('left'))
        data.parent = $this.parent('.view')
        $this.data('cache', data)
      }

      var originX = data.parent.offset().left
      var originY = data.parent.offset().top

      // move image
      $this.css({
        'left': -(posX - originX) / data.marginLeft,
        'top': -(posY - originY) / data.marginTop
      })
    })
    list.on('mouseleave', '.item', function (e) {
      $(this).find('img').css({
        'left': '0',
        'top': '0'
      })
    })
  },
  watch: {
    showBar (value) {
      /* global */
      if (value) {
        $('body').on('touchmove', function (event) {}, false)
      } else {
        $('body').off('touchmove')
      }
    }
  },
  methods: {
    isEnd: (val) => {
      let now = new Date().getTime() // 现在的时间
      let end = new Date(val).getTime() // 事件结束的时间
      if (now - end > 0) { // 现在的时间大于结束的时间
        return true // isEnd true 已经结束了
      } else {
        return false // isEnd false 还没结束
      }
    },
    isStart: (val) => {
      let now = new Date().getTime() // 现在的时间
      let start = new Date(val).getTime() // 事件开始的时间
      if (now > start) {
        return true // 已经开始 添加 class: pick-up-appointment
      } else {
        // 最好在做一个判断7天之内开始的
        return false // 还没开始 添加 class: on-hold-arrival
      }
    },
    testIndex: (index) => {
    }
  }
}
</script>

<style lang="css" scoped>

section.campus-event {
  padding-top: 15px;
}
/*teacher*/
section.campus-teacher{
  display: block;
  overflow-x: hidden;
  padding: 45px 12px 0;
  background-color: #e8e7e7;
  margin-top: 20px;
}
.campus-teacher-inner{
  position: relative;
  width: 1200px;
  margin: 0 auto;
}
.campus-teacher-inner > div{
  margin-left:-50px;
  margin-bottom: 0;
}
.campus-teacher-inner > div > *{
  padding-left: 48px;
}
.campus-teacher-inner > div > *{
  float: left;
}
h3.smallTitle{
  font-family: "soleil","Helvetica Neue",Helvetica,Arial,sans-serif;
  margin: 0 0 20px;
  font-weight: 600;
  font-style: normal;
  font-size: 25px;
  line-height: 48px;
  color:#000;
}
h3.smallTitle span{
  display:inline-block;
  line-height:48px;
  margin-left:5px;
  border-bottom:4px solid rgb(51, 115, 231);
  padding-right: 10px
}
h3.smallTitle > span.english{
  font-size: 18px;
  border: none;
  margin-left: 15px;
  padding-left: 10px;
  color:#c4c4c4;
  border-left: 1px solid #dfdfdf;
}

@media screen and (max-width: 650px) {
  .campus-work-inner label {
    font-size: 0;
  }

  .campus-work-inner label:before {
    margin: 0;
    font-size: 18px;
  }
}
@media screen and (max-width: 400px) {
  .campus-work-inner label {
    padding: 15px;
  }
}
@media (min-width: 1200px) and (max-width: 1366px) {
  .campus-highlight{
    width: 90%;
  }
  .campus-highlight .item{
    margin:100px 20px 0;
  }
  .campus-highlight .item:nth-child(even){
    margin-top: 50px;
  }
  .campus-highlight .portfolio-items{
    height: 350px;
  }
  .campus-highlight .item{
    width: 254px;
  }
  .campus-highlight .smallTitle img{
    margin-left: 20px;
    vertical-align: bottom;
  }
  section.campus-teacher{
    padding: 30px 12px 0;
  }
  .campus-teacher-inner{
    width: 1100px;
  }
  .majorSet{
    width: 50%;
  }
  h3.smallTitle{
    font-size: 21px;
    margin: 0px 0 15px;
  }
  h3.smallTitle > span.english{
    font-size: 18px;
  }
  .majorSetContent{
    padding: 24px 40px 50px 0
  }
  .majorList li p{
    font-size: 12px;
  }
  .majorSetContent > p{
    font-size: 15px;
  }
  .el-carousel__container{
    height: 380px;
  }
  .campus-teacher .el-carousel{
    margin-top: 39px;
  }
  .split-line{
    margin-top: 22px;
  }
}
</style>
