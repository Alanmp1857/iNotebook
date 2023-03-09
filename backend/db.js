const mongoose = require('mongoose');

const mongoURI = `mongodb://localhost:27017/?directConnection=true`;

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully");
    })
}

// const connectToMongo = async () => {
//     try {
//         mongoose.set('strictQuery', false)
//         mongoose.connect(mongoURI)
//         console.log('Mongo connected')
//     } catch (error) {
//         console.log(error)
//     }
// }
mongoose.set("strictQuery", false);

module.exports = connectToMongo;