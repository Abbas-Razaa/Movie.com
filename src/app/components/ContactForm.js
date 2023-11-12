'use client'
import React from 'react'
import styles from '../contact/contact.module.css'
import { Mulish } from 'next/font/google'
import { useState } from 'react'

const mulish = Mulish({
    weight: ['300','400','500','600','700','800','900'],
    subsets: ['latin'],
    display: 'swap'
})

const ContactForm = () => {
    const [user, setuser] = useState({
        username:'',
        email:'',
        phone:'',
        message:''
    })

    const [status, setstatus] = useState(null)
    
    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;

        setuser((prevUser)=>({ ...prevUser,[name] : value}));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch ('/api/contact',{
                method: 'POST',
                headers: {'Content_Type':'application/json'},
                body: JSON.stringify({
                    username: user.username,
                    email: user.phone,
                    phone: user.phone,
                    message: user.message
                })
            })
            //Status based on response from the API route
            if (response.status === 200) {
                setuser({
                    username:'',
                    email:'',
                    phone:'',
                    message:''
                })
                setstatus('success');
            } else {
                setstatus('error');
            }
        } catch(e) {
            console.log(e)
        }

    }

  return (
    <form className={styles.contact_form} onSubmit={handleSubmit}>
        <div className={styles.input_field}>
            <label htmlFor="username" className={styles.label}>
                Enter Your Name
                <input type="text" name='username' id='username' placeholder='Enter Your Name' className={mulish.className} value={user.username} onChange={handleChange}
                required
                autoComplete='off'/>
            </label>
        </div>
        <div className={styles.input_field}>
            <label htmlFor="email" className={styles.label}>
                Enter Your Email
                <input type="text" name='email' id='email' placeholder='Enter Your Email' className={mulish.className}value={user.email} onChange={handleChange}
                required
                autoComplete='off'/>
            </label>
        </div>
        <div className={styles.input_field}>
            <label htmlFor="phone" className={styles.label}>
                Enter Your Phone No.
                <input type="number" name='phone' id='phone' placeholder='Enter Your Phone No.' className={mulish.className} value={user.phone} onChange={handleChange}
                required
                autoComplete='off'/>
            </label>
        </div>
        <div className={styles.input_field}>
            <label htmlFor="message" className={styles.label}>
                Enter Your Message
                <textarea type="text" name='message' id='message' placeholder='Enter Your Message'
                className={mulish.className} value={user.message} onChange={handleChange}
                required
                autoComplete='off'/>
            </label>
        </div>
        <div>
            {status === 'success' && <p className={styles.success_msg}>Thankyou for your message!</p>}
            {status === 'error' && <p className={styles.error_msg}>There was an error submitting your message!</p>}

            <button type='submit' className={mulish.className}>Send Message</button>
        </div>
    </form>
  )
}

export default ContactForm