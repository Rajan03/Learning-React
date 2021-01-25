import React from "react";
import {useState} from "react";
import {FaPlus, FaMinus} from "react-icons/fa";
import {BiReset} from "react-icons/bi";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	return (
		<div className='App'>
			<header>
				<h1>Counter app using states</h1>
			</header>
			<h2>Current Value is {count}</h2>
			<button
				onClick={() => {
					setCount(0);
				}}>
				<BiReset />
			</button>
			<button
				onClick={() => {
					setCount(count + 1);
				}}>
				<FaPlus />
			</button>
			<button
				onClick={() => {
					if (count == 0) {
						setCount(0);
					} else {
						setCount(count - 1);
					}
				}}>
				<FaMinus />
			</button>
		</div>
	);
}

export default App;
