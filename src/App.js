import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import HomePage from './HomePage';
import BirthPage from './BirthPage';
import OtpPage from './OtpPage';
// import EmailPage from './EmailPage';
import Suggesion from './Suggesion';
import SearchPage from './SearchPage';
import SearchProfile from './SearchProfile';
import MainProfile from './MainProfile';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import {FirebaseProvider} from "./Firebase";

export default function App(){
  return(
    <FirebaseProvider>
      <Router>
        <Routes>
          <Route path="/insta2" element={<LoginPage />} />
          <Route path="/insta2/SignUpPage" element={<SignUpPage />} />
          <Route path="/insta2/HomePage" element={<HomePage />} />
          <Route path="/insta2/BirthPage" element={<BirthPage />} />
          <Route path="/insta2/OtpPage" element={<OtpPage />} />
          {/* <Route path="/insta2/EmailPage" element={<EmailPage />} /> */}
          <Route path="/insta2/Suggesion" element={<Suggesion />} />
          <Route path="/insta2/SearchPage" element={<SearchPage />} />
          <Route path="/insta2/MainProfile" element={<MainProfile />} />
          <Route path="/insta2/SearchProfile/:id" element={<SearchProfile />} />
        </Routes>
      </Router>
    </FirebaseProvider>
  )
}