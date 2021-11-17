import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
import api from 'api/index.js';
import store from './store';

Vue.use(uView);
// 挂载工具函数
import tools from '@/utils/tools';
Vue.prototype.$tools = tools;
Vue.config.productionTip = false
Vue.prototype.$api = api;
Vue.prototype.$url = 'https://schoolhelp.5laoye.com';
// Vue.prototype.$url = 'https://schoolhelp.5laoye.com';
App.mpType = 'app';


const app = new Vue({
	...App,
	store,
})
app.$mount()
