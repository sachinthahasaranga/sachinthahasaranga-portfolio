import React from 'react'
import ContactForm from '../ContactFrom/ContactForm'
import myCV from '../../cv/Sachintha_Niyangoda_ATS_CV.pdf'; // <-- adjust path if needed

const ContactArea = (props) => {
  return (
    <section className={`wpo-contact-section section-padding ${props.contactClass}`} id='contact'>
      <div className="container">
        <div className="wpo-contact-section-wrapper">
          <div className="row">
            <div className="col col-xl-5 col-lg-6">
              <div className="contact-info-wrap">
                <div className="contact-info-title">
                  <h3>Contact Info</h3>
                  <p>Here is my latest work. Where you will find my creativity and my working talents.</p>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon"><i className='fi flaticon-house'></i></div>
                  <div className="contact-info-text">
                    <h4>Contact Info</h4>
                    <p>No 125, Winsant park, Kadirana, Negombo, Sri Lanka</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon"><i className='fi flaticon-email'></i></div>
                  <div className="contact-info-text">
                    <h4>Email Address</h4>
                    <p>sachinthahasaranga0415@gmail.com</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon"><i className='fi flaticon-phone-call'></i></div>
                  <div className="contact-info-text">
                    <h4>Phone</h4>
                    <p>+94(71) 275-8785</p>
                  </div>
                </div>

                {/* NEW: Download CV */}
                <div className="contact-info-item">
                  <div className="contact-info-icon"><i className='fi flaticon-download'></i></div>
                  <div className="contact-info-text">
                    
                    <p>
                      <a
                        href={myCV}
                        className="theme-btn theme-btn--outline"
                        download
                        rel="noopener"
                        aria-label="Download my CV (PDF)"
                      >
                        Download CV (PDF)
                      </a>
                    </p>
                  </div>
                </div>
                {/* /NEW */}
              </div>
            </div>

            <div className="col col-xl-7 col-lg-6 col-md-12 col-12">
              <ContactForm btnClass={props.btnClass}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactArea;
