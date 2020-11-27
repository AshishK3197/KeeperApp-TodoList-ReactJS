import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
	const [notes, setnotes] = useState([]);

	const addToLib = (note) => {
		setnotes((preValue) => {
			return [...preValue, note];
		});
	};

	const handleDelete = (id) => {
		setnotes((prevNotes) => {
			return prevNotes.filter((noteItem, index) => {
				return index !== id;
			});
		});
	};

	return (
		<div>
			<Header />
			<CreateArea onAdd={addToLib} />
			{notes.map((noteItem, index) => {
				return (
					<Note
						key={index}
						id={index}
						title={noteItem.title}
						content={noteItem.content}
						onDelete={handleDelete}
					/>
				);
			})}
			<Footer />
		</div>
	);
}

export default App;
