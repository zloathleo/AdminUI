import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Alarm from '../components/Alarm.vue';


import DetailPage from '../components/home/detail/DetailPage.vue';
import ChannelsContent from '../components/home/detail/ChannelsContent.vue';
import UserSettingsContent from '../components/home/detail/usersettings/UserSettingsContent.vue';
import HistoryTable from '../components/home/detail/history/HistoryTable.vue';
import HistoryContent from '../components/home/detail/history/HistoryContent.vue';

import Login from '../components/action/Login.vue';
import SetDeviceAddress from '../components/action/SetDeviceAddress.vue';
import ConfigPage from '../components/action/ConfigPage.vue';


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
        }, {
          name: 'home.history', path: "history",
          component: HistoryContent,
        }, {
          name: 'home.historytable', path: "historytable",
          component: HistoryTable,
        }
      ]
    },
    { name: 'alarm', path: '/alarm', component: Alarm },
    { name: 'login', path: '/login', component: Login },
    { name: 'set_device_address', path: '/set_device_address', component: SetDeviceAddress },
    { name: 'set_config', path: '/set_config', component: ConfigPage },

  ]
})
