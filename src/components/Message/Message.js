import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import format from 'date-fns/format';
import { Button, Box } from 'grommet';

const Message = (props) => {
	const messageDate = new Date(props.messageData.date);
	const ref = useRef();
	const history = useHistory();
	const copyMessageToClipboard = () => {
		// Ref https://stackoverflow.com/a/48020189
		var range = document.createRange();
		range.selectNode(document.getElementById('message'));
		window.getSelection().removeAllRanges(); // clear current selection
		window.getSelection().addRange(range); // to select text
		document.execCommand('copy');
		window.getSelection().removeAllRanges(); // to deselect
		props.onCopy();
		history.push('/');
	};
	return (
		<Box>
			<div ref={ref} id="message">
				<p>
					{format(messageDate, 'EEEE')}, {format(messageDate, 'dd-MM-yyyy')}
				</p>
				<p>
					<b>Daywise report</b> of online class for {props.messageData.class}
				</p>
				<p>Subject: {props.messageData.subject}</p>
				<p>No. on roll: {props.messageData.totalStrength}</p>
				<p>No. present: {props.messageData.numberOfPresent}</p>
				<p>No. absent: {props.messageData.numberOfAbsent}</p>
				<p>Topic covered: {props.messageData.topicCovered}</p>
				<p>Home assignment: {props.messageData.assignment}</p>
				<p>Begant at: {props.messageData.startTime}</p>
				<p>Ended at: {props.messageData.endTime}</p>
				<p>Homework report: {props.messageData.assignmentReport}</p>
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
		startTime: PropTypes.string.isRequired,
		endTime: PropTypes.string.isRequired,
		subject: PropTypes.string,
		class: PropTypes.number.isRequired,
		totalStrength: PropTypes.number.isRequired,
		numberOfPresent: PropTypes.number.isRequired,
		numberOfAbsent: PropTypes.number.isRequired,
		topicCovered: PropTypes.string.isRequired,
		assignment: PropTypes.string.isRequired,
		assignmentReport: PropTypes.string.isRequired,
		remarks: PropTypes.string.isRequired,
	}),
	onCopy: PropTypes.func,
};

export default Message;
