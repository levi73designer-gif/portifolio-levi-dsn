'use client'

import React from 'react'
import styles from './Contact.module.css'
import Button from '../ui/Button'

export default function Contact() {
  const contactInfo = [
    {
      label: 'WhatsApp',
      value: '+55 19 99953-1669',
      href: 'https://wa.me/5519999531669',
      icon: '📱'
    },
    {
      label: 'E-mail',
      value: 'levi73designer@gmail.com',
      href: 'mailto:levi73designer@gmail.com',
      icon: '📧'
    },
    {
      label: 'Instagram',
      value: '@levi.dsn',
      href: 'https://instagram.com/levi.dsn',
      icon: '📷'
    }
  ]

  return (
    <section id="contato" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.headline}>Tem um projeto? Me chama.</h2>
        
        <div className={styles.links}>
          {contactInfo.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <span className={styles.icon}>{item.icon}</span>
              <div className={styles.info}>
                <span className={styles.label}>{item.label}</span>
                <span className={styles.value}>{item.value}</span>
              </div>
            </a>
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <Button
            variant="primary"
            onClick={() => window.open('https://wa.me/5519999531669', '_blank')}
          >
            Chamar no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}
