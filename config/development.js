module.exports = {
	PORT: 5000,
	JWT_SECRET: process.env.JWT_SECRET,
	DB: {
		MONGO_URL: process.env.MONGO_URL
	}
};