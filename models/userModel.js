

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is Required'],
        trim: true,
        maxLength: [20, 'Name must be less than 20 char']
    },
    email: {
        type: String,
        require: [true, "email is required"],
        unique: true
    },
    password:{},
    dob:{},
    city:{},
    state:{},
    pincode:{},
    skills:{},
    hobby:{},
    collage_name:{}
})

module.exports = mongoose.model("User",userSchema);