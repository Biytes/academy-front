<template lang="html">
  <div id="teachers">
    <article class="teacher-quotes"><p>Project Build Trust is made up of a team of people committed to meet our mandate with a clear vision and mission, supported by common values.</p></article>
    <div class="split-line"><i class="iconfont icon-down"></i></div>
    <section class="headmasters">
      <div class="headmaster" v-for="(headmaster, index) in headmasters" :key="index">
        <el-button type="text" @click="showDialog(headmaster)"><img :src="headmaster.imgUrl" alt=""/></el-button>
        <div class="headmaster-info">
          <h3>{{headmaster.name}}</h3>
          <h4>{{headmaster.position}}</h4>
          <div class="divider-line"></div>
          <p>{{headmaster.brief}}</p>
          <div class="icon-info">
            <i class="iconfont icon-phone"></i>
            <span>{{headmaster.tel}}</span>
          </div>
          <div class="icon-info">
            <i class="iconfont icon-email"></i>
            <span>{{headmaster.email}}</span>
          </div>
        </div>
      </div>
    </section>
    <div class="split-line"><i class="iconfont icon-down"></i></div>
    <section class="teachers">
      <div class="teacher" v-for="(teacher, index) in showTeachers" :key="index">
        <el-button type="text" @click="showDialog(teacher)"><img :src="teacher.imgUrl" alt=""/></el-button>
        <h3>{{teacher.name}}</h3>
      </div>
    </section>
    <div class="material-dialogBlock" @click="hideDialog" v-show="isDialogDisplay"></div>
    <div class="material-dialog material-dialog-fixed-footer" :class="{ 'dialog-open': isDialogDisplay }">
      <div class="material-dialog-content">
        <h4>{{dialogProps.name}}</h4>
        <div class="teacher-popup">
          <div class="teacher-popup-top">
              <div class="teacher-popup-info">
                <p v-show="dialogProps.hasSocialPosition">社会任职:</p>
                <p v-show="dialogProps.hasSocialPosition" v-for="(item, index) in dialogProps.socialPosition" :key="index">{{item.position}}</p>
                <p v-show="!dialogProps.hasSocialPosition">
                  <span v-show="dialogProps.educationBackground">教育背景:</span>{{dialogProps.educationBackground}}<br v-show="dialogProps.educationBackground"><br v-show="dialogProps.educationBackground">
                  <span v-show="dialogProps.socialPosition">职务/职称:</span>{{dialogProps.socialPosition}}<br v-show="dialogProps.socialPosition"><br v-show="dialogProps.socialPosition">
                  <span v-show="dialogProps.studyDirection">研究方向:</span>{{dialogProps.studyDirection}}
                </p>
                <span v-show="dialogProps.achievement">研究成果:</span>{{dialogProps.achievement}}
              </div>
              <img :src="dialogProps.imgUrl" alt="" class="teacher-pop-img">
            </div>
            <div class="teacher-popup-bottom">
              <div class="teacher-popup-brief">
                <h5>个人简介</h5>
                <p>{{dialogProps.workingExperience}}</p>
              </div>
            </div>
        </div>
      </div>
      <div class="material-dialog-footer">
        <a @click="hideDialog" class="material-dialog-action material-dialog-close btn-flat indigo accent-1 btn-position">关闭</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created () {
  },
  data () {
    return {
      isDialogDisplay: false,
      dialogProps: {
        imgUrl: '',
        name: '',
        position: '',
        brief: '',
        tel: '',
        email: '',
        hasSocialPosition: false,
        socialPosition: '',
        educationBackground: '',
        workingExperience: '',
        studyDirection: '',
        achievement: ''
      }
    }
  },
  computed: {
    headmasters () {
      return this.$store.state.testData.teachers.slice(0, 4)
    },
    showTeachers () {
      return this.$store.state.testData.teachers.slice(3)
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    showDialog (object) {
      var vm = this
      vm.dialogProps.name = object.name // 教师名称赋值
      vm.isDialogDisplay = true // 添加isDisplay class
      vm.dialogProps.imgUrl = object.imgUrl // 图片URL赋值
      vm.dialogProps.workingExperience = object.workingExperience // 个人简介赋值
      if (object.hasSocialPosition && object.achievement) { // 社会任职和学术成果都有
        vm.dialogProps.hasSocialPosition = object.hasSocialPosition // 将hasSocialPosition 设置为true
        vm.dialogProps.socialPosition = object.socialPosition // 社会任职赋值
        vm.dialogProps.achievement = object.achievement
      } else if (object.hasSocialPosition) { // 判断是否有社会任职
        vm.dialogProps.hasSocialPosition = object.hasSocialPosition // 将hasSocialPosition 设置为true
        vm.dialogProps.socialPosition = object.socialPosition // 社会任职赋值
      } else if (object.achievement) {
        vm.dialogProps.socialPosition = object.position
        vm.dialogProps.achievement = object.achievement
      } else {
        vm.dialogProps.socialPosition = object.position
        vm.dialogProps.studyDirection = object.studyDirection
        vm.dialogProps.educationBackground = object.educationBackground
      }
    },
    hideDialog () {
      var vm = this
      vm.isDialogDisplay = false
      this.resetDialog()
    },
    resetDialog () {
      var vm = this
      vm.dialogProps.imgUrl = ''
      vm.dialogProps.name = ''
      vm.dialogProps.position = ''
      vm.dialogProps.brief = ''
      vm.dialogProps.tel = ''
      vm.dialogProps.email = ''
      vm.dialogProps.hasSocialPosition = false
      vm.dialogProps.socialPosition = ''
      vm.dialogProps.educationBackground = ''
      vm.dialogProps.workingExperience = ''
      vm.dialogProps.studyDirection = ''
      vm.dialogProps.achievement = ''
    }
  }
}
</script>

<style lang="css" scoped>
.teacher-quotes{
  width:60%;
  margin: 0 auto;
}
.teacher-quotes p{
  color:#333;
  font-family: 'Open Sans';
  font-size: 26px;
  line-height: 1.6em;
  font-weight: normal;
  text-align: center;
  padding:0px 100px 0px 100px;
}
section.headmasters{
  display: block;
  min-width: 1150px;
  width: 1200px;
  margin: auto;
  margin-top: 50px;
  vertical-align: top;
}
.headmaster{
  width: 580px;
  height: 344px;
  display: inline-block;
  margin-top: 20px;
}
.headmaster button{
  padding:0;
  border:none;
  vertical-align:top;
  overflow:hidden;
}
.headmaster button span img{
  display: inline-block;
  vertical-align: top;
  width:236px;
  height:344px;
  transition: all 0.3s;
}
.headmaster button:after{
  content: '';
  width: 100%;
  height:100%;
  display: none;
  background-color: rgba(56, 107, 237, 0.64);
  z-index: top;
}
/*.headmaster button:hover img{
  transform: scale(1.5,1.5);
}*/
.headmaster button:hover .headmaster button:after{
  display: block;
}
.headmaster-info{
  vertical-align: top;
  display: inline-block;
  width:310px;
  margin-left: 10px;
}
.headmaster-info h3{
  color:#293d91;
  font-size: 20px;
  line-height: 22px;
  font-weight: normal;
  margin:0 0 5px 0;
  letter-spacing: normal;
}
.headmaster-info h4{
  font-size: 12px;
  line-height: 22px;
  font-weight: normal;
  margin:0;
  color:#333;
  letter-spacing:normal;
}
.headmaster-info p{
  margin-bottom: 31px;
}
.headmaster-info .divider-line{
  width:30px;
  height:2px;
  margin:10px 0;
  background-color: #293D91
}
.headmaster-info i{
  padding:11px;
  border:1px solid #ccc;
  border-radius: 4px;
  color:#666;
  transition:color 1s;
  display: inline;
  cursor: pointer;
}
.headmaster-info i:hover{
  color:#293d91;
}
.headmaster-info span{
  margin-left: 15px;
  color:#da2422;
  vertical-align: top;
}
.headmaster-info span:hover{
  text-decoration: underline;
}
.headmaster-info .icon-info{
  margin-top: 10px;
  height:60px;
}
.teachers{
  min-width:1150px;
  width:1300px;
  margin: auto;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
}
.teacher{
  display: inline-block;
}
.teacher .el-button{
  padding:0;
}
.teacher button{
  overflow: hidden;
  margin: 10px 10px;
}
.teacher button span img{
  display: inline-block;
  vertical-align: top;
  width:236px;
  height:244px;
  transition: all 0.4s;
}
/*.teacher button:hover img{
  transform: scale(1.3,1.3);
}*/

/*Dialog inside*/
.teacher-popup{
  width: 96%;
  margin:auto;
}
.teacher-popup-top{
  width: 100%;
  position: relative;
  min-height: 232px;
}
.teacher-popup-top .teacher-popup-info{
  display: inline-block;
  width: 50%;
  padding: 5px;
  float: left;
  line-height: 1.6;
  margin-bottom: 20px;
}
.teacher-popup-top .teacher-popup-info span{
  color: #215868;
  font-size: 12pt;
}
.teacher-popup-top img{
  float: right;
  width: 240px;
  height: 230px;
  border: 0;
}
.material-dialog h5{
  font-size: 1.64rem;
  line-height: 110%;
  margin: .82rem 0 .656rem 0;
  font-weight: 400;
}
.teacher-popup-brief p{
  line-height: 1.5;
  font-size: 16px;
  text-indent: 2rem;
}
.teacher-popup-bottom{
  padding: 0 5px;
  clear:both;
}
.teacher h3{
  margin: 0;
}
@media (min-width: 1200px) and (max-width: 1366px) {
  .teacher-quotes p{
    font-size: 17px;
  }
  .split-line{
    margin-top: 22px;
  }
  section.headmasters{
    width: 950px;
    min-width: 950px;
  }
  .headmaster{
    width: 50%;
    height: 285px;
  }
  .headmaster-info{
    width: 262px;
  }
  .headmaster-info h3{
    margin-bottom: 2px;
  }
  .headmaster-info p{
    font-size: 12px;
  }
  .headmaster-info .divider-line{
    margin: 5px 0;
  }
  .headmaster button span img{
    width: 177px;
    height: 258px;
  }
  .headmaster-info i{
    padding: 5px;
  }
  .headmaster-info span{
    margin-left: 10px;
    font-size: 15px;
  }
  .teacher-popup-top .teacher-popup-info span{
    font-size: 10pt;
  }
  .teacher-popup-top img{
    width: 170px;
    height: 220px;
  }
  .teacher button span img{
    width: 188.8px;
    height: 195.2px;
  }
  .teachers{
    min-width: 1100px;
    width: 1100px;
  }
  .material-dialog{
    width: 45%;
    max-height: 78%;
  }
  .material-dialog.material-dialog-fixed-footer{
    height: 78%;
  }
  .material-dialog-content h4{
    font-size: 1.48rem;
    margin: 0.14rem 0 0.412rem 0;
  }
  .teacher-popup-top .teacher-popup-info{
    font-size: 13px;
  }
  .progress-nav .contents{
    width: 94%;
  }
  .material-dialog h5{
    font-size: 1.14rem;
  }
  .teacher-popup-brief p{
    font-size: 14px;
  }
}
</style>
