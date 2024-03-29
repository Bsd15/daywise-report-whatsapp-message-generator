import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Box } from 'grommet';
import { useAlert } from 'tr-alerts';
import format from 'date-fns/format';
import Message from '../../components/Message/Message';
import MessageForm from '../../components/MessageGeneratorForm/MessageGeneratorForm';

const MessageGenerator = () => {
	const defaultMessageValues = {
		date: format(new Date(), 'yyyy-MM-dd'),
		subject: 'Social',
		class: 1,
		totalStrength: 0,
		numberOfPresent: 0,
		numberOfAbsent: 0,
		absentees: '',
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
			numberPresent: {
				type: 'number',
				required: true,
			},
			numberAbsent: {
				type: 'number',
				required: true,
			},
			absentees: {
				type: 'input',
			},
		},
	});
	const [isMessageDataValid, setIsMessageDataValid] = useState(false);
	const history = useHistory();
	const showAlert = useAlert();

	const generateMessage = (data) => {
		setMessageData({
			...messageData,
			values: data,
		});
		setIsMessageDataValid(true);
		history.push('/message');
	};

	const isTextCopiedHandler = () => {
		setMessageData({
			...messageData,
			values: { ...defaultMessageValues },
		});
		showAlert("Copied", "The message is copied to the clipboard.","success",6000);
	};

	return (
		<Box alignSelf="center" background="light-1" pad="small" width="large">
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
