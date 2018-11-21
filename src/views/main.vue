<template lang="html">
  <div>
    <section class="campus-event-row">
      <el-row>
        <el-col :span="8">
          <campus-news type="important"
                      title="学院要闻"
                      subTitle="Top News"
                      routeLink="sss"
                      :newsData="topNews"></campus-news>
        </el-col>
        <el-col :span="8">
          <campus-news type="comprehensive"
                      title="综合新闻"
                      subTitle="Academy News"
                      routeLink="sss"
                      :newsData="news"></campus-news>
        </el-col>
        <el-col :span="8">
          <campus-event :events="events"
                        title="最近活动"
                        subTitle="events"></campus-event>
        </el-col>
      </el-row>
    </section>
    <section class="campus-event-row">
      <el-row>
        <el-col :span="8">
          <campus-news type="important"
                       title="教学管理"
                       subTitle="Education"
                       routeLink="sss"
                       :newsData="educationManagement"></campus-news>
        </el-col>
        <el-col :span="8">
          <campus-news type="comprehensive"
                       title="学生工作"
                       subTitle="Student Work"
                       routeLink="sss"
                       :newsData="studentWork"></campus-news>
        </el-col>
        <el-col :span="8">
          <campus-news type=""
                       title="招生就业"
                       subTitle="Recruit"
                       routeLink="sss"
                       :newsData="recruitInfo"></campus-news>
        </el-col>
      </el-row>
    </section>
    <section class="campus-teacher">
      <img class="bg" src="@assets/img/background/logo3.jpg" alt="">
      <el-row class="campus-teacher-container">
        <el-col :span="12" class="campus-teacher-carousel">
          <div style="width: 80%;margin: 0 auto">
            <el-carousel :interval="8000"
                          height="350px"
                          indicator-position="outside"
                          trigger="click" @change="onTeacherCarouselChange">
              <el-carousel-item v-for="teacher in teacherCarousel"
                                :key="teacher.id"
                                :style="{backgroundImage: teacher.backgroundUrl}">
              </el-carousel-item>
            </el-carousel>
          </div>

        </el-col>
        <el-col :span="12" class="campus-teacher-info">
          <div class="teacher-info-box">
            <div class="teacher-header">
              <img src="@assets/icons/events.png">
              <span class="mytitle">
                教师队伍
                <small>Our Team</small>
              </span>
            </div>
            <span class="spliter"></span>
            <span class="teacher-name">{{ currTeacher.name }}</span>
            <span class="teacher-position"> {{ currTeacher.position }}</span>
            <p class="teacher-introduction"> {{ currTeacher.introduction }} </p>
          </div>
        </el-col>
      </el-row>
    </section>
  </div>
</template>
#3559c6
<script type="text/javascript">
import '@css/main/majorSet.css'
import '@css/main/teacherCarousel.css'
import { mapState } from 'vuex' // 引入mapState
export default {
  data () {
    return {
      teacherCarousel: [
        {
          id: 1,
          title: 'First Panel',
          name: '李仲麟',
          position: '计算机学院顾问',
          introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aspernatur id, fuga quaerat laboriosam architecto maxime autem pariatur. Recusandae dolores iusto tempora cum libero, fugit inventore reiciendis laborum quo et officia quis voluptatibus non enim, exercitatione',
          backgroundUrl: 'url(' + require('@img/teacher/tec1.jpg') + ')'
        },
        {
          id: 2,
          title: 'Second Panel',
          name: '邓春晖',
          position: '计算机学院院长',
          introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aspernatur id, fuga quaerat laboriosam architecto maxime autem pariatur. Recusandae dolores iusto tempora cum libero, fugit inventore reiciendis laborum quo et officia quis voluptatibus non enim, exercitatione',
          backgroundUrl: 'url(' + require('@img/teacher/tec2.jpg') + ')'
        },
        {
          id: 3,
          title: 'Third Panel',
          name: '岑有文',
          position: '计算机学院副院长',
          introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aspernatur id, fuga quaerat laboriosam architecto maxime autem pariatur. Recusandae dolores iusto tempora cum libero, fugit inventore reiciendis laborum quo et officia quis voluptatibus non enim, exercitatione',
          backgroundUrl: 'url(' + require('@img/teacher/tec3.jpg') + ')'
        },
        {
          id: 4,
          title: 'Fourth Panel',
          name: '蔡沂',
          position: '计算机学院副院长',
          introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aspernatur id, fuga quaerat laboriosam architecto maxime autem pariatur. Recusandae dolores iusto tempora cum libero, fugit inventore reiciendis laborum quo et officia quis voluptatibus non enim, exercitatione',
          backgroundUrl: 'url(' + require('@img/teacher/tec4.jpg') + ')'
        },
        {
          id: 5,
          title: 'Fifth Panel',
          name: '周小明',
          position: '计算机科学与技术教研室副主任，讲师',
          introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aspernatur id, fuga quaerat laboriosam architecto maxime autem pariatur. Recusandae dolores iusto tempora cum libero, fugit inventore reiciendis laborum quo et officia quis voluptatibus non enim, exercitatione',
          backgroundUrl: 'url(' + require('@img/teacher/tec5.jpg') + ' )'
        },
        {
          id: 6,
          title: 'Second Panel',
          name: '邓春晖',
          position: '计算机学院院长',
          introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aspernatur id, fuga quaerat laboriosam architecto maxime autem pariatur. Recusandae dolores iusto tempora cum libero, fugit inventore reiciendis laborum quo et officia quis voluptatibus non enim, exercitatione',
          backgroundUrl: 'url(' + require('@img/teacher/tec2.jpg') + ')'
        },
        {
          id: 7,
          title: 'Third Panel',
          name: '岑有文',
          position: '计算机学院副院长',
          introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aspernatur id, fuga quaerat laboriosam architecto maxime autem pariatur. Recusandae dolores iusto tempora cum libero, fugit inventore reiciendis laborum quo et officia quis voluptatibus non enim, exercitatione',
          backgroundUrl: 'url(' + require('@img/teacher/tec3.jpg') + ')'
        },
        {
          id: 8,
          title: 'Fourth Panel',
          name: '蔡沂',
          position: '计算机学院副院长',
          introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aspernatur id, fuga quaerat laboriosam architecto maxime autem pariatur. Recusandae dolores iusto tempora cum libero, fugit inventore reiciendis laborum quo et officia quis voluptatibus non enim, exercitatione',
          backgroundUrl: 'url(' + require('@img/teacher/tec4.jpg') + ')'
        },
        {
          id: 9,
          title: 'Fifth Panel',
          name: '周小明',
          position: '计算机科学与技术教研室副主任，讲师',
          introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aspernatur id, fuga quaerat laboriosam architecto maxime autem pariatur. Recusandae dolores iusto tempora cum libero, fugit inventore reiciendis laborum quo et officia quis voluptatibus non enim, exercitatione',
          backgroundUrl: 'url(' + require('@img/teacher/tec5.jpg') + ' )'
        },
        {
          id: 10,
          title: 'Fifth Panel',
          name: '周小明',
          position: '计算机科学与技术教研室副主任，讲师',
          introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aspernatur id, fuga quaerat laboriosam architecto maxime autem pariatur. Recusandae dolores iusto tempora cum libero, fugit inventore reiciendis laborum quo et officia quis voluptatibus non enim, exercitatione',
          backgroundUrl: 'url(' + require('@img/teacher/tec5.jpg') + ' )'
        },
        {
          id: 11,
          title: 'Second Panel',
          name: '邓春晖',
          position: '计算机学院院长',
          introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aspernatur id, fuga quaerat laboriosam architecto maxime autem pariatur. Recusandae dolores iusto tempora cum libero, fugit inventore reiciendis laborum quo et officia quis voluptatibus non enim, exercitatione',
          backgroundUrl: 'url(' + require('@img/teacher/tec2.jpg') + ')'
        },
        {
          id: 12,
          title: 'Third Panel',
          name: '岑有文',
          position: '计算机学院副院长',
          introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aspernatur id, fuga quaerat laboriosam architecto maxime autem pariatur. Recusandae dolores iusto tempora cum libero, fugit inventore reiciendis laborum quo et officia quis voluptatibus non enim, exercitatione',
          backgroundUrl: 'url(' + require('@img/teacher/tec3.jpg') + ')'
        },
        {
          id: 13,
          title: 'Fourth Panel',
          name: '蔡沂',
          position: '计算机学院副院长',
          introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aspernatur id, fuga quaerat laboriosam architecto maxime autem pariatur. Recusandae dolores iusto tempora cum libero, fugit inventore reiciendis laborum quo et officia quis voluptatibus non enim, exercitatione',
          backgroundUrl: 'url(' + require('@img/teacher/tec4.jpg') + ')'
        },
        {
          id: 14,
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
      ],
      currTeacher: {}
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
      events: state => state.testData.events,
      educationManagement: state => state.testData.educationManagement.slice(0, 6),
      studentWork: state => state.testData.studentWork.slice(0, 9),
      recruitInfo: state => state.testData.recruitInfo.slice(0, 9)
    })
  },
  mounted () {
  },
  methods: {
    onTeacherCarouselChange (index) {
      // 返回的是index 索引
      this.currTeacher = this.teacherCarousel[index]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@css/main/campus-teacher.scss';

section{
  display: block;
  min-width: 1200px;
  margin: 0 auto;
  padding: 30px 10px 0;
}

.campus-event-row {
  width: 1200px;
}

.campus-teacher {
  width: 100%;
  height: 500px;
  position: relative;
  // background: url('../assets/img/background/dark_wall.png');
  background: #f0f0f0;
  .el-carousel__indicators--outside {
    margin-top: 15px;
  }
  img.bg {
    position: absolute;
    right: 200px;
    height: 500px;
    display: none;
  }
}
</style>
