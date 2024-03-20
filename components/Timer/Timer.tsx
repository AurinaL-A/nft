"use client"
import { useEffect, useState } from "react";
import style from "./Timer.module.scss";
const Timer: React.FC = () => {
	const [time, setTime] = useState(216000);
	const [isActive, setIsActive] = useState(true);
	useEffect(() => {
		let interval: NodeJS.Timeout;

		if (isActive && time == 216000 ) {
			interval = setInterval(() => {
				setTime((prevTime: number) => prevTime - 1);
			}, 1000);
		} else if (time < 0) {
			setIsActive(false);
		}
        
	}, [isActive, time]);

	const hours = String(Math.floor(time / 3600)).padStart(2, '0');
	const minutes =   String(Math.floor(time % 3600 / 60)).padStart(2, '0');
	const seconds = String(Math.floor(time % 60)).padStart(2, '0');


	return (
		<>
			<div className={style.Timer_text}>
            <div>{hours}</div><div className={style.center}>:</div><div>{minutes}</div><div className={style.center}>:</div><div>{seconds}</div> 
			</div>
			
		</>
	);
};

export default Timer;