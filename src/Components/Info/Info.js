import './info.css'
import logo3 from  "../../image/Logo(3).png";
import spinner from  "../../image/spinner.png";
import { useEffect, useState } from 'react';
const Info = (props) => {

  const [spin,setSpin]=useState(false)
  const [timer ,setTimer]=useState()
  
  


  return (
    <div className="details">
    <div className="similar-acc">
    <div className="details-item">
     <img src={logo3} alt="" />
     <h>{props.company}</h><br />
     <a href="#">{props.wibesite}</a>
     </div>
    </div>
    
     {
     spin? 
     <div className="spinner" ><img src={spinner} alt="" />
     <div className="spin-button" >Track</div>
     </div> :<div className="btn" onClick={()=>setSpin(!spin)}>
      <div className="button" onClick={()=>setSpin(!spin)} >Track</div>
      </div>
    }
    
{/* <div className='track-btn'>
      <div className="tracking-button">Tracking</div>
      </div> */}
    
  </div>

  )
}

export default Info