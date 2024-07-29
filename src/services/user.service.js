import ApiService from "./api.service";
const resource = "api/users";
class AuthenticationError extends Error {
  constructor(errorCode, message) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.errorCode = errorCode;
  }
}

const UserService = {
  query(params) {
    return ApiService.query(resource, {
      params,
    });
  },
  /**
   * Login the user and store the access token to TokenService.
   *
   * @returns token
   * @throws AuthenticationError
   **/
  async login(email, password) {
    const requestData = {
      email,
      password,
    };

    try {
      const response = await ApiService.post("/api/auth/login", requestData);
      // TokenService.saveToken(response.data.token)
      // TokenService.saveRefreshToken(response.data.accessToken)
      // ApiService.setHeader()
      // ApiService.mount401Interceptor();

      return response.data;
    } catch (error) {
      throw new AuthenticationError(
        error.response.status,
        error.response.data.detail
      );
    }
  },

  /**
   * Register the user and store the cookie.
   *
   * @returns token
   * @throws AuthenticationError
   **/
  async register(form) {
    const requestData = form;

    try {
      const response = await ApiService.post("/api/auth/register", requestData);
      // TokenService.saveToken(response.data.token)
      // TokenService.saveRefreshToken(response.data.accessToken)
      // ApiService.setHeader()
      // ApiService.mount401Interceptor();

      return response.data;
    } catch (error) {
      throw new AuthenticationError(
        error.response.status,
        error.response.data.detail
      );
    }
  },

  /**
   * Fetch the user and store.
   *
   * @returns access_token
   * @throws AuthenticationError
   **/
  async getProfile() {
    const response = await ApiService.get("api/profile");
    return response.data;
  },

  /**
   * Logout the current user by removing the token from storage.
   *
   * Will also remove `Authorization Bearer <token>` header from future requests.
   **/
  logout() {
    // Remove the token and remove Authorization header from Api Service as well
    // TokenService.removeToken()
    // TokenService.removeRefreshToken()
    // ApiService.removeHeader()
    // NOTE: Again, we'll cover the 401 Interceptor a bit later.
    // ApiService.unmount401Interceptor()
  },

  get() {
    return ApiService.get(resource);
  },
  getById(id) {
    return ApiService.get(`${resource}/${id}`);
  },
  create(params) {
    return ApiService.post(resource, { user: params });
  },
  update(id, params) {
    return ApiService.put(resource, id, { user: params });
  },
  put(resource, data) {
    return ApiService.put(resource, data);
  },
  destroy(id) {
    return ApiService.delete(`${resource}/${id}`);
  },
};

export default UserService;

export { UserService, AuthenticationError };
