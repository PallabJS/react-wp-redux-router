import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userApi } from "../../api/user.api";
import { authAction } from "../../core/redux/Auth/AuthSlice";
import { useCoreStyle } from "../../core/styles/style.container";

import { useStyle } from "./style";

const OtpLogin = () => {
  const coreStyle = useCoreStyle();
  const style = useStyle();

  const dispatch = useDispatch();
  const auth = useSelector((store) => store.auth);

  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleInputChange = (index, e) => {
    let value = e.target.value;
    if (isNaN(value)) return;
    let newValue = [...otp];
    newValue[index] = value[value.length - 1] || "";
    setOtp(newValue);
    let nextInput = e.target.nextElementSibling || undefined;
    if (nextInput && newValue[index]) nextInput.focus();
  };

  const verifyOtp = async () => {
    let res = await userApi.verifyOtp({ otp: otp.join(""), token: auth.token });
    console.log(res);
    if (res.success) {
      dispatch(authAction.verifyUser(true));
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
        <div className={`${coreStyle.BorderLessBox}`}>
          <h1 className={style.header}>Otp Login</h1>
          <p className={`${style.text} ${coreStyle.bottomMargined5}`}>
            Enter the otp sent to {auth.phoneNumber}
          </p>
        </div>
        <div className={coreStyle.inputGroup}>
          <input
            id="otp0"
            style={{
              flex: 0.2,
              fontSize: 20,
              fontWeight: 500,
              textAlign: "center",
            }}
            type="text"
            value={otp[0]}
            onChange={(e) => handleInputChange(0, e)}
          />
          <input
            style={{
              flex: 0.2,
              fontSize: 20,
              fontWeight: 500,
              textAlign: "center",
            }}
            type="text"
            value={otp[1]}
            onChange={(e) => handleInputChange(1, e)}
          />
          <input
            style={{
              flex: 0.2,
              fontSize: 20,
              fontWeight: 500,
              textAlign: "center",
            }}
            type="text"
            value={otp[2]}
            onChange={(e) => handleInputChange(2, e)}
          />
          <input
            style={{
              flex: 0.2,
              fontSize: 20,
              fontWeight: 500,
              textAlign: "center",
            }}
            type="text"
            value={otp[3]}
            onChange={(e) => handleInputChange(3, e)}
          />
        </div>
        <div className={coreStyle.inputGroup}>
          <input
            className={coreStyle.primaryButton}
            disabled={otp.join("").length !== 4}
            style={{ opacity: otp.join("").length !== 4 ? 0.5 : 1 }}
            type={"button"}
            value="Verify"
            onClick={verifyOtp}
          />
        </div>
      </div>
    </div>
  );
};

export default OtpLogin;
