import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';

const Message = (props) => {
	const messageDate = new Date(props.messageData.date);
	return (
		<div>
			<p>
				{format(messageDate, 'EEEE')}, {format(messageDate, 'dd-MM-yyyy')}
			</p>
			<p>
				<b>Daywise report</b> of online class for {props.messageData.class}
			</p>
			<p>No. on roll: {props.messageData.rollNumber}</p>
			<p>No. present: {props.messageData.numberOfPresent}</p>
			<p>No. absent: {props.messageData.numberOfAbsent}</p>
			<p>Topic covered: {props.messageData.topicCovered}</p>
			<p>Home assignment: {props.messageData.assignment}</p>
			<p>
				Remarks: {props.messageData.remarks ? props.messageData.remarks : 'NIL'}
			</p>
		</div>
	);
};

Message.propTypes = {
	messageData: PropTypes.shape({
		date: PropTypes.string.isRequired,
		class: PropTypes.number.isRequired,
		rollNumber: PropTypes.number.isRequired,
		numberOfPresent: PropTypes.number.isRequired,
		numberOfAbsent: PropTypes.number.isRequired,
		topicCovered: PropTypes.string.isRequired,
		assignment: PropTypes.string.isRequired,
		remarks: PropTypes.string.isRequired,
	}),
};

export default Message;
