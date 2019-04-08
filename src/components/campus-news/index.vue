<template lang="html">
  <div class="campus-news-container">
    <div :class="className">
      <div class="panel-header">
        <img src="@assets/icons/item.png">
        <span class="mytitle">
          {{ title }}
          <small>{{ subTitle }}</small>
        </span>
      </div>
      <div class="campus-news-content">
        <router-link class="img-news clearfloat"
                     v-if="type === 'important'"
                     tag="a"
                     :to="newsData[0].path"
                     >
          <img v-if="newsData[0].imageUrl" :src="newsData[0].imageUrl" alt="">
          <span class="img-title"><a href="">{{ newsData[0].title }}</a></span>
          <span class="img-describe">{{ newsData[0].brief }}</span>
          <span class="img-news-date">{{ newsData[0].time | formatDate }}</span>
        </router-link>
        <ul>
          <el-tooltip v-for="(item, index) in newsData"
                      :key="index" v-if="type !== 'important' || index !== 0"
                      class="item"
                      effect="dark"
                      :content="item.brief"
                      placement="top-end"
                      :disabled="!item.brief">
            <li :id="item.id">
              <el-row>
                <el-col :span="20">
                  <router-link tag="a" :to="item.path" >{{ item.title }}</router-link>
                </el-col>
                <el-col :span="4">
                  <span class="campus-news-content-date">{{ item.time | formatDate}}</span>
                </el-col>
              </el-row>
            </li>
          </el-tooltip>
        </ul>
        <p class="campus-news-more"><router-link :to="routeLink" tag="a">继续阅读<img src="@assets/icons/right-arrow.png" alt=""></router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
import { dateFormatter } from '@utils/index'
export default {
  name: 'campus-news',
  props: ['title', 'subTitle', 'type', 'newsData', 'routeLink'],
  data () {
    return {
    }
  },
  computed: {
    className () {
      return 'campus-news ' + this.type
    }
  },
  filters: {
    formatDate: date => { // 时间转变格式
      return dateFormatter(date, 'M月d日')
    }
  }
}
</script>

<style lang="scss" scoped>
.campus-news-container {
  display: inline-block;

  .campus-news {
    margin: 0 10px;
    vertical-align: top;
    font-family: "Microsoft Yahei";
    a {
      text-decoration: none;
      color: #333;
    }

    .panel-header{
      padding: 10px 15px 15px;
      border: 0;

      img {
        width:22px;
        height: 22px;
        position: relative;
        top: 3px;
        left:0px;
      }
    }

    .mytitle {
      font-size: 20px;
      font-weight: bold;
      color: #000;

      small {
        font-size: 16px;
        font-weight: normal;
        color: #c4c4c4;
      }
    }

    .campus-news-content {
      width:320px;
      height: 375px;
      padding: 5px 10px;
      border-bottom: 2px solid #dedede;
      border-top: 2px solid #dedede;

      .img-news {
        width: 100%;
        height:143px;
        padding: 5px 0;
        display: block;

        img {
          width: 175px;
          height:150px;
          float: left;
          margin-right: 5px;
        }

        .img-title {
          height:44px;
          display: block;
          overflow:hidden;
          padding: 0 5px;
        }

        .img-describe {
          font-size: 13px;
          color: #a8a0a0;
          padding: 0 5px;
          height: 80px;
          cursor: pointer;
          overflow: hidden;
          &:hover {
            color: #6B8AC2;
          }
        }

        .img-news-date {
          display: block;
          text-align: right;
          margin-top: 5px;
          font-size: 13px;
          color: #a8a0a0;
        }
      }

      .img-news:hover {
        .img-title {
          text-decoration: underline;
          color: #6B8AC2;
        }
      }

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        padding-top:5px;

        li {
          display: block;
          width: 100%;
          font-size: 14px;
          margin-bottom: 13px;
          line-height: 25px;

          a {
            text-decoration: none;
            display: inline-block;
            width: 94%;
            overflow: hidden;
            height:20px;
            text-overflow: ellipsis;
            vertical-align: bottom;
            white-space: nowrap;
            color:#000;
            &:hover {
              color:rgb(27, 115, 186);
              text-decoration: underline;
            }
          }

          span {
            text-align: right;
            display: inline-block;
            height: 20px;
            font-size: 12px;
            color: #a8a0a0;
            vertical-align: bottom;
          }
        }
      }
    }

    .campus-news-more{
      margin: 0;

      a {
        font-size: 14px;
        text-decoration:none;
        color:#333;
        &:hover {
          color:#6B8AC2;
          text-decoration: none;
        }

        img {
          vertical-align:bottom;
          margin-left:5px;
        }
      }

    }
  }
}

</style>
