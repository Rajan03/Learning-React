import React, {useContext} from "react";
import ThemeContext from "../context/ThemeContext";

const ThemeToggler = () => {
     const [ mode, setMode ] = useContext(ThemeContext);
     
     return (
          <div
               onClick={ () => {
                    setMode(mode === 'Light' ? 'Dark' : 'Light')
          }}
          >
               <span>{mode === 'Light' ? 'Switch To Dark Mode' : 'Switch To Light Mode'}</span>
          </div>
     )
};

export default ThemeToggler;
