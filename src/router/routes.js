
const _import = file => resolve => require([`@views/${file}`], resolve)

export default [{
  path: '/',
  component: _import('layout/official'),
  children: [{
    name: 'main',
    path: '/',
    component: _import('main')
  }, {
    name: 'collegeintro',
    title: '学院简介',
    path: '/collegeintro/:category',
    component: _import('collegeIntro')
  }, {
    name: 'teacherinfo',
    title: '教师队伍',
    path: '/teacherinfo',
    component: _import('teacherInfo')
  }, {
    name: 'collegenews',
    title: '新闻中心',
    path: '/collegenews',
    component: _import('collegeNews')
  }, {
    name: 'gallery',
    title: '学院相册',
    path: '/gallery/:category',
    component: _import('gallery')
  }, {
    name: 'educationnews',
    title: '教学管理',
    path: '/educationnews/:category',
    component: _import('educationNews')
  }, {
    name: 'studentnews',
    title: '学生工作',
    path: '/studentnews/:category',
    component: _import('studentNews')
  }, {
    name: 'partynews',
    title: '党建工作',
    path: '/partynews/:category',
    component: _import('partyNews')
  }, {
    name: 'recruit',
    title: '招生就业',
    path: '/recruit/:category',
    component: _import('recruit')
  }, {
    name: 'cooperateinfo',
    title: '对外合作',
    path: '/cooperateinfo/:category',
    component: _import('cooperateInfo')
  }, {
    name: 'articleShowCase',
    title: '对外合作',
    path: '/:section/:category/:id',
    component: _import('articleShowCase')
  }]
}]
