


import React,{ createContext,useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import profile from './img/profile.jpg'
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  getDocs,
  collection,
  deleteDoc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import {  getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  FacebookAuthProvider,

  signInWithPopup,
  onAuthStateChanged,
  signOut

} from "firebase/auth";



const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyCRRYQybDjIOCDzeZbGRabSovunn_jE_jU",
  authDomain: "raj-project-f0e72.firebaseapp.com",
  projectId: "raj-project-f0e72",
  storageBucket: "raj-project-f0e72.appspot.com",
  messagingSenderId: "378739240395",
  appId: "1:378739240395:web:4d0dfbbd9e825737a59a4e",
};
const firebaseApp=initializeApp(firebaseConfig);
const firebaseAuth=getAuth(firebaseApp);
const database = getFirestore(firebaseApp);



export const useFirebase = () => useContext(FirebaseContext);
export const FirebaseProvider = (props) => { 
  
  const [email, setemail] = useState();
  const [fullname, setfullname] = useState();
  const [username, setusername] = useState();
  const [dob, setdob] = useState('');
  const [password, setpassword] = useState();
  const [user, setuser] = useState(null);
  const [userId,setUserId]= useState('');
  const [userdata, setUserdata] = useState(null);
  const [getAllUser, setgetAllUser] = useState([]);
  const [search,setSearch]= useState(false)
 console.log("user=>",user)
   useEffect(()=>{
     onAuthStateChanged(firebaseAuth,(user)=>{
      if(user){
        setuser(user);
      }
      else {
        setuser(null);
      }
     })
   },[])

  const isLoggedIn = user ? true : false;

  // register
 
  const signupUserWithPassEmailName = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };
  // login
  const loginWithEmailandPass= async (email, password)=>{

   return signInWithEmailAndPassword(firebaseAuth,email, password);

  }
  // login with facebook
  const loginWithFacebook = async () => {
    const provider = new FacebookAuthProvider();
    provider.addScope('email');
    try {
      const result = await signInWithPopup(firebaseAuth, provider);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  // logout
  const logout = async () => {
    try {
      // Clear myId from Redux
      setuser(null);
      setUserdata(null);
      console.log("User logged out");
      await signOut(firebaseAuth);
    } catch (error) {
      console.error("Error during logout: ", error);
    }
  };

  // Write user data to Firestore
  const writeUserData = async (userId) => {
    try {
      if (!userId) {
        throw new Error("User ID is missing.");
      }
      const userRef = doc(database, "users", userId); // Ye sahi reference hai
      const now = new Date();
      const time = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      const userData = {
        userId:userId,
        email: email,
        fullname: fullname,
        username: username,
        dob: dob,
        bio: "",
        proimg: profile,
        password: password,
        date: new Date().toLocaleString("en-us", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
        time: time,
      };
      console.log(userData);
      await setDoc(userRef, userData);
      return userData;
    } catch (error) {
      console.error("Error writing user data: ", error);
      throw error;
    }
  };
  
  
  const userData = (email, fullname, username, password) => {
    setemail(email);
    setfullname(fullname);
    setusername(username);
    setpassword(password);
    // setUserId(userId)
  };

  // save daata
  const saveData = async () => {
    try {
      console.log(email);
      console.log(fullname);
      console.log(username);
      console.log(dob);
      console.log(password);
  
      console.log("Email:", email, "Password:", password);
      const usera = await signupUserWithPassEmailName(email, password);
      if (usera) {
        console.log(usera);
        const userIda = usera.user.uid; // Yeh value directly user se le rahe hain
        setUserId(userIda); // state update kar rahe hain
        console.log(userIda);
        
        // Ensure userId is defined before writing data
        const data = await writeUserData(userIda); // direct pass kar rahe hain userIda ko
        console.log("User signed up:", data);
      }
    } catch (error) {
      console.log("Error signing up:", error);
    }
  };
  
  const savedob=(maindob)=>{
    console.log('hello',maindob)
    setdob(maindob)
  }
  // get userdata
  async function getUserData(userId) {
    try {
      const userRef = doc(database, "users", userId);
      const userSnapshot = await getDoc(userRef);

      if (userSnapshot.exists()) {
        const userData = userSnapshot.data();
        // setUserData(userData); // Set the fetched data into the state

        return userData;
      } else {
        console.log("No such user!");
        return null;
      }
    } catch (error) {
      console.error("Error fetching user data: ", error);
      throw error;
    }
  }
  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          // indexOf
          const data = await getUserData(user.uid); // Fetch user data using the user's UID
          // setmyId(data.userId);
          setUserdata(data); // Set the fetched data into the state
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };
    fetchUserData();
  }, [user]); // Re-run effect when user or getUserData changes

  // get all user function
  const getAllUserFunction = () => {
    try {
      const q = query(
        collection(database, "users"),
        orderBy("time"), // Assuming 'time' field exists in the user documents
      );
      const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
        let userArray = [];
        QuerySnapshot.forEach((doc) => {
          userArray.push({ ...doc.data(), id: doc.id });
        });
        setgetAllUser(userArray);
        // setLoading(false);
      });
      return () => unsubscribe(); // Clean up subscription on unmount
    } catch (error) {
      console.error("Error fetching users: ", error);
      // setLoading(false);
    }
  };
  useEffect(() => {
   
    getAllUserFunction();
    
  }, []);
  
  return (
      <FirebaseContext.Provider
        value={{
          signupUserWithPassEmailName,
          loginWithEmailandPass,
           loginWithFacebook,
          isLoggedIn,
          logout,
          userData,
        saveData,
        userdata,
        savedob,
        getAllUser,
        database,
        user,
        search,
        setSearch
        }}
      >
    {props.children}
      </FirebaseContext.Provider>
    );
  };











