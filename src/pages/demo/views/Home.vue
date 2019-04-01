<template>
    <div>
        <router-view />
        <ul class="bot-nav">
            <li><router-link to="/home/list">新闻</router-link></li>
            <li><router-link :to="{ name: 'User', params: { userId: 123 }}">个人</router-link></li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'demo1',
    data() {
        return {

        }
    },
    methods:{

    }
}
</script>
<style lang="less">
    .bot-nav{
        position: fixed;
        width: 100%;
        display: flex;
        bottom: 0;
        border: 1px solid  #ddd;
        background: #eee;
        color: #f91;
        text-align: center;
        li{
            flex: 1;
            line-height: 80px;

        }
    }
</style>

