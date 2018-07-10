import Vue from 'vue'
import Router from 'vue-router'
import official from '@/components/official'
import about from '@views/about'
import communistWork from '@views/communistWork'
import foreignCooperation from '@views/foreignCooperation'
import gallery from '@views/gallery'
import main from '@views/main'
import news from '@views/news'
import recruit from '@views/recruit'
import studentWork from '@views/studentWork'
import teacher from '@views/teacher'
import educationManagement from '@views/educationManagement'
Vue.use(Router)
export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [{
    path: '/',
    component: official,
    children: [{
      path: '',
      component: main
    }, {
      path: 'about/:id',
      component: about
    }, {
      path: 'communistWork/:id',
      component: communistWork
    }, {
      path: 'foreignCooperation/:id',
      component: foreignCooperation
    }, {
      path: 'gallery',
      component: gallery
    }, {
      path: 'news',
      component: news
    }, {
      path: 'recruit/:id',
      component: recruit
    }, {
      path: 'studentWork/:id',
      component: studentWork
    }, {
      path: 'teacher',
      component: teacher
    }, {
      path: 'educationManagement/:id',
      component: educationManagement
    }]
  }]
})
