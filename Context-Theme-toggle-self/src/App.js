import React from "react";
import {ThemeProvider} from "./context/ThemeContext";
import "./App.css";
import Hero from "./components/Hero";

function App() {
	
	return (
		<ThemeProvider>
			<Hero />
		</ThemeProvider>
	);
}

export default App;
