import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooking, deleteBookingAction } from '../../redux/BookingRedux';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/SideNav';
// MUI
// import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
function Booking() {
	// class Booking extends Component {
	// render() {
	const bookingData = useSelector((state) => state.booking.data);
	console.log(bookingData);
	const dispatch = useDispatch();

	const deleteBooking = (booking) => dispatch(deleteBookingAction(booking));

	const initFetch = useCallback(
		() => {
			dispatch(getBooking());
		},
		[ dispatch ]
	);

	useEffect(
		() => {
			initFetch();
		},
		[ initFetch ]
	);

	const onDelete = (event) => {
		event.preventDefault();
		deleteBooking(event.target.id);
	};

	return (
		<div id="wrapper">
			<Sidebar />
			<div className="page-content-wrapper">
				<Row>
					<Col>
						<h4>Booking List Page</h4>
					</Col>
					<Col className="text-right">
						<Link className="btn btn-success btn-md" to="/dashboard/CreateBooking">
							Add Booking
						</Link>
					</Col>
				</Row>

				<Row>
					<Col>
						<table className="table table-bordered">
							<thead>
								<tr>
									<td>Booking Name</td>
									<td className="text-center">Action</td>
								</tr>
							</thead>
							<tbody>
								{bookingData &&
									bookingData.map((booking) => (
										<tr key={booking.id}>
											<td>{booking.fullName}</td>
											<td className="text-center">
												<Link
													to={`/dashboard/updateBooking/${booking.id}`}
													className="btn btn-primary btn-md mr-2"
												>
													<i className="fas fa-pencil-alt" />
												</Link>

												<Button
													className="btn btn-danger btn-md"
													variant="danger"
													id={booking.id}
													onClick={onDelete}
												>
													<i className="fas fa-trash-alt" id={booking.id} />
												</Button>
											</td>
										</tr>
									))}
							</tbody>
						</table>
					</Col>
				</Row>
			</div>
		</div>
	);
	// }
}
export default Booking;
