const mongoose = require('mongoose')


const uri='mongodb+srv://dbUser:dbUser@cluster0.tal3g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const connectDB =async()=> {
   await mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
    });
   console.log('db connected..!')
}

module.exports = connectDB