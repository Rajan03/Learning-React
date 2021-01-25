import React, {useState} from "react";

// Icon component
import Icon from "./components/icon";

// Importing Toastify
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import Reactstrap
import {Card, CardBody, Button, Container, Col, Row} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

// Our custom css
import "./App.css";

// array for empty boxes in tic tac toe
const itemArray = new Array(9).fill("");

// Component
const App = () => {
	// Winning message
	const [winMsg, setWinMsg] = useState(""); // koi jetega toh iski state change hogi according to winner

	// check wether item is crossed or not
	const [isCross, setIsCross] = useState(false); // Checks itemarray ka item cross h ya circle

	// Controls reloading of game
	const reload = () => {
		// All states and array set to default values
		setIsCross(false);
		setWinMsg("");
		itemArray.fill("", 0, 9);
	};

	// Checks winner of game
	const isWinner = () => {
		if (
			itemArray[0] === itemArray[1] &&
			itemArray[0] === itemArray[2] &&
			itemArray[0] !== ""
		) {
			setWinMsg(`${itemArray[0]} wins`);
		} else if (
			itemArray[3] === itemArray[4] &&
			itemArray[4] === itemArray[5] &&
			itemArray[3] !== ""
		) {
			setWinMsg(`${itemArray[3]} wins`);
		} else if (
			itemArray[6] === itemArray[7] &&
			itemArray[7] === itemArray[8] &&
			itemArray[6] !== ""
		) {
			setWinMsg(`${itemArray[6]} wins`);
		} else if (
			itemArray[3] === itemArray[3] &&
			itemArray[0] === itemArray[6] &&
			itemArray[0] !== ""
		) {
			setWinMsg(`${itemArray[0]} wins`);
		} else if (
			itemArray[1] === itemArray[4] &&
			itemArray[4] === itemArray[7] &&
			itemArray[1] !== ""
		) {
			setWinMsg(`${itemArray[1]} wins`);
		} else if (
			itemArray[2] === itemArray[5] &&
			itemArray[5] === itemArray[8] &&
			itemArray[2] !== ""
		) {
			setWinMsg(`${itemArray[2]} wins`);
		} else if (
			itemArray[4] === itemArray[8] &&
			itemArray[0] === itemArray[4] &&
			itemArray[0] !== ""
		) {
			setWinMsg(`${itemArray[0]} wins`);
		} else if (
			itemArray[2] === itemArray[4] &&
			itemArray[4] === itemArray[6] &&
			itemArray[2] !== ""
		) {
			setWinMsg(`${itemArray[2]} wins`);
		}
	};

	// Whether item in array is required to change or is changed already
	const changeItem = (itemNumber) => {
		//agar koi win msg h toh ye toast show krega
		if (winMsg) {
			return toast(winMsg, {type: "success"});
		}
		// agr koi ni jeeta toh ye jiski turn h uska symbol lga dega jis item pr click hoga
		if (itemArray[itemNumber] === "") {
			itemArray[itemNumber] = isCross ? "cross" : "circle";
			setIsCross(!isCross);
		} else {
			return toast("Already Filled", {type: "error"}); //agr uss item pr already kch h toh ye toast show krega
		}
		// hr turn pr ye execute hoga check krega koi jeeta toh
		isWinner();
	};

	// UI part
	return (
		<React.Fragment>
			<Container className='p-5'>
				<ToastContainer position='bottom-right' />
				<Row>
					<Col md={6} className='offset-md-3'>
						{winMsg ? ( // sirf tb chlega jb koi win message available hoga
							<div className='mb-2 mt-2 '>
								<h1
									className='text-success text-uppercase text-center'
									id='msgwin'>
									{winMsg}
								</h1>
								<Button color='success' block onClick={reload} id='butn'>
									Play
								</Button>
							</div>
						) : (
							//win message ni h toh ye hoga
							<h1 className='text-center text-warning' id='message'>
								{isCross ? "Cross" : "Circle"}
								<span>turns</span>
							</h1>
						)}
						<div className='grid'>
							{itemArray.map((
								item,
								index //sbi column jinpr play chl ra h vo chlege
							) => (
								//jis card pr click hua vo changeitem ko call krega
								<Card
									onClick={() => changeItem(index)}
									color='warning'
									id='card'>
									<CardBody className='box'>
										<Icon called={item} />
									</CardBody>
								</Card>
							))}
						</div>
					</Col>
				</Row>
			</Container>
		</React.Fragment>
	);
};

export default App;
