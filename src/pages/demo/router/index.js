import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import Add from '../views/Add.vue'
import List from '../views/List.vue'
import Info from '../views/Info.vue'
import User from '../views/User.vue'


Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: 'home'
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
            children: [
                {
                    path: 'login', 
                    name: 'Login',
                    component: Login
                },
                {
                    path: 'info',
                    name: 'Info',
                    component: Info
                },
                {
                    path: 'add',
                    name: 'Add',
                    component: Add
                },
                {
                    path: 'list',
                    name: 'List',
                    component: List
                },
                {
                    path: 'user',
                    name: 'User',
                    // component: import(/**webpackChunkName: "list" */ '../views/User.vue')
                    component: User
                },
                {
                    path: '',
                    component: Login
                },
            ]
        },
    ]
})
