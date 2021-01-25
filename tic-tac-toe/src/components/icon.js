import React from "react";
import {FaTimes, FaPen, FaRegCircle} from "react-icons/fa";

// Component
const Icon = (props) => {
	switch (props.called) {
		case "circle":
			return <FaRegCircle className='icons' />;
		case "cross":
			return <FaTimes className='icons' />;
		default:
			return <FaPen className='icons' />;
	}
};
export default Icon;
