import "./navbar.css"
import search from  "../../image/search.png";
import cross from  "../../image/times.png";
import hero from  "../../image/hero.png";
import screen1 from  "../../image/Screenshot 1.png";
import screen2 from  "../../image/Screenshot 2.png";
import bell from  "../../image/bell.png";
import logo1 from  "../../image/Logo.png";
import point from  "../../image/Rectangle 12.png";
import { useEffect, useState } from "react";
import axios from "axios";
import Info from "../Info/Info";

const Navbar = () => {

  const [data, setData]=useState('')
  const  [searchdata,setSearchdata]=useState([])
  const [datafilter,setDatafilter]=useState([])
const [clear,setClear]=useState()


const changehandle=(e)=>{
  const getsearch=e.target.value

  if(getsearch.length>0){
    const newdata=searchdata.filter((item)=>item.company.toLowerCase().includes(getsearch))
    setSearchdata(newdata)
  }
  else{
    setSearchdata(datafilter)
  }
  setData(getsearch)
}
useEffect(()=>{
  
  const fetchApi = {
    method: 'GET',
    url: 'https://staging.staging.b2brain.com/search/autocomplete_org_all/',
    params:{q:'get'}
    
  };

  axios.request(fetchApi).then(function (response) {
    setSearchdata(response.data);
    setDatafilter(response.data)
    console.log(response.data)
  }).catch(function (error) {
    console.error(error);
  });

},[])

  return(
    
    <div className="hero">
                                               {/* Navbar */}
 {clear ? <div>{<Navbar/>}</div>:<div>
    <div className='main-nav'>
   
     {data?<img src={cross} alt="cross" className="cross-icon" onClick={()=>{setClear(!clear)}}/>
        :<img className="search" src={search} alt="" />}
      <input className="search-box" placeholder="Search by account name or website" value={data} type="search" name="search" id="search" onChange={changehandle}/>
      <div className="bell">
      <img className="bell-icon" src={bell} alt="" />
      <img className="bell-point" src={point} alt="" />
      </div>
        <img  className="logo1" src={logo1} alt="" />
    </div>
    {data ? 
    <div className="similar">
      <span className="similar-head">Similar accounts</span> <span className="action">Quick Actions</span>
      <h1 className="track">Track new account</h1>
      <h1 className="bulk">Bulk track accounts</h1>
      <h1 className="manage">Manage accounts</h1>
    </div>
    
: <div></div>
    }
{data ?
 searchdata.map((item ,index)=>{
return(
  <div key={index}>
<Info company={item.company} website={item.website}></Info>
  </div>
  
)
 })
                                                     //  main contents
   :<div className="main-content">
    <img  className="hero-img" src={hero} alt="" />
      <img  className="screen1" src={screen1} alt="" />
      <img className="screen2" src={screen2} alt="" />
    </div>}
    </div>}
    </div>

  );
}


export default Navbar;