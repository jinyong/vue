<template>
    <div>
        <div class="sending" v-if="sending">Sending...</div>

        <div>
            <h2>新規ユーザー作成</h2>
            <div>
                <label>名前: </label>
                <input type="text" v-model="user.name">
            </div>
            <div>
                <label>説明文: </label>
                <textarea v-model="user.description"></textarea>
            </div>
            <div class="error" v-if="error">{{error}}</div>
            <div>
                <button type="button" @click="createUser">送信</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            sending: false,
            user: this.defaultUser(),
            error: null
        }
    },
    created: function(){

    },
    methods: {
        defaultUser: function(){
            return {
                name: '',
                description: ''
            }
        },
        createUser: function(){

            if(this.user.name.trim() === ''){
                
                this.error = 'Nameは必須です。';
                
                return;
            }
            if(this.user.description.trim() === ''){

                this.error = 'Descriptionは必須です。';

                return;
            }

            this.postUser(
                this.user,
                (function(err, user){

                    this.sending = false;
                    if(err)
                        this.error = err.toString();
                    else{

                        this.error = null;
                        this.user = this.defaultUser();
                        alert('新規ユーザーが登録されました。');
                        this.$router.push('/users');
                    }
                }).bind(this)
            );
        },
        postUser: function(params, callback){

            setTimeout(
                (function(){
                    
                    params.id = this.$store.state.userData.length + 1;
                    this.$store.state.userData.push(params);
                    callback(null, params);
                }).bind(this)
                ,
                1000
            );
        }
    }
}
</script>