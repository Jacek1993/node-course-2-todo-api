//const MongoClient= require('mongodb').MongoClient;            //uzywanie starego sposobu bez {name_of_property} ekstrakcji notka ponizej*
const {MongoClient, ObjectID}= require('mongodb');

var obj=new ObjectID();
console.log(obj);

//wyekstrahoowanie danych z JSON'a
//     var user={name:'Jacek', age:25};
//     var {name}=user;
//     console.log(name);

//uzywajac versji 3 pakiety mongodb nalezy:
//-zamiana argumentu przy polaczeniu z baza z (err, db) na (err, clinet)
//-gdy polaczenie jest udane odnosimy sie z clienta do bazy danych => const db=clinet.db('TodoApp')
//zamykajac polaczenie piszemy client.close()

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{           //mongo tworzy baze danych dopiero wtedy gdy zacznie sie przesylac do niej dane
    if(err){
       return  console.log('Unable to connect to mongodb server');      //return po to zeby program dalej sie nie wykonywal

    }
   console.log('Connected to mongodb Server');
    //
    // db.collection('Todos').insertOne({
    //    text: 'Something to do',
    //    completed: false
    // }, (err, result)=>{
    //     if(err){
    //         return console.log('Unable to insert toDo',err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2));                            //ops przechowuje wszystkie elementy (krotki) ktore zostaly wrzucone do bazy danych
    // });                                                                      //collection to takie tabele w sql


    db.collection('User'). insertOne({
        name: 'Jacek',
        age: 25,
        location: 'Krakow'
    }, (err, result)=>{
        if(err){
            return console.log('Unable to insert data', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    });
    db.close();
});