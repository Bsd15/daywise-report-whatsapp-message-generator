import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Box } from 'grommet';
import format from 'date-fns/format';
import Message from '../../components/Message/Message';
import MessageForm from '../../components/MessageGeneratorForm/MessageGeneratorForm';

const MessageGenerator = () => {
	const defaultMessageValues = {
		date: format(new Date(), 'yyyy-MM-dd'),
		startTime: '',
		endTime: '',
		subject: 'Social',
		class: 1,
		totalStrength: 0,
		numberOfPresent: 0,
		numberOfAbsent: 0,
		topicCovered: '',
		assignment: '',
		assignmentReport: '',
		remarks: '',
	};
	const [messageData, setMessageData] = useState({
		values: {
			...defaultMessageValues,
		},
		formData: {
			date: {
				type: 'date',
				required: true,
			},
			startTime: {
				type: 'time',
				required: true,
			},
			endTime: {
				type: 'time',
				required: true,
			},
			subject: {
				type: 'input',
				required: true,
			},
			class: {
				type: 'number',
				required: true,
			},
			totalStrength: {
				type: 'number',
				required: true,
			},
			numberOfPresent: {
				type: 'number',
				required: true,
			},
			numberOfAbsent: {
				type: 'number',
				required: true,
			},
			topicCovered: {
				type: 'text-area',
				required: true,
			},
			assignment: {
				type: 'text-area',
				required: true,
			},
			assignmentReport: {
				type: 'text-area',
				required: true,
			},
			remarks: {
				type: 'text-area',
			},
		},
	});
	const [isMessageDataValid, setIsMessageDataValid] = useState(false);
	const [isTextCopied, setIsTextCopied] = useState(false);
	const history = useHistory();

	const generateMessage = (data) => {
		setMessageData({
			...messageData,
			values: data,
		});
		setIsMessageDataValid(true);
		history.push('/message');
	};

	const isTextCopiedHandler = () => {
		setIsTextCopied(!isTextCopied);
		setMessageData({
			...messageData,
			values: { ...defaultMessageValues },
		});
	};

	return (
		<Box alignSelf="center" background="light-1" pad="small" width="large">
			{isTextCopied && <p>Text Copied Successfully</p>}
			<Switch>
				{isMessageDataValid ? (
					<Route path="/message">
						<Message
							messageData={messageData.values}
							onCopy={isTextCopiedHandler}
						/>
					</Route>
				) : null}
				<Route exact path="/">
					<MessageForm
						messageData={messageData}
						onSubmitHandler={generateMessage}
					/>
				</Route>
			</Switch>
		</Box>
	);
};

MessageGenerator.propTypes = {
	values: PropTypes.object,
	formData: PropTypes.shape({
		type: PropTypes.string,
	}),
};

export default MessageGenerator;
