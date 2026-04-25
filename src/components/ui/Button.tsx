'use client'

import React from 'react'
import styles from './Button.module.css'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  onClick?: () => void
  href?: string
  className?: string
}

export default function Button({ 
  children, 
  variant = 'primary', 
  onClick,
  href,
  className = ''
}: ButtonProps) {
  const baseClasses = `${styles.button} ${styles[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={baseClasses} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button className={baseClasses} onClick={onClick}>
      {children}
    </button>
  )
}
