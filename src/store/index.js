import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  page: {
    currentPageSup: -1,
    currentItemLink: '',
    currentNav: 0
  },
  imgPage: {
    isShow: false,
    currentImg: ''
  },
  testData: {
    errands: [
      {
        title: 'First Panel',
        introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aspernatur id, fuga quaerat laboriosam architecto maxime autem pariatur. Recusandae dolores iusto tempora cum libero, fugit inventore reiciendis laborum quo et officia quis voluptatibus non enim, exercitatione',
        backgroundUrl: 'url(' + require('@img/school/学院风景-14.jpg') + ')'
      },
      {
        title: 'Second Panel',
        introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aspernatur id, fuga quaerat laboriosam architecto maxime autem pariatur. Recusandae dolores iusto tempora cum libero, fugit inventore reiciendis laborum quo et officia quis voluptatibus non enim, exercitatione',
        backgroundUrl: 'url(' + require('@img/school/图书馆-1.jpg') + ')'
      },
      {
        title: 'Third Panel',
        introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aspernatur id, fuga quaerat laboriosam architecto maxime autem pariatur. Recusandae dolores iusto tempora cum libero, fugit inventore reiciendis laborum quo et officia quis voluptatibus non enim, exercitatione',
        backgroundUrl: 'url(' + require('@img/school/文科楼.jpg') + ')'
      },
      {
        title: 'Fourth Panel',
        introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aspernatur id, fuga quaerat laboriosam architecto maxime autem pariatur. Recusandae dolores iusto tempora cum libero, fugit inventore reiciendis laborum quo et officia quis voluptatibus non enim, exercitatione',
        backgroundUrl: 'url(' + require('@img/school/学院小景-1.jpg') + ')'
      },
      {
        title: 'Fifth Panel',
        introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aspernatur id, fuga quaerat laboriosam architecto maxime autem pariatur. Recusandae dolores iusto tempora cum libero, fugit inventore reiciendis laborum quo et officia quis voluptatibus non enim, exercitatione',
        backgroundUrl: 'url(' + require('@img/school/学院日落景.jpg') + ' )'
      }
    ],
    headerMenuItem: [
      {
        menuItem: '学院简介',
        hasSubMenu: true,
        path: '/about/brief',
        subMenuItem: [
          {
            imgUrl: require('@img/220.jpg'),
            menuItem: '学院简介',
            path: '/about/brief',
            brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis adipisci consequuntur dolores impedit nam pariatur magni est quo cumque dignissimos.'
          },
          {
            imgUrl: require('@img/220.jpg'),
            menuItem: '机构设置',
            path: '/about/facility',
            brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis adipisci consequuntur dolores impedit nam pariatur magni est quo cumque dignissimos.'
          },
          {
            imgUrl: require('@img/220.jpg'),
            menuItem: '师资建设',
            path: '/about/teacher',
            brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis adipisci consequuntur dolores impedit nam pariatur magni est quo cumque dignissimos.'
          },
          {
            imgUrl: require('@img/220.jpg'),
            menuItem: '专业设置',
            path: '/about/major',
            brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis adipisci consequuntur dolores impedit nam pariatur magni est quo cumque dignissimos.'
          },
          {
            imgUrl: require('@img/220.jpg'),
            menuItem: '实验中心',
            path: '/about/lab',
            brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis adipisci consequuntur dolores impedit nam pariatur magni est quo cumque dignissimos.'
          }
        ]
      },
      {
        menuItem: '教师队伍',
        path: '/teacher'
      },
      {
        menuItem: '新闻中心',
        path: '/news'
      },
      {
        menuItem: '学院相册',
        path: '/gallery'
      },
      {
        menuItem: '教学管理',
        path: '/educationManagement/index',
        subMenuItem: [
          {
            imgUrl: require('@img/220.jpg'),
            menuItem: '教学管理',
            path: '/educationManagement/index',
            brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis adipisci consequuntur dolores impedit nam pariatur magni est quo cumque dignissimos.'
          },
          {
            imgUrl: require('@img/220.jpg'),
            menuItem: '教学文件',
            path: '/educationManagement/file',
            brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis adipisci consequuntur dolores impedit nam pariatur magni est quo cumque dignissimos.'
          },
          {
            imgUrl: require('@img/220.jpg'),
            menuItem: '资源下载',
            path: '/educationManagement/download',
            brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis adipisci consequuntur dolores impedit nam pariatur magni est quo cumque dignissimos.'
          },
          {
            imgUrl: require('@img/220.jpg'),
            menuItem: '实验中心',
            path: '/educationManagement/lab',
            brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis adipisci consequuntur dolores impedit nam pariatur magni est quo cumque dignissimos.'
          }
        ]
      },
      {
        menuItem: '学生工作',
        path: '/studentWork/index',
        subMenuItem: [
          {
            imgUrl: require('@img/220.jpg'),
            menuItem: '学生工作',
            path: '/studentWork/index',
            brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis adipisci consequuntur dolores impedit nam pariatur magni est quo cumque dignissimos.'
          },
          {
            imgUrl: require('@img/220.jpg'),
            menuItem: '工作动态',
            path: '/studentWork/condition',
            brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis adipisci consequuntur dolores impedit nam pariatur magni est quo cumque dignissimos.'
          },
          {
            imgUrl: require('@img/220.jpg'),
            menuItem: '班团风采',
            path: '/studentWork/moment',
            brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis adipisci consequuntur dolores impedit nam pariatur magni est quo cumque dignissimos.'
          },
          {
            imgUrl: require('@img/220.jpg'),
            menuItem: '新生军训',
            path: '/studentWork/militaryTraining',
            brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis adipisci consequuntur dolores impedit nam pariatur magni est quo cumque dignissimos.'
          },
          {
            imgUrl: require('@img/220.jpg'),
            menuItem: '实践创新',
            path: '/studentWork/practice',
            brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis adipisci consequuntur dolores impedit nam pariatur magni est quo cumque dignissimos.'
          },
          {
            imgUrl: require('@img/school/学院日落景.jpg'),
            menuItem: '学风建设',
            path: '/studentWork/motto',
            brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis adipisci consequuntur dolores impedit nam pariatur magni est quo cumque dignissimos.'
          },
          {
            imgUrl: require('@img/school/学院日落景.jpg'),
            menuItem: '学生荣誉',
            path: '/studentWork/glory',
            brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis adipisci consequuntur dolores impedit nam pariatur magni est quo cumque dignissimos.'
          }
        ]
      },
      {
        menuItem: '党建工作',
        path: '/communistWork/work',
        subMenuItem: [
          {
            imgUrl: require('@img/school/学院日落景.jpg'),
            menuItem: '党建工作',
            path: '/communistWork/work',
            brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis adipisci consequuntur dolores impedit nam pariatur magni est quo cumque dignissimos.'
          },
          {
            imgUrl: require('@img/school/学院日落景.jpg'),
            menuItem: '机构设置',
            path: '/communistWork/facility',
            brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis adipisci consequuntur dolores impedit nam pariatur magni est quo cumque dignissimos.'
          },
          {
            imgUrl: require('@img/school/学院日落景.jpg'),
            menuItem: '组织生活',
            path: '/communistWork/organization',
            brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis adipisci consequuntur dolores impedit nam pariatur magni est quo cumque dignissimos.'
          },
          {
            imgUrl: require('@img/school/学院日落景.jpg'),
            menuItem: '入党指导',
            path: '/communistWork/instruction',
            brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis adipisci consequuntur dolores impedit nam pariatur magni est quo cumque dignissimos.'
          }
        ]
      },
      {
        menuItem: '招生就业',
        path: '/recruit/index',
        subMenuItem: [
          {
            imgUrl: require('@img/school/学院日落景.jpg'),
            menuItem: '招生就业',
            path: '/recruit/index',
            brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis adipisci consequuntur dolores impedit nam pariatur magni est quo cumque dignissimos.'
          },
          {
            imgUrl: require('@img/school/学院日落景.jpg'),
            menuItem: '招生信息',
            path: '/recruit/recruitInfo',
            brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis adipisci consequuntur dolores impedit nam pariatur magni est quo cumque dignissimos.'
          },
          {
            imgUrl: require('@img/school/学院日落景.jpg'),
            menuItem: '就业信息',
            path: '/recruit/employeInfo',
            brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis adipisci consequuntur dolores impedit nam pariatur magni est quo cumque dignissimos.'
          },
          {
            imgUrl: require('@img/school/学院日落景.jpg'),
            menuItem: '网络答疑',
            path: '/recruit/onlineReact',
            brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis adipisci consequuntur dolores impedit nam pariatur magni est quo cumque dignissimos.'
          }
        ]
      },
      {
        menuItem: '对外合作',
        path: '/foreignCooperation/index',
        subMenuItem: [
          {
            imgUrl: require('@img/school/学院日落景.jpg'),
            menuItem: '对外合作',
            path: '/foreignCooperation/index',
            brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis adipisci consequuntur dolores impedit nam pariatur magni est quo cumque dignissimos.'
          },
          {
            imgUrl: require('@img/school/学院日落景.jpg'),
            menuItem: '国际合作',
            path: '/foreignCooperation/international',
            brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis adipisci consequuntur dolores impedit nam pariatur magni est quo cumque dignissimos.'
          },
          {
            imgUrl: require('@img/school/学院日落景.jpg'),
            menuItem: '校企合作',
            path: '/foreignCooperation/enterprise',
            brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis adipisci consequuntur dolores impedit nam pariatur magni est quo cumque dignissimos.'
          }
        ]
      }
    ],
    topNews: [
      {
        title: '珍贵延安时期鲁艺版画落户复旦大学图书馆',
        brief: '4月13日下午，复旦大学召开2018年全面从严治党工作会议，贯彻落实党的十九大、十',
        time: '4月20日',
        imgUrl: require('@img/appearance/2013.jpg'),
        path: ''
      },
      {
        title: '珍贵延安时期鲁艺版画落户复旦大学图书馆',
        brief: '4月13日下午，复旦大学召开2018年全面从严治党工作会议，贯彻落实党的十九大、十',
        time: '1小时前',
        imgUrl: '',
        path: ''
      },
      {
        title: '珍贵延安时期鲁艺版画落户复旦大学图书馆',
        brief: '4月13日下午，复旦大学召开2018年全面从严治党工作会议，贯彻落实党的十九大、十',
        time: '2小时前',
        imgUrl: '',
        path: ''
      },
      {
        title: '珍贵延安时期鲁艺版画落户复旦大学图书馆',
        brief: '4月13日下午，复旦大学召开2018年全面从严治党工作会议，贯彻落实党的十九大、十',
        time: '4月20日',
        imgUrl: '',
        path: ''
      },
      {
        title: '珍贵延安时期鲁艺版画落户复旦大学图书馆',
        brief: '4月13日下午，复旦大学召开2018年全面从严治党工作会议，贯彻落实党的十九大、十',
        time: '4月20日',
        imgUrl: '',
        path: ''
      },
      {
        title: '珍贵延安时期鲁艺版画落户复旦大学图书馆',
        brief: '4月13日下午，复旦大学召开2018年全面从严治党工作会议，贯彻落实党的十九大、十',
        time: '4月20日',
        imgUrl: '',
        path: ''
      },
      {
        title: '珍贵延安时期鲁艺版画落户复旦大学图书馆',
        brief: '4月13日下午，复旦大学召开2018年全面从严治党工作会议，贯彻落实党的十九大、十',
        time: '4月20日',
        imgUrl: '',
        path: ''
      }
    ],
    news: [
      {
        title: '珍贵延安时期鲁艺版画落户复旦大学图书馆',
        brief: '4月13日下午，复旦大学召开2018年全面从严治党工作会议，贯彻落实党的十九大、十',
        time: '1小时前',
        path: ''
      },
      {
        title: '生命科学学院服部素之研究员合作研究发现',
        brief: '',
        time: '2小时前',
        path: ''
      },
      {
        title: '复旦医科专题调研（之二）为放医所发展',
        brief: '',
        time: '4月20日',
        path: ''
      },
      {
        title: '上海医学院师生深入学习贯彻全国“两会”',
        brief: '',
        time: '4月20日',
        path: ''
      },
      {
        title: '平山病MDT国际高峰论坛暨平山病临床',
        brief: '',
        time: '4月20日',
        path: ''
      },
      {
        title: '平山病MDT国际高峰论坛暨平山病临床',
        brief: '',
        time: '4月20日',
        path: ''
      },
      {
        title: '复旦大学******战队荣获第二届“强网杯',
        brief: '',
        time: '4月20日',
        path: ''
      },
      {
        title: '复旦大学基础医学院黄志力课题组发现伏',
        brief: '',
        time: '4月20日',
        path: ''
      },
      {
        title: '复旦大学基础医学院黄志力课题组发现伏',
        brief: '',
        time: '4月20日',
        path: ''
      },
      {
        title: '复旦大学******战队荣获第二届“强网杯',
        brief: '',
        time: '4月20日',
        path: ''
      }
    ],
    events: [
      {
        title: '模拟ACM程序设计大赛通知',
        brief: '为培养和激励我校写程解决问题的能力',
        startTime: 'Mon Jul 15 2018 10:40:35 GMT+0800 (台北标准时间)',
        endTime: 'Mon Jul 22 2018 10:40:35 GMT+0800 (台北标准时间)',
        path: ''
      },
      {
        title: '模拟ACM程序设计大赛通知asdasdasd',
        brief: '为培养和激励我校写程解决问题的能力',
        startTime: 'Mon Jul 02 2018 10:40:35 GMT+0800 (台北标准时间)',
        endTime: 'Mon Jul 15 2018 10:40:35 GMT+0800 (台北标准时间)',
        path: ''
      },
      {
        title: '模拟ACM程序设计大赛通知',
        brief: '为培养和激励我校写程解决问题的能力',
        startTime: 'Mon Jul 18 2018 10:40:35 GMT+0800 (台北标准时间)',
        endTime: 'Mon Jul 23 2018 10:40:35 GMT+0800 (台北标准时间)',
        path: ''
      },
      {
        title: '模拟ACM程序设计大赛通知',
        brief: '为培养和激励我校写程解决问题的能力',
        startTime: 'Mon Jul 1 2018 10:40:35 GMT+0800 (台北标准时间)',
        endTime: 'Mon Jul 7 2018 10:40:35 GMT+0800 (台北标准时间)',
        path: ''
      },
      {
        title: '模拟ACM程序设计大赛通知',
        brief: '为培养和激励我校写程解决问题的能力',
        startTime: 'Mon Jul 05 2018 10:40:35 GMT+0800 (台北标准时间)',
        endTime: 'Mon Jul 30 2018 10:40:35 GMT+0800 (台北标准时间)',
        path: ''
      }
    ],
    educationManagement: [
      {
        title: '珍贵延安时期鲁艺版画落户复旦大学图书馆',
        brief: '4月13日下午，复旦大学召开2018年全面从严治党工作会议，贯彻落实党的十九大、十',
        time: '4月20日',
        imgUrl: require('@img/appearance/2013.jpg'),
        path: ''
      },
      {
        title: '珍贵延安时期鲁艺版画落户复旦大学图书馆',
        brief: '4月13日下午，复旦大学召开2018年全面从严治党工作会议，贯彻落实党的十九大、十',
        time: '1小时前',
        imgUrl: '',
        path: ''
      },
      {
        title: '珍贵延安时期鲁艺版画落户复旦大学图书馆',
        brief: '4月13日下午，复旦大学召开2018年全面从严治党工作会议，贯彻落实党的十九大、十',
        time: '2小时前',
        imgUrl: '',
        path: ''
      },
      {
        title: '珍贵延安时期鲁艺版画落户复旦大学图书馆',
        brief: '4月13日下午，复旦大学召开2018年全面从严治党工作会议，贯彻落实党的十九大、十',
        time: '4月20日',
        imgUrl: '',
        path: ''
      },
      {
        title: '珍贵延安时期鲁艺版画落户复旦大学图书馆',
        brief: '4月13日下午，复旦大学召开2018年全面从严治党工作会议，贯彻落实党的十九大、十',
        time: '4月20日',
        imgUrl: '',
        path: ''
      },
      {
        title: '珍贵延安时期鲁艺版画落户复旦大学图书馆',
        brief: '4月13日下午，复旦大学召开2018年全面从严治党工作会议，贯彻落实党的十九大、十',
        time: '4月20日',
        imgUrl: '',
        path: ''
      },
      {
        title: '珍贵延安时期鲁艺版画落户复旦大学图书馆',
        brief: '4月13日下午，复旦大学召开2018年全面从严治党工作会议，贯彻落实党的十九大、十',
        time: '4月20日',
        imgUrl: '',
        path: ''
      }
    ],
    studentWork: [
      {
        title: '珍贵延安时期鲁艺版画落户复旦大学图书馆',
        brief: '',
        time: '1小时前',
        path: ''
      },
      {
        title: '生命科学学院服部素之研究员合作研究发现',
        brief: '',
        time: '2小时前',
        path: ''
      },
      {
        title: '复旦医科专题调研（之二）为放医所发展',
        brief: '',
        time: '4月20日',
        path: ''
      },
      {
        title: '上海医学院师生深入学习贯彻全国“两会”',
        brief: '',
        time: '4月20日',
        path: ''
      },
      {
        title: '平山病MDT国际高峰论坛暨平山病临床',
        brief: '',
        time: '4月20日',
        path: ''
      },
      {
        title: '珍贵延安时期鲁艺版画落户复旦大学图书馆',
        brief: '',
        time: '4月20日',
        path: ''
      },
      {
        title: '复旦大学******战队荣获第二届“强网杯',
        brief: '',
        time: '4月20日',
        path: ''
      },
      {
        title: '复旦大学基础医学院黄志力课题组发现伏',
        brief: '',
        time: '4月20日',
        path: ''
      },
      {
        title: '复旦大学基础医学院黄志力课题组发现伏',
        brief: '',
        time: '4月20日',
        path: ''
      },
      {
        title: '复旦大学******战队荣获第二届“强网杯',
        brief: '',
        time: '4月20日',
        path: ''
      }
    ],
    recruitInfo: [
      {
        title: '珍贵延安时期鲁艺版画落户复旦大学图书馆',
        brief: '',
        time: '1小时前',
        path: ''
      },
      {
        title: '生命科学学院服部素之研究员合作研究发现',
        brief: '',
        time: '2小时前',
        path: ''
      },
      {
        title: '复旦医科专题调研（之二）为放医所发展',
        brief: '',
        time: '4月20日',
        path: ''
      },
      {
        title: '上海医学院师生深入学习贯彻全国“两会”',
        brief: '',
        time: '4月20日',
        path: ''
      },
      {
        title: '平山病MDT国际高峰论坛暨平山病临床',
        brief: '',
        time: '4月20日',
        path: ''
      },
      {
        title: '珍贵延安时期鲁艺版画落户复旦大学图书馆',
        brief: '',
        time: '4月20日',
        path: ''
      },
      {
        title: '复旦大学******战队荣获第二届“强网杯',
        brief: '',
        time: '4月20日',
        path: ''
      },
      {
        title: '复旦大学基础医学院黄志力课题组发现伏',
        brief: '',
        time: '4月20日',
        path: ''
      },
      {
        title: '复旦大学基础医学院黄志力课题组发现伏',
        brief: '',
        time: '4月20日',
        path: ''
      },
      {
        title: '复旦大学******战队荣获第二届“强网杯',
        brief: '',
        time: '4月20日',
        path: ''
      }
    ],
    article: [
      {
        month: '09',
        day: '06',
        title: '延安新区党政代表团到访我校',
        imgUrl: '',
        content: '2017年9月2日，延安新区党工委副书记、延安市新区管委会主任薛鹏春一行到访我校，俞峰院长在南大殿会见来访，双方就开展交流合作事宜进行了商谈。',
        href: ''
      },
      {
        month: '09',
        day: '06',
        title: '延安新区党政代表团到访我校',
        imgUrl: require('@img/school/学院日落景.jpg'),
        content: '2017年9月2日，延安新区党工委副书记、延安市新区管委会主任薛鹏春一行到访我校，俞峰院长在南大殿会见来访，双方就开展交流合作事宜进行了商谈。',
        href: ''
      },
      {
        month: '09',
        day: '06',
        title: '延安新区党政代表团到访我校',
        content: '2017年9月2日，延安新区党工委副书记、延安市新区管委会主任薛鹏春一行到访我校，俞峰院长在南大殿会见来访，双方就开展交流合作事宜进行了商谈。',
        href: ''
      },
      {
        month: '09',
        day: '06',
        title: '延安新区党政代表团到访我校',
        content: '2017年9月2日，延安新区党工委副书记、延安市新区管委会主任薛鹏春一行到访我校，俞峰院长在南大殿会见来访，双方就开展交流合作事宜进行了商谈。',
        href: ''
      },
      {
        month: '09',
        day: '06',
        title: '延安新区党政代表团到访我校',
        content: '2017年9月2日，延安新区党工委副书记、延安市新区管委会主任薛鹏春一行到访我校，俞峰院长在南大殿会见来访，双方就开展交流合作事宜进行了商谈。',
        href: ''
      },
      {
        month: '09',
        day: '06',
        title: '延安新区党政代表团到访我校',
        content: '2017年9月2日，延安新区党工委副书记、延安市新区管委会主任薛鹏春一行到访我校，俞峰院长在南大殿会见来访，双方就开展交流合作事宜进行了商谈。',
        href: ''
      }
    ],
    routerTestData: [
      {
        article: [
          {
            month: '09',
            day: '06',
            title: '延安新区党政代表团到访我校',
            imgUrl: '',
            content: '2017年9月2日，延安新区党工委副书记、延安市新区管委会主任薛鹏春一行到访我校，俞峰院长在南大殿会见来访，双方就开展交流合作事宜进行了商谈。',
            href: ''
          },
          {
            month: '09',
            day: '06',
            title: '延安新区党政代表团到访我校',
            imgUrl: require('@img/school/学院日落景.jpg'),
            content: '2017年9月2日，延安新区党工委副书记、延安市新区管委会主任薛鹏春一行到访我校，俞峰院长在南大殿会见来访，双方就开展交流合作事宜进行了商谈。',
            href: ''
          },
          {
            month: '09',
            day: '06',
            title: '延安新区党政代表团到访我校',
            content: '2017年9月2日，延安新区党工委副书记、延安市新区管委会主任薛鹏春一行到访我校，俞峰院长在南大殿会见来访，双方就开展交流合作事宜进行了商谈。',
            href: ''
          },
          {
            month: '09',
            day: '06',
            title: '延安新区党政代表团到访我校',
            content: '2017年9月2日，延安新区党工委副书记、延安市新区管委会主任薛鹏春一行到访我校，俞峰院长在南大殿会见来访，双方就开展交流合作事宜进行了商谈。',
            href: ''
          },
          {
            month: '09',
            day: '06',
            title: '延安新区党政代表团到访我校',
            content: '2017年9月2日，延安新区党工委副书记、延安市新区管委会主任薛鹏春一行到访我校，俞峰院长在南大殿会见来访，双方就开展交流合作事宜进行了商谈。',
            href: ''
          },
          {
            month: '09',
            day: '06',
            title: '延安新区党政代表团到访我校',
            content: '2017年9月2日，延安新区党工委副书记、延安市新区管委会主任薛鹏春一行到访我校，俞峰院长在南大殿会见来访，双方就开展交流合作事宜进行了商谈。',
            href: ''
          }
        ]
      }
    ],
    teachers: [
      {
        imgUrl: require('@img/teacher/tec1.jpg'),
        name: '李仲麟',
        position: '计算机学院顾问',
        brief: '期从事计算机专业的科研、教学和教学管理工作，主要研究方向为计算机信息管理、计算机控制、信息指导硕士研究生30',
        tel: '+27 31 307 5322',
        email: 'suzanne@projectbuild.org.za',
        hasSocialPosition: true,
        socialPosition: [
          {
            position: '曾任 全国计算机教学指导委员会（工科）委员'
          },
          {
            position: '中国计算机学会理事'
          },
          {
            position: '中国计算机学会教育专委会主任。'
          },
          {
            position: '现任 中国计算机学会高级会员'
          },
          {
            position: '全国高校计算机教育研究会副理事长'
          }
        ],
        studyDirection: '',
        educationBackground: '',
        achievement: '',
        workingExperience: '1970年本科毕业于清华大学自动控制系，分配到天津煤矿专用设备厂工作，1973年底调往大港油田地调指挥部研究大队计算站从事计算机硬件维护工作，1979年到1982年在天津大学计算机系读研究生，获硕士学位，1982年毕业分配到华南理工大学计算机系任教。2000年被评聘为教授。1991年起历任华南理工大学计算机系副主任、电子与信息学院副院长、计算机科学与工程学院副院长，主管教学、实验室等工作。现任华南理工大学广州学院计算机工程学院顾问。'
      },
      {
        imgUrl: require('@img/teacher/tec2.jpg'),
        name: '邓春晖',
        position: '计算机学院院长',
        brief: '曾先后任职于电子部上海51所、电子部海南电子集团公司、海南旭龙股份有限公司',
        tel: '+27 31 307 5322',
        email: 'suzanne@projectbuild.org.za',
        hasSocialPosition: false,
        socialPosition: '',
        educationBackground: '西安电子科技大学、上海交通大学',
        studyDirection: '数据库应用、网格计算和云计算',
        achievement: '',
        workingExperience: '1970年本科毕业于清华大学自动控制系，分配到天津煤矿专用设备厂工作，1973年底调往大港油田地调指挥部研究大队计算站从事计算机硬件维护工作，1979年到1982年在天津大学计算机系读研究生，获硕士学位，1982年毕业分配到华南理工大学计算机系任教。2000年被评聘为教授。1991年起历任华南理工大学计算机系副主任、电子与信息学院副院长、计算机科学与工程学院副院长，主管教学、实验室等工作。现任华南理工大学广州学院计算机工程学院顾问。'
      },
      {
        imgUrl: require('@img/teacher/tec3.jpg'),
        name: '岑有文',
        position: '计算机学院副院长',
        brief: '长期从事学生教育与管理工作及毕业生就业指导和党务管理工作，曾在国家核心刊物和其他刊物发表论文10余篇。',
        tel: '+27 31 307 5322',
        email: 'suzanne@projectbuild.org.za',
        hasSocialPosition: false,
        socialPosition: '',
        educationBackground: '',
        studyDirection: '',
        achievement: '长期从事学生教育与管理工作及毕业生就业指导和党务管理工作，曾在国家核心刊物和其他刊物发表论文10余篇，主讲大学生人生修养学，大学生思想道德教育和大学生就业指导等课程，曾获校级优秀论文奖、省级优秀教学奖、省级毕业生就业先进工作者奖、省级高校学生工作红棉奖',
        workingExperience: '1970年本科毕业于清华大学自动控制系，分配到天津煤矿专用设备厂工作，1973年底调往大港油田地调指挥部研究大队计算站从事计算机硬件维护工作，1979年到1982年在天津大学计算机系读研究生，获硕士学位，1982年毕业分配到华南理工大学计算机系任教。2000年被评聘为教授。1991年起历任华南理工大学计算机系副主任、电子与信息学院副院长、计算机科学与工程学院副院长，主管教学、实验室等工作。现任华南理工大学广州学院计算机工程学院顾问。'
      },
      {
        imgUrl: require('@img/teacher/tec4.jpg'),
        name: '蔡沂',
        position: '计算机学院副院长',
        brief: '曾获得青年教师课堂教学竞赛三等奖、校级优秀示范课教师等荣誉。',
        tel: '+27 31 307 5322',
        email: 'suzanne@projectbuild.org.za',
        hasSocialPosition: false,
        socialPosition: '',
        educationBackground: '华南理工大学',
        studyDirection: '物联网通信协议和节点技术，网络安全',
        achievement: '',
        workingExperience: '从教以来，先后承担了多门学科基础课与专业骨干课程的讲授。曾获得青年教师课堂教学竞赛三等奖、校级优秀示范课教师等荣誉。2011年参与广东宏大爆破股份有限公司信息化项目的建设。2013年起担任网络工程专业教研室副主任一职。先后发表了多篇教研、科研论文，其中EI索引6篇。'
      },
      {
        name: '周小明',
        imgUrl: require('@img/teacher/tec5.jpg'),
        educationBackground: '国防科学技术大学，工学学士西南交通大学，工学硕士',
        position: '计算机科学与技术教研室副主任，讲师',
        brief: '',
        tel: '',
        email: '',
        studyDirection: '嵌入式系统，图像处理，物联网技术',
        hasSocialPosition: false,
        socialPosition: '',
        achievement: '',
        workingExperience: '本人是双师型教师，有多年企业嵌入式项目的开发经验,对物联网也比较熟悉，多次参加全国物联网学术研讨会。在富士康科技集团工作时以公司的名义申请了7项有关图形图像方面的技术专利,是数码相机团队的主要负责人之一,参与多种型号的数码相机研发.担任IQ大陆地区副主委.发表了4篇学术论文,其中一篇是核心期刊，负责学校单片机开发实验室,嵌入式系统开发实验室的建设指导工作. 教学方面主要负责计算机硬件相关工作，主要的课程有电子电路基础，模拟电路，数字电路，计算机组成原理，网络通信原理，单片机与接口技术，嵌入式操作系统，嵌入式项目实践，汇编序设计，C/C++语言程序设计等'
      },
      {
        name: '王素丽',
        imgUrl: require('@img/teacher/tec6.jpg'),
        educationBackground: '硕士研究生',
        position: '计算机科学与技术教研室副主任/讲师',
        brief: '',
        tel: '',
        email: '',
        studyDirection: '计算机应用技术、多媒体技术 ',
        hasSocialPosition: false,
        socialPosition: '',
        achievement: '',
        workingExperience: '主讲《Flash动画设计》、《二维动画编程》、《多媒体技术及应用》、《操作系统》、《Photoshop平面设计》等多门课程。在2011-2012学年度青年教师课堂教学竞赛中荣获三等奖。主要从事多媒体技术应用方面的研究，先后发表教学研究论文2篇，科研类核心期刊论文4篇。'
      },
      {
        name: '胡赟',
        imgUrl: require('@img/teacher/tec7.jpg'),
        educationBackground: '解放军信息工程大学，本科国防科技大学，工学博士',
        position: '副教授',
        brief: '',
        tel: '',
        email: '',
        studyDirection: '智能视频处理，嵌入式系统与软件，通信与信息处理',
        hasSocialPosition: false,
        socialPosition: '',
        achievement: '',
        workingExperience: '出生于1968年5月，籍贯江西婺源，1985年9月至1989年7月，解放军信息工程大学通信工程系计算机通信专业学习，1996年11月于国防科技大学获通信与电子系统博士学位，1998年12月评为副教授。主要研究兴趣有：智能视频分析、软件工程、计算机网络、现代电信网、通信及信息处理等，在智能安防、电信网络及信息技术方面具有比较扎实的理论基础和丰富的实践经验，曾在国际国内刊物和学术会议上发表学术论文二十余篇，与人合著的《军事通信网》一书于1999年由国防工业出版社出版。'
      },
      {
        name: '林煜东',
        imgUrl: require('@img/teacher/tec8.jpg'),
        educationBackground: '华南农业大学，工学硕士西南交通大学，工学博士',
        position: '计算机教研室老师',
        brief: '',
        tel: '',
        email: '',
        studyDirection: '信号去噪，信号稀疏表示，数字图像处理，人工智能等',
        hasSocialPosition: false,
        socialPosition: '',
        achievement: '',
        workingExperience: '2016年在西南交通大学获得博士学位，现在华南理工大学广州学院计算机科学与技术学院任教，担任“C语言程序设计”和“算法设计与分析”等计算机相关课程的教学工作。近几年主持或参与完成四川省创新苗子工程项目、国家自然科学基金项目、国家重大项目子课题等多个项目。在国内外学术期刊发表学术论文5篇，其中SCI3篇，EI2篇，获得授权专利1项。'
      },
      {
        name: '邓一星',
        imgUrl: require('@img/teacher/tec9.jpg'),
        educationBackground: '桂林电子工业学院（现桂林电子科技大学）计算机应用技术专业，工学硕士',
        position: '计算机科学与技术教研室副主任，讲师/高级工程师',
        brief: '',
        tel: '',
        email: '',
        studyDirection: '面向服务架构与云计算，多媒体技术，地理信息系统',
        hasSocialPosition: false,
        socialPosition: '',
        achievement: '',
        workingExperience: '曾任教于厦门大学嘉庚学院计算机科学与技术系，主讲《软件工程》、《操作系统》和《软件项目管理》等课程担任系主任助理，全面协助系主任进行系的专业规划建设及日常管理。2011年7月任教于华南理工大学广州学院计算机工程学院，主讲《软件工程》、《高级语言程序设计》等课程。先后发表教研论文三篇，科研论文三篇，获一次省级计算机推广成果一等奖，一次市级科学技术进步奖二等奖。此外，还曾通过两项IBM认证考试，通过了计算机技术与软件专业技术资格（水平）考试，获得了“信息系统项目管理师”高级资格证书。'
      },
      {
        name: '郑馥丹',
        imgUrl: require('@img/teacher/tec10.jpg'),
        educationBackground: '中山大学信息科学与技术学院（计算机软件与理论专业），工学硕士',
        position: '软件工程教研室副主任，副教授',
        brief: '',
        tel: '',
        email: '',
        studyDirection: 'SOA与云计算大数据',
        hasSocialPosition: false,
        socialPosition: '',
        achievement: '',
        workingExperience: '2009年7月任教于华南理工大学广州学院计算机工程学院。任教以来，以较强的逻辑性及活泼热情的教学风格，深受学生喜爱，历年学生教评结果均名列前茅，先后获得优秀教师、先进教师、优秀班主任等荣誉称号。2011年5月参加校第三届青年教师课堂教学竞赛获三等奖。指导学生参加各项比赛、SRP项目和毕业设计，多次获得优秀指导老师称号。多媒体作品《贪心算法》先后获得第十五届全国多媒体教学软件大奖赛三等奖、广东省优胜奖、华南理工大学广州学院一等奖。发表多篇论文，其中1篇于2014年11月在电子商务顶级会议上发表。'
      },
      {
        name: '袁俐萍',
        imgUrl: require('@img/teacher/tec11.jpg'),
        educationBackground: '硕士研究生',
        position: '副教授',
        brief: '',
        tel: '',
        email: '',
        studyDirection: '计算机应用、数据库应用、多媒体应用',
        hasSocialPosition: false,
        socialPosition: '',
        achievement: '',
        workingExperience: '曾就读于西安电子科技大学计算机及应用专业，现任职华南理工大学广州学院计算机工程学院。长期从事教学工作，理论和实践能力比较强，是双师型的导师，尤其在计算机应用、数据库应用及多媒体应用等方面具有较深的造诣和很强的实践指导能力。2004年任副教授以来，发表了论文20余篇主编和参编了8本教材。'
      },
      {
        name: '秦映波',
        imgUrl: require('@img/teacher/tec12.jpg'),
        educationBackground: '硕士研究生',
        position: '讲师',
        brief: '',
        tel: '',
        email: '',
        studyDirection: '智能优化',
        hasSocialPosition: false,
        socialPosition: '',
        achievement: '',
        workingExperience: '主讲《Java面向对象程序设计》、《高级网页设计与制作》、《高级语言程序设计》等课程。在教学中认真负责,多次评为学校”优秀教师”。参与多项省级教学研究项目，发表科研论文多篇。'
      },
      {
        name: '余小华',
        imgUrl: require('@img/teacher/tec13.jpg'),
        educationBackground: '华南师范大学，工学硕士',
        position: '网络工程教研室主任，副教授',
        brief: '',
        tel: '',
        email: '',
        studyDirection: '计算机网络、无线网络和网络安全',
        hasSocialPosition: false,
        socialPosition: '',
        achievement: '',
        workingExperience: '主要从事计算机网络、网络工程设计、高级语言程序设计（C）、汇编语言程序设计等多门基础课和专业课的理论教学和实验指导工作。主持或参与教研和科研项目多项，发表教研科研学术论文10余篇。通过了计算机技术与软件专业技术资格（水平）考试，获得了“网络规划设计师”高级资格证书。'
      },
      {
        name: '肖皇培',
        imgUrl: require('@img/teacher/tec14.jpg'),
        educationBackground: '郑州信息工程大学理学学士、华南理工大学工学博士',
        position: '副研究员',
        brief: '',
        tel: '',
        email: '',
        studyDirection: '算法设计与分析、网络安全技术、信息安全密码理论、图像处理等',
        hasSocialPosition: false,
        socialPosition: '',
        achievement: '',
        workingExperience: '承担《高级语言程序设计（C)》、《数据结构》、《JAVA面向对象程序设计与实践》等多门计算机专业课程的教学工作，具有近20年科研工作经验，曾荣获国家与军队多项科研成果奖，发表论文多篇，其中EI索引3篇。'
      },
      {
        name: '吴丽镐',
        imgUrl: require('@img/teacher/tec15.jpg'),
        educationBackground: '华南师范大学数学科学学院，理学硕士',
        position: '数学/信息与计算科学教研室副主任，副教授',
        brief: '',
        tel: '',
        email: '',
        studyDirection: '微分差分方程复振荡',
        hasSocialPosition: false,
        socialPosition: '',
        achievement: '',
        workingExperience: '2008年任教于华南理工大学广州学院，主讲多门数学课程，有严谨、生动的教学风格，历年学生评教均名列前茅。是学校首批“优秀青年骨干教师”之一，并荣获第三届青年教师竞赛“一等奖”，此外还多次被学校评为“优秀共产党员”、“优秀班主任”、“优秀教师”、“先进教师”、“优秀示范课教师”。主持校级项目三项，省级项目一项，发表学术教研论文七篇。'
      },
      {
        name: '卢珍',
        imgUrl: require('@img/teacher/tec16.jpg'),
        educationBackground: '中山大学数学与计算科学学院，理学硕士',
        position: '数学/信息与计算科学专业教研室副主任，讲师',
        brief: '',
        tel: '',
        email: '',
        studyDirection: '数学，信号处理',
        hasSocialPosition: false,
        socialPosition: '',
        achievement: '',
        workingExperience: '中国共产党员，2010年硕士毕业就职于华南理工大学广州学院，主讲《高等数学》、《微积分》、《概率论与数理统计》、《线性代数》、《双语数学》、《考研数学》、《数学软件》等课程。先后多次获得学校的“优秀班主任”“优秀教师”、“先进教师”、“我最喜爱的教师”、并在华南理工大学广州学院第六届课堂教学竞赛暨多媒体课件设计比赛中表现优秀，荣获“一等奖”及“优秀多媒体课件奖”。后作为本校唯一参赛代表参加广东省青年教师竞赛并能在众多来自重点院校的优秀参赛者中脱颖而出，斩获理科组“二等奖”，成为唯一一位获得二等奖以上个人奖项的来自独立学院的教师，并被授予“广东省职工经济技术创新能手”的称号。2014年11月，参加第十四届全国多媒体课件大赛获得三等奖。陆续发表论文三篇，其中核心期刊一篇，参与编纂微积分教材一部，主持项目一个，参与项目若干。'
      },
      {
        name: '阳平华',
        imgUrl: require('@img/teacher/tec17.jpg'),
        educationBackground: '天津大学、北京理工大学',
        position: '教授',
        brief: '',
        tel: '',
        email: '',
        studyDirection: '应用数学',
        hasSocialPosition: false,
        socialPosition: '',
        achievement: '',
        workingExperience: '1986年9月天津大学应用数学专业本科毕业，1989年3月天津大学应用数学专业硕士毕业，并获中科院系统所硕士学位。2006年10月北京理工大学应用数学专业博士毕业。1989年3月到军械工程学院任教，2000年任硕士生导师，2006年任军事运筹学学科负责人。在国内外期刊发表学术论文70余篇，其中被SCI检索10余篇，主持或参与国家级、总部、省级项目10余项，在国家级出版社出版编著5部。2016年4月到华南理工大学广州学院工作。现为全国生物数学学会第七届理事（连任），美国数学评论评论员。'
      },
      {
        name: '罗世庄',
        imgUrl: require('@img/teacher/tec18.jpg'),
        educationBackground: '大学本科',
        position: '副教授',
        brief: '',
        tel: '',
        email: '',
        studyDirection: '应用数学，应用统计',
        hasSocialPosition: false,
        socialPosition: '',
        achievement: '',
        workingExperience: '1982年9月至2012年1月在暨南大学数学系任教2012年3月至今在华南理工大学广州学院任教。承担过的主要教学课程有：《高等数学》，《概率论与数理统计》，《多元统计分析》，《数学模型》，《运筹学》。'
      },
      {
        name: '詹涌强',
        imgUrl: require('@img/teacher/tec19.jpg'),
        educationBackground: '暨南大学，理学硕士',
        position: '副教授',
        brief: '',
        tel: '',
        email: '',
        studyDirection: '微分方程数值解法',
        hasSocialPosition: false,
        socialPosition: '',
        achievement: '',
        workingExperience: '07年到华南理工大学广州学院任教，担任过“高等数学”、“线性代数”、“数值分析”等十余门课程的教学工作，近几年主持了两项省教育厅教研教改项目，在国内外核心期刊以上的刊物上发表论文十余篇。'
      },
      {
        name: '杨柱学',
        imgUrl: require('@img/teacher/tec20.jpg'),
        educationBackground: '',
        position: '计算机学院顾问',
        brief: '',
        tel: '',
        email: '',
        studyDirection: '',
        hasSocialPosition: true,
        socialPosition: [
          {
            position: '曾任 广东省计算机用户协会常务理事'
          },
          {
            position: '广东省高校计算中心管理研究会副理事长'
          },
          {
            position: '中国高等教育学会教育信息化分会理事'
          }
        ],
        achievement: '长期从事学生教育与管理工作及毕业生就业指导和党务管理工作，曾在国家核心刊物和其他刊物发表论文10余篇，主讲大学生人生修养学，大学生思想道德教育和大学生就业指导等课程，曾获校级优秀论文奖、省级优秀教学奖、省级毕业生就业先进工作者奖、省级高校学生工作红棉奖',
        workingExperience: '1976年本科毕业于华南工学院（后更名为华南理工大学）计算机专业；1983年晋升为讲师；1995年晋升为高级工程师。曾任华南理工大学计算中心硬件室主任、开发研究室主任；1992年起任华南理工大学计算中心副主任，1998年起任华南理工大学计算中心主任，2006年起兼任华南理工大学计算机省级教学实验示范中心副主任。现任华南理工大学广州学院计算机实验中心主任。'
      },
      {
        name: '李成炼',
        imgUrl: require('@img/teacher/tec21.jpg'),
        educationBackground: '广东工业大学，工学学士',
        position: '计算机实验中心副主任，实验师',
        brief: '',
        tel: '',
        email: '',
        studyDirection: '实验室建设与管理，云计算，大数据分析',
        hasSocialPosition: false,
        socialPosition: '',
        achievement: '',
        workingExperience: '2009年至今在华南理工大学广州学院从事教学、实验室建设与管理工作，主讲《微机拆装与维护》、《计算机应用基础》等课程，指导学生SRP项目和毕业设计等教学任务，并多次获得优秀教师、先进教师称号。此外，还负责全国计算机等级考试系统管理员工作。'
      },
      {
        name: '韦婷',
        imgUrl: require('@img/teacher/tec22.jpg'),
        educationBackground: '华南理工大学计算机科学与工程学院，工学硕士',
        position: '计算机公共基础课程教研室副主任，讲师',
        brief: '',
        tel: '',
        email: '',
        studyDirection: '计算机应用技术，智能软件与机器人',
        hasSocialPosition: false,
        socialPosition: '',
        achievement: '',
        workingExperience: '2008年曾在微软公司实习，从事软件开发工作。2009年7月至今任教于华南理工大学广州学院计算机工程学院。主讲课程为《操作系统》、《高级语言程序设计》、《数据结构》等计算机科学与技术专业基础核心课程。近年来出版《数据结构（C++语言版）》教材1本，发表教学研究论文1篇。曾在2011年校第一届多媒体教育软件竞赛中获二等奖，在2014年校第六届课堂教学竞赛中获二等奖。'
      }
    ]
  }
}
export default new Vuex.Store({
  state
})
