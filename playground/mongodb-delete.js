// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if(error){
        console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to MongoDB server');
    
    //Delete Many
    // var db = client.db('TodoApp');
    // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    
    //deleteOne
    // var db = client.db('TodoApp');
    // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    var db = client.db('TodoApp');
    db.collection('Todos').deleteOne({_id: new ObjectID('5b13b12c130b46672a72d661')}).then((result) => {
        console.log(result);
    });

    // client.close();
});