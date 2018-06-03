// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if(error){
        console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to MongoDB server');
    
    // var db = client.db('TodoApp');
    // db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5b13b277130b46672a72d6a3')}, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    var db = client.db('TodoApp');
    db.collection('Users').findOneAndUpdate({_id: new ObjectID('5b139dffd2b06537e8071c45')},
    {
        $set: {
            name: 'Ali'
        },
        $inc: {
            age: 3
        }
    },
    {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // client.close();
});