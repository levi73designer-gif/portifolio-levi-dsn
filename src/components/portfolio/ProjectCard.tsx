'use client'

import React from 'react'
import styles from './ProjectCard.module.css'
import { PortfolioProject } from '../../data/portfolio'

interface ProjectCardProps {
  project: PortfolioProject
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imagePlaceholder}>
        <span className={styles.placeholderText}>{project.name}</span>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.name}>{project.name}</h3>
        <p className={styles.type}>{project.type}</p>
        <p className={styles.context}>{project.context}</p>
        
        {project.deliveries && project.deliveries.length > 0 && (
          <ul className={styles.deliveries}>
            {project.deliveries.map((delivery, index) => (
              <li key={index}>{delivery}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}
