<template>
    <div>
        <form v-if="localIsReg" @submit="login">
            <p><span class="label">用户名： </span><input type="text" v-model="username"></p>
            <p ><span class="label">密码</span> <input type="password" v-model="password"></p>
            <p><button @click="login">Login</button>
            <button @click="toReg">To Register</button></p>
        </form>
        <form v-else @submit="reg">
            <p> <span class="label">用户名： </span><input type="text" v-model="username"></p>
           <p> <span class="label">密码</span>  <input typxe="password" v-model="password"></p>
            <p><span class="label">确认密码</span> <input typxe="password"  v-model="confirmPassword"></p>
            <p><button @click="reg">确定</button>
            <button @click="reset">重置</button></p>
            <p class="bot"> <button @click="toLogin">去登录</button></p>
        </form>

    </div>
</template>
<script>
export default {
    name: 'demo1',
    // props:{
    //     isReg:{
    //         type: Boolean,
    //         default: false
    //     }
    // },
    data() {
        return {
            username:'',
            password:'',
            confirmPassword:''
        }
    },
    methods:{
        login() {
            if(this.username.trim() === 'luoe' && this.password.trim()==='000000'){
                localStorage.setItem('username', this.username)
                this.$router.push('/home/user');
            }
        },
        reg(){
            if(this.password=== this.confirmPassword){
                localStorage.setItem('username', this.username);
                localStorage.setItem('password', this.password);
            }else{
                alert('两次输入密码不一致');
            }
        },
        reset(){
            this.username = '';
            this.password = '';
            this.confirmPassword= '';
        },
        toReg(){
            this.$store.commit('changeRegState', false);
        },
        toLogin(){
            this.$store.commit('changeRegState', true);
        }
    },
    computed:{
        localIsReg(){
            return this.$store.state.isReg
        }
    }
}
</script>
<style>
    p{
        text-align: left;
    }
    .label{
        display: inline-block;
        width: 100px;
        text-align: left;
        color:  #338;
    }
    input{
        border: 1px solid  #ddd;
    }
</style>

