import React from 'react'
import '../style/cards.scss'
import { BsPhone, BsTools } from 'react-icons/bs';
import { AiOutlineFlag } from 'react-icons/ai';
import { TfiFiles } from 'react-icons/tfi';


function Cards() {
  return (
    <div className="HomeSectionFour" id='link3'>
      <div className="cards">
        <div className="card one">
          <span>

            <BsPhone size="80px" />
            <h3>Fully Responsive</h3>
            <p>Fully responsive, retina ready & created for all types of devices. York makes sure your website looks equally breathtaking when viewed on all screen resolutions.</p>
          </span>
        </div>
        <div className="card two">
          <span>
            <AiOutlineFlag size="80px" />
            <h3>Free Updates</h3>
            <p>Fully responsive, retina ready & created for all types of devices. York makes sure your website looks equally breathtaking when viewed on all screen resolutions.</p>
          </span>
        </div>
        <div className="card three">
          <span>
            <TfiFiles size="80px" />
            <h3>Powerful Features</h3>
            <p>You will get a lifetime free updates, which may contain various theme improvements, fixes for any bugs or theme issues, security updates or new awesome demos.</p>
          </span>
        </div>
        <div className="card four">
          <span>
            < BsTools size="80px" />
            <h3>Friendly Support</h3>
            <p>Our aim is the satisfaction of customers. If you have any questions, or need help with, just contact us and our support team and developers will immediately help you.</p>
          </span>
        </div>

      </div>
    </div>

  )
}

export default Cards