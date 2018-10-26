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
    // db.collection('Todos').find({
    //     _id: new ObjectID('5bd33c23a79bb6960190ca6b')
    //         }).toArray().then((docs)=>{
    // console.log('Todos');
    // console.log(JSON.stringify(docs, undefined, 2));
    // },(err)=>{
    //     console.log('Unable to fetch todos', err)
    // });                                    //toArray() zwraca Promise dlatego wywolujemy dla niej then()


    // db.collection('Todos').find().count().then((count)=>{
    //     console.log('Todos count: ', count)
    // }, (err)=>{
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('User').find({name: 'Jacek'}).count().then((count)=>{
        console.log(`Users numer that name is equal Jacek: ${count}`)
    }, (err)=>{
        console.log('Something went wrong: ',err);
    })



 //   db.close();
});