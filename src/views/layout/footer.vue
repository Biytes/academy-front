<template lang="html">
  <footer class="layout-footer" @click="resetSelectForm">
    <div class="wrapper-footer">
      <section class="wrapper-footer-top">
        <div class="wrapper-footer-top-left">
          <ul class="address">
            <li>
              <h3>Contact Us</h3>
            </li>
            <li>地址：广州市花都区新华街道学府路一号</li>
            <li>邮编：510800</li>
            <!-- <li>电话：020-36903155(学院办公室)</li>
            <li>020-36903151(学生工作办公室)</li> -->
          </ul>
        </div>
        <div class="wrapper-footer-top-right">
          <img
            class="logo"
            src="@img/logo/logo.png"
            alt=""
          >
          <img
            class="academy"
            src="@img/logo/学院.png"
            alt=""
          >
        </div>
      </section>
      <section class="wrapper-footer-bottom">
        <el-row>
          <el-col
            :span="12"
            align="left"
            class="wrapper-footer-bottom-left"
          >
            <h4>Copyright
              <a href="/back">@</a> 2018华南理工大学广州学院 计算机工程学院
            </h4>
          </el-col>
          <el-col
            :span="12"
            align="right"
            class="wrapper-footer-bottom-right"
          >
            <ul>
              <li v-for="(department, index) in departments"
                  :key="index"
                  @click.stop="switchSelectForm(index)">{{ department.triggerName }}
                  <i :class="[currSelectForm === index ? 'icon-transform' : '', 'iconfont' ,'icon-down-copy']"></i>
                <div
                  v-show="currSelectForm === index"
                  :class="[index === 1 ? 'second-select-form' : '', 'select-form']"
                >
                  <ul>
                    <li
                      v-for="(item,index) in department.departmentName"
                      :key="index"
                    >
                      <a

                        :href="item.href"
                        target="_blank_"
                      >
                        {{item.name}}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </el-col>
        </el-row>
      </section>
    </div>
  </footer>
</template>

<script>
import { department } from '@/config/common'
export default {
  data () {
    return {
      departments: department,
      currSelectForm: null
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
.layout-footer {
  background: #293d91;
  height: 200px;
  min-width: 940px;
  color: #D4D2D2;
  // background: url('../../static/img/background/footerBackground.png') no-repeat;
  .wrapper-footer {
    position:relative;
    height: 100%;
    width: 75%;
    margin: 0 auto;

    &-top {
      position: absolute;
      top: 10px;
      height: 75%;
      width: 100%;
      h3 {
        margin:5px 0;
      }

      &-left {
        float: left;
        /* border:2px solid rgb(80, 81, 184); */
        border-radius: 4px;
        padding: 0 20px;

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

    &-bottom {
      position: absolute;
      bottom: 0;
      border-top: 3px solid #efefef;
      height: 20%;
      width: 100%;

      &-left {
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
            position: relative;
            display: inline-block;
            padding: 8px 20px 6px;
            font-size: 15px;
            cursor: pointer;

            &:hover{
              color: rgb(59, 82, 240);
            }

            i {
              display: inline-block;
              vertical-align: middle;
              margin-left: 5px;
              transition: all 0.33s;
              line-height: 24px;
              font-size: 16px;
              &.icon-transform {
                margin-top: -2px;
                transform: rotate(180deg);
                transform-origin: center;
              }
            }

            .select-form{
              position: absolute;
              right: -30px;
              bottom: 33px;
              background-color: rgba(34, 34, 34, 0.76);
              border-radius: 8px;
              padding: 15px;
              height:auto;
              width:250px;
              line-height: 25px;
              color:#fff;
              transition: all 0.33s;
              box-shadow: 0 0 8px #DDD;
              ul {
                list-style: none;
                margin: auto;
                padding:0;
                width:94%;
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
  .layout-footer {
    .wrapper-footer {
      width: 80%;
      &-top {
        h3 {
          margin:5px 0;
        }

        &-left {
          li:first-child ~ li {
            font-size: 14px;
          }
        }
      }

      &-bottom {
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
  .layout-footer {
    min-width: 1200px;
  }
}

/* Medium Devices, Desktops */
@media only screen and (max-width : 992px) {

}

/* Small Devices, Tablets */
@media only screen and (max-width : 768px) {

}

</style>
