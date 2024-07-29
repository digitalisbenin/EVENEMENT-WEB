import { UserService } from "../../services/user.service";

import {
  FETCH_PROFILE,
  FETCH_USER,
  FETCH_USERS,
  USER_ADD,
  USER_DELETE,
  USER_EDIT,
} from "./action-types";
import { SET_USER, SET_USERS } from "./mutation-types";

const initialState = {
  users: [],
  user: null,
};
const state = { ...initialState };

const actions = {
  async [FETCH_USERS]({ commit }, count) {
    const response = await UserService.get(count);
    commit(SET_USERS, response.data);
  },
  async [FETCH_USER](context, userId, prevUser) {
    // avoid extronuous network call if user exists
    if (prevUser !== undefined) {
      return context.commit(SET_USER, prevUser);
    }
    const { data } = await UserService.get(userId);
    context.commit(SET_USER, data.user);
    return data;
  },
  [USER_ADD]({ state }) {
    return UserService.create(state.user);
  },
  [USER_DELETE](context, userId) {
    return UserService.destroy(userId);
  },
  [USER_EDIT]({ state }) {
    return UserService.update(state.user.id, state.user);
  },
  [FETCH_PROFILE]({ state }) {
    return UserService.getProfile(state.user);
  },
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  [SET_USER](state, user) {
    state.user = user;
  },
  [SET_USERS](state, users) {
    state.users = users.data;
  },
  // [RESET_STATE]() {
  //   for (let f in state) {
  //     set(state, f, initialState[f]);
  //   }
  // },
};

const getters = {
  user(state) {
    return state.user;
  },
  users(state) {
    return state.users;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
