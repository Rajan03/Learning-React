import React, {useState, useEffect} from "react";
import {Container, Row, Col} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Axios from "axios";
import ProfileCard from "./ProfileCard";

function App() {
	// Details are saved here
	const [details, setDetails] = useState({});

	// function retrives data from URL using axios library
	const fetchDetail = async () => {
		//empty object may contain some header information and so on
		const {data} = await Axios.get("https://randomuser.me/api/", {});
		setDetails(data.results[0]);
	};

	// calls the function before the page gets reloaded
	useEffect(() => {
		fetchDetail();
	}, []);

	return (
		<Container fluid className='p-4 bg-primary App'>
			<Row>
				<Col md={4} className='offset-md-4 mt-4'>
					<ProfileCard details={details}></ProfileCard>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
