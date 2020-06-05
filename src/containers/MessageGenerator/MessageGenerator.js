import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { Box } from 'grommet';
import Message from '../../components/Message/Message';
import MessageForm from '../../components/MessageGeneratorForm/MessageGeneratorForm';

const MessageGenerator = () => {
	const [messageData, setMessageData] = useState({
		values: {
			date: new Date(),
			class: '',
			rollNumber: 0,
			numberOfPresent: 0,
			numberOfAbsent: 0,
			topicCovered: '',
			assignment: ''
		},
		formData: {
			date: {
				type: "date"
			},
			class: {
				type: "input"
			},
			rollNumber: {
				type: "number",
			},
			numberOfPresent: {
				type: "number"
			},
			numberOfAbsent: {
				type: "number"
			},
			topicCovered: {
				type: "text-area"
			},
			assignment: {
				type: "text-area"
			}
		}
	});
	return (
		<Box alignSelf="center" background="light-1" pad="small">
			<Switch>
				<Route path="/message">
					<Message />
				</Route>
				<Route exact path="/">
					<MessageForm messageData={messageData} />
				</Route>
			</Switch>
		</Box>
	);
};

MessageGenerator.propTypes={
	values: PropTypes.object,
	formData: PropTypes.shape({
		type: PropTypes.string
	})
}

export default MessageGenerator;
