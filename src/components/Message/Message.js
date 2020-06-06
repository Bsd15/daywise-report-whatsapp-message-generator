import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import { Button, Box } from 'grommet';

const Message = (props) => {
	const messageDate = new Date(props.messageData.date);
	const ref = useRef();
	const copyMessageToClipboard = () => {
		console.log(ref.current.textContent());
	};
	return (
		<Box>
			<div ref={ref}>
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
					Remarks:{' '}
					{props.messageData.remarks ? props.messageData.remarks : 'NIL'}
				</p>
			</div>
			<Box>
				<Button
					label="Copy Text To Clipboard!"
					onClick={copyMessageToClipboard}
				/>
			</Box>
		</Box>
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
