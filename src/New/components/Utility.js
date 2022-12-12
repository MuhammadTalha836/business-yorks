import React from 'react'
import '../style/utility.scss'
import { ImPlay2 } from "react-icons/im"
function Utility() {
  return (
    <div className="HomeSectionthree" id='link2'>
      <div className="divOne">
        <a href="https://www.youtube.com/watch?v=TKnufs85hXk" target="_blank">

          <button><ImPlay2 size="30px" /></button>
        </a>
      </div>
      <div className="divTwo">
        <div>

          <h1>Imagine & Create,
            <br /> We Make It So Simple!</h1>
          <p>After all, as described in Web Design Trends, vision dominates a lot of our subconscious
            interpretation of the world around us. On top it, pleasing images create a better user experience.
            Rounding up a bunch of specific designs and talking about the merits of each is the perfect way!
          </p>
          <button>read more</button>
        </div>
      </div>
    </div>
  )
}

export default Utility