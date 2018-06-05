const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');


// Todo.remove({}).then((result) => {
//     console.log(result);
// });

//Todo.findOneAndRemove().then();
Todo.findByIdAndRemove('5b13f698cd3a573e986b8627').then((todo) => {
    console.log(todo);
}, (err) => {
    console.log(err);
});
// var id = '5b13f698cd3a573e986b86271';
// if(!ObjectID.isValid(id)){
//     console.log('Id not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// }, (err) => {
//     console.log('Unable to find ', err);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// }, (err) => {
//     console.log('Unable to find ', err);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         console.log('Cannot find Id');
//     }
//     console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));