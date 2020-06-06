import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Box } from 'grommet';
import format from 'date-fns/format';
import Message from '../../components/Message/Message';
import MessageForm from '../../components/MessageGeneratorForm/MessageGeneratorForm';

const MessageGenerator = () => {
	const [messageData, setMessageData] = useState({
		values: {
			date: format(new Date(), 'yyyy-MM-dd'),
			class: '',
			totalStrength: 0,
			numberOfPresent: 0,
			numberOfAbsent: 0,
			topicCovered: '',
			assignment: '',
			remarks: '',
		},
		formData: {
			date: {
				type: 'date',
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

	const isTextCopiedHandler = () => setIsTextCopied(true);

	return (
		<Box alignSelf="center" background="light-1" pad="small">
			{isTextCopied && <p>Text Copied Successfully</p>}
			<Switch>
				{isMessageDataValid ? (
					<Route path="/message">
						<Message messageData={messageData.values} onCopy={isTextCopiedHandler} />
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
