import Vue from 'vue';
import Vuex from 'vuex';

import navigation from './modules/navigation';
import server from './modules/server';
import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    navigation,
    server,
    user,
  },
});
