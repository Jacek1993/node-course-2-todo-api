const {MongoClient, ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

   //deleteMany

    // db.collection('Todos').deleteMany({text: 'Lunch'}).then((result)=>{
    //     console.log(result.result);
    // } );

   //deleteOne

    // db.collection('Todos').deleteOne({text: 'Lunch'}).then((result)=>{
    //     console.log(result);
    // });

   //findOneAndDelete

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{                        //w odpowiedzi zwraca obiekt ktory zostal usuniety poprzez to zapytanie TO JEST PRZYDATNE!!!!!!!!!!
    //     console.log(result);
    // })

    db.collection('User').deleteMany({name: 'Jacek'}).then((result)=>{
        console.log(result.result);
    });

    setTimeout(()=>{
        db.collection('User').findOneAndDelete({_id: new ObjectID('5bd3345d9964e550398515c5')}).then((resutlt)=>{
            console.log(result);
        },(err)=>{
            console.log('Something went wrong: ', err)
        });
        console.log('After 2 seconds .....');
    }, 2000);


    //db.close()
});