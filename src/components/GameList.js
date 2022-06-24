import { Link } from 'react-router-dom';

function GameList({ games }) {
	const listItems = games.map((game) => {
		return (
			<li key={game.steam_appid}>
					<span id='gameTitle'>
						<h3>{game.name}</h3>
					</span>
					<div>
						ProtonDB Rating Tier:
						<p>
							<span id='gameRating'>{game.proton.tier.toUpperCase()}</span>
						</p>
					</div>
					<Link to={'/details/' + game.steam_appid}>
					<img
						id='gameImages'
						src={game.header_image}
						alt='game header or banner'
						/>
						</Link>
					<span id='gameDescription'>
						<p>{game.short_description}</p>
					</span>
				</li>
		);
	});

	return <ul>{listItems}</ul>;
}

export default GameList;
