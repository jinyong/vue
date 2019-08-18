export default {
  login: function(email, pass, cb){

    if(email === 'vue@example.com' && pass === 'vue'){

      localStorage.token = Math.random().toString(36).substring(7)
      if(cb) cb(true); 
    }else{
      if(cb) cb(false);
    }
  },
  logout: function(){
    delete localStorage.token;
  },
  loggedIn: function(){
    return !!localStorage.token;
  }
}