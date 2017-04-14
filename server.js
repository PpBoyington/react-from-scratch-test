const express = require('express');
const morgan = require('morgan');
const path = require('path');
const helmet = require('helmet');
const jwt = require('express-jwt');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const router = express.Router();
const ninetyDaysInSeconds = 7776000;
const jwtCheck = jwt({
  secret: "SECRET_KEY",
  algorithms: ['RS256'],
  issuer: "https://YOUR-AUTH0-DOMAIN.auth0.com/",
  audience: 'https://movieanalyst.com'
});


//security with helmet
app.use(helmet());
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    styleSrc: ["'self'", 'maxcdn.bootstrapcdn.com']
  }
})));

app.use(helmet.hpkp({
  maxAge: ninetyDaysInSeconds,
  sha256s: [/* ... */],
  reportUri: 'https://example.com/hpkp-report'
}));
app.use(helmet.noCache());
app.use(helmet.referrerPolicy({ policy: 'same-origin' }));

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, './', 'dist')));

app.get('/api/post', (req, res) => {
  res.send([{id : 1}]);
});


app.get('/movies', (req, res) => {
	// Get a list of movies and their review scores
	let movies = [
		{title : 'Suicide Squad', release: '2016', score: 8, reviewer: 'Robert Smith', publication : 'The Daily Reviewer'},    
		{title : 'Batman vs. Superman', release : '2016', score: 6, reviewer: 'Chris Harris', publication : 'International Movie Critic'},
		{title : 'Captain America: Civil War', release: '2016', score: 9, reviewer: 'Janet Garcia', publication : 'MoviesNow'},
		{title : 'Deadpool', release: '2016', score: 9, reviewer: 'Andrew West', publication : 'MyNextReview'},
		{title : 'Avengers: Age of Ultron', release : '2015', score: 7, reviewer: 'Mindy Lee', publication: 'Movies n\' Games'},
		{title : 'Ant-Man', release: '2015', score: 8, reviewer: 'Martin Thomas', publication : 'TheOne'},
		{title : 'Guardians of the Galaxy', release : '2014', score: 10, reviewer: 'Anthony Miller', publication : 'ComicBookHero.com'},
	]

	/*MongoClient.connect('mongodb://localhost:27017/animals', function (err, db) {
		if (err) throw err

		db.collection('mammals').find().toArray(function (err, result) {
		if (err) throw err

		console.log(result)
		})
	})*/

  // Send the response as a JSON array
  res.json(movies);
})

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './', 'dist', 'index.html'));
});

module.exports = app;