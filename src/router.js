import Vue from 'vue'
import Router from 'vue-router'
import Top from './views/Top.vue'
import UserList from './views/UserList.vue'
import UserCreate from './views/UserCreate.vue'
import UserDetail from './views/UserDetail.vue'
import Login from './layouts/Login.vue'
import Auth from './auth'

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
    },
    {
      path: '/users/new',
      component: UserCreate,
      beforeEnter: function(to, from, next){

        if(!Auth.loggedIn()){

          next({
            path: '/login',
            query: {
              redirect: to.fullPath
            }
          });
        }else
          next();
      }
    },
    {
      path: '/users/:userId',
      component: UserDetail
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/logout',
      beforeEnter: function(to, from, next){

        Auth.logout();
        next('/');
      }
    }
  ]
})
