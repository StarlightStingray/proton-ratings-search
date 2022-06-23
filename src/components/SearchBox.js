import { useState, useEffect } from 'react';
import getUserID from './getUserID';

function getCompatInfo(games, compatibleGames) {
	// console.log(compatibleGames);
	if (compatibleGames.length > 10 || games.length === 1) {
		return Promise.resolve(compatibleGames);
	} else {
		return fetch(`https://protondb.max-p.me/games/${games[0].appid}/reports/`)
			.then((res) => res.json())
			.then((reports) => {
				// console.log(reports.length);
				const filteredReps = reports.filter((x) => x.rating);

				if (
					filteredReps.reduce(
						(rep, total) =>
							total + (rep.rating === 'Platinum' || rep.rating === 'Gold'),
						0
					) /
						reports.length >
					0.5
				) {
					compatibleGames.push(games[0]);
				}
				return getCompatInfo(games.slice(1), compatibleGames);
			});
	}
}

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
				return res.response.games.filter((game) => game.playtime_forever > 0);
			})
			.then((games) => getCompatInfo(games, []))
			.then((games) => props.setGames(games))
			.catch(console.error);
		console.log(formState);
	}

	return (
		<div>
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
