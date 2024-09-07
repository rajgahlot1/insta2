import { IoLogoFacebook } from "react-icons/io";
import React,{useState,useEffect} from "react";
import { useFirebase } from "./Firebase";
import { useNavigate } from "react-router-dom";
import LoginLayout from "./LoginLayout";
// import Auth from './img/Auth.png'
import logo from './img/logo.png'
import microsoft from './img/microsoft.png'
import playstore from './img/playstore.png'
export default function LoginPage() {
  const firebase=useFirebase();
  console.log("login",firebase)

  const navigate = useNavigate();
  const [hideShow,sethideShow]=useState();
  const [types,settypes]=useState();
// yhA se hai 5 line ka auto login bala img
useEffect(()=>{
  if(firebase.isLoggedIn){
         navigate("/HomePage");
  }
},[firebase,navigate])

  const handelHideShow=(e)=>{
     e.preventDefault();
    sethideShow(!hideShow);                
    settypes(!types);
  }

  const [email, setemail] = useState();
  const [password,setpassword]=useState();



  const handleSubmit = async (e) => {
    e.preventDefault();
     try{
                const resultofLogin= await firebase.loginWithEmailandPass(email, password);
          alert("Login successful");
    console.log("resultofLogin",resultofLogin)
          navigate("/HomePage");
     }catch(err){
        alert("Error: Something Went Wrong");
     }
      };



  const handleFacebookLogin = async () => {
    await firebase.loginWithFacebook();
    console.log("Facebook login successful");
  };

  return (
    <LoginLayout>
             <div
            className=" col Second w-100 bg- "
            style={{ padding: " 13px 33px" }}
          >
            <div
              className="Login_data bg- d-flex align-items-center flex-column gap-3 "
              style={{
                width: "350px",
                height: "409.98px",
                border: "1px solid #bdbdbd",
              }}
            >
              <img
                src={logo}
                alt="Insta_logo"
                style={{ maxWidth: "207px", marginTop: "24px" }}
              />
              <div className="App mt-1">
                <form onSubmit={handleSubmit}>
                  <div className="input-container ">
                    <input
                      type="text"
                      onChange={(e)=>setemail(e.target.value)}
                      value={email}
                      name="username"
                      autoComplete="on"
                      placeholder=" "
                      required
                      id="inputs"
                    />
                    <label className="floating-placeholder" htmlFor="name">
                      Phone number, username or email address
                    </label>
                  </div>
                  <div className="input-container" id="button">
                    <input
                      type={types?"text":"password"}
                      onChange={(e)=>setpassword(e.target.value)}
                      value={password}
                      placeholder=" "
                      name="password"
                      autoComplete="on"
                      required

                   />

                    <label className="floating-placeholder" htmlFor="name">
                      Password
                    </label>

                    <span  
                      style={{border:"none",color: "#262626",background:"none",fontSize:"14px",marginRight:"4px",marginLeft:"4px",cursor:"pointer"}}
                       onClick={handelHideShow}
                      >{hideShow?"Hide":"Show"}</span>
              </div>
              <button
                type="submit"
                className=" btn btn-primary fw-bold"
                style={{ width: "268px", height: "32px" }}
              >
                Log in
              </button>
                  </form>
                  </div>
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

              <div className="mt-2">
                <IoLogoFacebook style={{ color: "#385185" }} size={23} />
                <button
                  style={{
                    fontSize: "14px",
                    color: "#385185",
                    cursor: "pointer",
                    border:"none",
                    background:"none"
                  }}
                   onClick={handleFacebookLogin}
                >
                  Log in with Facebook
                </button>
              </div>
              <span style={{ fontSize: "12px", color: "#00376B" }}>
                Forgotten your password?
              </span>
            </div>
            <div
              style={{
                width: "350px",
                height: "63px",
                border: "1px solid #bdbdbd ",
                fontSize: "14px",
              }}
              className=" mt-2 d-flex align-items-center justify-content-center"
            >
              <span>Don't have a account? </span>
              <button className="fw-bold ms-1" 
                style={{border:"none",color: "#0095f6",background:"none"}}
                onClick={() => navigate("/SignUpPage")}
                >

                Sign up
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
              <img src={microsoft} alt="microsoft_img" />
            </div>
          </div>
            </LoginLayout>
  );
}
