// Packages
import {
  ActionTree,
  GetterTree,
  Module,
  MutationTree,
} from 'vuex';

/*
  Server Module

  The server module will manage the current discord server being viewed.
*/

// State interface
export interface ServerModuleState extends Record<string, any> {
  /**
   * Id of current server.
   */
  id: string | null;
}

// Default state
const defaultState = (): ServerModuleState => ({
  id: null,
});

// Module state
const moduleState: ServerModuleState = defaultState();

// Module getters
const getters: GetterTree<ServerModuleState, any> = {
  /**
   * Retrieves the current server ID.
   *
   * @param {ServerModuleState} state Module state.
   * @returns {string | null} Current server ID.
   */
  getServerId(state: ServerModuleState): string | null {
    return state.id;
  },
};

// Module mutations
const mutations: MutationTree<ServerModuleState> = {
  /**
   * Sets current server ID.
   *
   * @param {NavigationState} state Module state.
   * @param {string | null} id Server ID to set.
   */
  setServerId(
    state: ServerModuleState,
    id: string | null,
  ): void {
    state.id = id;
  },

  /**
   * Resets the state to default.
   *
   * @param {NavigationState} state Module state.
   */
  reset(state: ServerModuleState): void {
    const nextState = defaultState();
    const fields = Object.keys(nextState);

    for (let i = 0; i < fields.length; i += 1) {
      state[fields[i]] = nextState[fields[i]];
    }
  },
};

// Module actions
const actions: ActionTree<ServerModuleState, any> = {

};

// Module
const server: Module<ServerModuleState, Record<string, any>> = {
  namespaced: true,
  state: moduleState,
  getters,
  mutations,
  actions,
};

export default server;