import React, { useState } from "react";

function CreateArea(props) {
	const [note, setNote] = useState({
		title: "",
		content: "",
	});

	const addNote = (event) => {
		const { value, name } = event.target;
		setNote((preValue) => {
			return {
				...preValue,
				[name]: value,
			};
		});
	};

	// console.log(note);

	const addToLib = (event) => {
		props.onAdd(note);
		setNote({
			title: "",
			content: "",
		});
		event.preventDefault();
	};

	return (
		<div>
			<form>
				<input
					name="title"
					placeholder="Title"
					onChange={addNote}
					value={note.title}
				/>
				<textarea
					name="content"
					placeholder="Take a note..."
					rows="3"
					onChange={addNote}
					value={note.content}
				/>
				<button onClick={addToLib}>Add</button>
			</form>
		</div>
	);
}

export default CreateArea;
