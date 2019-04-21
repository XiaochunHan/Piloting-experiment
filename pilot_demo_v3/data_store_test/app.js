
// 1v4JulTEySEtxqXD
console.log("test-1");
var MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://test-user_1:1v4JulTEySEtxqXD@cluster0-zovob.mongodb.net/test?retryWrites=true";

console.log("test-2");
MongoClient.connect(url, function(err, client) {
    if(err) {
         console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
    }
    console.log('Connected...');
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});
console.log("mongodb loaded~");