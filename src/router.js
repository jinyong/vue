import Vue from 'vue'
import Router from 'vue-router'
import UserList from './views/UserList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/top',
      component: {
        template: '<div>トップページです。</div>'
      }
    },
    {
      path: '/users',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: UserList
    }
  ]
})
