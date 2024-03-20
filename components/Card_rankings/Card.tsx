"use client"
import Image from "next/image";
import Link from "next/link";
import style from "./Card.module.scss";
const Card1 = ({ title, img, number, text, text2, text3 }) => {
	return ( 
		<>
			<div className={style.Card}>
            <div className={style.username}>
					<div className={style.Number}>
						{number}
					</div>
					<div className={style.image}>
						<Image src={img} alt={text} />
					</div>
						<div className={style.text}>
							{title}
						</div>
                        </div>
                        <div className={style.flex}>
						<div className={style.text2}>
							{text}
						</div>
						<div className={style.text3}>
							{text2}
						</div>
						<div className={style.text3}>
							{text3}
						</div>
                        </div>
			</div>


		</>


	);
}

export default Card1;
