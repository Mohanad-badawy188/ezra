import { loginFail, loginStart, loginSuccess } from "./ReduxUser";
import axios from "axios";
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios({
        method: 'post',
        url: 'http://localhost:5000/api/auth/login',
        data:user
      });
    dispatch(loginSuccess(res.data));
  } catch (e) {
    dispatch(loginFail());
  }
};
export const signup = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios({
        method: 'post',
        url: 'http://localhost:5000/api/auth/register',
        data:user
      });
    dispatch(loginSuccess(res.data));
  } catch (e) {
    dispatch(loginFail());
  }
};
