import { useFirebase } from "./Firebase";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import SearchProfile from './SearchProfile'
import Suggesion from "./Suggesion";

export default function HomePage(){
  const firebase=useFirebase();
  const navigate=useNavigate();
  const handleLogOut= async()=>{
    
    await firebase.logout();
    navigate('/insta2');
  }
  return(
    <div className="w-100">
      <Layout>

{/* <div className="w-100">
<SearchProfile/>
</div> */}

        <div className="d-flex justify-content-between" >
         <div> 
    <div>This is Homepage</div>
      <button onClick={handleLogOut}>Click</button>

</div>
<div>
<Suggesion/></div>
</div>
      </Layout>
    </div>
  )
}