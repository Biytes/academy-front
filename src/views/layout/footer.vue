<template lang="html">
  <footer :style="{background: 'url(' + footerBackgroundImg + ') no-repeat top right'}" class="footer-container" @click="resetSelectForm">
    <div class="wrapper-footer">
      <div class="wrapper-footer-top">
        <div class="footer-top-left">
          <ul>
            <li><h3>Contact Us</h3></li>
            <li>地址：广州市花都区新华街道学府路一号</li>
            <li>邮编：510800</li>
            <li>电话：020-36903155(学院办公室)</li>
            <li>020-36903151(学生工作办公室)</li>
          </ul>
        </div>
        <div class="footer-top-right">
          <img src="@img/logo/logo.png" alt="">
          <img src="@img/logo/学院.png" alt="">
        </div>
      </div>
      <div class="wrapper-footer-bottom">
        <el-row>
          <el-col :span="12" align="left" class="footer-bottom-left">
            <h4>Copyright <a href="../../Backstage/dist/index.html">@</a> 2018华南理工大学广州学院 计算机工程学院</h4>
          </el-col>
          <el-col :span="12" align="right" class="footer-bottom-right">
            <ul>
              <li v-for="(department, index) in departments"
                  :key="index"
                  @click.stop="switchSelectForm(index)">{{ department.triggerName }}
                  <i :class="[currSelectForm === index ? 'icon-transform' : '', 'iconfont' ,'icon-down-copy']"></i>
                <div :class="[index === 1 ? 'second-select-form' : '', 'select-form']" v-show="currSelectForm === index">
                  <ul>
                    <li v-for="(Item,index) in department.departmentName" :key="index"><a href="#">{{Item.Name}}</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </el-col>
        </el-row>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      departments: [
        {
          triggerName: '学校部门',
          departmentName: [{Name: '学校办公室'}, {Name: '教务处'}, {Name: '学生处'}, {Name: '学校团委'}, {Name: '人事处'},
            {Name: '后勤处'}, {Name: '财务处'}, {Name: '图书馆'}, {Name: '招生办'}, {Name: '校工会'}],
          isClass: false
        },
        {
          triggerName: '二级学院',
          departmentName: [{Name: '计算机工程学院'}, {Name: '管理学院'}, {Name: '汽车工程学院'}, {Name: '机械工程学院'}, {Name: '电子信息工程学院'}, {Name: '电气工程学院'}, {Name: '外国语学院'}, {Name: '珠宝学院'}, {Name: '建筑学院'}, {Name: '土木工程学院'}, {Name: '体育部'},
            {Name: '学生就业指导中心'}, {Name: '思想政治理论课教学部'}, {Name: '继续教育与培训中心'}, {Name: '国际教育与交流中心'}, {Name: '网络及教育技术中心'}, {Name: '工程研究院'}, {Name: '中兴通信3G学院'}, {Name: '国际商学院'}, {Name: '国际工程师学院'}],
          isClass: true
        },
        {
          triggerName: '校外链接',
          departmentName: [{Name: '教育部'}, {Name: '广东省教育厅'}, {Name: '华南理工大学'}, {Name: '华南师范大学'}, {Name: '暨南大学'}],
          isClass: false
        }
      ],
      currSelectForm: null,
      footerBackgroundImg: require('@img/background/footerBackground.jpg')
    }
  },
  mounted () {
  },
  methods: {
    switchSelectForm (index) {
      this.currSelectForm = index
    },
    resetSelectForm () {
      this.currSelectForm = null
    }
  }
}
</script>

<style lang="scss">
.footer-container {
  background-size: cover;
  color: #D4D2D2;
  height: 200px;
  min-width: 940px;
  .wrapper-footer {
    height: 100%;
    width: 75%;
    margin: 0 auto;
    position:relative;

    &-top {
      height: 75%;
      width: 100%;
      position: absolute;
      top: 10px;
      h3 {
        margin:5px 0;
      }
    }

    &-bottom {
      position: absolute;
      height: 20%;
      width: 100%;
      bottom: 0px;
      border-top: 3px solid rgb(96, 96, 96);
    }

    .footer-top {
      &-left {
        padding: 0 20px;
        float: left;
        /* border:2px solid rgb(80, 81, 184); */
        border-radius: 4px;

        li:first-child ~ li {
          padding: 3px;
          font-size: 15px;
        }
      }

      &-right {
        float: right;
        padding: 20px;

        img {
          display: block;
          width:202.2px;
          height:58.783px;
        }
      }
    }

    .footer-bottom {
      &-left {
        padding: 0 20px;
        h4 {
          margin:9px 5px;
          font-size: 14px;
        }
        a:first-child {
          color: inherit;
          &:hover {
            color: #333;
          }
        }
      }

      &-right {
        padding: 0 20px;
        & > ul {
          & > li {
            display: inline-block;
            position: relative;
            font-size: 15px;
            padding: 8px 20px 6px;
            cursor: pointer;

            &:hover{
              color: rgb(59, 82, 240);
            }

            i {
              vertical-align: middle;
              font-size: 16px;
              line-height: 24px;
              margin-left: 5px;
              display: inline-block;
              transition: all 0.33s;
              &.icon-transform {
                transform: rotate(180deg);
                margin-top: -2px;
                transform-origin: center;
              }
            }

            .select-form{
              position: absolute;
              height:auto;
              width:250px;
              padding: 15px;
              background-color: rgba(34, 34, 34, 0.76);
              border-radius: 8px;
              color:#fff;
              line-height: 25px;
              bottom: 33px;
              right: -30px;
              transition: all 0.33s;
              box-shadow: 0 0 8px #DDD;
              ul {
                list-style: none;
                padding:0;
                width:94%;
                margin: auto;
                li {
                  display: inline-block;
                  text-align: left;
                  width:50%;
                  line-height: 25px;
                  &:hover {
                    a{
                      background-color:#3355ff;
                    }
                  }
                  a {
                    display: block;
                    padding:4px;
                    text-decoration: none;
                    color:#ddd;
                    transition: all 0.33s;
                  }
                }
              }
            }

            .select-form.second-select-form {
              width:400px;
              height:auto;
              &::-webkit-scrollbar {
                width: 3px;
                height: 8px;
                background-color: #655d5d;
              }
              &::-webkit-scrollbar-track {
                -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
                box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
                border-radius: 10px;
                background-color: #f4f4f4;
              }

              &::-webkit-scrollbar-thumb {
                border-radius: 10px;
                -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
                box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
                background-color: #655d5d;
              }
            }
            .second-select-form::-webkit-scrollbar-thumb {
                border-radius: 10px;
                -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
                box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
                background-color: #655d5d;
            }
          }
        }
      }
    }
  }
}

/* Extra Large Devices, Wide Screens */
@media only screen and (max-width : 1400px) {
  .footer-container {
    .wrapper-footer {
      width: 80%;
      &-top {
        h3 {
          margin:5px 0;
        }
      }
      .footer-top {
        &-left {
          li:first-child ~ li {
            font-size: 14px;
          }
        }
      }

      .footer-bottom {
        &-left {
          padding: 0 5px;
          h4 {
            margin:9px 2px;
            font-size: 13px;
          }
          a:first-child {
            color: inherit;
            &:hover {
              color: #333;
            }
          }
        }

        &-right {
          padding: 0 10px;
          & > ul {
            & > li {
              display: inline-block;
              position: relative;
              font-size: 15px;
              padding: 8px 5px 6px;
              cursor: pointer;

              &:hover{
                color: rgb(59, 82, 240);
              }

              i {
                font-size: 15px;
              }
            }
          }
        }
      }
    }
  }
}

/* Large Devices, Wide Screens */
@media only screen and (max-width : 1200px) {
}

/* Medium Devices, Desktops */
@media only screen and (max-width : 992px) {

}

/* Small Devices, Tablets */
@media only screen and (max-width : 768px) {

}

</style>
