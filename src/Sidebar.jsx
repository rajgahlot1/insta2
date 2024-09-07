import {Home,Explore,Reel,Create,Post,Live,Message,Profile,Search,Bar,Messenger,Like} from './ReelSvg';
import { FaBars, FaRegHeart } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import React,{useState,useContext} from 'react'
import { useFirebase } from "./Firebase";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {

  const firebase=useFirebase();
  const navigate=useNavigate();
  const [logout,setlogout]=useState(true);
  const [create,setcreate]=useState(true);
  const [notification,setnotification]=useState(true);
  const [text,settext]=useState(true);
  // const [messShow,setmessShow]=useState(true)
  const handleNotification=()=>{
    setnotification(!notification)
    settext(!text);
  }
  const handleCreate=()=>{
    setcreate(!create);
  }
  const handleLogoutPage=()=>{

    setlogout(!logout);

  }
  const handleLogOut= async()=>{
    await firebase.logout();
    navigate('/');
  }

  const handleHome=()=>{
    navigate('/');
  }
 const BootomArr = [
    { icon: <Home />,onClick:handleHome },

    { icon: <Explore/> },
    { icon: <Search/> },
   { icon: <Create/>,onClick:handleCreate },
    { icon: <Reel/>},

    { icon: <Message/>},
    { icon: <Profile/> },
  ];
  const SideArr=[
  {icon:<Home/>,name:"Home",onClick:handleHome},
  {icon:<Search/>,name:"Search"},
  {icon:<Explore/>,name:"Explore"},
  {icon:<Reel/>,name:"Reel"},
  {icon:<Message/>,name:"Messages"},
  {icon:<Like/>,name:"Notifications",onClick:handleNotification},
  {icon:<Create/>,name:"Create",onClick:handleCreate},
  {icon:<Profile/>,name:"Profile"},
  ]
  return (
    <>
      
      <div
        className="  p-3  d-md-block d-none Side_main "
        style={{ height: "100vh" }}
      >
        <div className=" mt-3" style={{ height: "39px" }}>
          <img
            src="logo.png"
            alt="insta_logo"
            className="Side_text "
            style={{ maxWidth: "100px" }}
          />
         
          <div
            className="icons  d-flex "
            style={{ padding: "10px", maxWidth: "230px" }}
          >
            <FiInstagram size={25} className="fs-3 Side_insta_logo" />
          </div>
        </div>
        <div
          className="Icons_group  d-flex justify-content-between gap-2 flex-column"
          style={{ marginTop: "33px" }}
        >
        {
          SideArr.map((val,id)=>{
            return(
              <div key={id}
                className="icons  d-flex" onClick={val.onClick}
                style={{ padding: "10px", maxWidth: "230px" }} >
                <span className='arrIcon'>{val.icon}</span>
                <span className="Side_text ms-3 ">{val.name}</span>
              </div>
            )
          })
        }
        </div>

        <div className="icons d-flex mt-5" onClick={handleLogoutPage} style={{ padding: "10px" }}>
        <span className='arrIcon'> <Bar/></span>
          <span className="Side_text ms-3 ">More</span>
        </div>
      </div>
{/* top */}
      <div
        className="bg-white top_sidebar ps-2 w-100  pe-4 d-md-none d-block d-flex align-items-center justify-content-between "
        style={{ height: "60px", borderBottom: "1px solid #e8e3e3" }}
      >
        <div className="">
          <img src="logo.png" alt="insta_logo" style={{ width: "120px" }} />
        </div>
        <div className="d-flex align-items-center gap-4 ">
          <div className="d-sm-block d-none ">
          <div
            className="Search rounded-3 d-flex p-1 ps-0  "
            style={{ background: "#EFEFEF", color: "#737373", width: "260px" }}
          >
            <div className='ms-2'>
              <Search />
            </div>
            <input
              type="search"
              placeholder="Search"
              className="ms-2"
              style={{ background: "#EFEFEF", border: "none", outline: "none" }}
            />
          </div>
          </div>
          <FaRegHeart className="fa-regular fa-heart fs-3" size={25} onClick={handleNotification} />
         <span className="d-block d-sm-none" > <Message /></span>
        </div>
      </div>
      {/* bottom */}
      <div
        className="bottom_sidebar w-100  bg-white d-md-none d-block d-flex flex-row align-items-center justify-content-around "
        style={{ height: "60px", borderTop: "1px solid #e8e3e3"}}
      >
        {BootomArr.map((val, id) => {
          return (
            <div key={id} className= {`${id===1 ||id==5  ? "d-none d-sm-block": ""} ${id===1  ? "d-block d-sm-none": ""}`} onClick={val.onClick}>
              <span className='arrIconn'>{val.icon}</span>
            </div>
          );
        })}

      </div>





      {/* logout consept */}
<div style={{display:logout ? "none":"block"}}>
      <div
        className="Side_logout bg- p-2 d-flex  flex-column  align-items-center justify-content-center "
        style={{ height: "60px", width: "200px",position:"fixed",left:"25px",bottom:"65px",borderRadius:"10px",boxShadow:"2px 0px 10px rgba(0,0,0,0.5)" }}
      >
        <span className="Side_Logout_Name" onClick={handleLogOut} style={{fontSize:"14px",cursor:"pointer"}}>Log out</span>
      </div>
      </div>
      {/* create consept  */}
      <div style={{display:create ? "none":"block"}}>
      <div className="Create bg-white" style={{height:"88px",width:"200px",position:"fixed",bottom:"81px",left:"16px",borderRadius:"10px",boxShadow:"2px 0px 10px rgba(0,0,0,0.5)",cursor:"pointer"}}>
      <div style={{height:"44px",borderBottom:"1px solid #e8e3e3"}} className="d-flex Create_logo p-3  justify-content-between align-items-center">
        <span style={{fontSize:"16px"}}>Post</span>
        <Post/>
      </div>
      <div></div>
        <div style={{height:"44px"}} className="d-flex Create_logo p-3 pb-3 align-items-center justify-content-between">
          <span style={{fontSize:"16px"}}>Live video</span>
          <Live/>
        </div>
      </div>
      </div>



      
     

    </>
  );
}
