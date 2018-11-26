<template lang="html">
  <div class="teacher-container">
    <p class="teacher-quotes">
      Project Build Trust is made up of a team of people committed to meet our
      mandate with a clear vision and mission, supported by common values.
    </p>
    <div class="teachers">
      <div class="teacher"
           v-for="(teacher, index) in showTeachers"
           :key="index">
           <div class="teacher-image">
              <img :src="teacher.imgUrl"
                  alt=""
                  @click="showDialog(index)">
           </div>
        <span class="teacher-name">{{ teacher.name }}</span>
      </div>
    </div>

    <el-dialog
      title="提示"
      :visible.sync="isDialogDisplay"
      width="30%">
      <div v-html="dialogContent"></div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="isDialogDisplay = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  created () {
  },
  data () {
    return {
      isDialogDisplay: false,
      dialogContent: '暂无信息',
      currTeacher: {

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
    showDialog (index) {
      this.isDialogDisplay = true
    }
  }
}
</script>

<style lang="scss" scoped>
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
