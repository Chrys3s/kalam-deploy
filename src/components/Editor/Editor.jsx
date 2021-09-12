import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as ControlledEditor } from 'react-codemirror2';

const Editor = props => {
	const { language, displayName, value, onChange } = props;

	const [open, setOpen] = useState(true);

	const handleChange = (editor, data, value) => {
		onChange(value);
	};

	return (
		<main
			className={`flex-grow flex flex-col p-2 bg-practiceBg-dark ${
				open ? '' : 'flex-grow-0 absolute'
			}`}
			style={{ 'flex-basis': '0', height: '50vh' }}
		>
			<main className="flex justify-between bg-practiceBg-dark text-white pt-2 pr-2 pb-2 pl-4 rounded-tl-lg rounded-tr-lg">
				{displayName}
				<button
					onClick={() => setOpen(!open)}
					className="ml-2 bg-none border-none text-white curson-pointer"
				>
					O/C
				</button>
			</main>
			<ControlledEditor
				onBeforeChange={handleChange}
				value={value}
				className="flex-grow rounded-br-lg rounded-bl-lg overflow-hidden"
				options={{
					lineWrapping: true,
					lint: true,
					mode: language,
					theme: 'material',
					lineNumbers: true,
					smartIndent: true,
				}}
			/>
		</main>
	);
};

export default Editor;
