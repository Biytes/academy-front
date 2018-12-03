<template lang="html">
  <div id="gallery-container">
    <aside class="content-side-bar" style="margin-top: 40px;">
      <a v-for="(nav, navIndex) in navBarTitles"
          :class="{ current: navIndex === currentCategory.index }"
          @click="navSwitch(navIndex, nav)"
          v-if="navBarTitles"
          :key="nav.id"><i class="iconfont icon-triangle-arrow-r"></i>{{ nav.title }}</a>
    </aside>
    <div id="shelves" v-loading="isLoading">
      <div class="shelf">
        <h3 class="shelf-name clearfloat">{{ title }}
        </h3>
        <ul class="shelf-inner">
          <li v-for="item in pageItems" :key="item.id"  class="shelf-item">
            <div class="shelf-item-info">
              <img class="item-img" :src="item.imageUrl" @click="showImagePage(item.imgUrl)" alt="">
              <p class="item-name">
                {{item.name}}
              </p>
              <p class="item-owner clearfloat" style="color:#c4c4c4">
                {{ item.createdTime | formatDate }}
                <i class="iconfont icon-detail item-detail-icon" title="详情" @click="showDescription(item)"></i>
                <a :href="item.imageUrl" download><i class="iconfont icon-download item-download-icon" title="下载"></i></a>
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
        pege: this.currPage,
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
        .catch(error => this.showError(error))
    },
    changeShelf (index) {
      this.currentShelf = index
    },
    showDescription (item) {
      const h = this.$createElement
      this.$msgbox({
        title: item.name + '   ' + item.owner,
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
        name: item.name || null,
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
      this.currentPage = 1
      this.getPageData()
    },
    ...mapMutations([
      'showImagePage',
      'switchCategory'
    ])
  }
}
</script>

<style lang="css" scoped>
#gallery-container{
  width: 85%;
  margin: auto;
}
.gallery-nav *{
  box-sizing: border-box;
}
.gallery-nav{
  overflow: auto;
  display: inline-block;
}

.gallery-nav{
  font-size: 16px;
  line-height: 1.6;
  font-family: 'Roboto', sans-serif;
  vertical-align: top;
}

.gallery-nav .nav-bar {
  padding: 1em;
  width: 14em;
  margin-top: 5px;
  margin-top: 50px;
  line-height: 2;
}
.gallery-nav .nav-bar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.gallery-nav .nav-bar ul ul {
  padding-left: 2em;
}
.gallery-nav .nav-bar li a {
  display: inline-block;
  color: #aaa;
  padding-left: 5px;
  text-decoration: none;
}

.gallery-nav .nav-bar li.visible > a {
  border-left: 2px solid #111;
  color: #111;
}
.gallery-nav a.current{
  color: #111
}
#shelves{
  text-align: left;
  margin: 0 auto;
  width: 76%;
  min-width: 1200px;
}
.shelf{
  font-family: "Microsoft Yahei";
  font-size: 16px;
  padding: 10px;
  min-height: 600px;}
.shelf ul{
  list-style:none;
  margin: 0;
  padding:0;
  text-align: left;
}
.shelf a{
  text-decoration: none;
}
.shelf-name{
  font-size: 24px;
  padding:5px;
  border-bottom: 3px solid rgb(230, 121, 52);
}
.shelf-mode-change{
  float: right;
}
.shelf-mode-change span{
  display: inline-block;
  margin: 0 3px;
  padding: 2px;
  cursor: pointer;
}
.shelf-mode-change span:hover{
  background: rgb(230, 121, 52);
  color:#fff;
}
.shelf-mode-active{
  background: rgb(230, 121, 52);
  color:#fff;
}
.shelf-item{
  display: inline-block;
  vertical-align: top;
}
.shelf-item:hover .shelf-item-info{
  box-shadow: 0 2px 50px rgba(0, 0, 0, 0.25);
}
.shelf-item-info{
  height:auto;
  padding: 15px 17px 5px;
}
.shelf-item-info .item-img{
  height:200px;
  width:auto;
}
.shelf-item-info p{
  margin:0;
}
.shelf-item-info .item-owner{
    font-size: 15px;
}
.shelf-item-info .item-name{
  text-align: left;
  margin: 5px 0;
  font-weight: bold;
}
.item-detail-icon{
  font-size: 20px;
  vertical-align: bottom;
  cursor: pointer;
  float: right;
  color:rgb(81, 119, 235);
}
.item-download-icon{
  font-size: 20px;
  vertical-align: bottom;
  cursor: pointer;
  float: right;
  color:rgb(212, 95, 46);
}
.item-edit-icon{
  font-size: 20px;
  vertical-align: bottom;
  cursor: pointer;
  float: right;
  color:rgb(18, 111, 235);
}
.item-delete-icon{
  font-size: 20px;
  vertical-align: bottom;
  cursor: pointer;
  float: right;
  color:rgb(252, 11, 11);
}
.item-time{
  width: 100%;
  font-size: 14px;
  color:rgb(159, 159, 158)
}
.item-time span{
  float: right;
}
.item-tags{
  padding: 6px 0;
  text-align: right;
}
.item-tag{
  font-size: 11px;
  display: inline-block;
  padding: 0 6px;
  border-radius: 8px;
}
#shelf-add-item{
  cursor: pointer;
  padding: 132px 88px;
  display: inline-block;
  font-size: 45px;
  color: rgb(194, 194, 194);
  text-align: center;
  border: 2px dashed rgb(194, 194, 194);
}
#shelf-add-item:hover{
  border: 2px dashed #000;
  color: #000;
}
.clearfloat:after {
  display: block;
  clear: both;
  content: "";
  visibility: hidden;
  height: 0
}
.clearfloat {
  zoom: 1
}
#add-page {
  text-align: left;
  padding-left: 55px;
}
#add-page > div{
  margin: 15px auto;
  width: 80%;
}
#add-page > div > label{
  margin-right: 15px;
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 18px;
}
.img-container{
  width: calc(80% - 55px);
  padding-left: 55px;
  text-align: left;
}
.item-description-text + .custom__input{
  height:150px;
}
#add-page .custom__input{
  width: 80%;
  box-shadow: 0px 6px 10px 7px rgba(0, 0, 0, 0.1);
}
input[type="file"]#imgUrl{
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}
#showImg{
  display: inline-block;
  vertical-align: bottom;
  width: 300px;
  height:300px;
}
.image-upload-text,.item-description-text{
  vertical-align: top;
}
.image-upload{
  display: inline-block;
  border:2px dashed grey;
  color: grey;
  vertical-align: bottom;
  position: relative;
  cursor: pointer;
}
.image-upload:after {
  content: 'add';
  font-family: 'Material Icons';
  position: absolute;
  font-size: 2.5rem;
  color: grey;
  top: calc(50% - 1.7rem);
  left: calc(50% - 1.25rem);
  z-index: -1;
}
.image-upload:hover{
  border:2px dashed #000;
  color: #000;
}
#addTags{
  vertical-align: -webkit-baseline-middle;
  cursor: pointer;
  color:rgb(121, 124, 123);
}
#addTags:hover{
  color:rgb(37, 36, 36);
}
.description-dialog{

}
.el-message-box__message p{

}
@media (min-width: 1200px) and (max-width: 1366px) {
  .shelf-item-info .item-img{
    height: 142.29px;
  }
  .shelf-item-info .item-name{
    font-size: 15px;
  }
  .shelf-item-info .item-owner{
    font-size: 14px;
  }
  .gallery-nav .nav-bar{
    width: 11em;
  }

}
</style>
