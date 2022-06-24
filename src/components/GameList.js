import { Link } from 'react-router-dom';

function GameList({ games }) {
	const listItems = games.map((game) => {
		// console.log(game);
		return (
			<Link to={'/details/' + game.steam_appid}>
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
					<img
						id='gameImages'
						src={game.header_image}
						alt='game header or banner'
					/>
					<span id='gameDescription'>
						<p>{game.short_description}</p>
					</span>
				</li>
			</Link>
		);
	});

	return <ul>{listItems}</ul>;
}

export default GameList;
