import React, {useState, useContext} from "react";
import {
	Container,
	FormGroup,
	Input,
	Form,
	InputGroup,
	Button,
	ListGroup,
	ListGroupItem,
} from "reactstrap";
import {FaCheckDouble} from "react-icons/fa";

import {TodoContext} from "../App";
import "bootstrap/dist/css/bootstrap.min.css";

const TodoForm = () => {
	const [todoString, setTodoString] = useState("");
	const [state, dispatch] = useContext(TodoContext);
	const formSubmit = (e) => {
		e.preventDefault();
		if (todoString === "") {
			return alert("Please write some Task");
		}
		dispatch({type: "Add_Todo", payload: {todoString}});
		setTodoString("");
	};
	return (
		<React.Fragment>
			<nav>
				<h1>Todo App</h1>
			</nav>
			<Form className='mt-5 pt-5' onSubmit={formSubmit}>
				<FormGroup>
					<InputGroup>
						<Input
							type='text'
							name='todo'
							id='todo'
							placeholder='Your next Task'
							value={todoString}
							onChange={(e) => setTodoString(e.target.value)}
						/>
						<Button color='warning'>Add</Button>
					</InputGroup>
				</FormGroup>
			</Form>
			<ListGroup className='mt-5 mb-2 items'>
				<ListGroup>
					{state.map((t, id) => {
						return (
							<ListGroupItem key={id}>
								{t.todoString}
								<FaCheckDouble
									onClick={() => {
										dispatch({type: "Remove_Todo", payload: id});
									}}
									style={{
										float: "right",
									}}
								/>
							</ListGroupItem>
						);
					})}
				</ListGroup>
			</ListGroup>
		</React.Fragment>
	);
};

export default TodoForm;
