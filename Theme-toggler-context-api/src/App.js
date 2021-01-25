import React, {Fragment, useState} from "react";
import ThemeContext from "./context/ThemeContext";
import Toggler from "./components/Toggler";
import Hero from "./components/Hero";
import "./App.css";

function App() {
	const themeHook = useState("Light");

	return (
		<React.Fragment>
			<ThemeContext.Provider value={themeHook}>
				<div>
					<Toggler />
					<Hero />
				</div>
			</ThemeContext.Provider>
		</React.Fragment>
	);
}

export default App;
