import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { userApi } from "../../api/user.api";
import Divider from "../../components/Divider";
import { authAction } from "../../core/redux/Auth/AuthSlice";
import { useCoreStyle } from "../../core/styles/style.container";
import { coreColor } from "../../core/styles/styleDefinition";
import { useStyle } from "./style";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const coreStyle = useCoreStyle();
  const style = useStyle();

  const [loginForm, setLoginForm] = useState({
    email_phone: "",
    password: "",
  });

  const handleInputChange = (key, e) => {
    setLoginForm({ ...loginForm, [key]: e.target.value });
  };

  const login = async () => {
    let res = await userApi.login({
      email: loginForm.email_phone,
      phoneNumber: loginForm.email_phone,
      password: loginForm.password,
    });

    console.log(res);
    if (res.success) {
      dispatch(authAction.login({ userRole: "premiumUser", isAuthenticated: true, ...res.data }));
    }
  };

  return (
    <div className={`${coreStyle.Box} ${style.container}`}>
      <div className={coreStyle.BorderLessBox}>
        <img
          src="./images/homico-pack.png"
          style={{
            width: "350px",
            height: "120px",
            display: "block",
            margin: "auto",
            marginBottom: 30,
          }}
        />
        <div className={coreStyle.BorderLessBox}>
          <div className={coreStyle.BorderLessBox} style={{ margin: 0 }}>
            <h1 className={style.header}>Login</h1>
            <p className={`${style.text} ${coreStyle.bottomMargined5}`}>
              Login to your Homico account
            </p>
          </div>

          <div className={coreStyle.inputGroup}>
            <label>User Id</label>
            <input
              type={"text"}
              value={loginForm.phoneNumber}
              placeholder="Phone or Email"
              onChange={(e) => handleInputChange("email_phone", e)}
            />
          </div>
          <div className={coreStyle.inputGroup}>
            <label>Password</label>
            <input
              type={"text"}
              value={loginForm.password}
              placeholder="Password"
              onChange={(e) => handleInputChange("password", e)}
            />
          </div>

          <div className={coreStyle.inputGroup} style={{ marginTop: 20 }}>
            <input
              className={coreStyle.primaryButton}
              type={"button"}
              value={"Login"}
              onClick={login}
            />
          </div>

          <div style={{ marginTop: 50, textAlign: "center" }}>Don't have an account yet?</div>
          <Divider hSpace={10} vSpace={20} lineWidth={1} color={coreColor.gray(1, 50)} />

          <div className={coreStyle.BorderLessBox}>
            <div className={coreStyle.centerItems}>
              <span>Go to</span>
              <input
                className={coreStyle.primarylinkButton}
                type={"button"}
                value="Signup"
                onClick={() => navigate("/signup")}
              />
              <span>Page</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
