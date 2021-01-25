import React, {createContext, useState} from "react";
import {Themes} from "../Themes";

const ThemeContext = createContext();

const ThemeProvider = (props) => {
	const [color, setColor] = useState(Themes[1]);
	return (
		<ThemeContext.Provider value={[color, setColor]}>
			{props.children}
		</ThemeContext.Provider>
	);
};
export {ThemeProvider, ThemeContext};  