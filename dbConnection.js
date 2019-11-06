
/** Only this file has to initialize database.
 * All DB upgrades has to be done here only.
 * Documentation for reference http://mongoosejs.com/docs/connections.html
 * */

let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

class MongooseConnection {
    connect() {
        return new Promise((resolve, reject) => {

            mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, (err) => {
                if (err) {
                    return reject(err);
                }
                console.log("The database has connected");
                return resolve();
            });
        });
    };
}

exports = module.exports = new MongooseConnection();