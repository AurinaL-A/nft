import Image from "next/image";
import styles from "./page.module.scss"
import Block1 from "@/app/main_b1/page"
import style from "./page.module.scss"
import Masive from '@/Store/main/base4/base';
import Card from '@/components/Card4__main/Card';
import anime from '@/anime-master/anime-master/lib/anime.es';
import formphoto from '@/image/main/formphoto.png'
import mail from '@/image/main/mail.png'
import Masive2 from '@/Store/main/base2/base';
import Card2 from '@/components/Card2__main/Card';
import Masive3 from '@/Store/main/base3/base';
import Card3 from '@/components/Card3__main/Card';
import Link from "next/link";
import Eye from "@/image/main/Eye.png"
import Masive4 from '@/Store/main/base5/base';
import Card4 from '@/components/Card5__main/Card';
import raketa from '@/image/main/RocketLaunch.png'
import avatar6 from '@/Store/main/base2/image/Avatar2.png'
import Timer from '@/components/Timer/Timer'
import icon1 from '@/image/icon/Icon1.png'
import icon2 from '@/image/icon/Icon2.png'
import icon3 from '@/image/icon/Icon3.png'

export default function Home() {


  return (
    <main className={styles.main}>
      <div className={style.container}>
        <div className={style.main_row}>
          <Block1 />


          <div className={style.block2}>
            <h2 className={style.trending__text}>Trending Collection</h2>
            <p className={style.mini__text}>Checkout our weekly updated trending collection.</p>

            <div className={style.Cards}>
              {Masive2.map((card, i) => <Card2 title={card.title} text={card.text} img={card.img} img2={card.img2} img3={card.img3} img4={card.img4} img5={card.img5} />)}
            </div>
          </div>

          <div className={style.block3}>

            <div className={style.discover_b} >

              <div className={style.text_block} >
                <h3 className={style.trending__text}>Top creators</h3>
                <p className={style.mini__text}>Checkout Top Rated Creators on the NFT Marketplace</p>
              </div>

              <Link href="./rankings" >
                <button className={style.btn_rankings}>
                  <Image src={raketa} alt="Eye" />
                  <p className={style.btn_text}>View Rankings</p>
                </button>
              </Link>

            </div>

            <div className={style.Cards}>
              {Masive3.map((card, i) => <Card3 title={card.title} img={card.img} number={card.number} text={card.text} text2={card.text2} />)}
            </div>

          </div>

          <div className={style.block4}>
            <h2 className={style.text__categ}>Browse Categories</h2>
            <div className={style.Cards}>
              {Masive.map((card, i) => <Card title={card.title} img={card.img} />)}
            </div>
          </div>

          <div className={style.block5}>
            <div className={style.discover_b} >

              <div className={style.text_block} >
                <h3 className={style.trending__text}>Discover More NFTs</h3>
                <p className={style.mini__text}>Explore new trending NFTs</p>
              </div>

              <Link href="./marketplase" >
                <button className={style.btn_started}>
                  <Image src={Eye} alt="Eye" />
                  <p className={style.btn_text}>See All</p>
                </button>
              </Link>

            </div>

            <div className={style.Cards}>
              {Masive4.map((card, i) => <Card4 title={card.title} img={card.img} img2={card.img2} name={card.name} Price={card.Price} Highest_Bid={card.Highest_Bid} />)}
            </div>
          </div>
        </div>
      </div>

      <div className={style.block6}>
        <div className={style.container}>
          <div className={style.blocks}>
            <div className={style.left__block6}>
              <div className={style.user}>
                <Image src={avatar6} alt="ava" />
                <p className={style.text__ava}>Shroomie</p>
              </div>
              <h2 className={style.magic_text}>Magic Mashrooms</h2>

              <Link href="./marketplase" >
                <button className={style.btn_mush}>
                  <Image src={Eye} alt="Eye" />
                  <p className={style.btn_text}>See NFT</p>
                </button>
              </Link>
            </div>

            <div className={style.right__block6}>
              <div className={style.Timer_div}>
                <p className={style.timer_action}>Auction ends in:</p>
                <Timer />
                <div className={style.timer_hours}>
                  <p className={style.timer_action_2}>Hours</p>
                  <p className={style.timer_action_2}>Minutes</p>
                  <p className={style.timer_action_2}>Seconds</p>
                </div>
              </div>


            </div>
          </div>

        </div>

      </div>
      <div className={style.container}>

      <div className={style.block_7} >
      <div className={style.text_block} >
                <h3 className={style.trending__text}>How it works</h3>
                <p className={style.mini__text}>Find out how to get started</p>
              </div>
              <div className={style.cards_7}>
              <div className={style.card_7}>
                <Image src={icon1} alt="1" />
                <h2 className={style.text_7b}>Setup Your wallet</h2>
                <p className={style.text_mini7b}>Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.</p>
              </div>

              <div className={style.card_7}>
                <Image src={icon2} alt="1" />
                <h2 className={style.text_7b}>Create Collection</h2>
                <p className={style.text_mini7b}>Upload your work and setup your collection. Add a description, social links and floor price.</p>
              </div>

              <div className={style.card_7}>
                <Image src={icon3} alt="1" />
                <h2 className={style.text_7b}>Start Earning</h2>
                <p className={style.text_mini7b}>Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.</p>
              </div>
              </div>


        </div>

        <div className={style.block_8} >
        <div className={style.block_81} >
          <div className={style.imageform}>
            <Image className={style.image} src={formphoto} alt="Cosmo_man" />
          </div>
          <div className={style.block_1_2} >
            <h3 className={style.join__text}>Join our weekly digest</h3>
            <p className={style.mini__text}>Get exclusive promotions & updates straight to your inbox.</p>
            <form action="" className={style.forma}>
              <input type="email" required placeholder="Enter your email here" multiple minLength={3} maxLength={34} className={style.mail} />
              <Image src={mail} alt="mail" className={style.mini_mail} />
              <input type="submit" value="Subscribe" className={style.btn__form} />

            </form>
          </div>
        </div>
        </div>
      </div>

     

    </main>

  );


}

