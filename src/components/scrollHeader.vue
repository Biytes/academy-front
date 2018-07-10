<template lang="html">
  <div>
    <div class="scroll-header">
      <router-link to="/"><img src="../assets/img/logo/学院.png" alt=""></router-link>
      <ul class="scroll-menu">
        <li v-for="(item, scroll) in scrollHeaderData" :key="scroll"><a @click="switchNav(item.path)">{{item.menuItem}}</a></li>
        <div class="scroll-sub-menu">
          <ul class="sub-menu">
            <li v-for="(parent, sup) in scrollHeaderData" :key="sup" class="sub-menu-list">
              <ul>
                <li v-for="(subItem, sub) in parent.subMenuItem" :key="sub"><a @click="switchNav(subItem.path, sub)">{{subItem.menuItem}}</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import $ from '../assets/jquery-vender'
export default {
  created () {

  },
  mounted () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 600) {
        $('.scroll-header').addClass('show-scroll-header')
      } else {
        $('.scroll-header').removeClass('show-scroll-header')
      }
    })
  },
  data () {
    return {
    }
  },
  computed: {
    scrollHeaderData () {
      return this.$store.state.testData.headerMenuItem
    }
  },
  methods: {
    switchNav (routerLink, sub) {
      this.$store.state.page.currentNav = 0
      if (sub !== undefined) { // 判断sub是否存在
        this.$store.state.page.currentNav = sub
      }
      if (event.stopPropagation) {
        // 针对 Mozilla 和 Opera
        event.stopPropagation()
      } else if (window.event) {
        // 针对 IE
        window.event.cancelBubble = true
      }
      this.$router.push({ path: routerLink })
    }
  }
}
</script>

<style lang="css">
.scroll-header {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

.scroll-header *,
.scroll-header *:before,
.scroll-header *:after {
  -webkit-box-sizing: inherit;
          box-sizing: inherit;
  padding: 0;
  margin: 0;
  letter-spacing: 1.1px;
}
.scroll-header img{
  width: 204px;
  height: 59.5px;
  cursor: pointer;
}
.scroll-header{
  width: 100%;
  background: rgb(53, 89, 198);
  height:65px;
  position: fixed;
  top: 0;
  z-index: 10;
  transform: translateY(-70px);
  /* transition: all 400ms; */
}
.scroll-header .scroll-menu {
  width: 60%;
  float: right;
  height: 65px;
  list-style: none;
  padding-top: 10px;
  position: relative;
}
.scroll-header .scroll-menu:hover .scroll-sub-menu{
  display: block;
}
.scroll-header .scroll-menu > li {
  width: 100px;
  height: 100%;
  cursor: pointer;
  line-height: 40px;
  /* -webkit-transition: background-position-x 0.9s linear;
  transition: background-position-x 0.9s linear; */
  text-align: center;
  display: inline-block;
}
.scroll-header .scroll-menu > li > a {
  font-size: 18px;
  font-weight: bold;
  color: #e4e0dc;
  text-decoration: none;
  /* -webkit-transition: all 0.45s;
  transition: all 0.45s; */
}
.scroll-header .scroll-menu > li:hover {
  background: url("../assets/img/scrollMenu.svg");
  -webkit-animation: line 1s;
          animation: line 1s;
}
.scroll-header .scroll-menu > li:hover > a {
  color: #dea066;
}
.scroll-sub-menu{
  width:calc(100% - 32px);
  height:255px;
  right: 50px;
  background-color: rgba(28, 30, 241, 1);
  position: absolute;
  display: none;
  top:65px;
  z-index: 10;
  padding: 10px 20px;
}
.scroll-sub-menu .sub-menu{
  width:100%;
  height:100%;
}
.scroll-sub-menu .sub-menu .sub-menu-list{
  display: inline-block;
  height: 210px;
  width: 100px;
  vertical-align:top;
}
.scroll-sub-menu .sub-menu .sub-menu-list ul{
  width: 100%;
  height:100%;
}
.scroll-sub-menu .sub-menu .sub-menu-list ul li{
  padding: 6px 7px;
  text-align: center;
  cursor: pointer;
  /* transition: background 1s; */
}
.scroll-sub-menu .sub-menu .sub-menu-list ul li a{
  font-size: 17px;
  color: #dea066;
  /* transition: all 1s; */
}
.scroll-sub-menu .sub-menu .sub-menu-list ul li:hover{
  background-color: rgb(55, 103, 249);
}
/* @-webkit-keyframes line {
  0% {
    background-position-x: 390px;
  }
}

@keyframes line {
  0% {
    background-position-x: 390px;
  }
} */
.show-scroll-header{
  transform: translateY(0px);
}
@media (min-width: 1367px) and (max-width: 1630px) {
  .scroll-header .scroll-menu > li{
    width: 90px;
  }
  .scroll-sub-menu{
    right: 50px;
  }
  .scroll-sub-menu .sub-menu .sub-menu-list{
    width: 90px;
  }
  .scroll-header .scroll-menu:hover .scroll-sub-menu{
    min-width: 860px;
    right: 30px;
  }
}
@media (min-width: 1200px) and (max-width: 1366px) {
  .scroll-header .scroll-menu{
    height: 60px;
    padding-top: 8px;
  }
  .content-side-bar{
    width: 14%;
    padding: 15px 0 15px 0;
    margin-left: 45px;
  }
  .news-container{
    width: 800px;
  }
  .scroll-header{
    height: 60px;
  }
  .scroll-sub-menu{
    top:60px;
    height: 220px;
    padding: 10px 0px 10px 10px;
  }
  .scroll-header .scroll-menu:hover .scroll-sub-menu{
    min-width: 743px;
    right: 10px;
  }
  .scroll-header .scroll-menu > li{
    width: 75px;
  }
  .scroll-sub-menu .sub-menu .sub-menu-list{
    width: 75px;
  }
  .scroll-header .scroll-menu > li > a{
    font-size: 15px;
  }
  .scroll-sub-menu .sub-menu .sub-menu-list ul li{
    padding: 3px 5px;
  }
  .scroll-sub-menu .sub-menu .sub-menu-list ul li a{
    font-size: 15px;
  }
}
</style>
