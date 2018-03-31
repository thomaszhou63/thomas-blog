import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import main from '@/views/main'
import other from '@/views/other'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: main
    },
    {
      path: '/other',
      name: 'Other',
      component: other
    },

  ]
})
