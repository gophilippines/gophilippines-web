import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserData, uploadUserImageAction } from '../redux/actions/userActions';
import { Link } from 'react-router-dom';
// MUI
// import Card from "react-bootstrap/Card";
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';

function UserProfile() {
	const userData = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const uid = window.localStorage.getItem('UID');
	useEffect(
		() => {
			if (uid) {
				dispatch(getUserData(uid));
			}
		},
		[ dispatch ]
	);

	const uploadUserImage = (formData) => dispatch(uploadUserImageAction(formData));

	const handleImageChange = (event) => {
		const image = event.target.files[0];
		const formData = new FormData();
		formData.append('file', image);
		uploadUserImage({
			id: uid,
			data: formData
		});
		// this.props.uploadImage(formData);
	};

	return (
		<React.Fragment>
			<Card className="mb-5">
				{/* <Card.Img variant="top" src={require('../assets/img/default.png')} title="" /> */}
				<Card.Body
					className="m_bg card-img-top"
					style={{
						backgroundImage: 'url(' + userData.imageURL + ')'
					}}
				>
					<label for="fileUpload" class="file-upload p-3">
						<i class="fas fa-camera fa-2x" />
						<input
							type="file"
							name="file"
							id="fileUpload"
							className="file-upload-image "
							onChange={handleImageChange}
						/>
					</label>
				</Card.Body>

				<Card.Body className="text-center border-bottom">
					<h4>{userData.first_name + ' ' + userData.last_name}</h4>
					<h6>{userData.email_address}</h6>
				</Card.Body>

				<Card.Body>
					<Nav className="flex-column">
						<Link to="/dashboard/MyDashboard" className="nav-link">
							<h5 className="font-weight-normal">
								<i class="fas fa-dice-d6 fa-w-20" /> Dashboard
							</h5>
						</Link>
						<Link to="/dashboard/MyBookings" className="nav-link">
							<h5 className="font-weight-normal">
								<i class="fas fa-file-alt fa-w-20" /> Bookings
							</h5>
						</Link>
						<Link to="/dashboard/MyReviews" className="nav-link">
							<h5 className="font-weight-normal">
								<i class="fas fa-comment-alt fa-w-20" /> Reviews
							</h5>
						</Link>
					</Nav>
				</Card.Body>
				<Card.Footer>
					<Nav className="flex-column">
						<Link to="/dashboard/Account" className="nav-link">
							<h5 className="font-weight-normal">
								<i class="fas fa-user-cog fa-w-20" /> Account Settings
							</h5>
						</Link>
					</Nav>
				</Card.Footer>
			</Card>
		</React.Fragment>
	);
}

export default UserProfile;
