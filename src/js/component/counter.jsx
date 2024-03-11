import React, { useState, useEffect } from "react";



const Counter = () => {
	const [timer, setTimer] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {setTimer(prevTimer => prevTimer + 1)}, 1000);

		return () => clearInterval(interval)
	}, []);
	

	return (
		<div className="text-center d-flex" style={{ margin: "5% 20%", width: "80%" }}>
			<h1 className="p-5 m-2 bg-dark text-white rounded-4">🕒</h1>

			{[...timer.toString().padStart(6, '0')].map((number, index) => 
				<h1 className="p-5 m-2 bg-dark text-white rounded-4" key={index}>{number}</h1>
			)}
		</div>
	);
};

export default Counter;
