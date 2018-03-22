import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Alarm from '../components/Alarm.vue';

import DetailPage from '../components/home/detail/DetailPage.vue';
import ChannelsContent from '../components/home/detail/ChannelsContent.vue';
import UserSettingsContent from '../components/home/detail/usersettings/UserSettingsContent.vue';

import Login from '../components/action/Login.vue';
import SetDeviceAddress from '../components/action/SetDeviceAddress.vue';
import SetCom from '../components/action/SetCom.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { name: 'home', path: '/', component: Home },
    {
      path: '/detail', component: DetailPage,
      children: [
        {
          name: 'home.detail', path: "/",
          component: ChannelsContent,
        }, {
          name: 'home.usersettings', path: "usersettings",
          component: UserSettingsContent,
        }
      ]
    },
    { name: 'alarm', path: '/alarm', component: Alarm },
    { name: 'login', path: '/login', component: Login },
    { name: 'set_device_address', path: '/set_device_address', component: SetDeviceAddress },
    { name: 'set_com', path: '/set_com', component: SetCom }
  ]
})
