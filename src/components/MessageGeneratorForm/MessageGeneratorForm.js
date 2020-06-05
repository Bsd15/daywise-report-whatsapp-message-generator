import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Box, Button } from 'grommet';
import Input from '../Input/Input';

const MessageGeneratorForm = (props) => {
	const defaultMessageData = props.messageData.values;
	const [value, setValue] = useState(defaultMessageData);
	const formData = props.messageData.formData;
	return (
		<div>
			<Form
				value={value}
				onChange={(nextValue) => {
					console.log(nextValue);
					setValue(nextValue);
				}}
				onReset={() => setValue(defaultMessageData)}
				onSubmit={(event) => console.log('Submit', event.value, event.touched)}
			>
				{Object.keys(formData).map((key, i) => (
					<Input
						key={i}
						name={key}
						label={key.replace(/^\w/, (c) => c.toUpperCase())}
						type={formData[key].type}
					/>
				))}
				<Box direction="row" justify="between" margin={{ top: 'medium' }}>
					<Button label="Cancel" />
					<Button type="reset" label="Reset" />
					<Button type="submit" label="Update" primary />
				</Box>
			</Form>
		</div>
	);
};

MessageGeneratorForm.propTypes = {
	messageData: PropTypes.shape({
		values: PropTypes.object,
		formData: PropTypes.shape({
			type: PropTypes.string,
		}),
	}),
};

export default MessageGeneratorForm;
