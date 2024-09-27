import { useState,useEffect } from 'react'
import Layout from "./Layout";
// import rr from './img/img1.jpg'
import profileimg from './img/profile.jpg'
import { useParams } from "react-router-dom";
import {Plus,SmallRell,Boxes,Setting,Camera } from './ReelSvg'
import { useFirebase } from './Firebase';
import {  doc, getDoc } from "firebase/firestore";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PostPage from './PostPage';
import ReelsPage from './ReelsPage';


export default function MainProfile(){
    const img=profileimg;
    const firebase=useFirebase();
    const {database } = firebase;
    // const { id } = useParams();
    const [showText,setShowText]= useState("-webkit-box")
    const [isExpanded, setIsExpanded] = useState(false);
    const [userr,setUser]=useState();
//     useEffect(() => {
//         const fetchUser = async () => {
//           // Fetch the product document snapshot using getDoc
//           const productDocRef = doc(database, "users", id); // Replace "products" with your actual collection name
//           const productDoc = await getDoc(productDocRef);
    
//           if (productDoc.exists()) {
//             const productData = productDoc.data();
//             setUser({ id: productDoc.id, ...productData }); // Manually add the Firestore document ID
//           } else {
//             setUser(null); // Handle the case where the product doesn't exist
//           }
//         //   setLoading(false);
//         };
        
//     fetchUser();
// }, [id, database]);


      const text="Money is a tool that can bring comfort and security, but true happiness comes from the richness of experiences and relationships.  ";
    return(
        <>
        <Layout>
        <div  className="Sp_main b" style={{height:"100vh",width:"100%",}}>
        <div style={{padding:"30px 20px",margin:"0px 68.500px"}} >
<div className="header bg-  d-flex flex-column  ">
    <div className='d-flex mt-1 bg-'>
    <div className="bg-d DALJU" style={{width:'270px',height:"150px"}}>
<div >
    <img src={img} alt="pro_img" style={{width:"150px",aspectRatio:"1",borderRadius:"50%"}}/>
    </div>
        </div>
        <div style={{marginLeft:"36px"}} >
        <div className='userName_class d-flex  gap-4 mt-2 mb-4 ' >
            
<span style={{fontSize:"20px",color:"#000000",cursor:"pointer"}}>tomar___ji_</span>
<div className='d-flex flex-row gap-2'>
<div style={{height:"32px",padding:"7px 16px",background:"#efefef",fontSize:"14px",borderRadius:"8px",fontWeight:"600",cursor:"pointer",color:"#000000"}} className='DALJU '>Edit Profile</div>
<div style={{fontSize:"14px",background:"#efefef",padding:"0px 16px",borderRadius:"8px",height:"32px",cursor:"pointer",fontWeight:"600",color:"#000000"}} className='DALJU  '>View archive</div>
<div style={{fontSize:"14px",background:"#efefef",padding:"0px 16px",borderRadius:"8px",height:"32px",cursor:"pointer",fontWeight:"600",color:"#000000"}} className='DALJU  '>Ad tools</div>
<div style={{cursor:"pointer"}} className='DALJU'><Setting /></div>        
        </div>
        </div>
        <ul className='Follow_class d-flex gap-3 p-0 mb-0' style={{listStyle:"none"}}> 
<li>
    <span style={{fontWeight:"600",fontSize:"16px"}}> 0 </span>
    posts
</li>
<li>
    <a>
    <span style={{fontWeight:"600",fontSize:"16px"}}>500  </span>
    followers
    </a>
</li>
<li>
    <a>
    <span style={{fontWeight:"600",fontSize:"16px"}}>874  </span>
    following
    </a>
</li>
        </ul>
        <div style={{fontSize:"14.1px",fontWeight:"600",color:"#000000"}} className='pt-2'>yash tomar</div>
        <div style={{fontSize:"14px",color:"#737373"}}>Education</div>
        <div className='d-flex'>
        <div style={{width:"80%",
        display: showText,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        // textOverflow: 'ellipsis',
        // whiteSpace: isExpanded ? 'normal' : 'nowrap',
        WebkitLineClamp: isExpanded ? "none" : 1,
        fontSize:"14px",
        // color:"red",

        color:"#000000",
        // overflowWrap:"breakWord"
        }}
        
        >{text}
    </div>
    <div onClick={()=>{setIsExpanded(!isExpanded); setShowText(isExpanded? "block":"-webkit-box")}} style={{fontSize:"14px",color:"#737373",cursor:"pointer"}}>{isExpanded? "  more": "...less"}</div></div>
    </div>
    </div>
    
    <ul className='Add_hiligit w-100 d-flex gap-5 ms-lg-2' style={{marginTop:"40px",textDecoration:"none"}}>
    <li style={{height:"115px",width:"87px"}} className='DALJU flex-column '>
        <div style={{width:"87px",aspectRatio:"1",background:"#fafafa",borderRadius:"50%",border:"1px solid #e2e5e9",padding:"3px"}} className='DALJU '>
        <div className='w-100 h-100 DALJU bg-primary rounded-circle'>
      <Plus/>
        </div>
        </div>
        <span style={{fontSize:"12px",color:"#000000",fontWeight:"600"}} className='mt-2'>New</span>
    </li>
    <li style={{height:"115px",width:"87px"}} className='DALJU flex-column '>
        <div style={{width:"87px",aspectRatio:"1",background:"#fafafa",borderRadius:"50%",border:"1px solid #e2e5e9",padding:"3px"}} className='DALJU '>
        <div className='w-100 h-100 DALJU bg-primary rounded-circle'>
      <Plus/>
        </div>
        </div>
        <span style={{fontSize:"12px",color:"#000000",fontWeight:"600"}} className='mt-2'>New</span>
    </li>
    <li style={{height:"115px",width:"87px"}} className='DALJU flex-column '>
        <div style={{width:"87px",aspectRatio:"1",background:"#fafafa",borderRadius:"50%",border:"1px solid #e2e5e9",padding:"3px"}} className='DALJU '>
        <div className='w-100 h-100 DALJU bg-primary rounded-circle'>
      <Plus/>
        </div>
        </div>
        <span style={{fontSize:"12px",color:"#000000",fontWeight:"600"}} className='mt-2'>New</span>
    </li>
    

    </ul>
   <hr style={{background:"#65686c",marginBottom:"0px"}} className='mt-4'></hr>
</div>
<Tabs>
<TabList className='Reel_sections d-flex align-items-center justify-content-center gap-5'>
<Tab href='#' style={{textDecoration:"none",color:"black",height:"52px"}} className="DALJU "><Boxes/><span style={{fontSize:"12px",color:"#000000",marginLeft:"6px",fontWeight:"600"}}>POSTS</span></Tab>
<Tab href='#' style={{textDecoration:"none",color:"black",height:"52px"}} className="DALJU"><SmallRell/><span style={{fontSize:"12px",color:"#000000",marginLeft:"6px",fontWeight:"600"}}>RELLS</span></Tab>
</TabList>
<TabPanel>
              <PostPage />
 </TabPanel>
<TabPanel>
              <ReelsPage />
 </TabPanel>
</Tabs>
    </div>
    </div>
    </Layout>
        </>
    )
}