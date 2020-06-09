exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                      'mongodb://atugman:unc123@ds231090.mlab.com:31090/movie-game2';
exports.PORT = process.env.PORT || 8080;
