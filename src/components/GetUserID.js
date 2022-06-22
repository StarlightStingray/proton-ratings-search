function GetUserID(profileURL) {

		let urlArr = profileURL.split('/');
		let profileOrID = urlArr[3];
		let id = null;

		if (profileOrID === 'profiles') {
			id = urlArr[4];
		} else {
			fetch(
				`http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${STEAM_API_KEY}&vanityurl=${urlArr[4]}`
			)
				.then((res) => res.json())
				.then((res) => {
					if (res.success !== 1) {
						throw 'Failed to resolve Steam profile URL';
					}
					console.log(res);
					id = res.steamid;
				})
				.catch(console.error);
		}
		return id;
	}

export default GetUserID;