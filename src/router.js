import Vue from 'vue'
import Router from 'vue-router'
import Top from './views/Top.vue'
import UserList from './views/UserList.vue'
import UserDetail from './views/UserDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/top',
      component: Top
    },
    {
      path: '/users',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: UserList
    },{
      path: '/users/:userId',
      component: UserDetail
    }
  ]
})
