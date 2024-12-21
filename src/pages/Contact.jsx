import React from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact</h2>
      <p>You can reach me through the following social media or email:</p>
      <ul className={styles.contactList}>
        <li><a href="mailto:example@example.com" className={styles.contactItem}>Email: example@example.com</a></li>
        <li><a href="https://www.instagram.com/username" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>Instagram</a></li>
        <li><a href="https://t.me/username" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>Telegram</a></li>
      </ul>
    </section>
  );
};

export default Contact;
