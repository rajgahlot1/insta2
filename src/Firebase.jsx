
import React,{ createContext,useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
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
    appId: "1:378739240395:web:4d0dfbbd9e825737a59a4e"
  };
const firebaseApp=initializeApp(firebaseConfig);
const firebaseAuth=getAuth(firebaseApp);



export const useFirebase = () => useContext(FirebaseContext);
export const FirebaseProvider = (props) => { 
  
  const [user,setuser]=useState(null);
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
  const signupUserWithPassEmailName=(email,username,password,fullname)=>{
     return createUserWithEmailAndPassword(firebaseAuth,email,password,username,fullname)
  }
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
  const logout =async()=>{
    await signOut(firebaseAuth);
  }

  return (
      <FirebaseContext.Provider
        value={{
          signupUserWithPassEmailName,
          loginWithEmailandPass,
           loginWithFacebook,
          isLoggedIn,
          logout
        }}
      >
    {props.children}
      </FirebaseContext.Provider>
    );
  };











