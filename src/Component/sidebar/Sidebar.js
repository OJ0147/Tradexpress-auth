import React from 'react'
import { AiFillSetting } from 'react-icons/ai'
import { FaBlog } from 'react-icons/fa'
import { IoPersonCircle } from 'react-icons/io5'
import { MdAccountBalanceWallet, MdDashboard, MdOutlineLogout } from 'react-icons/md'
import { RiEditFill, RiExchangeDollarFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import './Sidebar.css'
import dashlogo from '../../Media/TradExpress.svg'

const Sidebar = ({closeSideBar}) => {
    
    const navigate= useNavigate();
    const logoutUser=()=>{
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            toast.success('logged out successfully')
            navigate('/')
        }).catch((error) => {
            // An error happened.
            toast.error('unable to logout')
        });
    }
  return (
    <>
        <div className="sidebar" onClick={closeSideBar}>
            <div className="dash-logo" >
                <Link to='/' logo-link>
                    <img src={dashlogo} alt="tradexpress"  />
                </Link>
    
            </div>
            <div className="sidebar-links">
                <ul>

                    <li><MdDashboard size={25}/> Dashboard</li>
                    <li><MdAccountBalanceWallet size={25}/> Wallet</li>
                    <li><RiExchangeDollarFill size={25}/> Exchange Rate</li>
                    <li><RiEditFill size={25}/> <Link to='/Learn'>Learn</Link></li>
                    <li><FaBlog size={25}/> Blog</li>
                    <li><IoPersonCircle size={25}/> Profile</li>
                    <li><AiFillSetting size={25}/> Settings</li>
                    <li onClick={logoutUser} ><MdOutlineLogout size={25} /> Logout</li>
                    </ul>
            </div>

            <a href="#support" className='support-btn'>Contact Support</a>
        </div>
    </>
  )
}

export default Sidebar