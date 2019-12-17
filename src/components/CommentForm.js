import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addCommentAction } from '../redux/CommentRedux';
import StarRatingComponent from 'react-star-rating-component';
//MUI
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
//MUI Icon
// import StarIcon from "@material-ui/icons/Star";

export default function CommentForm({ itemData }) {
	const [ comment, setComment ] = useState({});
	const [ rating, setRating ] = useState(1);
	const dispatch = useDispatch();

	const addComment = (comment) => dispatch(addCommentAction(comment));

	const onChange = (event) => {
		setComment({ ...comment, [event.target.name]: event.target.value });
	};

	const onStarClick = (nextValue, prevValue, name, event) => {
		setRating(nextValue);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		console.log(itemData.id);
		addComment({
			activityID: itemData.id,
			name: comment.name,
			comment: comment.comment,
			email: comment.email,
			rate: rating
		});
	};

	return (
		<React.Fragment>
			<div className="highlight p-3 mb-3">
				<Row>
					<Col>
						<h4>Comment</h4>
						<Form onSubmit={onSubmit} autocomplete="off">
							<h6>
								How would you rate your experience? <Badge variant="secondary">{rating}</Badge>
							</h6>
							<StarRatingComponent name="rate1" starCount={5} value={rating} onStarClick={onStarClick} />
							<Form.Group>
								<Form.Control type="hidden" name="name" placeholder="Enter Name" onChange={onChange} />
							</Form.Group>
							<Form.Group>
								<Form.Control
									type="hidden"
									name="email"
									placeholder="Enter Email"
									onChange={onChange}
								/>
							</Form.Group>
							<Form.Group>
								<Form.Control
									as="textarea"
									rows="3"
									name="comment"
									placeholder="Enter your comment here!"
									onChange={onChange}
								/>
							</Form.Group>
							<Button variant="primary" type="submit">
								Submit
							</Button>
						</Form>
					</Col>
				</Row>
			</div>
		</React.Fragment>
	);
}
