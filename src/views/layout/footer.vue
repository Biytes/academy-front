<template lang="html">
  <footer v-bind:style="{backgroundImage: 'url(' + footerBackgroundImg + ')'}">
    <div id="wrapper-footer">
      <div class="wrapper-footer-top">
        <div class="footer-top-left">
          <ul>
            <li>
              <h3>Contact Us</h3></li>
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
        <div class="footer-bottom-left">
          <h4>Copyright <a href="../../Backstage/dist/index.html">@</a> 2018华南理工大学广州学院 计算机工程学院</h4>
        </div>
        <div class="footer-bottom-right">
          <ul>
            <li v-for="(department,index) in departments" :key="index" >{{department.triggerName}}<i class="iconfont icon-down-copy"></i>
              <div class="select-form" v-bind:class="{'second-select-form':department.isClass}">
                <ul>
                  <li v-for="(Item,index) in department.departmentName" :key="index"><a href="#">{{Item.Name}}</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
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
      footerBackgroundImg: require('@img/background/footerBackground.jpg')
    }
  },
  mounted () {
    $('.footer-bottom-right ul li').on('click', function () {
      $('.footer-bottom-right ul li').children('i').removeClass('icon-transform')
      $(this).children('i').addClass('icon-transform')
      $('.footer-bottom-right ul li').children('.select-form').hide()
      $(this).children('.select-form').show()
      if (event.stopPropagation) {
        // 针对 Mozilla 和 Opera
        event.stopPropagation()
      } else if (window.event) {
        // 针对 IE
        window.event.cancelBubble = true
      }
    })
    $(window).on('click', function () {
      $('.footer-bottom-right ul li').children('.select-form').hide()
      if (event.stopPropagation) {
        // 针对 Mozilla 和 Opera
        event.stopPropagation()
      } else if (window.event) {
        // 针对 IE
        window.event.cancelBubble = true
      }
    })
  }
}
</script>

<style>
footer {
  background-size: cover;
  color: #D4D2D2;
  height: 300px;
}
#wrapper-footer {
  height: 100%;
  width: 75%;
  margin: 0 auto;
  position:relative;
}

.wrapper-footer-top {
  height: 75%;
  width: 100%;
  position: absolute;
  top: 10px;
}
.wrapper-footer-top h3{
  margin:15px 0;
}
.wrapper-footer-bottom {
  position: absolute;
  height: 20%;
  width: 100%;
  bottom: 0px;
  border-top: 3px solid rgb(96, 96, 96);
}
.footer-top-left {
  padding: 0 20px;
  width: auto;
  float: left;
  /* border:2px solid rgb(80, 81, 184); */
  border-radius: 4px;
}

.footer-top-left li:first-child ~ li{
  padding: 7px;
}

.footer-top-right {
  float: right;
  padding: 20px;
  width: auto;
}
.footer-top-right img {
  display: block;
  width:306.6px;
  height:88.175px;
}
.footer-bottom-left {
  padding: 0 20px;
  width: auto;
  float: left;
}

.footer-bottom-left h4{
  margin:13px 5px;
}

.footer-bottom-left a:first-child {
  color: inherit;
}

.footer-bottom-left a:first-child:hover {
  color: #333;
}
.footer-bottom-right {
  float: right;
  padding: 0 20px;
  width: auto;
}
.footer-bottom-right > ul > li{
  position: relative;
  float:right;
  padding: 14px 20px 12px;
  cursor: pointer
}

.footer-bottom-right > ul > li:hover{
  color: rgb(59, 82, 240);
}
.footer-bottom-right > ul > li i{
  vertical-align: middle;
  font-size: 18px;
  line-height: 24px;
  margin-left: 5px;
  position: absolute;
  transition: 0.33s all;
}

.icon-transform{
  transform: rotate(180deg);
  margin-top: -2px;
  transform-origin: center;
}

.select-form{
  position: absolute;
  height:auto;
  width:250px;
  padding: 15px;
  background-color: rgba(34, 34, 34, 0.76);
  border-radius: 8px;
  color:#fff;
  display: none;
  line-height: 25px;
  bottom: 53px;
  left: -50px;
  z-index: 50;
  transition: 0.33s all;
  box-shadow: 0 0 8px #DDD;
}

.second-select-form::-webkit-scrollbar {
    width: 3px;
    height: 8px;
    background-color: #655d5d;
}

.second-select-form::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f4f4f4;
}

.second-select-form::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
    background-color: #655d5d;
}
.second-select-form{
  width:400px;
  height:auto;
}
.select-form  ul{
    list-style: none;
    padding:0;
    width:94%;
    margin: auto;
}
.select-form  li{
    display: inline-block;
    width:50%;
    line-height: 25px;
    float:left;
}
.select-form  a{
    display: block;
    padding:4px;
    text-decoration: none;
    color:#ddd;
    transition: 0.33s all;
}
.select-form  li:hover a{
  background-color:#3355ff;
}
/*responsive 1366*/
@media (min-width: 1200px) and (max-width: 1366px) {
  footer{
      height: 250px;
  }
  .footer-top-left{
    font-size: 15px;
  }
  .wrapper-footer-top h3{
    margin: 9px 0;
  }
  .footer-top-left li:first-child ~ li{
    padding:5px;
  }
  .footer-top-right{
    padding: 22px 20px;
  }
  .footer-top-right img{
    width: 259.6px;
    height: 69.175px;
  }
  .wrapper-footer-bottom{
    font-size: 13px;
  }
  .footer-bottom-left h4{
    color:#7e7e84;
  }
  .select-form{
    bottom: 37px;
  }
}
</style>
