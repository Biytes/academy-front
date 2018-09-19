
const _import = file => resolve => require([`@views/${file}`], resolve)

export default [{
  path: '/',
  component: _import('layout/official'),
  children: [{
    path: '',
    component: _import('main')
  }, {
    path: 'about/:id',
    component: _import('about')
  }, {
    path: 'communistWork/:id',
    component: _import('communistWork')
  }, {
    path: 'foreignCooperation/:id',
    component: _import('foreignCooperation')
  }, {
    path: 'gallery',
    component: _import('gallery')
  }, {
    path: 'news',
    component: _import('news')
  }, {
    path: 'recruit/:id',
    component: _import('recruit')
  }, {
    path: 'studentWork/:id',
    component: _import('studentWork')
  }, {
    path: 'teacher',
    component: _import('teacher')
  }, {
    path: 'educationManagement/:id',
    component: _import('educationManagement')
  }]
}]
