import React, { useState, useEffect } from "react";

const Counter = () => {
	const [timer, setTimer] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {setTimer(prevTimer => prevTimer + 1)}, 1000);

		return () => clearInterval(interval)
	}, []);
	

	return (
		<div className="text-center d-flex" style={{margin:"5 auto"}}>
			<h1 className="p-5 bg-dark text-white rounded-4"><i class="bi bi-stopwatch"></i></h1>

			{[...timer.toString().padStart(6, '0')].map((number, index) => {
				<h1 className="p-5 bg-dark text-white rounded-4" key={index}>{number}</h1>
			})}
		</div>
	);
};

export default Counter;
