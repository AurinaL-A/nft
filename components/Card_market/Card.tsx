"use client"
import Image from "next/image";
import style from "@/components/Card_market/Card.module.scss";
const Card5 = ({ title, img, img2, name, Price, Highest_Bid, }) => {
    return (
        <>
            <div className={style.Card}>
                <div className={style.image}>
                    <Image src={img} alt={title} />
                </div>
                <div className={style.textdivs}>
                    <div className={style.textdiv}>
                        <div className={style.text}>
                            {title}
                        </div>
                        <div className={style.textdiv2}>
                            <div className={style.avatar_img}>
                                <Image src={img2} alt={title} />
                            </div>
                            <div className={style.nametext}> {name} </div>
                        </div>
                    </div>
                    <div className={style.texts2}>
                        <div className={style.texts}>
                            <p className={style.text2}>Price</p>
                            <p className={style.text3}>{Price}</p>
                        </div>


                        <div className={style.texts3}>
                            <p className={style.text2}>Highest Bid</p>
                            <p className={style.text3}>{Highest_Bid}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Card5;
