'use client'
import React from 'react';
import styles from "./rankings.module.scss"
import Image from 'next/image';
import Link from 'next/link';
import Masive from '@/Store/rankings/base'
import Card from '@/components/Card_rankings/Card';


export default function Rankings() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.main__row}>
          <div className={styles.block1}>
            <h1 className={styles.topcreators}>Top Creators</h1>
            <p className={styles.ran__text}>Check out top ranking NFT artists on the NFT Marketplace.</p>
          </div>

          <div className={styles.block2}>
            <span><p className={styles.text__choose}>Today</p></span>
            <p className={styles.text__choose}>This Week</p>
            <p className={styles.text__choose}>This Month</p>
            <p className={styles.text__choose}>All Time</p>
          </div>

          <div className={styles.block3}>
            <div className={styles.artist}>
              <p className={styles.text3}>#</p>
              <p className={styles.text3}>Artist</p>
            </div>

            <div className={styles.categories}>
              <p className={styles.text3}>Change</p>
              <p className={styles.text3}>NFTs Sold</p>
              <p className={styles.text3}>Volume</p>
            </div>
            
          </div>

          <div className={styles.Cards}>
          {Masive.map((card, i) => <Card title={card.title} img={card.img} number={card.number} text={card.text} text2={card.text2} text3={card.text3} />)}
        </div>
          
            
          </div>
          </div>

    </main>
  );
}