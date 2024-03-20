"use client"
import Image from "next/image";
import Link from "next/link";
import style from "./Card.module.scss";
const Card4 = ({ title, img}) => {
	return (
		<>
			<div className={style.Card}>
					<div className={style.image}>
						<Image src={img} alt={title} />
					</div>
					<div className={style.textdiv}>
						<div className={style.text}>
							{title}
						</div>
					</div>
			</div>


		</>


	);
}

export default Card4;
