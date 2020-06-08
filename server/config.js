exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                      'mongodb://atugman:unc123@ds151059.mlab.com:51059/test2';
exports.PORT = process.env.PORT || 8080;
