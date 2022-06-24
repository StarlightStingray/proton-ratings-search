function getUserID(profileURL, steamKey) {

	let urlArr = profileURL.split('/');
	let profileOrID = urlArr[3];
	// let id = null;

	if (profileOrID === 'profiles') {
		return Promise.resolve(urlArr[4]);
	} else {
		return fetch(
			`https://seir-cors-anywhere.herokuapp.com/http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${steamKey}&vanityurl=${urlArr[4]}`
		)
			.then((res) => res.json())
			.then((res) => {
				// console.log(res.response.steamid);
				if (res.response.success !== 1) {
					throw 'Failed to resolve Steam profile URL';
				}
				// console.log(res.response.steamid);
				return res.response.steamid;
			})
		
			// .catch(console.error);
	}
}

export default getUserID;
