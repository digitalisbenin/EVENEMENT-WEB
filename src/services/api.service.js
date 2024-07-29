import axios from "axios";
import TokenService from "./storage.service";
//import router from "@/router";
axios.interceptors.request.use((config) => {
  return config;
});

// before a response is returned stop nprogress
axios.interceptors.response.use((response) => {
  return response;
});
const ApiService = {
  // Stores the 401 interceptor position so that it can be later ejected when needed
  _401interceptor: null,

  async init(baseURL) {
    console.log(baseURL);
    axios.defaults.baseURL = baseURL;
    this.mount401Interceptor();
  },

  setHeader() {
    axios.defaults.headers.common.Authorization = `Bearer ${TokenService.getToken()}`;
  },

  removeHeader() {
    axios.defaults.headers.common = {};
  },

  query(resource, params) {
    return axios.get(resource, params).catch((error) => {
      throw new Error(`[WADOUNOU] ApiService ${error}`);
    });
  },

  async get(resource) {
    return axios.get(resource);
  },

  post(resource, data) {
    return axios.post(resource, data);
  },

  update(resource, id, params) {
    return axios.put(`${resource}/${id}`, params);
  },

  put(resource, data) {
    return axios.put(resource, data);
  },

  delete(resource) {
    return axios.delete(resource);
  },

  /**
   * Perform a custom Axios request.
   *
   * data is an object containing the following properties:
   *  - method
   *  - url
   *  - data ... request payload
   *  - auth (optional)
   *    - username
   *    - password
   **/
  customRequest(data) {
    return axios(data);
  },

  mount401Interceptor() {
    this._401interceptor = axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
    
        if (error?.response?.status === 401 || error?.response?.status === 419) {
          TokenService.removeToken();
          this.removeHeader();
          //router.push("/");
        }

        // If error was not 401 just reject as is
        throw error;
      }
    );
  },

  unmount401Interceptor() {
    // Eject the interceptor
    axios.interceptors.response.eject(this._401interceptor);
  },
};

export default ApiService;
