type config = {
	env: process.env.NODE_ENV || 'development',
	spotify: {
		client: process.env.SPOTIFY_API_CLIENT,
		secret: process.env.SPOTIFY_API_SECRET,
	}
}

module.exports = config;
