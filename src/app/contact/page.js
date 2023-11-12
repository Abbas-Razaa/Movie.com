import React from 'react'
import ContactCard from '../components/ContactCard'
import ContactForm from '../components/ContactForm'
import styles from '../contact/contact.module.css'
const page = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <ContactCard/>
        <section className={styles.container}>
          <h2>We`d love to hear <span> from you </span></h2>
          <ContactForm/>
        </section>
      </div>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28946.833079698223!2d67.11605290055977!3d24.92000305528785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338fa00456acf%3A0x7a277bdfeb6b99aa!2sGulistan-e-Johar%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1699808805225!5m2!1sen!2s" width={600} height={450} style={{border:0}} allowfullscreen="" loading="lazy"  className={styles.mapping} referrerpolicy="no-referrer-when-downgrade"></iframe>

    </>
  )
}

export default page