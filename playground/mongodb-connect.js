// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if(error){
        console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to MongoDB server');
    // var db = client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //     text: 'Somethong to do',
    //     completed: false
    // }, (error, result) => {
    //     if(error){
    //         console.log('Unable to insert todo', error);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    // var db = client.db('TodoApp');
    // db.collection('Users').insertOne({
    //     name: 'Amin',
    //     age: 27,
    //     location: 'Islamabad'
    // }, (error, result) => {
    //     if(error){
    //         console.log('Unable to insert user', error);
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });
    client.close();
});