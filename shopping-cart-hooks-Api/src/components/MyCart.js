import React from "react";
import {
	Container,
	ListGroup,
	ListGroupItem,
	Button,
	CardHeader,
	CardBody,
	Card,
	CardFooter,
	Col,
	Row,
} from "reactstrap";

const MyCart = ({cartItem, removeItem, buyItem}) => {
	let amount = 0;
	cartItem.forEach((item) => {
		amount = parseFloat(amount) + parseFloat(item.price);
	});
	return (
		<Container className='cart'>
			<h1 className='text-success'>Shopping Cart</h1>
			<ListGroup>
				{cartItem.map((item) => (
					<ListGroupItem key={item.id}>
						<Row>
							<Col>
								<img height={80} src={item.cartImg} alt='small-img' />
							</Col>
							<Col>
								<div className='itemName my-2'>{item.name}</div>
								<span className='pr-2'>Price: {item.price}</span>
								<Button color='danger' onClick={() => removeItem(item)}>
									Remove
								</Button>
							</Col>
						</Row>
					</ListGroupItem>
				))}
			</ListGroup>
			{/* If everything is empty */}
			{cartItem.length >= 1 ? (
				<Card className='text-center mt-3'>
					<CardHeader>Grand Total</CardHeader>
					<CardBody>
						Total amount for {cartItem.length} products is {amount}
					</CardBody>
					<CardFooter>
						<Button color='success' onClick={buyItem}>
							Pay Now
						</Button>
					</CardFooter>
				</Card>
			) : (
				<h1 className='text-dark text-center mt-5'>Cart is empty</h1>
			)}
		</Container>
	);
};

export default MyCart;
