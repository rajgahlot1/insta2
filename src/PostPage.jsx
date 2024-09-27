import { Camera } from "./ReelSvg"

export default function PostPage(){
    return(
        <>
        {/* <div className='Post_Rell_section w-100 d-flex gap-1 align-items-center justify-content-center  row bg-primary '> */}
{/* <div className='bg-danger col-3' style={{width:"307.67px",aspectRatio:"1"}}>f</div> */}
{/* <div className='bg-danger col-3' style={{width:"307.67px",aspectRatio:"1"}}>f</div> */}
{/* <div className='bg-danger col-3' style={{width:"307.67px",aspectRatio:"1"}}>f</div> */}
{/* <div className='bg-danger col-3' style={{width:"307.67px",aspectRatio:"1"}}>f</div>
<div className='bg-danger col-3' style={{width:"307.67px",aspectRatio:"1"}}>f</div>
<div className='bg-danger col-3' style={{width:"307.67px",aspectRatio:"1"}}>f</div>
<div className='bg-danger col-3' style={{width:"307.67px",aspectRatio:"1"}}>f</div>
<div className='bg-danger col-3' style={{width:"307.67px",aspectRatio:"1"}}>f</div>
<div className='bg-danger col-3' style={{width:"307.67px",aspectRatio:"1"}}>f</div>
<div className='bg-danger col-3' style={{width:"307.67px",aspectRatio:"1"}}>f</div>
<div className='bg-danger col-3' style={{width:"307.67px",aspectRatio:"1"}}>f</div>
<div className='bg-danger col-3' style={{width:"307.67px",aspectRatio:"1"}}>f</div>
<div className='bg-danger col-3' style={{width:"307.67px",aspectRatio:"1"}}>f</div> */}

{/* </div>  */}
<div className='w-100 DALJU flex-column text-center' style={{height:"227px"}}>
    <Camera/>
    <span style={{fontSize:"30px",color:'#000000',fontWeight:"800"}}>Share photos</span>
    <span style={{fontSize:"14px",color:'#000000',fontWeight:"400"}}>When you share photos, they will appear on your profile.</span>
    <div className='share_text'>Share your first photo</div>
</div>


        </>
    )
}