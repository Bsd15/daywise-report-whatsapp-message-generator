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
	const romanize = (number) => {
		if (isNaN(number)) return NaN;
		var digits = String(+number).split(''),
			key = [
				'',
				'C',
				'CC',
				'CCC',
				'CD',
				'D',
				'DC',
				'DCC',
				'DCCC',
				'CM',
				'',
				'X',
				'XX',
				'XXX',
				'XL',
				'L',
				'LX',
				'LXX',
				'LXXX',
				'XC',
				'',
				'I',
				'II',
				'III',
				'IV',
				'V',
				'VI',
				'VII',
				'VIII',
				'IX',
			],
			roman = '',
			i = 3;
		while (i--) roman = (key[+digits.pop() + i * 10] || '') + roman;
		return Array(+digits.join('') + 1).join('M') + roman;
	};

	return (
		<Box>
			<div id="message">
				<Box flex>
					<Text>
						{format(messageDate, 'EEEE')}, {format(messageDate, 'dd-MM-yyyy')}
						<br />
					</Text>
					<Text>
						<b>*Daywise report*</b> of online class for{' '}
						<b>*{romanize(props.messageData.class)}*</b> grade
						<br />
					</Text>
					<Text>
						<b>*Subject:*</b> {props.messageData.subject}
						<br />
					</Text>
					<Text>
						No. on roll: {props.messageData.totalStrength}
						<br />
					</Text>
					<Text>
						No. present: {props.messageData.numberOfPresent}
						<br />
					</Text>
					<Text>
						No. absent: {props.messageData.numberOfAbsent}
						<br />
					</Text>
					{props.messageData.numberOfAbsent > 0 && (
						<Text>Absentees: {props.messageData.absentees}</Text>
					)}
					<Text>
						<b>*Topic covered*:</b> {props.messageData.topicCovered}
						<br />
					</Text>
					<Text>
						<b>*Home assignment*:</b> {props.messageData.assignment}
						<br />
					</Text>
					<Text>
						Began at:
						{format(
							parse(props.messageData.startTime, 'HH:mm', new Date()),
							'h:mm aaaa'
						)}
						<br />
					</Text>
					<Text>
						Ended at:
						{format(
							parse(props.messageData.endTime, 'HH:mm', new Date()),
							'h:mm aaaa'
						)}
						<br />
					</Text>
					<Text>
						<b>*Homework report*:</b> {props.messageData.assignmentReport}
						<br />
					</Text>
					<Text>
						<b>*Remarks*:</b>
						{props.messageData.remarks ? props.messageData.remarks : 'NIL'}
						<br />
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
		subject: PropTypes.string.isRequired,
		class: PropTypes.any.isRequired,
		totalStrength: PropTypes.any.isRequired,
		numberOfPresent: PropTypes.any.isRequired,
		numberOfAbsent: PropTypes.any.isRequired,
		absentees: PropTypes.string,
		topicCovered: PropTypes.string.isRequired,
		assignment: PropTypes.string.isRequired,
		assignmentReport: PropTypes.string.isRequired,
		remarks: PropTypes.string,
	}),
	onCopy: PropTypes.func,
};

export default Message;
