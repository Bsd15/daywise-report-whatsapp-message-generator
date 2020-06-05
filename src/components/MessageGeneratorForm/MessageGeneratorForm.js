import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, FormField, TextInput, Box, Button } from 'grommet';

const MessageGeneratorForm = (props) => {
	const defaultMessageData = props.messageData;
	const [value, setValue] = useState(defaultMessageData);
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
				<FormField label="Class" name="class">
					<TextInput name="class" />
				</FormField>
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
	messageData: PropTypes.object,
};

export default MessageGeneratorForm;
