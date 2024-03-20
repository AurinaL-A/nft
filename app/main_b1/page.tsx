import Link from "next/link";
import style from "./main_b1.module.scss"
import Image from "next/image";
import Rocket from "@/image/main/RocketLaunch.png"
import avatar from "@/image/main/Avatar.png"
import Earth from "@/image/main/Earth.png"
import anime from 'animejs';
import { useEffect, useRef } from 'react';


  


const Block_1 = () => {

  const Text = useRef(null)
    useEffect(() => {
      anime({
        targets: '.easing-demo .el',
        translateX: 250,
        easing: 'easeInOutExpo'
      })

    }, [])


    return (
      <main className={style.main}>
        <div className={style.main_row}>
          <div className={style.block_1} >
            <div>
              <h3>Discover<br /> digital art &<br /> Collect NFTs</h3>
              <p className={style.p}>NFT Marketplace UI Created With Anima For Figma. Collect, Buy And Sell Art From More Than 20k NFT Artists.</p>
            </div>
            <Link href="/create">
              <div className={style.Get_Started}>
                <div>
                  <Image src={Rocket} alt="Rocket" />
                </div>
                <p className={style.p2}>Get Started</p>

              </div>
              </Link>

            <div className={style.block_1_2}>
              <div>
                <p className={style.p4}>240k+ </p>
                <p className={style.p3}>Total Sale</p>
              </div>
              <div>
                <p className={style.p4}>100k+ </p>
                <p className={style.p3}>Auctions</p>
              </div>
              <div>
                <p className={style.p4}>240k+ </p>
                <p className={style.p3}>Artists</p>
              </div>
            </div>
          </div>
  
  
          <div className={style.block_2}>
          <div className={style.image}>
				<Image src={Earth} alt="earth" />
			</div>
			<div className={style.textdivs}>
				<div className={style.textdiv}>
					<div className={style.text}>
						<p className={style.spase}>Space Walking</p>
					</div>
					<div className={style.div_avatar}>
						<Image src={avatar} alt="earth" />
						<div className={style.text2}>
							<p className={style.animakid}>Animakid</p>
						</div>
					</div>

				</div>
			</div>
          </div>
  
  
        </div>
      </main>
    );
  };
  
  export default Block_1;