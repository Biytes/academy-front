
const _import = file => resolve => require([`@views/${file}`], resolve)

export default [{
  path: '/',
  component: _import('layout/official'),
  children: [{
    path: '',
    component: _import('main')
  }, {
    name: 'collegeintro',
    title: '学院简介',
    path: 'collegeIntro/:category',
    component: _import('collegeIntro')
  }, {
    name: 'teacherinfo',
    title: '教师队伍',
    path: 'teacherInfo',
    component: _import('teacherInfo')
  }, {
    name: 'collegenews',
    title: '新闻中心',
    path: 'collegeNews',
    component: _import('collegeNews')
  }, {
    name: 'gallery',
    title: '学院相册',
    path: 'gallery',
    component: _import('gallery')
  }, {
    name: 'educationnews',
    title: '教学管理',
    path: 'educationNews/:category',
    component: _import('educationNews')
  }, {
    name: 'studentnews',
    title: '学生工作',
    path: 'studentNews/:category',
    component: _import('studentNews')
  }, {
    name: 'partynews',
    title: '党建工作',
    path: 'partyNews/:category',
    component: _import('partyNews')
  }, {
    name: 'recruit',
    title: '招生就业',
    path: 'recruit/:category',
    component: _import('recruit')
  }, {
    name: 'cooperateinfo',
    title: '对外合作',
    path: 'cooperateInfo/:category',
    component: _import('cooperateInfo')
  }]
}]
