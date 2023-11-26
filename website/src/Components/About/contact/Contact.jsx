import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from 'react-icons/md'

const Contact = () => {

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact</h2>

            <div className='container contact__container'>
                <div className="contact__options">
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>zabumaphu@gmail.com</h5>
                        <a href="mailto:zabumaphu@gmail.com">Send a Message</a>
                    </article>
                </div>
                <form action="">
                    <input type="text" name='name' placeholder="Your Full Name" required/>
                    <input type="email" name='email' placeholder="Your Email" required/>
                    <textarea name="messahe" rows="7" placeholder="Your Message" required></textarea>
                    <button type="submit" className='btn btn-primary'>Send Message</button>
                </form>
                
            </div>
            
        </section>
    )
}

export default Contact