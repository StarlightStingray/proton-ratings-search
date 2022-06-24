import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function GameDetails(props) {
	const apiKey = process.env.REACT_APP_STEAM_API_KEY;
	const [gameDetails, setGameDetails] = useState(null);
	let [error, setError] = useState(null);

	const { id } = useParams();

	useEffect(() => {
		fetch(
			`https://seir-cors-anywhere.herokuapp.com/https://store.steampowered.com/api/appdetails?key=${apiKey}&appids=${id}`
		)
			.then((res) => res.json())
			.then((res) => res[id].data)
			.then((appInfo) => {
				return fetch(
					`https://seir-cors-anywhere.herokuapp.com/https://www.protondb.com/api/v1/reports/summaries/${id}.json`
				)
					.then((res) => res.json())
					.then((res) => {
						return { ...appInfo, proton: res };
					});
			})
			.then((games) => setGameDetails(games))
			.catch(setError);
	}, [apiKey, id]);

	return (
		<div>
			{gameDetails && (
				<div>
					{error ? <p>{error}</p> : <></>}
					<span id='gameTitle'>
						<h1>{gameDetails.name}</h1>
					</span>

					<h2>
						ProtonDB Rating Tier:
						<a href={`https://www.protondb.com/app/${id}`}>
							<span id='gameRating'>
								{gameDetails.proton.tier.toUpperCase()}
							</span>
						</a>
						<p>Confidence: {gameDetails.proton.confidence.toUpperCase()}</p>
						<p>
							Best Reported Tier:{' '}
							{gameDetails.proton.bestReportedTier.toUpperCase()}
						</p>
						<p>Total Reports: {gameDetails.proton.total}</p>
					</h2>
					<img
						id='gameImages'
						src={gameDetails.header_image}
						alt='game header or banner'
					/>
					<span id='gameDescription'>
						<h3>{gameDetails.short_description}</h3>
					</span>
					<h3>PC Requirements</h3>
					<div
						id='requirements'
						dangerouslySetInnerHTML={{
							__html: gameDetails.pc_requirements.minimum,
						}}
					/>

					<h3>Mac Requirements</h3>
					<div
						id='requirements' 
						dangerouslySetInnerHTML={{
							__html: gameDetails.mac_requirements.minimum,
						}}
					/>
					<h3>Native Support for Linux Requirements, if available</h3>
					<div
						id='requirements'
						dangerouslySetInnerHTML={{
							__html: gameDetails.linux_requirements.minimum,
						}}
					/>
				</div>
			)}
		</div>
	);
}

export default GameDetails;
