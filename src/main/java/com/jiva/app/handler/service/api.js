const BASE_URL = "/api";

/**
 * Authentication Api
 */
export const auth_api = {
  SIGNIN: `${BASE_URL}/auth/authenticate`,
  SIGNUP: `${BASE_URL}/auth/signup`,
  AUTH_CHECK: `${BASE_URL}/auth/check`,
  ACCOUNT_DELETE: `${BASE_URL}/auth/delete`,
  CHANGE_PASSWORD: `${BASE_URL}/auth/password/change`,
  FORGOT_PASSWORD: `${BASE_URL}/auth/forgot-password`,
};

export const global_api = {
  BOOKMARK: `${BASE_URL}/bookmark`,
};
