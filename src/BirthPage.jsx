import microsoft from './img/microsoft.png'
import playstore from './img/playstore.png'
import LoginLayout from './LoginLayout';
import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
  import { useFirebase } from "./Firebase";
  import allimg from './img/allimg.png';
  // import logo from './img/logo.png';

  import Auth from './img/Auth.png';
export default function BirthPage() {
   const navigate = useNavigate();
   const firebase=useFirebase();

  

  const handleSubmit = async (e) => {

  e.preventDefault();
 try{ 
    alert("register successful");
    // console.log("resultofRegis",resultofRegis);
    // navigate("/");
    }
    catch(err){
       alert("Error: Something Went Wrong");
     }

  };

  const [years, setYears] = useState([]);
  const [days, setDays] = useState([]);
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(new Date().getFullYear());

  // Populate years from 1919 to current year
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const yearOptions = [];
    for (let i = 1919; i <= currentYear; i++) {
      yearOptions.push(i);
    }
    setYears(yearOptions);
  }, []);

  // Populate days based on selected month and year
  useEffect(() => {
    const daysInMonth = new Date(year, month, 0).getDate();
    const dayOptions = [];
    for (let i = 1; i <= daysInMonth; i++) {
      dayOptions.push(i);
    }
    setDays(dayOptions);
  }, [month, year]);
  return (
    <LoginLayout>
    
          <div
            className=" col Second w-100 bg- "
            style={{ padding: " 13px 33px" }}
          >
            {/* login */}
            <div

              className="Login_data bg- p-4 d-flex align-items-center justify-content-center flex-column gap-2 "
              style={{
                width: "350px",
               
                border: "1px solid #bdbdbd",
              }}
            >
             <span  style={{  backgroundRepeat:"no-repeat",backgroundPosition:"0 0",height:"96px",width:"144px",overflow:"hidden" }}> <img
                src={allimg}
                alt="Insta_logo"
               
              /></span>
              <span className="w-100 text-center px-5" style={{color:"#000",fontSize:"16px",fontWeight:"600"}}>Add your date of birth</span>
              <span className="d-flex flex-column text-center">
             <span style={{color:"black",fontSize:"14px"}}>This won't be part of your public profile.</span>
                <span  style={{fontSize:"14px",color:"#0095f6"}}>Why do I need to provide my date of birth?</span>
              </span>
              
                <form onSubmit={handleSubmit} className="d-flex align-items-center flex-column justify-content-center" >

                  <div className="d-flex gap-2 ">
                    <select
                      style={{border:"1px solid #ccd0d5",borderRadius:"4px",padding:"7px",outline:"none",fontSize:"12px",color:"#737373"}}
                      id="month"
                      value={month}
                      onChange={(e) => setMonth(Number(e.target.value))}
                    >
                      <option value="1">January</option>
                      <option value="2">February</option>
                      <option value="3">March</option>
                      <option value="4">April</option>
                      <option value="5">May</option>
                      <option value="6">June</option>
                      <option value="7">July</option>
                      <option value="8">August</option>
                      <option value="9">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </select>

                    {/* Day Selector */}

                    <select
                      style={{border:"1px solid #ccd0d5",borderRadius:"4px",padding:"7px",outline:"none",fontSize:"12px",color:"#737373"}}
                      id="day">
                      {days.map((day) => (
                        <option key={day} value={day}>
                          {day}
                        </option>
                      ))}
                    </select>

                    {/* Year Selector */}

                    <select
                      style={{border:"1px solid #ccd0d5",borderRadius:"4px",padding:"7px",outline:"none",fontSize:"12px",color:"#737373"}}
                      
                      id="year"
                      value={year}
                      onChange={(e) => setYear(Number(e.target.value))}
                    >
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>

                    </div>
<span style={{color:"#737373",fontSize:"12px"}} className="mt-2">You need to enter the date you were born on</span>
<span  className="text-center mt-3" style={{color:"#737373",fontSize:"12px"}}>Use your own date of birth, even if this account is for a business, pet or something else</span>

              <button 
                type="submit"
                className=" btn text-white d-flex align-items-center mt-3 justify-content-center"
                style={{ width: "268px", height: "32px",fontWeight:"600",borderRadius:"7px",background:"#0095f6" }}
              >
               Next
              </button>
                  <button className="btn" style={{color:"#0095f6"}}> Go back</button>

</form>


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
                onClick={() => navigate("/")}>

                Log in
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
