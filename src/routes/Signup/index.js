import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { userApi } from "../../api/user.api";
import Divider from "../../components/Divider";
import { authAction, userRoles } from "../../core/redux/Auth/AuthSlice";
import { useCoreStyle } from "../../core/styles/style.container";
import { coreColor } from "../../core/styles/styleDefinition";
import { useStyle } from "./styles";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const coreStyle = useCoreStyle();
  const style = useStyle();

  const [signUpForm, setSignupForm] = useState({
    name: "Pallab Singha",
    email: "pallabjyotisingha@gmail.com",
    password: "pjs",
    phoneNumber: 8099195765,
  });

  const handleInputChange = (key, e) => {
    setSignupForm((form) => ({ ...form, [key]: e.target.value }));
  };

  const signup = async () => {
    let res = await userApi.signup(signUpForm);
    if (res.success) {
      dispatch(
        authAction.login({
          userRole: userRoles.user,
          isAuthenticated: true,
          token: res.data.token,
          phoneNumber: res.data.phoneNumber,
          email: res.data.email,
          phoneVerified: false,
          emailVerified: false,
        })
      );
    } else {
      alert(res.message);
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
            <h1 className={style.header}>Signup</h1>
            <p className={`${style.text} ${coreStyle.bottomMargined5}`}>
              You are One step away from amazing service
            </p>
          </div>
          <div className={coreStyle.inputGroup}>
            <label>Name</label>
            <input
              type={"text"}
              value={signUpForm.name}
              placeholder="Display name"
              onChange={(e) => handleInputChange("name", e)}
            />
          </div>
          <div className={coreStyle.inputGroup}>
            <label>Email</label>
            <input
              type={"text"}
              value={signUpForm.email}
              placeholder="Email address"
              onChange={(e) => handleInputChange("email", e)}
            />
          </div>
          <div className={coreStyle.inputGroup}>
            <label>Phone</label>
            <input
              type={"number"}
              value={signUpForm.phoneNumber}
              placeholder="Phone number"
              onChange={(e) => handleInputChange("phoneNumber", e)}
            />
          </div>
          <div className={coreStyle.inputGroup}>
            <label>Password</label>
            <input
              type={"password"}
              value={signUpForm.password}
              placeholder="Password"
              onChange={(e) => handleInputChange("password", e)}
            />
          </div>

          <div className={coreStyle.inputGroup} style={{ marginTop: 20 }}>
            <input
              className={coreStyle.primaryButton}
              type={"button"}
              value={"Signup"}
              onClick={signup}
            />
          </div>

          <div style={{ marginTop: 50, textAlign: "center" }}>Already have an Account?</div>
          <Divider hSpace={10} vSpace={20} lineWidth={1} color={coreColor.gray(1, 50)} />

          <div className={coreStyle.BorderLessBox}>
            <div className={coreStyle.centerItems}>
              <span>Go to</span>
              <input
                className={coreStyle.primarylinkButton}
                type={"button"}
                value="Login"
                onClick={() => navigate("/login")}
              />
              <span>Page</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
