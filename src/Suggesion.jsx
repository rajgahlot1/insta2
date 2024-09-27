// import { useEffect, useState } from "react";
// // import SmallLogin from "./SmallLogin";
// // import img1 from './img/img1.jpg';
// import {useFirebase} from './Firebase'
// import profileimg from "./img/profile.jpg"


// export default function Suggesion() {
//    const [showHello, setShowHello] = useState(true);
//    const [user, setUser] = useState(null);
//    const [suggestedUsers, setSuggestedUsers] = useState([]);
//   const firebase = useFirebase();
//   const {getAllUser} = firebase;
// //   console.log("get=>",getAllUser)
//   useEffect(() => {
//    // Define an async function inside the useEffect
//    const fetchData = async () => {
//      try {
//        // Await the firebase userdata fetch
//        const data = await firebase.userdata;
//        setUser(data);
//        const filteredUsers = getAllUser.filter(u => u.id !== data?.id);

//        const shuffledUsers = filteredUsers.sort(() => 0.5 - Math.random());
 
//        // Filter users to exclude logged-in user
//        console.log("data", data);
//        console.log("filteredUsers", filteredUsers);
 
//        // Shuffle users randomly
       
//        // Select only 5 users
//        const randomFiveUsers = shuffledUsers.slice(0, 5);
 
//        setSuggestedUsers(randomFiveUsers);
//      } catch (error) {
//        console.error("Error fetching userdata:", error);
//      }
//    };
 
//    // Call the async function
//    fetchData();
   
//  }, [firebase.userdata, getAllUser]);  // Dependencies remain the same
 
//      const handleClick = () => {
//        setShowHello(!showHello);
//      };

   

//    return (
//       <>
//          <div
//             className="Sugges_main h-100"
//             style={{
               
//                position:"relative",
//         top:"-10px",
//                width: "390px",

//                padding: "24px 80px 0px 24px",
//             }}
//          >
//             <div className="Our_profie mt-3 d-flex align-items-center justify-content-between" >
//                <div className="d-flex gap-2">
//                   <div
//                      className="d-flex align-items-center "
//                      style={{
//                         border: " 1px solid #e8e3e3",
//                         width: "50px",
//                         height: "50px",
//                         borderRadius: "50%",
//                         cursor: "pointer",
//                      }}
//                   >
//                      <img
//                         src={user?.proimg||profileimg}
//                         alt="img"
//                         style={{
//                            border: "2px solid white",
//                            width: "100%",
//                            height: "100%",
//                            borderRadius: "50%",
//                         }}
//                      />
//                   </div>
//                   <div className="">
//                      <h6 className="text-dark mb-0">{user?.username}</h6>
//                      <p style={{ color: "#737373", fontSize: "15px" }}>
//                         {user?.fullname}
//                      </p>
//                   </div>
//                </div>
//                <h6 
//                   onClick={handleClick}
//                   className="text-primary"
//                   style={{ fontSize: "12px", cursor: "pointer" }}
//                >
//                   Switch

//                </h6>
//             </div>

            
//             <div className="See_all d-flex mt-2 malign-items-center justify-content-between">
//                <h6 style={{ color: "#737373", fontSize: "14px" }}>
//                   Suggested for you
//                </h6>
//                <h6
//                   style={{
//                      color: "black",
//                      fontSize: "13px",
//                      cursor: "pointer",
//                   }}
//                >
//                   See All
//                </h6>
//             </div>
//             {
//         suggestedUsers.map((val,id)=>{
//        console.log(val.userId,"===",user.userId)
//          if(val?.userId=== user?.userId){
//             return null; 
//                 }
//                return(
//             <div className="Sugges_profile mt-1 d-flex gap-2 flex-column" key={val.id}>
               
//                      <div  className="Our_profie  d-flex align-items-center justify-content-between">
//                         <div className="d-flex gap-2">

//                               <img
//                                  src={val?.proimg}
//                                  alt="img"
//                                  style={{
//                                     cursor:"pointer",
//                                     width: "43px",
//                                     height: "43px",
//                                     borderRadius: "50%",
//                                  }}
//                               />

//                            <div className="">
//                               <h6 className="text-dark mb-0">{val?.fullname}</h6>
//                               <p style={{ color: "#737373", fontSize: "14px" }}>
//                                  {val?.username}
//                               </p>
//                            </div>
//                         </div>
//                         <h6
//                            className="text-primary"
//                            style={{ fontSize: "13px", cursor: "pointer" }}
//                         >
//                            Follow
//                         </h6>
//                      </div>
                 
//             </div>
//             )
//          })
//        }
//             <div className="Sugges_botom mt-4">
//             <h6 style={{color:"#dedede",fontSize:"12px"}}>About . Help . Press . API . Jobs . Privacy . Terms . Locations . language . Meta Verified</h6>
//             <h6 className="mt-4 " style={{color:"#dedede",fontSize:"12px"}}>© 2024 INSTAGRAM FROM META</h6>
//             </div>
//          </div>
//          <div  style={{display:showHello?"none":"block"}}>

//          {/* <SmallLogin  />         */}
//             </div>
          
//       </>
//    );
// }






// //        shuffledUsers.forEach((val) => {
// //          console.log(val.userId,"==",user.userId)
// //          if (user?.userId === val?.userId) {
// //             console.log("yes equal")

// //             const randomFiveUsers = shuffledUsers.slice(0, 6);
 
// //             setSuggestedUsers(randomFiveUsers);
// //          } else {
// //             console.log("not equal")
// //              // If userId does not match email, slice 0 to 5
// //              const randomFiveUsers = shuffledUsers.slice(0, 5);
 
// //              setSuggestedUsers(randomFiveUsers);
// //          }
// //      });
import { useEffect, useState } from "react";
import { useFirebase } from './Firebase';
import profileimg from "./img/profile.jpg";

export default function Suggesion() {
  const [showHello, setShowHello] = useState(true);
  const [user, setUser] = useState(null);
  const [suggestedUsers, setSuggestedUsers] = useState([]);
  const firebase = useFirebase();
  const { getAllUser } = firebase;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await firebase.userdata;
        setUser(data);

        // Step 1: Filter out the logged-in user from the suggestion pool
        const filteredUsers = getAllUser.filter(u => u.id !== data?.id);

        // Step 2: Shuffle the list of filtered users
        let shuffledUsers = filteredUsers.sort(() => 0.5 - Math.random());

        // Step 3: Always pick exactly 5 users. If fewer than 5 users are available, take the first 5 after filtering
        let randomFiveUsers = shuffledUsers.slice(0, 5);

        // If we still have less than 5 users, repeat from the beginning of the shuffled list
        while (randomFiveUsers.length < 5 && shuffledUsers.length > 0) {
          randomFiveUsers.push(shuffledUsers[randomFiveUsers.length % shuffledUsers.length]);
        }

        setSuggestedUsers(randomFiveUsers);
      } catch (error) {
        console.error("Error fetching userdata:", error);
      }
    };

    fetchData();
  }, [firebase.userdata, getAllUser]);

  const handleClick = () => {
    setShowHello(!showHello);
  };

  return (
    <>
      <div
        className="Sugges_main h-100"
        style={{
          position: "relative",
          top: "-10px",
          width: "390px",
          padding: "24px 80px 0px 24px",
        }}
      >
        <div className="Our_profie mt-3 d-flex align-items-center justify-content-between">
          <div className="d-flex gap-2">
            <div
              className="d-flex align-items-center "
              style={{
                border: " 1px solid #e8e3e3",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              <img
                src={user?.proimg || profileimg}
                alt="img"
                style={{
                  border: "2px solid white",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                }}
              />
            </div>
            <div className="">
              <h6 className="text-dark mb-0">{user?.username}</h6>
              <p style={{ color: "#737373", fontSize: "15px" }}>
                {user?.fullname}
              </p>
            </div>
          </div>
          <h6
            onClick={handleClick}
            className="text-primary"
            style={{ fontSize: "12px", cursor: "pointer" }}
          >
            Switch
          </h6>
        </div>

        <div className="See_all d-flex mt-2 malign-items-center justify-content-between">
          <h6 style={{ color: "#737373", fontSize: "14px" }}>
            Suggested for you
          </h6>
          <h6
            style={{
              color: "black",
              fontSize: "13px",
              cursor: "pointer",
            }}
          >
            See All
          </h6>
        </div>

        {/* Step 4: Render exactly 5 users */}
        {suggestedUsers.map((val, index) => (
          <div className="Sugges_profile mt-1 d-flex gap-2 flex-column" key={index}>
            <div className="Our_profie d-flex align-items-center justify-content-between">
              <div className="d-flex gap-2">
                <img
                  src={val?.proimg}
                  alt="img"
                  style={{
                    cursor: "pointer",
                    width: "43px",
                    height: "43px",
                    borderRadius: "50%",
                  }}
                />
                <div className="">
                  <h6 className="text-dark mb-0">{val?.fullname}</h6>
                  <p style={{ color: "#737373", fontSize: "14px" }}>
                    {val?.username}
                  </p>
                </div>
              </div>
              <h6
                className="text-primary"
                style={{ fontSize: "13px", cursor: "pointer" }}
              >
                Follow
              </h6>
            </div>
          </div>
        ))}

        <div className="Sugges_botom mt-4">
          <h6 style={{ color: "#dedede", fontSize: "12px" }}>
            About . Help . Press . API . Jobs . Privacy . Terms . Locations . language . Meta Verified
          </h6>
          <h6 className="mt-4 " style={{ color: "#dedede", fontSize: "12px" }}>
            © 2024 INSTAGRAM FROM META
          </h6>
        </div>
      </div>
      <div style={{ display: showHello ? "none" : "block" }}>
        {/* <SmallLogin  /> */}
      </div>
    </>
  );
}
