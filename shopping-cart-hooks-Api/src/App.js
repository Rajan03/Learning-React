import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import {toast, ToastContainer} from "react-toastify";
import {Container, Row, Col} from "reactstrap";
import "./App.css";
import BuySection from "./components/BuySection";
import MyCart from "./components/MyCart";

function App() {
	const [cartItem, setCartItem] = useState([]);

	// To add an item to the cart
	const addItem = (item) => {
		console.log("clicked");
		const itemExists = cartItem.findIndex((i) => {
			return i.id === item.id;
		});
		if (itemExists === -1) {
			setCartItem([...cartItem, item]);
		} else {
			toast("Item already Exists", {
				type: "error",
			});
		}
	};

	// To remove an item from cart
	const removeItem = (item) => {
		setCartItem(cartItem.filter((i) => i.id !== item.id));
	};

	// To Buy all item from cart
	const buyItem = () => {
		setCartItem([]);

		toast("Purchase Complete", {
			type: "dark",
		});
	};
	return (
		<React.Fragment>
			<h1 className='text-success text-center py-5'>MY LAPTOP SHOP </h1>
			<Container fluid>
				<ToastContainer />
				<Row>
					<Col md='8'>
						<BuySection addToCart={addItem} />
					</Col>
					<Col md='4'>
						<MyCart
							cartItem={cartItem}
							removeItem={removeItem}
							buyItem={buyItem}
						/>
					</Col>
				</Row>
			</Container>
		</React.Fragment>
	);
}

export default App;
