// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
import Vue from 'vue'
import Router from 'vue-router'
// 1. 定义（路由）组件。
// 可以从其他文件 import 进来

import Seller from '@/components/Seller/Seller.vue'
import Rating from '@/components/Rating/Rating.vue'
import Goods from '@/components/Goods/Goods.vue'
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [{
	path: '/goods',
	component: Goods
}, {
	path: '/seller',
	component: Seller
}, {
	path: '/rating',
	component: Rating
}]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
Vue.use(Router)

export default new Router({
	routes,
	linkActiveClass: 'active'
})


// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
// const app = new Vue({
//   router
// }).$mount('#app')