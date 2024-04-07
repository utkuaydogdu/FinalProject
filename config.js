const mongoose = require("mongoose");

const connect = mongoose.connect("mongodb+srv://aydogduutku:L3pfxfvBOr3NjMYE@cluster0.xdcijwb.mongodb.net/")

connect.then(() => {
    console.log(`Database connected`);
})
.catch(() => {
    console.log(`Database cant be connected`);
})
const LogInScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }
});

const collection = new mongoose.model("web", LogInScheme);

console.log("Database connected");

module.exports = collection;