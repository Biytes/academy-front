<template lang="html">
  <div>
    <div class="about-content page-container">
      <aside class="content-side-bar">
        <a v-for="(nav, navIndex) in navBarTitles"
           :class="{ current: navIndex === currentCategory.index }"
           @click="navSwitch(navIndex, nav)"
           v-if="navBarTitles"
           :key="nav.id"><i class="iconfont icon-triangle-arrow-r"></i>{{ nav.title }}</a>
      </aside>
      <div class="news-container" v-loading="isLoading">
        <div v-if="currentCategory.index === 0" class="figure-container" style="text-align:center">
          <video controls="controls" autoplay="autoplay" height="320" width="640"><source type="video/mp4" src=""></video>
          <div style="width: 700px; margin: 0 auto;text-align:left; font-size: 17px; line-height:24px; padding: 0 5px;">
            <p style="text-indent: 28px;">
              在华南理工大学的大力支持下，计算机工程学院经过多年的建设，目前已拥有一支结构合理、敬业奉献的高素质教师队伍。这支队伍中有广东省 “南粤优秀教师”，有“广东省职工经济技术创新能手”，有“广东省师德先进个人”，有分布在各个专业的博士与在读博士。学院目前有全日制本科在校生2297人，分布在学院4个专业中。历届的毕业生中有不少被腾讯、阿里等知名的IT企业所录用。
            </p>
            <p style="text-indent: 28px;">
              计算机工程学院目前已有网络、数字媒体、手机软件开发、物联网等多个专业实验室。为强化学生创新创业能力，还与企业合作设立众创空间，共建多个校内项目实训实验室和校外实习实训基地。
            </p>
            <p style="text-indent: 28px;">
              计算机工程学院现设有计算机科学与技术、软件工程、网络工程和信息与计算科学等4个专业。它们具有各自特色：计算机科学与技术突出智能人机交互和嵌入式系统开发两个方向的人才培养；软件工程在引入了云计算和大数据等新技术的同时，安卓、苹果等智能手机软件开发和Web软件开发仍是人才培养的重心；网络工程则紧跟国家“互联网+”发展战略，将人才培养的重点放在网络设计与安全和物联网应用技术两个方面；信息与计算科学培养的大数据应用人才突出了重应用和跨学科的特点。
            </p>
          </div>
        </div>
        <div v-if="currentCategory.index === 1" class="figure-container" style="text-align:center">
          <img src="@img/collegeIntro/facility.jpg" style="width:640px;" alt="">
        </div>
        <div v-if="currentCategory.index === 2" class="figure-container major" style="text-align:center">
          <div style="width:640px; margin: 0 auto; text-align: left;">
            <h2 class="major-title">计算机科学与技术专业</h2>
            <p class="major-brief">计算机科学与技术专业主要培养在计算机科学与技术领域里具有良好的综合素质、较强的实践能力和创新能力的高层次科学技术和管理人才。要求掌握坚实的自然科学、人文社科、工程技术基础理论，具备现代计算机专业知识和较强的实践能力。</p>
            <h3 class="major-direction">计算机科学与技术专业（交互技术）</h3>
            <p class="major-direction-brief"> 培养掌握现代计算机科学的基本理论和基本方法，具备扎实的交互理论基础，能熟练操作各种交互设备和软件平台，熟悉人机界面设计，能进行交互式动画、游戏等的设计与开发，能开发基于触屏、体感、全息等技术的智能人机交互设备应用程序的高素质应用型人才。</p>
            <h3 class="major-direction">主要专业课程： </h3>
            <p class="major-direction-brief">C程序设计基础、数据结构、计算机组成原理、操作系统、计算机网络、软件工程、数据库原理与应用、Java面向对象程序设计、人机交互技术、Android UI设计、计算机二维动画技术、计算机三维动画技术、动画脚本编程、视频特效与非线性编辑、移动交互程序设计、游戏设计与开发等。</p>
            <h3 class="major-direction">就业方向：</h3>
            <p class="major-direction-brief"> 交互技术方向的毕业生除了可胜任计算机应用技术相关的管理、维护和开发等工作之外，还可在软件、动漫游戏等行业相关的企业和机构中从事界面设计、交互特效设计开发、游戏设计开发以及与智能人机交互设备相关的应用程序开发工作。</p>
            <h3 class="major-direction">计算机科学与技术专业（嵌入式）</h3>
            <p class="major-direction-brief"> 培养掌握现代计算机科学的基本理论和基本方法，具备扎实计算机软件、硬件基础，熟悉嵌入式设备和系统的工作原理，能在手机及其他智能设备上进行嵌入式程序设计与开发的高素质应用型人才。</p>
            <h3 class="major-direction">主要专业课程：</h3>
            <p class="major-direction-brief">C语言程序设计、数据结构、Java程序设计基础、电路与电子技术、数字逻辑、EDA技术、单片机与汇编语言、计算机组成原理、接口技术、嵌入式系统原理、嵌入式系统硬件设计、嵌入式系统应用开发、Android应用开发、操作系统、软件工程、数据库原理及应用、计算机网络等。</p>
            <h3 class="major-direction">就业方向： </h3>
            <p class="major-direction-brief">嵌入式开发方向的毕业生除了可胜任计算机应用技术相关的管理、维护和开发等工作之外，还可在与电子、通信及物联网等行业相关的企业和机构中从事手机及其他智能设备驱动程序开发、嵌入式系统设计和嵌入式应用程序开发等工作。</p>
            <h2 class="major-title">信息与计算科学专业</h2>
            <p class="major-breif">信息与计算科学专业为商业分析方向。本专业结合数学、计算机科学、经济学的内容。强调宽基础、广应用。包括了分析、代数、几何等理论数学，数值分析等计算数学、概率统计、数学建模等应用数学；以及计算机语言、数据库等计算机科学的内容；着眼于商业分析领域的应用。合格学生将获得理学学士学位。</p>
            <h3 class="major-direction">主要专业课程： </h3>
            <p class="major-direction-brief">数学分析、线性代数与解析几何、概率论与数理统计、数值分析、应用统计学、C语言、JAVA程序设计基础、数据结构与算法、Java EE应用技术、Oracle数据库设计、数学模型、运筹学、商业分析语言（R语言）、西方经济学、计量经济学、金融学原理、商业数据挖掘、商业数据分析等。</p>
            <h3 class="major-direction">就业方向： </h3>
            <p class="major-direction-brief">本专业毕业生能在政府部门、企事业单位，科技、教育、信息产业、经济金融等领域从事研究、应用开发、管理、数据分析和数据处理等工作。 </p>
            <h2 class="major-title">软件工程专业</h2>
            <p class="major-breif">在目前的IT领域中，软件业是规模最大，发展速度最快，应用前景最广阔的领域，也是目前国内就业需求较大，薪资水平较高的行业之一。软件工程专业是一门研究用工程化方法构建和维护有效的、实用的和高质量的软件的学科。它的学习内容涉及程序设计语言、数据库、软件开发工具、系统平台、测试与维护、项目管理等多个方面。本专业的人才培养紧贴软件行业的人才需求，为本行业培养合格的应用和开发人才。</p>
            <p class="major-breif">以现代软件企业对人才的需求为导向，面向珠三角地区培养具备软件工程基础理论知识和软件项目开发、管理能力，掌握基于.NET和JAVA平台的Web应用开发技术，掌握基于Android、iOS平台的移动应用开发技术，能从事云计算和大数据技术相关开发工作的高素质应用型人才。</p>
            <h3 class="major-direction">主要课程：</h3>
            <p class="major-direction-brief">Java面向对象程序设计、数据结构、软件工程导论、软件体系结构、软件项目管理、软件测试与质量保证、云计算概论、Servlet/JSP程序设计、Java EE企业应用开发、C#桌面应用程序开发、ASP.NET动态网页开发、Android UI设计、Android应用开发、iOS应用开发，移动云计算应用开发。</p>
            <h3 class="major-direction">就业方向： </h3>
            <p class="major-direction-brief">本专业毕业生可从事Web应用与移动应用相关软件的开发、测试与维护等工作，也可在软件企业中承担软件项目管理、软件需求分析和软件架构设计等工作，还可以在物联网、“互联网+”行业中从事与云计算和大数据技术相关的应用与开发工作。 </p>
            <h2 class="major-title">网络工程专业</h2>
            <p class="major-brief">网络工程专业顺应当前“互联网+”技术发展趋势，以网络通信技术与计算机技术为基础，突出网络设计、管理技术与网络信息安全技术，依托传统计算机网络技术在物联网网络层与应用层的技术积累与优势，重点训练学生在物联网应用方面的实践技能，让学生适应各行各业在“互联网+”产业升级过程中对信息系统实施“智慧化”的需要。经过专业的学习，学生在毕业时将具备网络工程设计、网络应用程序开发、信息系统安全设计和运维、漏洞挖掘与渗透测试、物联网系统开发与测试、面向物联网的工业大数据处理等能力。</p>
            <h3 class="major-direction">网络工程（网络设计与安全方向）</h3>
            <p class="major-direction-brief"> 在当前“互联网+”技术发展背景下，培养掌握计算机网络工程技术的基本理论、方法与应用，具备网络安全管理能力，从事计算机网络工程及相关领域中的系统研究、设计、运行、维护、漏洞检测与渗透、病毒防治的高级工程技术人才</p>
            <h3 class="major-direction">主要课程：</h3>
            <p class="major-direction-brief">高级语言程序设计、数据结构、电路与电子技术、计算机组成原理、通信原理、计算机网络、网络信息安全技术、操作系统、网络操作系统、网络管理原理与技术、网络工程设计、无线网络技术、防火墙与入侵检测、云计算概论、物联网技术导论等。</p>
            <h3 class="major-direction">就业方向： </h3>
            <p class="major-direction-brief">本专业毕业生可在各类企事业单位、计算机软件公司等从事计算机网络系统的规划、组网、管理和维护；“互联网+”背景下的电子商务网站的建设与管理；web前端开发、网络应用软件研发；云计算和云存储系统部署与维护；信息系统的安全技术方案设计、安全测试与加固、安全运维、漏洞挖掘与渗透测试等方面的工作。</p>
            <h3 class="major-direction">网络工程（物联网应用技术方向）</h3>
            <p class="major-direction-brief">培养能够适应国家“下一代信息技术”战略新兴产业发展需求，掌握通讯技术、计算机网络技术、无线传感网络技术、智能识别与信息处理、嵌入式程序开发等多学科交叉知识，具备开发与部署物联网智能感知、实时监控系统的实践能力，从事物联网系统软件研发、物联网工程项目实施与运维，大数据采集与处理的复合型高级工程技术人才。</p>
            <h3 class="major-direction">主要课程：</h3>
            <p class="major-direction-brief">高级语言程序设计、数据结构、电路与电子技术、计算机组成原理、通信原理、计算机网络、网络信息安全技术、操作系统、物联网技术导论、汇编语言与单片机、传感器与检测技术、无线传感器网络技术、Zigbee通信协议与应用、射频识别(RFID)技术、物联网数据处理、Android应用开发、Android UI设计、人机交互技术等。</p>
            <h3 class="major-direction">就业方向：</h3>
            <p class="major-direction-brief">本专业毕业生可在“互联网+”催生出的与各类智能安防、智能交通、智能家居、智能工业、智能农业、智能环保、智能医疗、智能物流、智能电网、智慧城市等物联网系统相关的行业从事物联网系统架构，物联网系统开发与测试，物联网通信协议研发，物联网信息安全方案设计与运维，面向物联网的工业大数据分析处理、工业用户界面(UI)和用户体验(UX)设计等工作。</p>
        </div>
        </div>
        <div v-if="currentCategory.index === 3" class="figure-container teacherinfo" style="text-align:center">
          <div style="width:640px; margin: 0 auto; text-align: left;">
            <h3>教师队伍现状</h3>
            <p>到目前为止，我院现有专职教师36名，另外还从华工本部聘请一定数量的富有教学经验的教师。这些教师当中，100%都具有硕士以上的学位，其中，具有博士学位或者博士在读的教师6名，具有高级职称的教师15名。</p>
            <p>另外，专任教师中还有不少教师具有企业工作经验，有部分教师通过了中高级的软件水平考试，有部分教师还同时是相关专业的职业资格考试的考评员或高级考评员。正是这样一支年龄、学历、职称和工作经历等多方面结构合理的教师队伍，从整体上保证能满足学院定位和人才培养目标的要求。</p>
            <p>近三年，有25人次以上的教师被评为校级优秀教师，更有一位老师获得了广东省“南粤优秀教师”的称号。</p>
            <p>我院教师教学水平突出，近三年的网上评教优良率都在100%左右，尤其是近年来，我院教师的优秀率更是达到了80%以上。这是学生对教师教学水平、教学态度和教学效果的一个充分肯定。</p>
            <h3>教师队伍建设</h3>
            <p>学院以专业教研室为单位建设教学团队，定期召开教研室研讨会，并鼓励专业带头人申报教研及科研项目。现正在进行中的教研项目有3项，科研实验室建设项目3项。</p>
            <p>为了提高教师教学水平和能力，学院首先抓的第一件事就是组织和推动全院青年教师参与学校“青年教师课堂教学竞赛”，为此，学院还专门成立了院级的专家听课小组，在学校举行教学竞赛之前，首先在学院范围内开展一轮预赛，之后再将预赛成绩优秀的教师推选参加校级竞赛。不仅如此，在整个预赛过程中，学院还要求全体教师参与互相听课，互相交流，互相观摩，在听课和交流中相互吸收各自的长处，达到提高自身教学水平和能力的目的。</p>
          </div>
        </div>
        <div v-if="currentCategory.index === 4" class="figure-container lab" style="text-align:center">
          <div style="width:640px; margin: 0 auto; text-align: left;">
            <p>计算机实验中心既是全校性的公共实验平台，又是计算机工程学院的专业实验基地，且开放供学生的课外实训活动使用，隶属计算机工程学院管理。</p>
            <p>计算机实验中心是全校最早投入建设使用的实验中心。已投入使用的包括三个基础实验室（分别为224机位、124机位、128机位）、一个软件实验室（124个机位）、一个硬件&物联网实验室（42套硬件实验设备、30套物联网设备）、一个网络实验室（36套设备）、一个移动云计算实验室（32台高端苹果机）、一个数字媒体实验室（24套工作站）以及一个创新科技工作室。2014年暑假已完成基础实验室4室（72机位）以及一楼学生创新基地的装修改造，9月份正式投入使用。整栋大楼安装网络视频监控系统，保证学生实验和固定资产安全。</p>
            <p>计算机实验中心的主设备均为戴尔品牌，配备多操作系统和其他常用学习软件，使用机房管理系统和网络版保护卡，中心局域网独立，系统安全性较高、同时为各门课程开设FTP服务器，供任课教师与学生互动交流。</p>
            <p>计算机实验中心每年为计算机文化基础、机械制图、高级语言程序设计以及计算机专业课等全校超60门课程，提供平均40万的教学机时，连同课外实践用机，每年使用总机时高达60万。</p>
            <p>12年8月，我校获批为全国计算机等级考试的考点，计算机实验中心作为承办单位，至今成功组织了第37至40次共4次考试，激发了全校学生学习计算机知识的积极性，提高学生的计算机水平和就业的竞争力。</p>
            <p>此外，中心多次承办了广东省高级绘图员考证培训，以及学校其他计算机文化活动，为创新技能服务做好人力、设备、用房的准备。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      isLoading: false,
      title: '',
      navBarTitles: [],
      pageItems: [],
      sectionMenuItem: null,
      currentPage: 1,
      total: 0,
      pageSize: 10
    }
  },
  watch: {
    '$route': 'onRouteChange'
  },
  computed: {
    ...mapState([
      'currentCategory',
      'headerMenuItem'
    ])
  },
  mounted () {
    // 利用section 和category来锁定当前的菜单
    this.section = this.$route.name
    this.category = this.$route.params.category
    let sectionMenuItem = this.headerMenuItem[this.headerMenuItem.findIndex(item => item.name === this.section)]
    this.title = sectionMenuItem.title
    this.navBarTitles = sectionMenuItem.subMenuItem
    this.sectionMenuItem = sectionMenuItem
  },
  methods: {
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
    // 当路由发生变化
    onRouteChange () {
      this.category = this.$route.params.category
      this.currentPage = 1
    },
    ...mapMutations([
      'showImagePage',
      'switchCategory'
    ])
  }
}
</script>

<style lang="scss" scoped>
.figure-container {
  .major {
    &-title {
      color: #3559c6;
      font-size: 26px;
      margin: 50px 0 10px;
    }
    &-brief {
      text-indent: 28px;
      font-size: 18px;
      line-height: 24px;
    }
    &-direction {
      color: #333;
      font-size: 20px;
    }
    &-direction-brief {
      text-indent: 28px;
      font-size: 16px;
      line-height: 24px;;
    }
  }
  &.teacherinfo {
    line-height: 24px;
    h3 {
      color: #3559c6;
      text-indent: 28px;
    }
    p {
      text-indent: 28px;
      color: #333;
      font-size: 18px;
    }
  }
  &.lab {
    line-height:24px;
    p {
      text-indent: 28px;
      font-size: 16px;
      color: #333;
    }
  }
}

/* Extra Large Devices, Wide Screens */
@media only screen and (max-width : 1400px) {
  .figure-container {
    margin: 0 0 0 80px;
  }
}

/* External CSS */
</style>
