import { useState, useEffect } from 'react';
import getUserID from './getUserID';

function SearchForm(props) {
	const [formState, setFormState] = useState('');
	// const [ID, setID] = useState();
	const apiKey = process.env.REACT_APP_STEAM_API_KEY;

	function handleSubmit(event) {
		event.preventDefault();
		getUserID(formState, apiKey)
			.then((id) =>
				fetch(
					`https://seir-cors-anywhere.herokuapp.com/https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${apiKey}&steamid=${id}`
				)
			)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
			})
			.catch(console.error);
		console.log(formState);
	}

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
