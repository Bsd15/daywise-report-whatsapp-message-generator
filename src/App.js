import React from 'react';
import { Grommet, Main, Heading } from 'grommet';
import MessageGenerator from './containers/MessageGenerator/MessageGenerator';
function App() {
	const theme = {
		global: {
			font: {
				family: 'Roboto',
				size: '18px',
				height: '20px',
			},
		},
	};
	return (
		<Grommet theme={theme}>
			<Main pad="large">
        <Heading alignSelf="center" size="small" color="brand">
          Daywise Report Message Generator
        </Heading>
				<MessageGenerator />
			</Main>
		</Grommet>
	);
}

export default App;
