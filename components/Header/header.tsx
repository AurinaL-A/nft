import { ROUTER } from "@/router/router.enum";
import Link from "next/link";
import React from "react";
import styles from './header.module.scss'
import Image from "next/image";
import User from "@/image/icon/User.png"
import logo from "@/image/icon/logo.png"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header__row}>
                    <div className={styles.logo}>
                        <Link href={ROUTER.HOME}  className={styles.text}><Image src={logo}/></Link>
                    </div>
                    <div className={styles.menu}>
                        <Link href={ROUTER.MARKETPLASE} className={styles.text}>Marketplase</Link>
                        <Link href={ROUTER.RANKINGS} className={styles.text}>Rankings</Link>
                        <Link href={ROUTER.WALLET} className={styles.text}> Connect of Wallet</Link>
                        <Link href={ROUTER.CREATE}><button className={styles.btn}>
                            <Image src={User}/>
                            <p>Sign Up</p>
                        </button></Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;