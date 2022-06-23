import React from 'react';

function GameList({ games }) {
	const listItems = games.map((game) => {
		<li key={game.appid}>{game.name}</li>;
	});

	return <ul>{listItems}</ul>;
}

export default GameList;
