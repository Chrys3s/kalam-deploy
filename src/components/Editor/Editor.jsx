import React from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa';
import { FaJs } from 'react-icons/fa';
import { FaExpand } from 'react-icons/fa';
import { FaCompress } from 'react-icons/fa';

const Editor = props => {
	const { language, displayName, value, onChange, isOpen, changeOpenState } =
		props;

	const handleChange = (editor, data, value) => {
		onChange(value);
	};

	const handleStateChangeOfOpen = () => {
		if (!(isOpen[0] && !isOpen[1] && !isOpen[2])) {
			changeOpenState(!isOpen[0]);
		}
	};

	return (
		<main className={`editor-container ${isOpen[0] ? '' : 'collapsed'}`}>
			<main className="editor-title">
				<main className="flex justify-center items-center text-xl">
					{displayName === 'HTML' && (
						<FaHtml5 color="#ff4500" title="HTML5" />
					)}
					{displayName === 'CSS' && (
						<FaCss3 color="#4f86f7" title="CSS3" />
					)}
					{displayName === 'JS' && (
						<FaJs color="#ffcc33" title="JavaScript" />
					)}
				</main>
				<button
					type="button"
					onClick={handleStateChangeOfOpen}
					className="expand-collapse-btn"
				>
					{isOpen[0] && <FaCompress />}
					{!isOpen[0] && <FaExpand />}
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
