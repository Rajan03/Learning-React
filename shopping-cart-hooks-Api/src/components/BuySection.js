import React, {useState, useEffect} from "react";
import ItemCard from "./ItemCard";
import Axios from "axios";
import {random, commerce} from "faker";
import {Container, Col, Row} from "reactstrap";

const BuySection = ({addToCart}) => {
	const [products, setProducts] = useState([]);
	const fetchPhotos = async () => {
		const {data} = await Axios.get(
			"https://api.jsonbin.io/b/601bcae406934b65f52e489b",
			{}
		);
		const {photos} = data;
		console.log(photos);
		const allItems = photos.map((photo) => ({
			img: photo.src.large,
			cartImg: photo.src.tiny,
			name: random.word(),
			price: commerce.price(),
			id: random.uuid(),
		}));
		setProducts(allItems);
	};

	useEffect(() => {
		fetchPhotos();
	}, []);

	return (
		<React.Fragment>
			<Container fluid>
				<Row>
					{products.map((product) => (
						<Col md={4} key={product.id}>
							<ItemCard product={product} addEvent={addToCart} />
						</Col>
					))}
				</Row>
			</Container>
		</React.Fragment>
	);
};

export default BuySection;

//
