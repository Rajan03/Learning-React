import React from "react";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button,
} from "reactstrap";

const ItemCard = ({product, addEvent}) => {
	return (
		<Card className='mt-2 mb-1'>
			<CardImg
				top
				height='250'
				width='100%'
				src={product.img}
				alt='Card image'
			/>
			<CardBody>
				<CardTitle tag='h5'>{product.name}</CardTitle>
				<CardSubtitle tag='h6' className='mb-2 text-muted secondary'>
					Price : ${product.price}
				</CardSubtitle>
				<CardText className='ProductIntro'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla labore
					cupiditate cumque id asperiores, iusto repudiandae ab accusantium in
					rem ipsam. Optio enim, alias ab consequuntur nisi esse. Magnam, eos.
				</CardText>
				<Button
					color='success'
					onClick={() => {
						addEvent(product);
					}}>
					Buy Now
				</Button>
			</CardBody>
		</Card>
	);
};

export default ItemCard;
