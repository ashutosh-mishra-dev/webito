
const mongoose = require("mongoose");

const connectToDb = async () => {
    mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/webito")
.then((conn)=>{
        console.log("connected to DB : ",conn.connection.host);
    })
    .catch((err)=>{
        console.error("ERROR IS : " , err.message);
        process.exit(1); 
    })
}

module.exports = connectToDb;