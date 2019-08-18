<template>
  <div>
    <div class="loading" v-if="loading">読み込み中...</div>
    <div v-if="error" class="error">{{error}}</div>
    <div v-for="user in users" :key="user.id">
      <h2>
          <router-link :to="{path:'/users/' + user.id}">{{user.name}}</router-link>
        </h2>
    </div>
  </div>
</template>

<script>
import { setTimeout } from 'timers';

export default {
  data: function(){
    return {
      loading: false,
      users: [],
      error: null
    }
  },
  created: function(){
    this.fetchData();
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData: function(){

      this.loading = true;
      
      this.users = this.$store.state.userData;

      this.loading = false;
    }
  }
}
</script>