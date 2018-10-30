var express=require('express');
var bodyParser=require('body-parser');


var {mongoose}=require('./db/mongoose.js');         //keep distance between local and global variables
var {Todo}=require('./models/todo.js');
var {User}=require('./models/user.js');


var app=express();
app.use(bodyParser.json());

app.post('/todos', (req, res)=>{
    var todo=new Todo({
        text: req.body.text
    });

    todo.save().then((doc)=>{
        res.send(doc);
    },
        (e)=>{
        res.status(400).send(e);
        })
});


app.listen(3000, ()=>{
    console.log('Started on port 3000');
});























// var newTodo=new Todo({                      //tworzymy nowe Todos dla odpowiadajacego modelu
//     text: "   I\'m back .Terminator     "
// });
//save new something

// newTodo.save().then((doc)=>{
//     console.log('Saved todo ', doc);
// },(e)=>{
//     console.log('Unable to save data', e);
// });             //odpowiedzalne za zapis do bazy danych (mongo)
//do naszej bazy danych nie powinniśmy wrzucic encji ktora nie zawiera pola completed



// var newUser=new User({
//     email: 'jacek.rula@o2.pl'
// });
//
// newUser.save().then((doc)=>{
//     console.log('Successfully added to database ', doc);
// }, (err)=>{
//     console.log('Unable to save the data ', err);
// });