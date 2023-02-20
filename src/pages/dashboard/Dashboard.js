import React, {useState} from 'react'
import Widget from '../../Component/widget/Widget'
import { IoNotificationsOutline} from 'react-icons/io5'
import { FaHandHoldingUsd} from 'react-icons/fa'
import {BiMenuAltLeft} from 'react-icons/bi'
import {BsBank2, BsCheckCircle, BsQuestionCircle} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Slider from '../../Component/slider/Slider'
import  Chart  from '../../Component/chart/Chart'
import transactionImage from '../../Media/undraw_online_transactions_-02-ka.svg'
import DashboardForm from '../../Component/dashboardForm/DashboardForm'
import './Dashboard.css'
import Sidebar from '../../Component/sidebar/Sidebar'



const Dashboard = () => {
    const [isOpen, setIsOpen]=useState(false);

    const showSideBar =()=>{
        setIsOpen(isOpen=>!isOpen)
    }
    const closeSideBar=()=>setIsOpen(false)


    let isActive = isOpen? 'active' : '';
    
    
  return (
    <div className="dashboard-wrapper" >
        <div className="sidebar-container">
          <Sidebar/> 
        </div>
        <section className="dashboard-content">
            <div className="dashboard-header">
                <BiMenuAltLeft size={25} className='menu' onClick={showSideBar}/>
            
                <IoNotificationsOutline size={25} />
            </div>
            <div className={`mobile-sidebar ${isActive}`}>
                <Sidebar closeSideBar={closeSideBar} />
            </div>
          
            <div className='dashboard-container'>
    
                <div className="balance-tab">
                    <div className="balance-wrapper">
                        <p>Wallet Balance</p>
                        <h2>121,546.32 <span>NGN</span></h2>
                    </div>
                <div className="balance-links">
                
                    <Link to='/Trade/buy'>
                        <span>
                            <FaHandHoldingUsd className='tablinks'/>
                        </span>
                   
                        <small>NGN Deposit</small>
                    </Link>

                    <Link to='/Trade/sell'>
                        <span>
                            <BsBank2 className='tablinks'/>
                        </span>
                        <small>NGN Withdrawal</small>
                    </Link>
               
                </div>

            </div>
            <div className="slider-container">
                <h3>Crypto Wallet Balance</h3>
                <Slider />
            </div>

            <div className="dashboard-widget">
                <Widget/>
            </div>

        
            <div className="dashboard-chart">
                <div className="profile-auth-container">
                    <h3>Complete your Profile 2/4</h3>
                    <ul>
                        <li><BsCheckCircle className='icons'/> <span><p>Comfirm your Email</p>   <small>add your email to secure your account</small></span></li>
                        <li><BsCheckCircle className='icons'/> <span><p>Add your phone number</p> <small>add your phone number for 2FA</small></span></li>
                        <li><BsQuestionCircle className='icons'/> <span><p>Add BVN</p>  <small>Link BVN to your account</small> </span></li>
                        <li><BsQuestionCircle className='icons'/><span><p>Add Bank Account</p>  <small>Add a primary account for payment</small> </span> </li>
                    </ul>

                </div>

                <div className="portfolio-container">
                    <h3>Portfolios</h3>
                    <div>
                        <div className="summary">
                            <ul >
                                <li><span className='pending'></span> <p>10 pending Transaction</p></li>
                                <li><span className='completed'></span> <p>285 Completed Transaction</p> </li>
                                <li><span className='declined'></span> <p>5 Declined Transaction</p></li>
                            </ul>
                        </div>

                        <div className="chart">
                            <Chart/>
                        </div>
                    </div>

                </div>
            </div>
            

            <div className="transaction-container">
                <div className="transaction-form">
                    <DashboardForm/>
                </div>
                <div className="recent-transaction">
                    <h3>Recent Transactions</h3>
                    <div>
                        <div className="transaction-info">
                            <div className="transaction-image">
                                <img src={transactionImage} alt="transaction" />
                            </div>
                            <div className="transaction-window">
                                <h3>No Transactions Yet</h3>
                                <p>Your transaction will appear here</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    </div>
)
}

export default Dashboard