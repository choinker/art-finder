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

` 
{userViewed ? (
    <CheckmarkImg>
) : (
    <CelebrationImg
        style={{ width: 'auto', height: '100%' }}
    >
)}
`