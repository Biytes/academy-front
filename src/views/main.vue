<template lang="html">
  <div class="main-page">
    <section class="campus-event-row">
      <el-row>
        <el-col :span="8">
          <campus-news type="important"
                      title="学院新闻"
                      subTitle="Top News"
                      routeLink="collegenews"
                      v-if="collegenews"
                      :newsData="collegenews"></campus-news>
        </el-col>
        <el-col :span="8">
          <campus-news type="comprehensive"
                      title="招生就业"
                      subTitle="Recruit"
                      routeLink="recruit/recruitInfo"
                      v-if="recruit"
                      :newsData="recruit"></campus-news>
        </el-col>
        <el-col :span="8">
          <campus-event :events="activity"
                        title="最近活动"
                        v-if="activity"
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
                       routeLink="educationnews/file"
                       v-if="educationnews"
                       :newsData="educationnews"></campus-news>
        </el-col>
        <el-col :span="8">
          <campus-news type="comprehensive"
                       title="学生工作"
                       subTitle="Student Work"
                       routeLink="studentnews/condition"
                       v-if="studentnews"
                       :newsData="studentnews"></campus-news>
        </el-col>
        <el-col :span="8">
          <campus-news type=""
                       title="对外合作"
                       subTitle="Cooperate"
                       routeLink="cooperateinfo/international"
                       v-if="cooperateinfo"
                       :newsData="cooperateinfo"></campus-news>
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
              <el-carousel-item v-for="teacher in teacherinfo"
                                :key="teacher.id"
                                :style="{ backgroundImage: 'url(' + teacher.imageUrl + ')' }">
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
            <p
              class="teacher-introduction"
              v-html="currTeacher.brief"
            />
          </div>
        </el-col>
      </el-row>
    </section>
  </div>
</template>
<script type="text/javascript">
import '@css/main/majorSet.css'
import '@css/main/teacherCarousel.css'
import { mapState } from 'vuex' // 引入mapState
import { getAcademyData } from '@api/index'
export default {
  data () {
    return {
      currTeacher: {},
      sections: [
        'collegenews', // 学院新闻
        'recruit', // 招生信息
        'activity', // 活动
        'educationnews', // 教育信息
        'studentnews', // 学生工作
        'cooperateinfo', // 对外合作
        'teacherinfo' // 教师
      ],
      collegenews: [],
      recruit: [],
      activity: [],
      educationnews: [],
      studentnews: [],
      cooperateinfo: [],
      teacherinfo: []
    }
  },
  computed: {
    localComputed () {
      // 不依赖state的属性写这里
      let a = 2
      return a
    },
    ...mapState({
    })
  },
  mounted () {
    let requests = []
    for (let i of this.sections) {
      requests.push(getAcademyData(i).catch(error => console.log(JSON.stringify(error))))
    }
    Promise.all(requests)
      .then(values => {
        console.log(values)
        this.collegenews = values[0].data.results.slice(0, 6).map(item => this.processArticleData(item, 0))
        this.recruit = values[1].data.results.slice(0, 9).map(item => this.processArticleData(item, 1))
        this.activity = values[2].data.results.map(item => this.processEventData(item, 2))
        this.educationnews = values[3].data.results.slice(0, 6).map(item => this.processArticleData(item, 3))
        this.studentnews = values[4].data.results.slice(0, 9).map(item => this.processArticleData(item, 4))
        this.cooperateinfo = values[5].data.results.slice(0, 9).map(item => this.processArticleData(item, 5))
        this.teacherinfo = values[6].data.map(item => this.processTeacherData(item, 6))
      })
  },
  methods: {
    onTeacherCarouselChange (index) {
      // 返回的是index 索引
      this.currTeacher = this.teacherinfo[index]
    },
    processArticleData (item, index) {
      return {
        id: item.id,
        path: `/${this.sections[index]}/${item.category}/${item.id}`,
        brief: item.preview,
        title: item.title,
        imageUrl: `https://schooltest.zunway.pw/media/${item.image_url}` || null,
        time: item.created_time
      }
    },
    processTeacherData (item, index) {
      return {
        id: item.id || null,
        imageUrl: `https://schooltest.zunway.pw/media/${item.image_url}` || null,
        image: item.image || null,
        name: item.name || null,
        brief: item.brief || null,
        position: item.position || null,
        email: item.email || null,
        content: item.content || null
      }
    },
    processEventData (item, index) {
      return {
        id: item.id || null,
        title: item.title || null,
        brief: item.desc || null,
        endTime: item.end_date || null,
        startTime: item.start_date || null
      }
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
  padding: 30px 10px;
}

.campus-event-row > .el-row {
  width: 1200px;
  margin: 0 auto;
}

.campus-teacher {
  width: 100%;
  position: relative;
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
