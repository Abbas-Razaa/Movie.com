import styles from '../app/styles/common.module.css'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <section className={styles.container}>
        <div className={styles.error_page}>
            <h1>404</h1>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/">
                <button>
                    Go to Home page
                </button>
            </Link>
        </div>
    </section>
  )
}