const { request } = require('express');
const connection = require('../config/database');
const {
    getAllUsers,
    createUser,
    getUserById,
    updateUserById,
    deleteUserById
} = require('../services/CRUDService');

const getAbc = (req, res) => {
    // res.send('hello ABC');
    res.render('sample.ejs');
};

const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    // console.log('>>>>> check results: ', results);
    return res.render('home.ejs', { listUsers: results });
};

const getCreatePage = (req, res) => {
    res.render('create.ejs');
};

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    //let {email, name, cỉty} = req.body; //cách viết ngắn hơn
    console.log('email = ', email, ', name = ', name, ', city = ', city);
    let results = await createUser(email, name, city);
    console.log('>>>> check results: ', results);
    res.send('Created user succeed');
};

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    console.log('>>>> check results: ', user);
    res.render('edit.ejs', { userEdit: user });
};

const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    let userId = req.body.userId;
    //let {email, name, cỉty} = req.body; //cách viết ngắn hơn
    console.log('email = ', email, ', name = ', name, ', city = ', city, ', user_id = ', userId);
    let results = await updateUserById(email, city, name, userId);
    console.log('>>>> check results: ', results);
    // res.send('Updated user succeed');
    res.redirect('/');
};

const postDeletePage = async (req, res) => {
    let userId = req.params.id;
    let user = await getUserById(userId);
    res.render('delete.ejs', { userEdit: user });
};

const postDeleteUser = async (req, res) => {
    let id = req.body.userId;
    //let {email, name, cỉty} = req.body; //cách viết ngắn hơn
    deleteUserById(id);
    res.redirect('/');
};

module.exports = {
    getHomepage,
    getAbc,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    postDeletePage,
    postDeleteUser
};
