import { config } from "../config";

class UserApi {
  constructor() {}
  login = async (loginData) => {
    try {
      let res = await fetch(`${config.HOST_URI}/auth/login`, {
        method: "post",
        body: JSON.stringify(loginData),
        headers: {
          "content-type": "application/json",
        },
      });
      res = await res.json();

      if (res.error) throw new Error(res.message);
      return res;
    } catch (error) {
      return { error: true, message: error.message };
    }
  };

  signup = async (signupData) => {
    try {
      let res = await fetch(`${config.HOST_URI}/auth/signup`, {
        method: "post",
        body: JSON.stringify(signupData),
        headers: {
          "content-type": "application/json",
        },
      });
      res = await res.json();
      if (res.error) throw new Error(res.message);
      return res;
    } catch (error) {
      return { error: true, message: error.message };
    }
  };

  verifyOtp = async (otpWithToken) => {
    try {
      console.log(otpWithToken);
      let res = await fetch(`${config.HOST_URI}/auth/otp-verification`, {
        method: "post",
        body: JSON.stringify(otpWithToken),
        headers: {
          "content-type": "application/json",
        },
      });
      res = await res.json();
      if (res.error) throw new Error(res.message);
      return res;
    } catch (error) {
      return { error: true, message: error.message };
    }
  };
}

export const userApi = new UserApi();
