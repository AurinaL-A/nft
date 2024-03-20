'use client'
import React from 'react';
import style from "./create.module.scss"
import Image from 'next/image';
import raketa from "@/image/createicon/raketa.png"
import Link from 'next/link';

import User from "@/image/createicon/User.png"
import Mail from "@/image/createicon/EnvelopeSimple.png"
import Lock from "@/image/createicon/LockKey.png"


const Create = () => {

  return (
    <main className={style.create}>
      <div className={style.container}>
      <div className={style.create_row}>
        <div className={style.img_div}>
          <Image src={raketa} alt="raketa" />
        </div>
        <div className={style.create_div_2}>
          <div>

            <h3>Create account</h3>

            <p>
              Welcome! enter your details and start <br /> creating, collecting and selling NFTs.
            </p>

          </div>
          <form action="" className={style.form}>
            <div className={style.input_div}>
              <Image src={User} alt="User" /> <input type="text" placeholder='Username' minlength="3" maxlength="34" required className={style.user} />
            </div>
            <div className={style.input_div}>
              <Image src={Mail} alt="Mail" /> <input type="email" multiple minlength="3" maxlength="34" placeholder='Email Address' required className={style.user} />
            </div>
            <div className={style.input_div}>
              <Image src={Lock} alt="Lock" /> <input type="password" name="password" placeholder='Password' required minlength="3" maxlength="34"    className={style.user} />
            </div>
            <div className={style.input_div}>
              <Image src={Lock} alt="Lock" /> <input type="password" name="confirm" placeholder='Confirm Password' required minlength="3" maxlength="34"     className={style.user} />
            </div>
  <input type="submit" value="Create account"  className={style.input_div2}  />

          </form>
        </div>
      </div>
      </div>
    </main>
  );
};

export default Create;