'use client'

import React, { useState } from 'react'
import styles from './Portfolio.module.css'
import PortfolioFilter from './PortfolioFilter'
import ProjectCard from './ProjectCard'
import { portfolioProjects, CategoryId } from '../../data/portfolio'

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all')

  const filteredProjects = activeCategory === 'all'
    ? portfolioProjects
    : portfolioProjects.filter(project => project.category === activeCategory)

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        <h2 className={styles.title}>Portfólio</h2>
        
        <PortfolioFilter
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        <div className={styles.grid}>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
