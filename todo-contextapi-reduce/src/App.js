import React, {createContext, useReducer} from "react";
import {Container} from "reactstrap";
import TodoForm from "./components/TodoForm";
import './App.css';

export const TodoContext = createContext();

const initialState = [];

const reducer = (state, action) => {
	switch (action.type) {
		case "Add_Todo":
			return [...state, action.payload];
		case "Remove_Todo":
			return state.filter((todo, idx) => idx !== action.payload);
		default:
			return state;
	}
};

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<TodoContext.Provider value={[state, dispatch]}>
			<Container>
				<TodoForm />
			</Container>
		</TodoContext.Provider>
	);
}

export default App;
