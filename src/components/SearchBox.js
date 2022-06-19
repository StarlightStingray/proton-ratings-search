import { useState, useEffect } from 'react';

function SearchForm(props) {
	const { formState, setFormState } = useState('');

	function handleSubmit(event) {
		event.preventDefault();
		setSteamIDSearch({});
	}

	// let steamIDSearch = {
	// 	vanityURL: '',
	// 	defaultURL: '',
	// 	userID: '',
	// };

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor='searchBar'>User URL: </label>
				<input
					id='searchBar'
					type='text'
					onChange={(event) => setFormState(event.target.value)}
				/>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
}

export default SearchForm;
