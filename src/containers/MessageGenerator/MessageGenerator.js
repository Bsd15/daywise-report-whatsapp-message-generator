import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Box } from 'grommet';
import Message from '../../components/Message/Message';
import MessageForm from '../../components/MessageGeneratorForm/MessageGeneratorForm';

const MessageGenerator = () => {
	const [messageData, setMessageData] = useState({
		date: new Date(),
		class: '',
		rollNumber: 0,
		numberOfPresent: 0,
		numberOfAbsent: 0,
		topicCovered: '',
		assignment: '',
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

export default MessageGenerator;
