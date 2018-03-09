import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Alarm from '../components/Alarm.vue';
import Login from '../components/action/Login.vue';
import SetDeviceAddress from '../components/action/SetDeviceAddress.vue';
import DeviceDetail from '../components/home/detail/DeviceDetail.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: '/', component: Home }, 
    { path: '/device_detail', component: DeviceDetail },
    { path: '/alarm', component: Alarm },
    { path: '/login', component: Login },
    { path: '/set_device_address', component: SetDeviceAddress }
  ]
})
