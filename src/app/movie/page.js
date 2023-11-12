import React from 'react'
import Link from 'next/link'
import MovieCard from '../components/MovieCard';
import styles from '../styles/common.module.css'

const movie = async () => {
  await new Promise(resolve => setTimeout(resolve,2000));
  const url = process.env.RAPID_KEY;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '40f92154f4mshb379f5abac14c8dp1ca581jsna839109c0e86',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  console.log(main_data.jawsummary)

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movies</h1>
          <div className={styles.card_section}>
            {
              main_data.map((curElem) => {
                return <MovieCard key={curElem.id} {...curElem} />
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default movie