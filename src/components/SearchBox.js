import { useState } from 'react';
import getUserID from './getUserID';

function SearchForm(props) {
	const [formState, setFormState] = useState('');
	let [error, setError] = useState(null);

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
				// console.log(res);
				return res.response.games.filter(
					(game) => game.playtime_forever > 2400
				);
			})
			.then((games) => {
				let slicedArray = games.slice(0, 20);
				return Promise.all(
					slicedArray.map((game) =>
						fetch(
							`https://seir-cors-anywhere.herokuapp.com/https://store.steampowered.com/api/appdetails?key=${apiKey}&appids=${game.appid}`
						)
							.then((res) => res.json())
							.then((res) => res[game.appid].data)
							.then((appInfo) => {
								return fetch(
									`https://seir-cors-anywhere.herokuapp.com/https://www.protondb.com/api/v1/reports/summaries/${game.appid}.json`
								)
									.then((res) => res.json())
									.then((res) => {
										return { ...appInfo, proton: res };
									});
							})
					)
				);
			})
			.then((games) => props.setGames(games))
			.catch(setError);
		// console.log(formState);
	}

	return (
		<div>
			{error ? <p>{error}</p> : <></>}
			<form onSubmit={handleSubmit}>
				<label htmlFor='searchBar'>Steam Profile URL to lookup: </label>
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
