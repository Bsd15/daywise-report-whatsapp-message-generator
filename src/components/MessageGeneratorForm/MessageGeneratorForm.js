import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Box, Button } from 'grommet';
import Input from '../Input/Input';

const MessageGeneratorForm = (props) => {
	const defaultMessageData = {...props.messageData.values};
	const [value, setValue] = useState(defaultMessageData);
	const formData = props.messageData.formData;
	return (
		<div>
			<Form
				value={value}
				onChange={(nextValue) => {
					setValue(nextValue);
				}}
				onReset={() => setValue(defaultMessageData)}
				onSubmit={() => props.onSubmitHandler(value)}
			>
				{Object.keys(formData).map((key, i) => (
					<Input
						key={i}
						name={key}
						label={key.replace(/^\w/, (c) => c.toUpperCase())}
						type={formData[key].type}
						required={formData[key].required}
					/>
				))}
				<Box direction="row" justify="between" margin={{ top: 'medium' }}>
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
		formData: PropTypes.object.isRequired,
	}),
	onSubmitHandler: PropTypes.func,
};

export default MessageGeneratorForm;
