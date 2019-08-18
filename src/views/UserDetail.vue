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
let userData = [
    {
        id: 1,
        name: 'Takuya Tejima',
        description: '東南アジアで働くエンジニアです。'
    },
    {
        id: 2,
        name: 'Yohei Noda',
        description: 'アウトドア・フットサルが興味のエンジニアです。'
    }
];

let getUser = function(userId, callback){

    setTimeout(
        (function(){

            let filteredUsers = userData.filter(function(user){
                return user.id === parseInt(userId, 10);
            });

            callback(null, filteredUsers && filteredUsers[0]);
        }),
        1000
    );
};

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
        fetchData: function(){

            this.loading = true;

            getUser(this.$route.params.userId, (function(err, user){

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