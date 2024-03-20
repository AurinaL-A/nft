'use client'
import React from 'react';
import styles from "./wallet.module.scss"
import Image from 'next/image';
import planet from "@/image/Image Placeholder.png"
import Link from 'next/link';
import MetaMask from "@/image/icon/Metamask.png"
import Wallet from "@/image/icon/WalletConnect.png"
import Coinbase from "@/image/icon/Coinbase.png"

export default function Rankings() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.main__row}>
          <div className={styles.block1}>
            <Image src={planet} />
          </div>
          <div className={styles.block2}>
            <h1 className={styles.text__h1}>Connect wallet</h1>
            <p className={styles.text}>Choose a wallet you want to connect.<br></br>
              There are several wallet providers.</p>
            <div>

              <Link href="https://metamask.io">
                <div className={styles.sign_up}>
                  <Image src={MetaMask} alt="User" />
                  <p className={styles.p2}>Metamask</p>
                </div>
              </Link>

              <Link href="https://walletconnect.com">
                <div className={styles.sign_up}>
                  <Image src={Wallet} alt="User" />
                  <p className={styles.p2}>Wallet Connect</p>
                </div>
              </Link>

              <Link href="https://www.coinbase.com/ru/">
                <div className={styles.sign_up}>
                  <Image src={Coinbase} alt="User" />
                  <p className={styles.p2}>Coinbase</p>
                </div>
              </Link>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}