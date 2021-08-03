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
						No. present: {props.messageData.numberPresent}
						<br />
					</Text>
					<Text>
						No. absent: {props.messageData.numberAbsent}
						<br />
					</Text>
					{props.messageData.numberAbsent > 0 && (
						<Text>Absentees: {props.messageData.absentees}</Text>
					)}
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
		subject: PropTypes.string.isRequired,
		class: PropTypes.any.isRequired,
		totalStrength: PropTypes.any.isRequired,
		numberPresent: PropTypes.any.isRequired,
		numberAbsent: PropTypes.any.isRequired,
		absentees: PropTypes.string
	}),
	onCopy: PropTypes.func,
};

export default Message;
