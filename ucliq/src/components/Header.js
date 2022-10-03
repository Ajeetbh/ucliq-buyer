import React from 'react'
import image from '../images/frontimage.webp'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate=useNavigate()
  return (
      <div className="container">
        <div className="row">
          <div className="header">
            <div className="col-md-4 headerInfo">
              <h1 style={{ width: "36rem" }}>
              Building Digital Mandi of <span>
                Meat, Fresh Fish, and Seafood.</span>
              </h1>
              <p style={{ width: "36rem" }}>
              UcliQ is a B2B Marketplace for Retail, Restaurants, Hotels and Businesess. 
              Providing the best services with the help of technology and the supply chain innovation.
              </p>
              <div className='span'>
              <span onClick={()=>navigate('/about')}>About Us</span>
              </div>
              
            </div>
            <div className="col-md-8 headerImage">
              <img
                src={image}
                alt="careerimage"
                style={{ height: "30rem" }}
              />
            </div>
          </div>
        </div>
    </div>
  )
}
export default Header
