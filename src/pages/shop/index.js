// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/common/stylus/index.styl'
import '@/assets/reset.css'

import axios from 'axios'
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.prototype.$help = new Vue(); //用来组件之间进行通信

Vue.filter('notNull', function(value) {
	if (value == null) {
		return 0
	} else {
		return value;
	}
})

/* eslint-disable no-new */
const vm = new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>',
	created: function() {
		this.$router.push('/rating')
	}
})


// new Vue({
// 	router,
// 	components: {
// 		App
// 	},
// 	template: '<App/>'
// }).$mount('#app')