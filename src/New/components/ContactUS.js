import React from 'react'
import '../style/ContactUS.scss'

function ContactUS() {
  return (
    <div className="HomeContact" id='link7'>
      <div className="cards">
        <div className="card one">
          <span>

            <h1>Need Help?!!</h1>
            <h2>Don’t Hesitate To Ask</h2>
          </span>
        </div>
        <div className="card two">
          <span>
            <div className='feild'>
              <h1>Write To Us</h1>

              <div className="form__group field" style={{ marginLeft: "40px" }}>
                <input required="" placeholder="Name" className="form__field" type="input" />
                <label className="form__label" htmlFor="name">Name</label>
              </div>
              <div className="form__group field" style={{ marginLeft: "40px" }}>
                <input required="" placeholder="Name" className="form__field" type="input" />
                <label className="form__label" htmlFor="name">Email</label>
              </div>
              <div className="form__group field" style={{ marginLeft: "40px" }}>
                <input required="" placeholder="Name" className="form__field" type="input" />
                <label className="form__label" htmlFor="name">Phone Number</label>
              </div>
              <div className="form__group field" style={{ marginLeft: "40px" }}>
                <input required="" placeholder="Name" className="form__field" type="input" />
                <label className="form__label" htmlFor="name">Message</label>
              </div>
              <div>

                <button>Send Message</button>
              </div>
            </div>
          </span>
        </div>

      </div>
    </div>
  )
}

export default ContactUS