import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { Box } from 'grommet';
import Message from '../../components/Message/Message';
import MessageForm from '../../components/MessageGeneratorForm/MessageGeneratorForm';

const MessageGenerator = () => {
	const [messageData, setMessageData] = useState({
		values: {
			date: '',
			class: '',
			rollNumber: 0,
			numberOfPresent: 0,
			numberOfAbsent: 0,
			topicCovered: '',
			assignment: ''
		},
		formData: {
			date: {
				type: "date",
				required: true
			},
			class: {
				type: "input",
				required: true
			},
			rollNumber: {
				type: "number",
				required: true
			},
			numberOfPresent: {
				type: "number",
				required: true
			},
			numberOfAbsent: {
				type: "number",
				required: true
			},
			topicCovered: {
				type: "text-area",
				required: true
			},
			assignment: {
				type: "text-area",
				required: true
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
