'use client'

import React, { useRef, useEffect, useState } from 'react'
import styles from './About.module.css'

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="sobre" 
      ref={sectionRef}
      className={`${styles.about} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        <p className={styles.opening}>
          Não começo pelo visual. Começo pelo problema.
        </p>
        
        <div className={styles.content}>
          <p className={styles.paragraph}>
            Sou Levi — designer com foco em identidade e comunicação visual para empresas, instituições e projetos que precisam se posicionar e ser vistos. Ouço, analiso e entrego uma solução na medida do que você precisa — nada a mais, nada a menos.
          </p>
          
          <p className={styles.paragraph}>
            Se você tem uma empresa que ainda não se comunica como deveria, uma instituição que precisa de presença, ou um projeto engavetado esperando o momento certo — esse momento é agora.
          </p>
        </div>
        
        <p className={styles.cta}>
          Vamos produzir o futuro que sonhamos.
        </p>
      </div>
    </section>
  )
}
