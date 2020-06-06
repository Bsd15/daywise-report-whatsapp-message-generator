import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import { Button, Box, Text } from 'grommet';

const Message = (props) => {
	const messageDate = new Date(props.messageData.date);
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
			<div id="message">
				<Box flex>
					<Text>
						{format(messageDate, 'EEEE')}, {format(messageDate, 'dd-MM-yyyy')}<br/>
					</Text>
					<Text>
						<b>*Daywise report*</b> of online class for {props.messageData.class}<br/>
					</Text>
					<Text>Subject: {props.messageData.subject}<br/></Text>
					<Text>No. on roll: {props.messageData.totalStrength}<br/></Text>
					<Text>No. present: {props.messageData.numberOfPresent}<br/></Text>
					<Text>No. absent: {props.messageData.numberOfAbsent}<br/></Text>
					<Text>*Topic covered*: {props.messageData.topicCovered}<br/></Text>
					<Text>*Home assignment*: {props.messageData.assignment}<br/></Text>
					<Text>
						Begant at:
						{format(
							parse(props.messageData.startTime, 'HH:mm', new Date()),
							'h:mm aaaa'
						)}
						<br/>
					</Text>
					<Text>
						Ended at:
						{format(
							parse(props.messageData.endTime, 'HH:mm', new Date()),
							'h:mm aaaa'
						)}
						<br/>
					</Text>
					<Text>*Homework report*: {props.messageData.assignmentReport}<br/></Text>
					<Text>
						Remarks:
						{props.messageData.remarks ? props.messageData.remarks : 'NIL'}
						<br/>
					</Text>
				</Box>
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
