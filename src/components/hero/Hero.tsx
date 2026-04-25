'use client'

import React from 'react'
import styles from './Hero.module.css'
import Button from '../ui/Button'

interface HeroProps {
  name?: string
  tagline?: string
}

export default function Hero({ name = 'Levi.dsn', tagline = 'Arte com propósito' }: HeroProps) {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.tagline}>{tagline}</p>
        
        <div className={styles.ctas}>
          <Button 
            variant="primary"
            onClick={() => handleScrollTo('portfolio')}
          >
            Veja meu trabalho
          </Button>
          
          <Button 
            variant="secondary"
            onClick={() => handleScrollTo('contact')}
          >
            Fale comigo
          </Button>
        </div>
      </div>
    </section>
  )
}
