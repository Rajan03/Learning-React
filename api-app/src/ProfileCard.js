import React from "react";
import {Card, CardBody, CardText, CardTitle} from "reactstrap";
import {FaEnvelope, FaMapMarkedAlt, FaPhone, FaUser} from "react-icons/fa";

const ProfileCard = ({details}) => {
	const pic = [
		details.picture?.large,
		details.name?.title,
		details.name?.first,
		details.name?.last,
		details.location?.street?.name,
		details.dob?.age,
	];
	return (
		<React.Fragment>
			<Card>
				<CardBody className='text-center'>
					<img
						alt=''
						height='150'
						width='150'
						className='rounded-circle img-thumbnail border-danger'
						src={pic[0]}
					/>
					<CardTitle className='text-primary'>
						<h1>
							<span className='pr-3'>{pic[1]}</span>
							<span className='pr-2'>{pic[2]}</span>
							<span>{pic[3]}</span>
						</h1>
					</CardTitle>
					<CardText>
						<FaPhone />
						&nbsp; {details.phone}
					</CardText>
					<CardText>
						<FaEnvelope />
						&nbsp; {details.email}
					</CardText>

					<CardText>
						<FaMapMarkedAlt />
						&nbsp; {pic[4]}
					</CardText>
					<CardTitle>
						<span>
							<FaUser /> &nbsp;{pic[5]}
						</span>
					</CardTitle>
				</CardBody>
			</Card>
		</React.Fragment>
	);
};

export default ProfileCard;
