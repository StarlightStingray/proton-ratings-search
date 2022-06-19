import React from 'react';

function FindSteamID(props) {
	const [steamIDSearch, setSteamIDSearch] = useState([]);

	useEffect(() => {});

	function getVanityUserID() {
		const url = `http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${props.key}&vanityurl=${vanityURL}`;

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
			})
			.catch(console.error);
	}
	return <div></div>;
}

export default FindSteamID;
