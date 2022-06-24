import React from 'react';

function GameList({ games }) {
	const listItems = games.map((game) => {
		console.log(game);
		return <li key={game.appid}>{game.name}</li>;
	});

	return <ul>{listItems}</ul>;
}

export default GameList;
