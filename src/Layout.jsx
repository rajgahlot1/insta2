import Sidebar from './Sidebar'



export default function Layout({children}){

  return(
<>
<div className='d-flex'>
<Sidebar/>
  { <div className="main-container">
    {children}
  </div> }
</div>

</>
  )
}