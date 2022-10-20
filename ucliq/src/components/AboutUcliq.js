import React from 'react'
import '../style/aboutucliq.css'
import { useNavigate } from 'react-router-dom'

const AboutUcliq = () => {
    const navigate=useNavigate()
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='aboutUs'>
                <div className='aboutInfo'>
                 <div className='detailinfo'>
                    <div className='detailheader'>
                        <h5>Doorstep Delivary</h5>
                    </div>
                    <div className='icon'>
                    <i class="fa fa-truck" aria-hidden="true" style={{fontSize:"42px",color:"white"}}></i>
                    </div>
                 </div>
                 <div className='detailinfo'>
                    <div className='detailheader'>
                        <h5>Business Growth</h5>
                    </div>
                    <div className='icon'>
                    <i class='fas fa-chart-line' style={{fontSize:"42px",color:"white"}}></i>
                    </div>
                 </div>
                 <div className='detailinfo'>
                    <div className='detailheader'>
                        <h5>Smart Returns</h5>
                    </div>
                    <div className='icon'>
                    <i class='fa fa-rupee' style={{fontSize:"42px",color:"white"}}></i>
                    </div>
                 </div>
                 <div className='detailinfo'>
                    <div className='detailheader'>
                        <h5>Credit Facility</h5>
                    </div>
                    <div className='icon'>
                    <i class='far fa-credit-card' style={{fontSize:"42px",color:"white"}}></i>
                    </div>
                 </div>
                 <div className='detailinfo'>
                    <div className='detailheader'>
                        <h5>Easy Payment</h5>
                    </div>
                    <div className='icon'>
                    <i class='fa fa-money' style={{fontSize:"42px",color:"white"}}></i>
                    </div>
                 </div>
                </div>
                <div className='aboutImage'>
                    <h1>About Us</h1>
                    <p>UcliQ is a Business-to-Business (B2B) e-commerce company that brings a large number of retailers & sellers onto one platform. With a dream of digitalizing 25% of traditional supply chains, it is currently operating in Delhi/NCR. UcliQ connects farmers, manufacturers, producers and wholesalers with retailers, kirana stores, cafes and restaurants, thereby helping local sellers to expand their businesses without having to worry about the hassles involved in the supply chains.
                    </p>
                    <span onClick={()=>navigate('/about')} className='btn'>Know More</span>
                </div>
            </div>
        </div>
    </div>
  )
}
export default AboutUcliq;