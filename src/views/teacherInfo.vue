<template lang="html">
  <div class="teacher-container">
    <!-- <p class="teacher-quotes">
      Project Build Trust is made up of a team of people committed to meet our
      mandate with a clear vision and mission, supported by common values.
    </p> -->
    <div class="teachers">
      <div class="teacher"
           v-for="teacher in pageItems"
           v-if="pageItems.length"
           :key="teacher.id">
           <div class="teacher-image">
              <img :src="teacher.imageUrl"
                   alt=""
                   @click="showDialog(teacher)">
           </div>
        <span class="teacher-name">{{ teacher.name }}</span>
      </div>
    </div>
    <div class="material-dialogBlock" @click="hideDialog" v-show="isDialogDisplay"></div>
    <div class="material-dialog material-dialog-fixed-footer" :class="{ 'dialog-open': isDialogDisplay }" v-loading="isDialogLoading">
      <div class="material-dialog-content">
        <h4>{{currTeacher.name}}</h4>
        <div class="teacher-popup" v-html="currTeacher.content">
        </div>
      </div>
      <div class="material-dialog-footer">
        <a @click="hideDialog" class="material-dialog-action material-dialog-close btn-flat indigo accent-1 btn-position">关闭</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getAcademyData, editAcademyData } from '@api/index'
export default {
  mounted () {
    this.section = this.$route.name
    let sectionMenuItem = this.headerMenuItem[this.headerMenuItem.findIndex(item => item.name === this.section)]
    this.title = sectionMenuItem.title
    this.getPageData()
  },
  data () {
    return {
      isDialogDisplay: false,
      isDialogLoading: false,
      title: '',
      pageItems: [],
      dialogContent: '',
      currTeacher: {}
    }
  },
  computed: {
    ...mapState([
      'headerMenuItem'
    ])
  },
  methods: {
    getPageData () {
      // 获取页面数据
      return Promise
        .resolve()
        .then(_ => {
          this.isLoading = true
          return getAcademyData(this.section)
        })
        .then(res => {
          console.log(res)
          if (res.status === 200) {
            let data = res.data
            this.pageItems = data.map(item => this.processData(item))
            console.log(this.pageItems)
            this.total = data.count
            this.pageSize = this.total < 10 ? this.total : 10
          }
          this.isLoading = false
        })
        .catch(error => console.log(JSON.stringify(error)))
    },
    processData (item) {
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
    showDialog (teacher) {
      this.isDialogDisplay = true
      this.isDialogLoading = true
      editAcademyData(this.section, teacher.id)
        .then(res => {
          if (res.status === 200) {
            this.currTeacher = res.data
            this.isDialogLoading = false
          }
        })
    },
    hideDialog () {
      this.currTeacher = {}
      this.isDialogDisplay = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@css/custom/Dialog.scss';
.teacher-container {
  width: 80%;
  min-width: 900px;
  margin: 0 auto;
  .teacher-quotes {
    width: 60%;
    min-width: 800px;
    padding: 30px 0;
    margin: 0 auto;
    font-size: 24px;
    text-align: center;
    line-height: 1.5;
  }
  .teachers {
    padding: 30px 50px;
    box-sizing: border-box;
    width: 100%;
    text-align: center;
    .teacher {
      width: 200px;
      margin: 10px 20px;
      display: inline-block;
      &-name {
        display: block;
        margin-top: 10px;
        font-size: 18px;
        font-weight: bold;
      }

      &-image {
        width: 200px;
        height: 200px;
        cursor: pointer;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          transition: transform 0.33s;
          &:hover {
          transform: scale(1.2);
        }
        }
      }
    }
  }
}

/* Extra Large Devices, Wide Screens */
@media only screen and (max-width : 1400px) {
  .teacher-container {
    .teacher-quotes {
      font-size: 20px;
      line-height: 1.5;
    }
    .teachers {
      padding: 20px 50px;
      .teacher {
        width: 180px;
        margin: 10px 20px;
        &-name {
          font-size: 17px;
        }

        &-image {
          width: 180px;
          height: 180px;
        }
      }
    }
  }
}

/* Large Devices, Wide Screens */
@media only screen and (max-width : 1200px) {
  .teacher-container {
    .teachers {
      padding: 20px 30px;
    }
  }
}

/* Medium Devices, Desktops */
@media only screen and (max-width : 992px) {
}

/* Small Devices, Tablets */
@media only screen and (max-width : 768px) {
}
</style>
