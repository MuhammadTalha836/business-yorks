import React from 'react'
import '../style/header.scss'
import logocenter from "../images/plantshape.png"



function HeaderSection() {
  return (
    //here is the main container with background picture
    <>
      <div className="home" id='link1'>

        <div className="HomeSectionOne">

          <div className="first">
            <div>

              <h2><i>Hello We, are York</i></h2>
              <h1>Amazing and creative bussines solutions!</h1>
              <button>read more</button>
            </div>
          </div>
        </div>

        <div className="HomeSectionTwo">
          <div>
            <img src={logocenter} alt="" />
            <h1>We Are York, We Provide Highly Creative Works & Design Awesome Stuff!</h1>
           
            <p>We are York agency, our strategists will help you set an objective and choose your tools, developing a
              plan that is custom built for your business. We make sure to provides unlimited collection of options,
              elements & creative shortcode lists. All York elements can be easily styled, edited and modified in
              little easy steps to save your time!</p>
          </div>
        </div>


      </div>
    </>
  )
}

export default HeaderSection