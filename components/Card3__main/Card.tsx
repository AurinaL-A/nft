"use client"
import Image from "next/image";
import Link from "next/link";
import style from "./Card.module.scss";

const Card3 = ({ title, img, number, text, text2 }) => {
	return (
		<>
			<div className={style.Card}>
				<div className={style.user}>
					<div className={style.Number}>
						{number}
					</div>
					<div className={style.image}>
						<Image src={img} alt={text} />
					</div>
				</div>

				<div className={style.textdivs}>
						<div className={style.text}>
							{title}
						</div>
						<div className={style.textdiv2}>
							<div className={style.text2}>{text}</div>
							<div className={style.text3}>{text2}</div>
						</div>
				</div>
			</div>
		</>
	);
}

export default Card3;