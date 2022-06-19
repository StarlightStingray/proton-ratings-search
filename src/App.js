import './App.css';
import SearchBox from './components/SearchBox';

function App() {
	const key = process.env.STEAM_API_KEY;

	return (
		<div className='mainApp'>
			<SearchBox key={key} />
		</div>
	);
}

export default App;
