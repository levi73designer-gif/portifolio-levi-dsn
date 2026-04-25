'use client'

import React from 'react'
import styles from './PortfolioFilter.module.css'
import { categories, CategoryId } from '../../data/portfolio'

interface PortfolioFilterProps {
  activeCategory: CategoryId
  onSelectCategory: (category: CategoryId) => void
}

export default function PortfolioFilter({ activeCategory, onSelectCategory }: PortfolioFilterProps) {
  return (
    <div className={styles.filter}>
      {categories.map((category) => (
        <button
          key={category.id}
          className={`${styles.tab} ${activeCategory === category.id ? styles.active : ''}`}
          onClick={() => onSelectCategory(category.id)}
        >
          {category.label}
        </button>
      ))}
    </div>
  )
}
