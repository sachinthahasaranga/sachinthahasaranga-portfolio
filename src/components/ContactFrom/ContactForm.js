import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import Swal from 'sweetalert2';

const WA_NUMBER = '94712758785'; // <-- your WhatsApp number without "+" or leading zero (country code first)
const WA_MSG = 'Hi! I’d like to know more about your web/app services.'; // prefilled message

const ContactForm = (props) => {
  const [forms, setForms] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });

  const [validator] = useState(new SimpleReactValidator({
    className: 'errorMessage'
  }));

  const changeHandler = e => {
    setForms({ ...forms, [e.target.name]: e.target.value });
    if (validator.allValid()) {
      validator.hideMessages();
    } else {
      validator.showMessages();
    }
  };

  const openWhatsApp = () => {
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MSG)}`;
    window.open(url, '_blank', 'noopener');
  };

  const showUnavailableAlert = () => {
    Swal.fire({
      icon: 'info',
      title: 'Feature currently unavailable',
      html: `
        <p style="margin:0 0 8px">Online form submissions are temporarily unavailable.</p>
        <p style="margin:0">Tap the button below to chat with me on WhatsApp.</p>
      `,
      showCancelButton: true,
      confirmButtonText: 'Chat on WhatsApp',
      cancelButtonText: 'Close',
      focusConfirm: true,
      allowOutsideClick: true,
      allowEscapeKey: true,
    }).then((result) => {
      if (result.isConfirmed) {
        openWhatsApp();
      }
    });
  };

  const submitHandler = e => {
    e.preventDefault();

    // Validate first (so your UI still guides users)
    if (validator.allValid()) {
      validator.hideMessages();
      // Clear fields (optional)
      setForms({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
      });
      // Show the WhatsApp alert
      showUnavailableAlert();
    } else {
      validator.showMessages();
      // Still show the alert to route them to WhatsApp if they prefer
      showUnavailableAlert();
    }
  };

  return (
    <div className="wpo-contact-form-area">
      <form method="post" className="contact-validation-active" onSubmit={submitHandler}>
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="form-field">
              <input
                value={forms.name}
                type="text"
                name="name"
                className="form-control"
                onBlur={changeHandler}
                onChange={changeHandler}
                placeholder="Your Name*"
              />
              {validator.message('name', forms.name, 'required|alpha_space')}
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="form-field">
              <input
                value={forms.email}
                type="email"
                name="email"
                className="form-control"
                onBlur={changeHandler}
                onChange={changeHandler}
                placeholder="Your Email*"
              />
              {validator.message('email', forms.email, 'required|email')}
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="form-field">
              <input
                value={forms.phone}
                type="tel"             // changed from non-standard "phone" to "tel"
                name="phone"
                className="form-control"
                onBlur={changeHandler}
                onChange={changeHandler}
                placeholder="Your Phone*"
              />
              {validator.message('phone', forms.phone, 'required')}
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="form-field">
              <select
                onBlur={changeHandler}
                onChange={changeHandler}
                value={forms.subject}
                className="form-control"
                name="subject"
              >
                <option value="">Choose a Service</option> {/* ensure empty value for validator */}
                <option>Web Design</option>
                <option>Web Development</option>
                <option>Marketing</option>
              </select>
              {validator.message('subject', forms.subject, 'required')}
            </div>
          </div>
          <div className="fullwidth">
            <div className="form-field">
              <textarea
                onBlur={changeHandler}
                onChange={changeHandler}
                value={forms.message}
                name="message"
                className="form-control"
                placeholder="Message..."
              />
              {validator.message('message', forms.message, 'required')}
            </div>
          </div>
        </div>
        <div className="submit-area">
          <button type="submit" className={props.btnClass}>
            <span>Free Consultation</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
