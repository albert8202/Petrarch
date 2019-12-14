// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
axios.defaults.withCredentials = true;
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css';
import '../static/css/app.e8d7150796b0befa5b827c0e9e9831d5.css';
import request from '@/utils/request'

var IP="192.168.1.123:5000/";





// function post(url, data) {
//     return axios({
//       method: "POST",
//       url:  IP + url,
//       //url: url,
//       data: data,
//       withCredentials : true
//     })
//   }
//   function get(url) {
//     return axios({
//       method: "GET",
//       url: IP + url,
//       withCredentials: true
//     });
//   }

Vue.config.productionTip = false;

Vue.use(ViewUI);
Vue.use(ElementUI)
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})