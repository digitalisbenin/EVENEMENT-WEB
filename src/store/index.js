import { createLogger, createStore } from "vuex";
import auth from "./modules/auth";
import users from "./modules/user";
const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    auth,
    users,
    
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
