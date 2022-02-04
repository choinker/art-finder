In server.js the backend API paths are defined
`this.paths = {
    auth: '/api/auth',
    homepage: '/api/homepage',
};`

Then also in server.js the /routes/ folder files are bound to those paths, completing the endpoints on those paths, `api/auth/login` and `api/homepage/getartworks/:id` respectively

The /src/routes/ folder is like a services folder, that calls the auth.js login API controller code and calls the homepage.js getArtworks API, consider renaming the routes folder to services
^ REVISIT - this isn't true, see below for 

TO RUN BACKEND LOCALLY
`node app.js`
and hit the browser to 

GET http://localhost:8080/api/homepage/getartworks/monet
POST http://localhost:8080/api/auth/login


BONUS FEATURES
Be able to heart/save artwork, and view your collection of favorite art, download? order prints? share with friends?

On homepage render the most favorited artworks by users

On homepage let user toggle dark/light mode, select background color (lavender, lavenderblush) and select card background colors

Authentication with real account (link the accounts to the Book version, Movie version? some kind of favorite media organizer)

ENHANCEMENTS
Card rows (groups?) instead of card columns to grow cards along a row instead of a column, prevents uneven columns towards bottom of searches

Pagination for art, so you can scroll through more pages

Massive headache with deploying to Heroku, the 'build' script that is run always said 'react-scripts' dependency not found, so it was trying to build the react-app /client/ using deps from the top level package.json, added a postheroku build script that cds into the client folder before building

BUGS

Heroku apps restart if they 'idle' for 30 mins? https://dev.to/unorthodev/prevent-your-app-from-idling-on-heroku-2lmc 

Only discovered info on why the site shut down from running `heroku logs` in console, try find a way to get better logging / analytics for free

` 
{userViewed ? (
    <CheckmarkImg>
) : (
    <CelebrationImg
        style={{ width: 'auto', height: '100%' }}
    >
)}
`