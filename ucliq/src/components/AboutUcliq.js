import React from 'react'
import '../style/aboutucliq.css'

const AboutUcliq = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='second'>
                <div className='secondInfo'>
                    <p>What we Serve</p>
                    <h1>Meat, Fresh Fish, and Seafood delivered to your  business</h1>
                </div>
                <div className='secondProp'>
                    <div className='firstSec'>
                        <div className='col1'>
                            <div className='icon'>
                            <i className="fa fa-truck" style={{fontSize:"42px",color:"white"}}></i>
                            </div>
                            <h5>Doorstep Delivary</h5>
                        </div>
                        <div className='col1'>
                             <div className='icon'>
                             <i className='fas fa-chart-line' style={{fontSize:"42px",color:"white"}}></i>
                             </div>
                             <h5>Business Growth</h5>
                        </div> 
                        <div className='col1'>
                             <div className='icon'>
                             <i className='fa fa-rupee' style={{fontSize:"42px",color:"white"}}></i>
                             </div>
                             <h5>Smart Returns</h5>
                        </div> 
                    </div>
                    <div className='secondSec'>
                        <div className='col2'>
                              <div className='icon'>
                              <i className='far fa-credit-card' style={{fontSize:"42px",color:"white"}}></i>  
                              </div>                 
                              <h5>Credit Facility</h5>
                        </div> 
                        <div className='col2'>
                        <div className='icon'>
                        <i className='fa fa-money' style={{fontSize:"42px",color:"white"}}></i>    
                        </div>               
                        <h5>Easy Payment</h5>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default AboutUcliq;























