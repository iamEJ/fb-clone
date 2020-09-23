import React from "react";
import "./css/Login.css";
import { Button } from "@material-ui/core";

function Login() {
  const signIn = () => {
    //sign in
  };

  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://en.facebookbrand.com/wp-content/uploads/2019/06/f_logo_RGB-Blue_512.png"
          alt=""
        />
        <img
          src="https://download.logo.wine/logo/Facebook/Facebook-Logo.wine.png"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign in
      </Button>
    </div>
  );
}

export default Login;
