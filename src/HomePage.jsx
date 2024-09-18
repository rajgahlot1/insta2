import { useFirebase } from "./Firebase";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
export default function HomePage(){
  const firebase=useFirebase();
  const navigate=useNavigate();
  const handleLogOut= async()=>{
    
    await firebase.logout();
    navigate('/insta2');
  }
  return(
    <>
      <Layout>
    <div>This is Homepage</div>
      <button onClick={handleLogOut}>Click</button>
      </Layout>
    </>
  )
}