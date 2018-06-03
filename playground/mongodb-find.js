// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if(error){
        console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to MongoDB server');
    // var db = client.db('TodoApp');
    // db.collection('Todos').find({_id: new ObjectID('5b13a3e9130b46672a72d4bd')}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err);
    // });
    // var db = client.db('TodoApp');
    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err);
    // });
    var db = client.db('TodoApp');
    db.collection('Users').find({name: 'Jin'}).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch Todos', err);
    });
    // client.close();
});