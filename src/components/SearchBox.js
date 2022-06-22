import { useState, useEffect } from 'react';
import { getUserID } from './FindSteamID';

function SearchForm(props) {
	const { formState, setFormState } = useState('');

	function handleSubmit(event) {
		event.preventDefault();
		getUserID();
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
