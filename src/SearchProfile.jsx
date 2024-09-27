import { useState,useEffect } from 'react'
// import img1 from './imgs/img1.jpg'
import Layout from "./Layout";
import { useParams } from "react-router-dom";
import {Options, SimilarAccount,SmallRell,Boxes, } from './ReelSvg'
import { useFirebase } from './Firebase';
import { getDocs, collection, doc, getDoc } from "firebase/firestore";
import Sidebar from './Sidebar';
export default function SearchProfile(){
const firebase=useFirebase();
    const {user, database } = firebase;
    const { id } = useParams();
    const [showText,setShowText]= useState("-webkit-box")
    const [isExpanded, setIsExpanded] = useState(false);
    const [userr,setUser]=useState();
    useEffect(() => {
        const fetchUser = async () => {
          // Fetch the product document snapshot using getDoc
          const productDocRef = doc(database, "users", id); // Replace "products" with your actual collection name
          const productDoc = await getDoc(productDocRef);
    
          if (productDoc.exists()) {
            const productData = productDoc.data();
            setUser({ id: productDoc.id, ...productData }); // Manually add the Firestore document ID
          } else {
            setUser(null); // Handle the case where the product doesn't exist
          }
        //   setLoading(false);
        };
        
    fetchUser();
}, [id, database]);
useEffect(()=>{
    setShowText(isExpanded? "block":"-webkit-box");
},[isExpanded])
    // const toggleReadMore = () => {
    //     setIsExpanded(!isExpanded);
    //   };
      const text="Money is a tool that can bring comfort and security, but true happiness comes from the richness of experiences and relationships.  ";
    return(
        <>
        <Layout>
        <div  className="Sp_main b" style={{height:"100vh",width:"100%",}}>
        <div style={{padding:"30px 20px",margin:"0px 31px"}}  className='bg-success'>
<div className="header bg-danger  d-flex flex-column  ">
    <div className='d-flex mt-1 '>
    <div className="bg- DALJU" style={{width:'270px',height:"150px"}}>
<div>
    <img src={userr?.proimg} alt="pro_img" style={{width:"150px",aspectRatio:"1",borderRadius:"50%"}}/>
    </div>
        </div>
        <div style={{marginLeft:"36px"}}>
        <div className='userName_class d-flex  gap-4 mt-2 mb-4 ' >
            
<span style={{fontSize:"20px",color:"#000000",cursor:"pointer"}}>{userr?.username}</span>
<div className='d-flex flex-row gap-2'>
<div style={{width:"81.67px",height:"32px",padding:"7px 16px",background:"#0095f6",fontSize:"14px",borderRadius:"8px",fontWeight:"600",cursor:"pointer"}} className='DALJU text-white '>Follow</div>
<div style={{fontSize:"14px",background:"#efefef",padding:"0px 16px",borderRadius:"8px",height:"32px",cursor:"pointer",fontWeight:"600"}} className='DALJU text-dark '>Message</div>
<div style={{background:"#efefef",borderRadius:"8px",padding:"8px",fontSize:"16px",height:"32px",cursor:"pointer"}} className='DALJU'><SimilarAccount /></div>        
<div style={{width:"32px",aspectRatio:"1",fontWeight:"600"}}><Options/></div>       
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
        <div style={{fontSize:"14.1px",fontWeight:"600",color:"#000000"}} className='pt-2'>{userr?.fullname}</div>
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
        
        >{text }<span onClick={()=>setIsExpanded(false)} style={{fontSize:"14px",color:"#737373",cursor:"pointer"}}>{isExpanded? "...less":""}</span>
    </div>
    <div onClick={()=>{setIsExpanded(true)}} style={{fontSize:"14px",color:"#737373",cursor:"pointer"}}>{isExpanded? "": "more"}</div></div>
    </div>
    </div>
   <hr style={{background:"#65686c",marginBottom:"0px"}}></hr>
</div>
<div className='Reel_sections d-flex align-items-center justify-content-center gap-5'>
<a href='#' style={{textDecoration:"none",color:"black",height:"52px",borderTop:"1px solid #000000"}} className="DALJU"><Boxes/><span style={{fontSize:"12px",color:"#000000",marginLeft:"6px",fontWeight:"600"}}>POSTS</span></a>
<a href='#' style={{textDecoration:"none",color:"black",height:"52px"}} className="DALJU"><SmallRell/><span style={{fontSize:"12px",color:"#000000",marginLeft:"6px",fontWeight:"600"}}>RELLS</span></a>
</div>
 <div className='Post_Rell_section w-100 d-flex gap-1 align-items-center justify-content-center flex-wrap bg-primary '>
<div className='bg-danger ' style={{width:"32%",aspectRatio:"1"}}>f</div>
<div className='bg-danger ' style={{width:"32%",aspectRatio:"1"}}>f</div>
<div className='bg-danger ' style={{width:"32%",aspectRatio:"1"}}>f</div>
<div className='bg-danger ' style={{width:"32%",aspectRatio:"1"}}>f</div>
<div className='bg-danger ' style={{width:"32%",aspectRatio:"1"}}>f</div>
<div className='bg-danger ' style={{width:"32%",aspectRatio:"1"}}>f</div>
<div className='bg-danger ' style={{width:"32%",aspectRatio:"1"}}>f</div>
<div className='bg-danger ' style={{width:"32%",aspectRatio:"1"}}>f</div>
<div className='bg-danger ' style={{width:"32%",aspectRatio:"1"}}>f</div>
<div className='bg-danger ' style={{width:"32%",aspectRatio:"1"}}>f</div>
<div className='bg-danger ' style={{width:"32%",aspectRatio:"1"}}>f</div>
<div className='bg-danger ' style={{width:"32%",aspectRatio:"1"}}>f</div> 
<div className='bg-danger ' style={{width:"32%",aspectRatio:"1"}}>f</div> 

</div>
{/* <div className='w-100 DALJU flex-column text-center' style={{height:"227px"}}>
    <Camera/>
    <span style={{fontSize:"30px",color:'#000000',fontWeight:"800"}}>No post yet</span>
</div> */}
    </div>
    </div>
    </Layout>
        </>
    )
}