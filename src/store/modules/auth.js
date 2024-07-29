import { AuthenticationError, UserService } from "../../services/user.service";
import router from "../../router";

const state = {
  authenticating: false,
  // accessToken: TokenService.getCookie(),
  expiration: Date.now(),
  authenticationSuccess: false,
  authenticationErrorCode: 0,
  authenticationError: "",
  refreshTokenPromise: null, // Holds the promise of the refresh token
  user: null,
};

const getters = {
  isAuthenticated: (state) => {
    return !!(state.accessToken && state.expiration > Date.now());
  },

  loggedIn: (state) => {
    return !!state.accessToken;
  },

  authenticationErrorCode: (state) => {
    return state.authenticationErrorCode;
  },

  authenticationError(state) {
    return state.authenticationError;
  },

  authenticationSuccess(state) {
    return state.authenticationSuccess;
  },

  authenticating: (state) => {
    return state.authenticating;
  },
  getUser(state) {
    return state.user;
  },
};

const actions = {
  async login({ commit }, { email, password }) {
    commit("loginRequest");
    try {
      const data = await UserService.login(email, password);
      commit("loginSuccess", data);

      // Get user profile
      const user = await UserService.getProfile();
      commit("setUser", user);

      // Redirect the user to the page he first tried to visit or to the home view
      router.push("/dashboard");
      // return Promise.resolve();
    } catch (e) {
      if (e instanceof AuthenticationError) {
        commit("loginError", {
          errorCode: e.errorCode,
          errorMessage: e.message,
        });
      }
      // return Promise.reject(e);
    }
  },

  logout({ commit }) {
    UserService.logout();
    commit("logoutSuccess");
    router.push("/");
  },

  async profile({ commit }) {
    const user = await UserService.getProfile();
    commit("setUser", user);
    return user;
  },

  refreshToken({ commit, state }) {
    // If this is the first time the refreshToken has been called, make a request
    // otherwise return the same promise to the caller
    if (!state.refreshTokenPromise) {
      const p = UserService.refreshToken();
      commit("refreshTokenPromise", p);

      // Wait for the UserService.refreshToken() to resolve. On success set the token and clear promise
      // Clear the promise on error as well.
      p.then(
        (response) => {
          commit("refreshTokenPromise", null);
          commit("loginSuccess", response);
        }
        // (error) => {
        //   commit("refreshTokenPromise", null);
        // }
      );
    }

    return state.refreshTokenPromise;
  },
};

const mutations = {
  loginRequest(state) {
    state.authenticating = true;
    state.authenticationError = "";
    state.authenticationErrorCode = 0;
  },

  loginSuccess(state, data) {
    state.accessToken = data.token;
    state.expiration = new Date(data.expiryToken);
    state.authenticationSuccess = true;
    state.authenticating = false;
  },
  setUser(state, data) {
    state.user = data;
  },

  loginError(state, { errorCode, errorMessage }) {
    state.authenticating = false;
    state.authenticationErrorCode = errorCode;
    state.authenticationError = errorMessage;
  },

  logoutSuccess(state) {
    state.accessToken = "";
    state.expiration = Date.now();
  },

  refreshTokenPromise(state, promise) {
    state.refreshTokenPromise = promise;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
