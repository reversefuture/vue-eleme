<template>
    <div id="app">
        <div id="nav">
            <router-link to="/home">Home</router-link>
            <router-link to="/about">About</router-link>
        </div>
        <router-view />
    </div>
</template>
<script>
export default {
    name: 'demo1',
    data() {
        return {
            list: [1,2,3,4],
            current: -1,
            target: []
        }
    },
    methods:{
        choose(index){
            this.current=index;
        },
        add(){
            if(this.current < 0){
                alert('please choose one item!');
                return;
            }
            let val = this.list.splice(this.current, 1);
            console.log(this.target)
            this.target.push(val[0]);
            this.current =-1;
        }
    }
}
</script>
<style scoped lang="less">
h1, h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #2c3350;
}
#app{
    text-align: center;
    color: #2c3350;
}
#nav{
    padding: 30px;
    a{
        font-weight: bold;
        &.router-link-exact-active{
            color: #f00;
        }
    }
}
</style>
