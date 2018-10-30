const mongoose=require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');          //schemat konfiguracji mongoose

module.exports = {mongoose};