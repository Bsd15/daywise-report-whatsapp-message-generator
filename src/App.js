import React from 'react';
import { Grommet, Main, Heading, Button } from 'grommet';

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
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, velit
				consequuntur dolorem libero nobis placeat, in unde reprehenderit et illo
				voluptatibus, dolores ex qui incidunt tenetur a. Eaque, molestias
				distinctio!
        <Button primary label="Generate" fill={false} />
			</Main>
		</Grommet>
	);
}

export default App;
