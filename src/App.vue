<template>
  <div id="app">
    <nav>
      <router-link to="/top">トップページ</router-link>
      <router-link to="/users">ユーザー一覧ページ</router-link>
      <router-link to="/users/new?redirect=true">新規ユーザー登録</router-link>
      <router-link to="/login" v-show="!loggedIn()">ログイン</router-link>
      <router-link to="/logout" v-show="loggedIn()">ログアウト</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<script>
import Auth from './auth';

export default {
  methods : Auth
}
</script>
