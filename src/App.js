import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import HomePage from './HomePage';
import BirthPage from './BirthPage';
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
        </Routes>
      </Router>
    </FirebaseProvider>
  )
}