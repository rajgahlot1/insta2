import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
const SearchComponent = () => {
  return (
    <div style={{height:"748px", width:"396px", borderRight:"1px solid #afafaf", borderLeft:"1px solid #afafaf"}}>
       <div style={{borderBottom:"1px solid #afafaf"}}> <h3 className='p-3'>Search</h3>
        <div className='d-flex align-items-center justify-content-center'><input type="text"placeholder='Search'  className='p-1 m-2 w-100' style={{borderRadius:'4px',backgroundColor:"#efefef", outline:"none", border:"none"}}/></div>
        </div>
        <div className='m-3'><h5>Recent</h5>
        <div className='d-flex align-items-center justify-content-center '><h6 style={{marginTop:"100px", color:"#757575"}}>No recent searches</h6></div></div></div>
  )
}

export default SearchComponent