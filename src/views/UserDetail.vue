<template>
    <div>
        <div class="loading" v-if="loading">読みこみ中...</div>
        <div v-if="error">{{error}}</div>
        <div v-if="user">
            <h2>{{user.name}}</h2>
            <p>{{user.description}}</p>
        </div>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            loading: false,
            user: null,
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
        getUser: function(userId, callback){

            setTimeout(
                (function(){

                    let filteredUsers = this.$store.state.userData.filter(function(user){
                        return user.id === parseInt(userId, 10);
                    });

                    callback(null, filteredUsers && filteredUsers[0]);
                }).bind(this),
                1000
            );
        },
        fetchData: function(){

            this.loading = true;

            this.getUser(this.$route.params.userId, (function(err, user){

                this.loading = false;

                if(err)
                    this.error = err.toString();
                else
                    this.user = user;
            }).bind(this));
        }
    }
}
</script>