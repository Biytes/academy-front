<template lang="html">
  <div class="gallery-container">
    <aside class="content-side-bar" style="margin-top: 40px;">
      <a v-for="(nav, navIndex) in navBarTitles"
          :class="{ current: navIndex === currentCategory.index }"
          @click="navSwitch(navIndex, nav)"
          v-if="navBarTitles"
          :key="nav.id"><i class="iconfont icon-triangle-arrow-r"></i>{{ nav.title }}</a>
    </aside>
    <div v-loading="isLoading">
      <div class="shelf">
        <h3 class="shelf-name clearfloat">{{ title }}
        </h3>
        <ul class="shelf-inner">
          <li v-for="item in pageItems" :key="item.id"  class="shelf-item">
            <div class="shelf-item-info">
              <img class="item-img" :src="item.imageUrl" @click="showImagePage(item.imageUrl)" alt="">
              <p class="item-name">
                {{ item.title }}
              </p>
              <p class="item-owner clearfloat" style="color:#c4c4c4">
                {{ item.createdTime | formatDate }}
                <i class="iconfont icon-detail item-icon-detail" title="详情" @click="showDescription(item)"></i>
                <a :href="item.imageUrl" target="_blank" download><i class="iconfont icon-download item-icon-download" title="下载"></i></a>
              </p>
              <!-- <div class="item-tags">
                <span v-for="(tag, tagIndex) in tags" v-show="contains(item.tags, tag.name)" :key="tagIndex" :style="tag.style" class="item-tag">{{tag.name}}</span>
              </div> -->
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div style="text-align:center;font-size:18px;margin-top:15px;" v-if="pageItems.length">
      <el-pagination
        background
        layout="prev, pager, next"
        :current-page.sync="currentPage"
        :total="total"
        :page-size="pageSize"
        @current-change="getPageData">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { dateFormatter } from '@utils/index'
import { mapState, mapMutations } from 'vuex'
import { getAcademyData } from '@api/index'
export default {
  mounted () {
    this.category = this.$route.params.category
    this.section = this.$route.name
    let sectionMenuItem = this.headerMenuItem[this.headerMenuItem.findIndex(item => item.name === this.section)]
    this.title = this.currentCategory.title
    this.sectionMenuItem = sectionMenuItem
    this.navBarTitles = sectionMenuItem.subMenuItem
    this.getPageData()
  },
  watch: {
    '$route': 'onRouteChange'
  },
  data () {
    return {
      isLoading: false,
      category: '',
      section: '',
      title: '',
      navBarTitles: [],
      pageItems: [],
      sectionMenuItem: null,
      currentPage: 1,
      total: 0,
      pageSize: 10
    }
  },
  filters: {
    formatDate: function (date) { // 时间转变格式
      return dateFormatter(date, 'yyyy-M-d')
    }
  },
  computed: {
    ...mapState([
      'currentCategory',
      'headerMenuItem'
    ])
  },
  methods: {
    getPageData () {
      let params = {
        page: this.currentPage,
        category: this.category
      }
      return Promise
        .resolve()
        .then(_ => {
          this.isLoading = true
          return getAcademyData(this.section, params)
        })
        .then(res => {
          console.log(res)
          if (res.status === 200) {
            let data = res.data
            this.pageItems = data.results.map(item => this.processData(item))
            console.log(this.pageItems)
            this.total = data.count
            this.pageSize = this.total < 10 ? this.total : 10
          }
          this.isLoading = false
        })
        .catch(error => console.log(JSON.stringify(error)))
    },
    changeShelf (index) {
      this.currentShelf = index
    },
    showDescription (item) {
      const h = this.$createElement
      this.$msgbox({
        title: item.title,
        message: h('p', null, item.description),
        // [
        //   h('span', null, '内容可以是 '),
        //   h('i', { style: 'color: teal' }, 'VNode')
        // ]
        showCancelButton: true,
        confirmButtonText: '确定'
      })
    },
    processData (item) {
      return {
        id: item.id,
        image: item.image || null,
        imageUrl: `https://schooltest.zunway.pw/media/${item.image_url}` || null,
        title: item.title || null,
        description: item.desc || null,
        createdTime: item.created_time || null,
        owner: item.owner || null,
        grade: item.grade || null,
        major: item.major || null,
        stuClass: item.stu_class || null
      }
    },
    contains (arr, obj) {
      return arr.some(item => item === obj)
    },
    // 当路由发生变化
    onRouteChange () {
      this.category = this.$route.params.category
      this.title = this.navBarTitles[this.navBarTitles.findIndex(item => item.name === this.category)].title
      this.currentPage = 1
      this.getPageData()
    },
    navSwitch (index, nav) {
      // Swtich Data
      let category = {
        index,
        title: nav.title,
        path: nav.path
      }
      this.switchCategory(category)
      this.$router.push({ path: nav.path })
    },
    ...mapMutations([
      'showImagePage',
      'switchCategory'
    ])
  }
}
</script>

<style lang="scss" scoped>
.gallery-container{
  width: 85%;
  margin: auto;
  .shelf {
    font-family: "Microsoft Yahei";
    font-size: 16px;
    margin: 0 0 0 150px;
    width: 90%;

    &-inner {
      min-height: 60vh;
    }

    &-name {
      margin: 10px 0;
      font-size: 24px;
      padding:5px;
      border-bottom: 3px solid rgb(230, 121, 52);
    }

    &-mode {
      &-control {
        float: right;

        span {
          display: inline-block;
          margin: 0 3px;
          padding: 2px;
          cursor: pointer;

          &:hover {
            background: rgb(230, 121, 52);
            color:#fff;
          }
        }
      }

      &-active {
        background: rgb(230, 121, 52);
        color:#fff;
      }
    }

    &-item {
      display: inline-block;
      vertical-align: top;

      &:hover {
        .shelf-item-info {
          box-shadow: 0 2px 50px rgba(0, 0, 0, 0.25);
        }
      }

      &-info {
        height:auto;
        padding: 15px 17px 5px;

        .item-img {
          height:250px;
          width:auto;
        }

        p {
          margin:0;
        }

        .item-owner {
          font-size: 15px;
          .iconfont {
            padding: 0 5px;
          }
        }

        .item-name {
          text-align: left;
          margin: 5px 0;
          font-weight: bold;
        }

        .item-icon {
          &-detail {
            font-size: 20px;
            vertical-align: bottom;
            cursor: pointer;
            float: right;
            color:rgb(81, 119, 235);
          }

          &-download {
            font-size: 20px;
            vertical-align: bottom;
            cursor: pointer;
            float: right;
            color:rgb(212, 95, 46);
          }

          &-edit {
            font-size: 20px;
            vertical-align: bottom;
            cursor: pointer;
            float: right;
            color:rgb(18, 111, 235);
          }

          &-delete {
            font-size: 20px;
            vertical-align: bottom;
            cursor: pointer;
            float: right;
            color:rgb(252, 11, 11);
          }
        }

        .item-time {
          width: 100%;
          font-size: 14px;
          color:rgb(159, 159, 158)

          span {
            float: right;
          }
        }

        .item-tags{
          padding: 6px 0;
          text-align: right;
          .item-tag{
            font-size: 11px;
            display: inline-block;
            padding: 0 6px;
            border-radius: 8px;
          }
        }
      }
    }

    &-add-item{
      cursor: pointer;
      padding: 132px 88px;
      display: inline-block;
      font-size: 45px;
      color: rgb(194, 194, 194);
      text-align: center;
      border: 2px dashed rgb(194, 194, 194);

      &:hover{
        border: 2px dashed #000;
        color: #000;
      }
    }
  }
}

/* Extra Large Devices, Wide Screens */
@media only screen and (max-width : 1400px) {
  .gallery-container{
    width: 90%;
    margin: auto;
    .shelf {
      &-item {
        display: inline-block;
        vertical-align: top;

        &:hover {
          .shelf-item-info {
            box-shadow: 0 2px 50px rgba(0, 0, 0, 0.25);
          }
        }

        &-info {
          height:auto;
          padding: 15px 17px 5px;

          .item-img {
            height:200px;
            width:auto;
          }

          p {
            margin:0;
          }

          .item-owner {
            font-size: 15px;
            .iconfont {
              padding: 0 5px;
            }
          }

          .item-name {
            text-align: left;
            margin: 5px 0;
            font-weight: bold;
          }

          .item-icon {
            &-detail {
              font-size: 20px;
              vertical-align: bottom;
              cursor: pointer;
              float: right;
              color:rgb(81, 119, 235);
            }

            &-download {
              font-size: 20px;
              vertical-align: bottom;
              cursor: pointer;
              float: right;
              color:rgb(212, 95, 46);
            }

            &-edit {
              font-size: 20px;
              vertical-align: bottom;
              cursor: pointer;
              float: right;
              color:rgb(18, 111, 235);
            }

            &-delete {
              font-size: 20px;
              vertical-align: bottom;
              cursor: pointer;
              float: right;
              color:rgb(252, 11, 11);
            }
          }

          .item-time {
            width: 100%;
            font-size: 14px;
            color:rgb(159, 159, 158)

            span {
              float: right;
            }
          }

          .item-tags{
            padding: 6px 0;
            text-align: right;
            .item-tag{
              font-size: 11px;
              display: inline-block;
              padding: 0 6px;
              border-radius: 8px;
            }
          }
        }
      }

      &-add-item{
        cursor: pointer;
        padding: 132px 88px;
        display: inline-block;
        font-size: 45px;
        color: rgb(194, 194, 194);
        text-align: center;
        border: 2px dashed rgb(194, 194, 194);

        &:hover{
          border: 2px dashed #000;
          color: #000;
        }
      }
    }
  }
}

/* Large Devices, Wide Screens */
@media only screen and (max-width : 1200px) {
  .gallery-container{
    width: 90%;
    margin: auto;
    .shelf {
      &-item {
        display: inline-block;
        vertical-align: top;

        &:hover {
          .shelf-item-info {
            box-shadow: 0 2px 50px rgba(0, 0, 0, 0.25);
          }
        }

        &-info {
          height:auto;
          padding: 15px 17px 5px;

          .item-img {
            height:150px;
            width:auto;
          }

          p {
            margin:0;
          }

          .item-owner {
            font-size: 15px;
            .iconfont {
              padding: 0 5px;
            }
          }

          .item-name {
            text-align: left;
            margin: 5px 0;
            font-weight: bold;
          }

          .item-icon {
            &-detail {
              font-size: 20px;
              vertical-align: bottom;
              cursor: pointer;
              float: right;
              color:rgb(81, 119, 235);
            }

            &-download {
              font-size: 20px;
              vertical-align: bottom;
              cursor: pointer;
              float: right;
              color:rgb(212, 95, 46);
            }

            &-edit {
              font-size: 20px;
              vertical-align: bottom;
              cursor: pointer;
              float: right;
              color:rgb(18, 111, 235);
            }

            &-delete {
              font-size: 20px;
              vertical-align: bottom;
              cursor: pointer;
              float: right;
              color:rgb(252, 11, 11);
            }
          }

          .item-time {
            width: 100%;
            font-size: 14px;
            color:rgb(159, 159, 158)

            span {
              float: right;
            }
          }

          .item-tags{
            padding: 6px 0;
            text-align: right;
            .item-tag{
              font-size: 11px;
              display: inline-block;
              padding: 0 6px;
              border-radius: 8px;
            }
          }
        }
      }

      &-add-item{
        cursor: pointer;
        padding: 132px 88px;
        display: inline-block;
        font-size: 45px;
        color: rgb(194, 194, 194);
        text-align: center;
        border: 2px dashed rgb(194, 194, 194);

        &:hover{
          border: 2px dashed #000;
          color: #000;
        }
      }
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
