const config: Object = {
	env: process.env.NODE_ENV || 'development',
	spotify: {
		client: process.env.SPOTIFY_CLIENT_ID,
		secret: process.env.SPOTIFY_CLIENT_SECRET,
	},
	port: process.env.PORT,
}

export default config;
