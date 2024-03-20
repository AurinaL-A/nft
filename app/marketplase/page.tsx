
import style from './marketplase.module.scss'
import Image from "next/image";
import Link from 'next/link';
import Masive from '@/Store/marketplase/base';
import Card from '@/components/Card_market/Card';
import Loop from '@/image/icon/search.png'

const marketplase = () => {

    return (
        <main className={style.main}>
            <div className={style.container}>
                <div className={style.main_row}>

                    <div className={style.block1} >
                        <h3>Browse Marketplace</h3>
                        <p className={style.p}>Browse through more than 50k NFTs on the NFT Marketplace.</p>
                    </div>
                    <form action="" className={style.block1_5}>
                        <input className={style.search_input} placeholder='Search your favourite NFTs' required minLength={2} maxLength={120} type="search" />
                        <div className={style.search_loop}>
                            <Image src={Loop} alt="Search" className={style.loop}></Image><input className={style.search_btn} type="submit" value=" " />
                        </div>

                    </form>

                    <div className={style.block2} >

                        <div className={style.choose} >
                            <div className={style.flex}>
                                <p className={style.nfts}>NFTs</p>
                                <div className={style.Cards}>302</div>
                            </div>
                        </div>

                        <div className={style.choose_line} >
                            <div className={style.flex}>
                                <p className={style.collections}>Collections</p>
                                <div className={style.Cards2}>67</div>
                            </div>
                        </div>

                    </div>



                </div>

            </div>
            <div className={style.back}>
                <div className={style.container}>
                    <div className={style.Card}>
                        {Masive.map((card, i) => <Card title={card.title} img={card.img} img2={card.img2} name={card.name} Price={card.Price} Highest_Bid={card.Highest_Bid} />)}
                    </div>

                </div>
            </div>


        </main>
    );
};

function searchByTitle(title: string) {
  return Masive.filter((card: Cards) => card.title.toLowerCase().includes(title.toLowerCase()));
}

export default marketplase;
