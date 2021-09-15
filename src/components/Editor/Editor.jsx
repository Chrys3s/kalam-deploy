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
		<main className={`editor-container ${open ? '' : 'collapsed'}`}>
			<main className="editor-title">
				{displayName}
				<button
					type="button"
					onClick={() => setOpen(!open)}
					className="expand-collapse-btn"
				>
					O/C
				</button>
			</main>
			<ControlledEditor
				onBeforeChange={handleChange}
				value={value}
				className="code-mirror-wrapper"
				options={{
					lineWrapping: true,
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
