<template>
  <div>
    <div class="loading" v-if="loading">読み込み中...</div>
    <div v-if="error" class="error">{{error}}</div>
    <div v-for="user in users" :key="user.id">
      <h2>{{user.name}}</h2>
    </div>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
let getUsers = function(callback){
  setTimeout(
    callback(null, [
      {
        id: 1,
        name: 'Takuya Tejima'
      },
      {
        id: 2,
        name: 'Yohei Noda'
      }
    ])
    ,
    1000
  );
};

export default {
  data: function(){
    return {
      loading: false,
      users: function(){return []},
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
      getUsers((function(err, users){

        this.loading = false;
        if(err)
          this.error = err.toString();
        else
          this.users = users;
      }).bind(this));
    }
  }
}
</script>