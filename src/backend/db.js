const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://kodflix:kodflix@127.0.0.1:27017/kodflix";


function connect() {
  return new Promise((resolve, reject) => {
      MongoClient.connect(url, function(err, db) {
    if (err) reject (err);
    var dbo = db.db("kodiflix");
      resolve(dbo);
    });
  });
}
module.exports = connect;