import './App.css';
import SearchBox from './components/SearchBox';
import Header from './components/Header';
import GameList from './components/GameList';
import { useState } from 'react';

function App() {
	const apiKey = process.env.REACT_APP_STEAM_API_KEY;
	const [games, setGames] = useState([]);

	return (
		<div className='mainApp'>
			<Header />
			<SearchBox apiKey={apiKey} setGames={setGames} />
			<GameList games={games.filter((x) => x.hasOwnProperty('steam_appid'))} />
		</div>
	);
}

export default App;
