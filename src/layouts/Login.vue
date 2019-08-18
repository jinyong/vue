<template>
  <div>
    <h2>Login</h2>
    <p v-if="$route.query.redirect">
      ログインしてください。
    </p>
    
    <form @submit.prevent="login">
      <label><input v-model="email" placeholder="email"></label>
      <label><input type="password" v-model="pass" placeholder="password"></label>
      <br>
      <button type="submit">ログイン</button>
      <p class="error" v-if="error">ログインに失敗しました。</p>
    </form>
  </div>
</template>

<script>
  import Auth from '../auth'

  export default {
    data() {
      return {
        email: 'vue@example.com',
        pass: '',
        error: false
      }
    },
    methods: {
      login: function(){
        
        Auth.login(
          this.email,
          this.pass,
          (function(loggedIn){

            if(!loggedIn)
              this.error = true;
            else
              this.$router.replace(this.$route.query.redirect || '/');
          }).bind(this)
        );
      }
    }
  }
</script>
