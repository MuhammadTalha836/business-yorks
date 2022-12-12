import React from 'react'
import '../style/Gallery.scss'
import one from "../images/first.jpg"
import two from "../images/two.jpg"
import three from "../images/three.jpg"
import four from "../images/four.jpg"
import five from "../images/five.jpg"
import six from "../images/six.jpg"
import seven from "../images/seven.jpg"
import eight from "../images/eight.jpg"


function Gallery() {
  return (
    <>
    <div className="gallery" id='link6'>

      <div className="HomeGallery">
        <span>

          <img src={one} alt="" />
          <img src={two} alt="" />
          <img src={three} alt="" />
          <img src={four} alt="" />

        </span>
      </div>

      <div className="HomeGallery">
        <span>

          <img src={five} alt="" />
          <img src={six} alt="" />
          <img src={seven} alt="" />
          <img src={eight} alt="" />

        </span>
      </div>
    </div>
    </>


  )
}

export default Gallery