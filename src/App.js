import './App.css';
import SearchBox from './components/SearchBox';

function App() {
	const apiKey = process.env.REACT_APP_STEAM_API_KEY;
	console.log(apiKey);

	return (
		<div className='mainApp'>
			<SearchBox apiKey={apiKey} />
		</div>
	);
}

export default App;
