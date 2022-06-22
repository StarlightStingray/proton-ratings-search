import { useState, useEffect } from 'react';
import getUserID from './getUserID';

function SearchForm(props) {
	const [formState, setFormState] = useState('');

	function handleSubmit(event) {
		event.preventDefault();
		let id = getUserID(formState, props.key);
		fetch(
			`https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${props.key}&steamid=${id}`
		)
			.then((res) => res.json())
			.then((res) => {
				if (res.success !== 1) {
					throw 'Failed to resolve Steam profile URL';
				}
				console.log(res);
				id = res.steamid;
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
