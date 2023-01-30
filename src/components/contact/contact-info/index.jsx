import React from 'react'
import './style.scss'
import {FaPhoneAlt} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
const ContactInfo = () => {
  return (
    <div className='contact-info-box'>
        <h4>
            I would be happy to answer any questions you may have about Web or App Development!
        </h4>
      <div className="contact-option">
        <FaPhoneAlt/>
        <span className='text'>+91 7988543957</span>
      </div>
      <div className="contact-option">
        <MdEmail/>
        <span className='text'>harshwardhan847@gmail.com</span>
      </div>
    </div>
  )
}

export default ContactInfo
