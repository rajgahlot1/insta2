import React, { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  // getDoc,
  // getDocs,
  // collection,
  // deleteDoc,
  // query,
  // orderBy,
  // onSnapshot,
} from "firebase/firestore";
// import {  getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  FacebookAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
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
const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
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
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setuser(user);
      } else {
        setuser(null);
      }
    });
  }, []);

  const isLoggedIn = user ? true : false;

  // register
  const signupUserWithPassEmail = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };
  // login
  const loginWithEmailandPass = async (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  };
  // login with facebook
  const loginWithFacebook = async () => {
    const provider = new FacebookAuthProvider();
    provider.addScope("email");
    try {
      const result = await signInWithPopup(firebaseAuth, provider);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  // logout
  const logout = async () => {
    await signOut(firebaseAuth);
  };
  const writeUserData = async (userId) => {
    try {
      const userRef = doc(database, "users", userId,'fdh');
      const now = new Date();
      const time = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      const userData = {
        email: email,
        fullname: fullname,
        username: username,
        dob: dob,
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
      return userData; // Return the user data or some confirmation message
    } catch (error) {
      console.error("Error writing user data: ", error);
      throw error; // Throw error to handle it outside the function if needed
    }
  };
  const userData = (email, fullname, username, password) => {
    setemail(email);
    setfullname(fullname);
    setusername(username);
    setpassword(password);
    // setUserId(userId)
  };
  const saveData = async () => {
    try {
      console.log(email)
      console.log(fullname)
      console.log(username)
      console.log(dob)
      console.log(password)
          
      console.log("Email:", email, "Password:", password);
      const usera = await signupUserWithPassEmail(email, password);
      if(usera){
        console.log(usera)
        const userIda= await usera.user.uid;
        setUserId(userIda)
        console.log(userIda)
      } console.log(userId,"oiddid")
      const data = await writeUserData(userId);
      console.log("User signed up:", data);
    } catch (error) {
      console.log("Error signing up:", error);
    }
  };
  const savedob=(maindob)=>{
    console.log('hello',maindob)
    setdob(maindob)
  }
  return (
    <FirebaseContext.Provider
      value={{
        loginWithEmailandPass,
        loginWithFacebook,
        isLoggedIn,
        logout,
        userData,
        saveData,
        savedob,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
