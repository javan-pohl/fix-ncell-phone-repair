import React, { useState } from 'react'
import './ContactForm.css'

const formLine = {
  display: 'block',
  width: '200px',
}

const ContactForm = () => {
  const handleSubmit = (e) => e.preventDefault()
  return (
    <>
      <form
        name="contact"
        method="post"
        action="https://formspree.io/f/xyylajzj"
        data-sal="fade-in"
        data-sal-easing="ease"
        data-sal-duration="1000"
      >
        <h2>Contact FixNcell or Request a Quote</h2>
        <p>If you can't find the repair information you need on this site or have any other questions or concerns for us, please let us know by filling out this contact form. We'll get back to you as soon as possible. Thanks!</p>
        <label>Name</label>
        <input type="text" name="name" placeholder="Keyser Soze" />
        <label>Email</label>
        <input type="email" name="email" placeholder="DefNotVerbalKint@gmail.com" />
        <label>Phone Number</label>
        <input type="text" name="phone-number" placeholder="303-555-7160" />
        <label>Make and Model of Phone Needing Repair</label>
        <input type="text" name="type-phone" placeholder="iPhone XS" />
        <label>Repair Needed</label>
        <textarea rows="4" cols="50" name="message" placeholder="Yo, my screen is totally busted. How much does that cost to repair?" />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default ContactForm
