ProtonDB Ratings Search

-Description-

This is a React App which uses the functionality of the Steam Web API to process a request for a specific user's game library by taking in their profile URL, finds 20 games that the user has spent a significant amount of time playing (currently defined at 40 hours or more), and then queries the ProtonDB for each game's overall rating tier. The final output is an array of cards that shows information about the game title, banner image, the short description (again pulled from the Steam store page listings using their API) and finally the game's ProtonDB tier rating.

When clicking on any of the displayed game cards, the user will be directed to a more detailed overview of the game, including a listing of PC requirements and more stats from ProtonDB, with the rating being a clickable that leads directly to the page of the game on ProtonDB so the user can examine the full breath of the reports and what kinds of recommendations the users make for the game.

The intent of the application is to make users who are interested in gaming on a Linux machine be able to get an idea how some of their favorite games can be expected to peform if they were to transition away from their current Windows (or Mac) gaming system. Since gaming on Linux has been a rather rocky experience until very recently a lot of users still don't have very strong faith that you can use a Linux-based machine for any kind of serious gaming.

Ideally in the future this app can actually return information based on several customizable filters, and even query for specific games at a time rather than just pulling a list of their currently most played. Given the current constraints of the app, there's some rather specific requirements for it to work at this time - we're assuming the user already has a library of games on Steam, and that they have spent a significant amount of time playing at least a handful of their games already. Furthermore, their profile, game library, and game playtime privacy settings must be set to public in order to actually retrieve this information. Altogether these are not unreasonable expectations of the average person who plays videogames.

-Technologies Used-

Npm React, React-Router-Dom Javascript, HTML, CSS, the Steam Web API, and the Proton Database.

-Getting Started/Installation Instructions-

This is a React app, and as such must be built using the Npm package manager locally, or deployed to a website that supports building a React-based application. It will also require a Steam Web API Key, which is obtainable for free, which is references within the program under the variable REACT_APP_STEAM_API_KEY. So long as app compiles correctly and the appropriate API Key is provided it should work just as fine (Proton DB does not currently require an API key, so there is no need to worry about acquiring one).

-Contribution Guidelines-

Currently the application is missing more than anything flexibility in how it is implemented - it's use is very limited right now to simply running one very particular kind of query based on hard-coded parameters. Ideally a user would be able to search by a variety of filters to suit their particular interests, such as returning games of only a Proton Tier rating (or higher), searching by styles or genres of games, and in particular be able to ask for games they've currently not yet played in their library (everyone has a backlog they want to burn through someday - Linux could be the perfect place to get started on that!).
