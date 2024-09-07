import { IoLogoFacebook } from "react-icons/io";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import microsoft from './img/microsoft.png';
import playstore from './img/playstore.png';
import logo from './img/logo.png';
// import Auth from './img/Auth.png';

import { useFirebase } from "./Firebase";
import LoginLayout from "./LoginLayout";

export default function SignUpPage() {
  const navigate = useNavigate();
  const firebase = useFirebase();

  const [hideShow, sethideShow] = useState();
  const [types, settypes] = useState();

  const handelHideShow = () => {
    sethideShow(!hideShow);
    settypes(!types);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resultofRegis = await firebase.signupUserWithPassEmailName(email, fullname, password, username);
      alert("register successful");
      console.log("resultofRegis", resultofRegis);
      navigate("/");
    } catch (err) {
      alert("Error: Something Went Wrong");
    }
  };

  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [fullname, setfullname] = useState();
  const [username, setusername] = useState();

 

  return (<div>    <LoginLayout>   
              <div
            className="col Second w-100 bg-"
            style={{ padding: "13px 33px"}}
          >
            <div
              className="Login_data bg- d-flex align-items-center justify-content-center flex-column gap-2"
              style={{
                width: "350px",
                height: "606px",
                border: "1px solid #bdbdbd",
              }}
            >
              <img
                src={logo}
                alt="Insta_logo"
                style={{ maxWidth: "207px", marginTop: "24px" }}
              />
              <span className="w-100 text-center px-5" style={{ color: "#737373", fontSize: "16px", fontWeight: "600" }}>Sign up to see photos and videos from your friends.</span>
              <button className="btn btn-primary d-flex align-items-center justify-content-center" style={{ width: '268px', height: "34px" }}>
                <IoLogoFacebook style={{ color: "white" }} size={23} />
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "14px",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Log in with Facebook
                </span>
              </button>
              <div
                className="OR d-flex align-items-center justify-content-center"
                style={{ width: "268px", height: "14.98px" }}
              >
                <div
                  style={{
                    background: "rgb(219,219,219",
                    height: "1px",
                    width: "100%",
                  }}
                ></div>
                <div
                  style={{
                    margin: "0px 18px",
                    fontWeight: "600",
                    fontSize: "0.8125rem",
                    color: "rgb(115,115,115)",
                  }}
                >
                  OR
                </div>
                <div
                  style={{
                    background: "rgb(219,219,219",
                    height: "1px",
                    width: "100%",
                  }}
                ></div>
              </div>

              <form onSubmit={handleSubmit} className="d-flex align-items-center flex-column justify-content-center">

                <div className="input-container">
                  <input
                    onChange={(e) => setemail(e.target.value)}
                    value={email}
                    type="email"
                    style={{ width: "270px" }}
                    placeholder=" "
                    name="email"
                    autoComplete="on"
                    id="inputs"
                    required
                  />
                  <label className="floating-placeholder">
                    Mobile number or email address
                  </label>
                </div>
                <div className="input-container">
                  <input
                    onChange={(e) => setfullname(e.target.value)}
                    value={fullname}
                    type="text"
                    name="fullname"
                    autoComplete="on"
                    id="inputs"
                    placeholder=""
                    required
                    style={{ width: "270px" }}
                  />
                  <label className="floating-placeholder">
                    Full name
                  </label>
                </div>
                <div className="input-container">
                  <input
                    onChange={(e) => setusername(e.target.value)}
                    value={username}
                    type="text"
                    name="username"
                    autoComplete="on"
                    id="inputs"
                    placeholder=""
                    required
                    style={{ width: "270px" }}
                  />
                  <label className="floating-placeholder">
                    Username
                  </label>
                </div>
                <div className="input-container" id="button">
                  <input
                    onChange={(e) => setpassword(e.target.value)}
                    value={password}
                    type={types ? "text" : "password"}
                    style={{ width: "230px" }}
                    placeholder=" "
                    name="password"
                    autoComplete="on"
                    required
                  />
                  <label className="floating-placeholder">
                    Password
                  </label>
                  <span
                    onClick={handelHideShow}
                    style={{ border: "none", color: "#262626", background: "none", fontSize: "14px", marginRight: "4px", marginLeft: "4px", cursor: "pointer" }}
                  >{hideShow ? "Hide" : "Show"}</span>
                </div>

                <span className="px-5 text-center" style={{ fontSize: "12px", color: "#737373" }}>People who use our service may have uploaded your contact to Instagram. <p style={{ color: "#00376b" }}> Learn more</p></span>
                <span className="px-5 text-center" style={{ fontSize: "12px", color: "#737373" }}>By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.</span>
                <button
                  type="submit"
                  className=" btn btn-primary d-flex align-items-center mt-2 justify-content-center"
                  style={{ width: "268px", height: "32px", fontWeight: "600" }}
                >
                  Sign up
                </button>

              </form>
            </div>

            <div
              style={{
                width: "350px",
                height: "63px",
                border: "1px solid #bdbdbd ",
                fontSize: "14px",
              }}
              className="mt-2 d-flex align-items-center justify-content-center"
            >
              <span>Don't have an account? </span>
              <button className="fw-bold ms-1"
                style={{ border: "none", color: "#0095f6", background: "none" }}
                onClick={() => navigate("/")}>
                Login
              </button>
            </div>
            <div
              className="d-flex mt-3 align-items-center justify-content-center"
              style={{ width: "350px" }}
            >
              <span style={{ color: "#000000", fontSize: "14px" }}>
                Get the app.
              </span>
            </div>
            <div
              className="Play_store_logo d-flex justify-content-center gap-2 mt-3"
              style={{ width: "350px", height: "44px" }}
            >
              <img src={playstore} alt="playstore_img" />
              <img src={microsoft} alt="microsoftstore_img" />
            </div>
          </div>
</LoginLayout>
</div>
  );
}
