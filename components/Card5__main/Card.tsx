"use client"
import Image from "next/image";
import style from "./Card.module.scss";
const Card5 = ({ title, img, img2, name, Price, Highest_Bid, }) => {
	return (
		<>
			<div className={style.Card}>
					<Image src={img} alt={title} />	
				
					<div className={style.textdiv}>
						<div className={style.text}>
							{title}
						</div>
						<div className={style.user}>
								<Image src={img2} alt={title} />
								<p className={style.ava__text}>{name}</p>
						</div>
					</div>
					<div className={style.texts}>
						<div className={style.price}>
							<p className={style.text2}>Price</p>
							<p className={style.text3}>{Price}</p>
						</div>
						<div className={style.big}>
							<p className={style.text2}>Highest Bid</p>
							<p className={style.text3}>{Highest_Bid}</p>
						</div>
					</div>

			</div>


		</>


	);
}

export default Card5;
