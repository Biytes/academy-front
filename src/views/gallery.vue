<template lang="html">
  <div id="gallery-container">
    <section class="gallery-nav">
      <div class="nav-bar">
        <ul>
          <li v-for="(shelf, shelfNav) in shelves" :key="shelfNav" :class="{visible: shelfNav == currentShelf }">
            <a :href="'#'+shelf.shelfName" @click="changeShelf(shelfNav)">{{shelf.shelfName}}</a>
          </li>
          <!-- <li><a href="#intro">Intro</a></li>
          <li class="visible">
            <a href="#dev">Developer Mode</a>
            <ul>
              <li><a href="#dev-edit-html">Edit HTML</a></li>
              <li><a href="#dev-element-classes">Element Classes</a></li>
              <li><a href="#dev-slide-classes">Slide Classes</a></li>
              <li><a href="#dev-export-html">Export HTML</a></li>
            </ul>
          </li>
          <li>
            <a href="#css">CSS Editor</a>
            <ul>
              <li><a href="#css-fonts">Custom Fonts</a></li>
              <li><a href="#css-developer-mode">Developer Mode</a></li>
              <li><a href="#css-examples">Examples</a></li>
            </ul>
          </li> -->
        </ul>
      </div>
    </section>
    <div id="shelves">
      <div v-for="(shelf, shelfIndex) in shelves" :key="shelfIndex" class="shelf" :id="shelf.shelfName">
        <h3 class="shelf-name clearfloat">{{shelf.shelfName}}
        </h3>
        <ul class="shelf-inner">
          <li v-for="(item, itemIndex) in shelf.Items" :key="itemIndex"  class="shelf-item">
            <div class="shelf-item-info">
              <img class="item-img" :src="item.imgUrl" @click="showImagePage(item.imgUrl)" alt="">
              <p class="item-name">
                {{item.name}}
              </p>
              <p class="item-owner clearfloat" style="color:#c4c4c4">
                {{ item.awardTime | formatDate }}
                <i class="iconfont icon-detail item-detail-icon" title="详情" @click="showDescription(item)"></i>
                <a :href="item.imgUrl" download><i class="iconfont icon-download item-download-icon" title="下载"></i></a>
              </p>
              <div class="item-tags">                             <!--明天改-->
                <span v-for="(tag, tagIndex) in tagsColor" v-show="contains(item.tags, tag.name)" :key="tagIndex" :style="tag.style" class="item-tag">{{tag.name}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { dateFormatter } from '@utils/index'
import { mapMutations } from 'vuex'
export default {
  mounted () {
    this.section = this.$route.name
  },
  data () {
    return {
      // editShelfItem: {
      //   Items: {
      //     name: '',
      //     owner: '',
      //     awardTime: '',
      //     imgUrl: require(+'../assets/img/testImage/1.jpg'),
      //     tags: {
      //       ACM: false,
      //       LQB: true
      //     }
      //   }
      // },
      currentShelf: 0,
      tags: ['LQB', 'ACM', '广州', '深圳'], // getTags Type
      tagsColor: [{
        name: 'ACM',
        style: {
          background: 'rgb(231, 172, 251)'
        }
      }, {
        name: 'LQB',
        style: {
          background: 'rgb(65, 179, 244)'
        }
      }, {
        name: '深圳',
        style: {
          background: 'rgb(87, 119, 209)'
        }
      }, {
        name: '广州',
        style: {
          background: 'rgb(207, 90, 48)'
        }
      }],
      shelves: [{
        id: 0,
        shelfName: 'Credential',
        editShelfMode: false,
        Items: [{
          name: 'ACM 二等奖',
          owner: '黎启浚',
          awardTime: 'Mon Jul 02 2018 10:40:35 GMT+0800 (台北标准时间)',
          imgUrl: require('@img/assc/1.jpg'),
          tags: ['ACM', 'LQB'],
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi tempora quasi hic, voluptate iure incidunt modi aut. Beatae quod sapiente reprehenderit molestiae deleniti temporibus facilis nemo illum voluptates architecto provident accusantium hic in qui itaque et, inventore. Provident recusandae dolore laboriosam sit, esse incidunt quibusdam doloribus praesentium deleniti numquam. Facilis.'
        }, {
          name: 'ACM 二等奖',
          owner: '黎启浚',
          awardTime: 'Mon Jul 02 2018 10:40:35 GMT+0800 (台北标准时间)',
          imgUrl: require('@img/assc/2.jpg'),
          tags: ['ACM', 'LQB'],
          description: 'dddddddddddddddd'
        }, {
          name: 'ACM 二等奖',
          owner: '黎启浚',
          awardTime: 'Mon Jul 02 2018 10:40:35 GMT+0800 (台北标准时间)',
          imgUrl: require('@img/assc/3.jpg'),
          tags: ['ACM', 'LQB'],
          description: 'ddddddddddddddd'
        }, {
          name: 'ACM 二等奖',
          owner: '黎启浚',
          awardTime: 'Mon Jul 02 2018 10:40:35 GMT+0800 (台北标准时间)',
          imgUrl: require('@img/assc/4.jpg'),
          tags: ['ACM', 'LQB'],
          description: ''
        }, {
          name: 'ACM 二等奖',
          owner: '黎启浚',
          awardTime: 'Mon Jul 02 2018 10:40:35 GMT+0800 (台北标准时间)',
          imgUrl: require('@img/assc/5.jpg'),
          tags: ['ACM', '广州'],
          description: ''
        }, {
          name: 'ACM 二等奖',
          owner: '黎启浚',
          awardTime: 'Mon Jul 02 2018 10:40:35 GMT+0800 (台北标准时间)',
          imgUrl: require('@img/assc/6.jpg'),
          tags: ['ACM', '深圳'],
          description: ''
        }]
      }, {
        id: 1,
        shelfName: '蓝桥杯',
        editShelfMode: false,
        Items: [{
          name: 'ACM 二等奖',
          owner: '黎启浚',
          awardTime: 'Mon Jul 02 2018 10:40:35 GMT+0800 (台北标准时间)',
          imgUrl: require('@img/assc/1.jpg'),
          tags: ['ACM', 'LQB'],
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi tempora quasi hic, voluptate iure incidunt modi aut. Beatae quod sapiente reprehenderit molestiae deleniti temporibus facilis nemo illum voluptates architecto provident accusantium hic in qui itaque et, inventore. Provident recusandae dolore laboriosam sit, esse incidunt quibusdam doloribus praesentium deleniti numquam. Facilis.'
        }, {
          name: 'ACM 二等奖',
          owner: '黎启浚',
          awardTime: 'Mon Jul 02 2018 10:40:35 GMT+0800 (台北标准时间)',
          imgUrl: require('@img/assc/2.jpg'),
          tags: ['ACM', 'LQB'],
          description: 'dddddddddddddddd'
        }, {
          name: 'ACM 二等奖',
          owner: '黎启浚',
          awardTime: 'Mon Jul 02 2018 10:40:35 GMT+0800 (台北标准时间)',
          imgUrl: require('@img/assc/3.jpg'),
          tags: ['ACM', 'LQB'],
          description: 'ddddddddddddddd'
        }, {
          name: 'ACM 二等奖',
          owner: '黎启浚',
          awardTime: 'Mon Jul 02 2018 10:40:35 GMT+0800 (台北标准时间)',
          imgUrl: require('@img/assc/4.jpg'),
          tags: ['ACM', 'LQB'],
          description: ''
        }, {
          name: 'ACM 二等奖',
          owner: '黎启浚',
          awardTime: 'Mon Jul 02 2018 10:40:35 GMT+0800 (台北标准时间)',
          imgUrl: require('@img/assc/5.jpg'),
          tags: ['ACM', '广州'],
          description: ''
        }, {
          name: 'ACM 二等奖',
          owner: '黎启浚',
          awardTime: 'Mon Jul 02 2018 10:40:35 GMT+0800 (台北标准时间)',
          imgUrl: require('@img/assc/6.jpg'),
          tags: ['ACM', '深圳'],
          description: ''
        }]
      }]
    }
  },
  filters: {
    formatDate: function (date) { // 时间转变格式
      return dateFormatter(date, 'yyyy-M-d')
    }
  },
  methods: {
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
    contains (arr, obj) {
      return arr.some(item => item === obj)
    },
    ...mapMutations([
      'showImagePage'
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
  display: inline-block;
  width: 80%;
}
.shelf{
  font-family: "Microsoft Yahei";
  font-size: 16px;
  padding: 10px;
}
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
  display: inline-block;
  font-size: 20px;
  vertical-align: bottom;
  cursor: pointer;
  float: right;
  color:rgb(81, 119, 235);
}
.item-download-icon{
  display: inline-block;
  font-size: 20px;
  vertical-align: bottom;
  cursor: pointer;
  float: right;
  color:rgb(212, 95, 46);
}
.item-edit-icon{
  display: inline-block;
  font-size: 20px;
  vertical-align: bottom;
  cursor: pointer;
  float: right;
  color:rgb(18, 111, 235);
}
.item-delete-icon{
  display: inline-block;
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
