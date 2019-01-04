
const _import = file => resolve => require([`@views/${file}`], resolve)

export default [{
  path: '/',
  component: _import('layout/official'),
  children: [{
    name: 'main',
    path: '',
    meta: {
      title: '计算机工程学院 - 华南理工大学广州学院'
    },
    component: _import('main')
  }, {
    name: 'collegeintro',
    meta: {
      title: '学院简介'
    },
    path: '/collegeintro/:category',
    component: _import('collegeIntro')
  }, {
    name: 'teacherinfo',
    meta: {
      title: '教师队伍'
    },
    path: '/teacherinfo',
    component: _import('teacherInfo')
  }, {
    name: 'collegenews',
    meta: {
      title: '新闻中心'
    },
    path: '/collegenews',
    component: _import('collegeNews')
  }, {
    name: 'gallery',
    meta: {
      title: '学院相册'
    },
    path: '/gallery/:category',
    component: _import('gallery')
  }, {
    name: 'educationnews',
    meta: {
      title: '教学管理'
    },
    path: '/educationnews/:category',
    component: _import('educationNews')
  }, {
    name: 'studentnews',
    meta: {
      title: '学生工作'
    },
    path: '/studentnews/:category',
    component: _import('studentNews')
  }, {
    name: 'partynews',
    meta: {
      title: '党建工作'
    },
    path: '/partynews/:category',
    component: _import('partyNews')
  }, {
    name: 'recruit',
    meta: {
      title: '招生就业'
    },
    path: '/recruit/:category',
    component: _import('recruit')
  }, {
    name: 'cooperateinfo',
    meta: {
      title: '对外合作'
    },
    path: '/cooperateinfo/:category',
    component: _import('cooperateInfo')
  }, {
    name: 'articleShowCase',
    meta: {
      title: '文章'
    },
    path: '/:section/:category/:id',
    component: _import('articleShowCase')
  }]
}]
