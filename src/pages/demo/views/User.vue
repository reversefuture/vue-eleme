<template>
    <div>
        welcome: {{username}}
        <router-link :to="{name: 'login'}">to login</router-link>
    </div>
</template>
<script>
export default {
    name: 'demo1',
    data() {
        return {
            username: localStorage.getItem('username')
        }
    },
    methods:{

    },
    computed:{}
}
</script>
<style>

</style>

