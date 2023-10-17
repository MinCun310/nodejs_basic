const { request } = require('express');
const connection = require('../config/database');

const getAbc = (req, res) => {
    // res.send('hello ABC');
    res.render('sample.ejs');
};

const getHomepage = (req, res) => {
    //process data
    //call model
    // connection.query('SELECT * FROM Users u', function (err, results, fields) {
    //     let users = results;
    //     console.log('>>>>>results=', results); // results contains rows returned by server // console.log('>>>>>fields=', fields); // fields contains extra meta data about results, if available
    //     console.log('>>>>>check users ', users);
    //     res.send(JSON.stringify(users));
    // });
    return res.render('home.ejs');
};

const postCreateUser = (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    //let {email, name, cỉty} = req.body; //cách viết ngắn hơn
    console.log('email = ', email, ', name = ', name, ', city = ', city);
    connection.query(
        `INSERT INTO Users(email,name,city)
        VALUES (?, ?, ?)`,
        [email, name, city],
        function (err, results) {
            console.log('>>>>>>>>results: ', results);
            res.send('created user succeed');
        }
    );
};

module.exports = {
    getHomepage,
    getAbc,
    postCreateUser
};
