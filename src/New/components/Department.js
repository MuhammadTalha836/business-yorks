import React from 'react'
import '../style/department.scss'
import { RxDesktop } from 'react-icons/rx';
import { AiFillAppstore } from 'react-icons/ai';
import { SiBrandfolder } from 'react-icons/si';
import { IoMdPhotos } from 'react-icons/io';
import { SiPhotopea } from 'react-icons/si';
import { FaTabletAlt } from 'react-icons/fa';


function Department() {
  return (
    <>
      <div className="HomeSectionSix" id='link5'>
        <div className="cards">
          <div className="card one">
            <span>
              <RxDesktop size="80px" className='icon' />
              <h2>Development</h2>
              <p>The development of your next business plan will be executed by a brilliant team who will indicate your grand success.</p>
            </span>
          </div>
          <div className="card two">
            <span>
              <AiFillAppstore size="80px" className='icon' />
              <h2>Web Design</h2>
              <p>What separates York agency from all other web design agencies is the ability to offer the most User Friendly Experience.</p>
            </span>
          </div>
          <div className="card three">
            <span>
              <SiBrandfolder size="80px" className='icon' />
              <h2>Brand Identity</h2>
              <p>Your logo is the very heart of identity, let our designers deliver the perfect dreamy design for your new business identity.</p>
            </span>
          </div>
        </div>
      </div>

      <div className="HomeSectionSeven">
        <div className="cards">
          <div className="card one">
            <span>
              <IoMdPhotos size="80px" className='icon' />
              <h2>Photography</h2>
              <p>Photography is the core of everything we do, photography equipment, camera and reviews, photography articles.</p>
            </span>
          </div>
          <div className="card two">
            <span>
              <SiPhotopea size="80px" className='icon' />
              <h2>Graphic Design</h2>
              <p>Graphic design is the process of visual and problem-solving using one or more of typography, photography and illustration.</p>
            </span>
          </div>
          <div className="card three">
            <span>
              <FaTabletAlt size="80px" className='icon' />
              <h2>Mobile Apps</h2>
              <p>
                Increase social reach and productivity with our Awesome App Directory, with a big collection of famous applications..
              </p>
            </span>
          </div>
        </div>
      </div>

    </>
  )
}

export default Department