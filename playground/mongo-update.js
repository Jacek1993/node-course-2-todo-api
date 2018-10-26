const {MongoClient, ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        console.log('Something went wrong: ', err);
    }
    console.log('Connected to MongoDB server');
    // db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5bd35cc1a79bb6960190d701')},
    //     {
    //         $set:{completed: true}                                          //funkcja update ma specjalne operatory np $set, $inc, $max, $null
    //     },
    //     {
    //         returnOriginal: false
    //     }
    //     ).then((result)=>{
    //         console.log(result);
    // });

    db.collection('User').findOneAndUpdate({_id: 123},
        {$set:{name: 'Jack'}, $inc:{age: 1}},
        {returnOriginal: false}).then((result)=>{
            console.log(result);
    });
    db.close();
});