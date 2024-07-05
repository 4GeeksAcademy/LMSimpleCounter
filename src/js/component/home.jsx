import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Digito } from "./numeros";

//create your first component
const Home = () => {

	const [timer, setTimer] = useState(0)

	useEffect(()=>{
		setTimeout(()=>{
			setTimer(value=> value+1)}, 1000)},[timer])
	
	return (
		<div>
			<div className="counter-holder">
			<Digito number={<span className="fa fa-clock"></span>}/>
			<Digito number={Math.floor(timer/100000)%10}/>
			<Digito number={Math.floor(timer/10000)%10}/>
			<Digito number={Math.floor(timer/1000)%10}/>
			<Digito number={Math.floor(timer/100)%10}/>
			<Digito number={Math.floor(timer/10)%10}/>
			<Digito number={Math.floor(timer%10)}/>
			</div>
		</div>
	);
};

export default Home;
