import React, { useState } from 'react'
import "./sidebar.css";
import shape from "../../image/Shape.png";
import homelogo from "../../image/home.png";
import intelslogo from "../../image/star.png";
import leadslogo from "../../image/user.png";
import building from "../../image/building.png";
import cog from "../../image/cog.png";
import link from "../../image/link.png";
import users from "../../image/users.png";
import comments from "../../image/comments-alt.png";
import chevrondown from "../../image/chevron-down.png";
import chevronup from "../../image/chevron-up.png";

const Sidebar = () => {
    const [toggle, setToggle] = useState(false);
    const [close, setClose] = useState(false)
    return (

        <div className='main-sidebar'>

            <div className="main-logo">
                <img src={shape} alt="" />
                <p>B2Brain</p>
            </div>

            <div className='sidebar'>
                <div className="home-item">
                    <img src={homelogo} alt="" />
                    <p>Dashboard</p>
                </div>
                <div className="intels-item">
                    <img src={intelslogo} alt="" />
                    <p>Intels</p>

                </div>
                <div className='intels-unread'>
                    <div className="intels-unread-cont">
                        <h1 className="intels-unread-text">4 unread</h1>
                    </div>
                </div>

                <div className="leads-item">
                    <img src={leadslogo} alt="" />
                    <p>Leads</p>

                </div>

                <div className="leads-unseen">
                    <div className="leads-text-cont">
                        <p>4 unseen</p>
                    </div>
                </div>

                <div className="account-item">

                    <img className='acc-img' src={building} alt="" />
                    <p>Accounts</p>

                    {toggle ? <img className='arrowdown' src={chevrondown} alt="" onClick={() => setToggle(!toggle)} /> : <img className='arrowdown' src={chevronup} alt="" onClick={() => setToggle(!toggle)} />
                    }
                </div>
                <div className={toggle ? '' : 'less'}>
                    {toggle ? <div>  <div className='v1'></div> <div className='acc-option'>
                        Manage all <br />
                        Track new accounts <br />
                        Bulk Import
                    </div></div> : <div></div>
                    }

                    <div className="pre-item">

                        <img className='pre-img' src={cog} alt="" />
                        <p>Preferences</p>
                        {close ? <img className='pre-arrowdown' src={chevrondown} alt="" onClick={() => setClose(!close)} /> : <img className='pre-arrowdown' src={chevronup} alt="" onClick={() => setClose(!close)} />}
                    </div>
                       <div className={close?'':'less'}>
                    {close ? <div>
                        <div className="v2"></div>
                        <div className='pre-option'>
                            Product Focus <br />
                            Intel Preferences <br />
                            Lead Persona
                        </div>
                    </div> : <div></div>
                    }

                    <div className="integration-item">
                        <img src={link} alt="" />
                        <p>Integrations</p>
                    </div>
                    <div className="team-item">
                        <img src={users} alt="" />
                        <p>Team</p>
                    </div>
                    <div className="help-item">
                        <img src={comments} alt="" />
                        <p>Help/Support</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Sidebar