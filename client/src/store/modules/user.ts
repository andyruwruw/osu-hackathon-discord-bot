// Packages
import {
  ActionTree,
  GetterTree,
  Module,
  MutationTree,
} from 'vuex';

// Local Imports
import api from '../../api';

// Types
import { IMember } from '../../../../shared/types';

/*
  User Module

  The user module will manage the current logged in user and their
  general information.
*/

// State interface
export interface AuthModuleState extends Record<string, any> {
  /**
   * Current logged in user.
   */
  user: IMember | null;
}

// Default state
const defaultState = (): AuthModuleState => ({
  user: null,
});

// Module state
const moduleState: AuthModuleState = defaultState();

// Module getters
const getters: GetterTree<AuthModuleState, any> = {
  /**
   * Retrieves the current logged in user.
   *
   * @param {AuthModuleState} state Module state.
   * @returns {IMember | null} Current logged in user.
   */
  getUser(state: AuthModuleState): IMember | null {
    return state.user;
  },

  /**
   * Whether a user is currently logged in.
   *
   * @param {AuthModuleState} state Module state.
   * @returns {boolean} Whether a user is logged in.
   */
  isLoggedIn(state: AuthModuleState): boolean {
    return state.user !== null;
  },
};

// Module mutations
const mutations: MutationTree<AuthModuleState> = {
  /**
   * Sets current logged in user.
   *
   * @param {NavigationState} state Module state.
   * @param {IMember | null} user User to set.
   */
  setUser(
    state: AuthModuleState,
    user: IMember | null,
  ): void {
    state.user = user;
  },

  /**
   * Resets the state to default.
   *
   * @param {NavigationState} state Module state.
   */
  reset(state: AuthModuleState): void {
    const nextState = defaultState();
    const fields = Object.keys(nextState);

    for (let i = 0; i < fields.length; i += 1) {
      state[fields[i]] = nextState[fields[i]];
    }
  },
};

// Module actions
const actions: ActionTree<AuthModuleState, any> = {
  /**
   * Beings OAuth2 process with Discord.
   *
   * @param {ActionContext<NavigationState, any>} context Vuex action context.
   */
  async login({ dispatch }): Promise<void> {
    const url = await api.auth.login();

    if (url) {
      location.href = url;
    } else {
      dispatch(
        'goTo404',
        null,
        { root: true },
      );
    }
  },

  /**
   * Continues OAuth2 process with Discord.
   *
   * @param {ActionContext<NavigationState, any>} context Vuex action context.
   * @param {Record<string, string>} payload Payload object.
   * @param {string} payload.code OAuth2 code.
   * @param {string} payload.state OAuth2 state.
   */
  async callback({
    commit,
    dispatch,
  }, {
    code,
    state,
  }): Promise<void> {
    const user = await api.auth.callback(
      code,
      state,
    );

    if (user) {
      commit(
        'setUser',
        user,
      );
    } else {
      dispatch(
        'goTo404',
        null,
        { root: true },
      );
    }
  },

  /**
   * Logs a user out and clears state.
   *
   * @param {ActionContext<NavigationState, any>} context Vuex action context.
   */
  async logout({ commit }): Promise<void> {
    await api.auth.logout();
    commit('reset');
    commit(
      'shows/reset',
      null,
      { root: true },
    );
  },
};

// Module
const user: Module<AuthModuleState, Record<string, any>> = {
  namespaced: true,
  state: moduleState,
  getters,
  mutations,
  actions,
};

export default user;
