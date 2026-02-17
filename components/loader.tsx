'use client'

import React from 'react'
import styles from './loader.module.css'

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className="flex flex-col items-center gap-6">
        <div className={styles.loader}>
          <svg width={100} height={100} viewBox="0 0 100 100">
            <defs>
              <mask id="clipping">
                <polygon points="0,0 100,0 100,100 0,100" fill="black" />
                <polygon points="25,25 75,25 50,75" fill="white" />
                <polygon points="50,25 75,75 25,75" fill="white" />
                <polygon points="35,35 65,35 50,65" fill="white" />
                <polygon points="35,35 65,35 50,65" fill="white" />
                <polygon points="35,35 65,35 50,65" fill="white" />
                <polygon points="35,35 65,35 50,65" fill="white" />
              </mask>
            </defs>
          </svg>
          <div className={styles.box} />
        </div>
        <div className="text-center">
          <p className="animate-pulse text-sm font-medium text-primary">Loading Experience...</p>
        </div>
      </div>
    </div>
  )
}

export default Loader

