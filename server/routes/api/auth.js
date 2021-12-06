const express = require("express");

const app = express.Router();


// temporary user data
const Users = {
    Yash: {
        Name:"Yash Patel",
        //! Use has password always
        Password: "yash",
        Type: "Admin", // * Student ,Admin, Mentor, Disabled etc.
        Verified: true,
        Personal: {
            Email: "yash@gmail.com",
            Phone: +919876543210
        },
        CreatedAt: new Date()
    },
    John: {
        Name:"John Patel",
        //! Use has password always
        Password: "john",
        Type: "Student", // * Student ,Admin, Mentor, Disabled etc.
        Verified: false,
        Personal: {
            Email: "john@gmail.com",
            Phone: +918796543210
        },
        CreatedAt: new Date()
    }
}


module.exports = app;