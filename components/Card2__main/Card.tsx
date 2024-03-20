"use client"
import Image from "next/image";
import Link from "next/link";
import style from "./Card.module.scss"
const Card2 = ({ title, img, img2,img3,img4,img5, text }) => {
	return (
		<>
			<div className={style.Card}>
				<div className={style.image}>
					<Image src={img} alt={text} />
				</div>
				<div className={style.small_image_group}>
					<div className={style.small_image}>
					<Image src={img3} alt={text} />
					</div>
					<div className={style.small_image}>
					<Image src={img4} alt={text} />
					</div>
					<Link href="/main"><div className={style.small_image}>
					<Image src={img5} alt={text} />
					</div></Link>
				</div>
						<div className={style.text}>
							{title}
						</div>
						<div className={style.div_avatar}>
							<Image src={img2} alt={text} />
							<div className={style.text2}>
								{text}
							</div>
						</div>
			</div>


		</>


	);
}

export default Card2;