import { axiosBaseInstance } from "./axiosHelper";
import * as authActions from "../actions/authActions";

export const AxiosLogin = (email, password) => {
  return function (dispatch) {
    dispatch(authActions.loginRequest());
    axiosBaseInstance
      .post(`api-auth/token/`, {
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("access_token", res.data.access);
        localStorage.setItem("refresh_token", res.data.refresh);
        axiosBaseInstance.defaults.headers["Authorization"] =
          "JWT " + localStorage.getItem("access_token");
        dispatch(authActions.loginSuccess(res.data.user_type));
      })
      .catch((error) => {
        dispatch(authActions.loginError(error.message));
      });
  };
};

export const AxiosLogout = () => {
  axiosBaseInstance.post("api-auth/logout/blacklist", {
    refresh: localStorage.getItem("refresh_token"),
  });
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  axiosBaseInstance.defaults.headers["Authorization"] = null;
};
