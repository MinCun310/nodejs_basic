const connection = require('../config/database');

const getAllUsers = async () => {
    let [results, fields] = await connection.query('SELECT * FROM Users');
    return results;
};

const createUser = async (email, name, city) => {
    //let {email, name, cỉty} = req.body; //cách viết ngắn hơn
    // console.log('email = ', email, ', name = ', name, ', city = ', city);
    let [results, fields] = await connection.query(
        `INSERT INTO Users(email,name,city)
        VALUES (?, ?, ?)`,
        [email, name, city]
    );
    return results;
};

const getUserById = async (userId) => {
    let [results, fields] = await connection.query(`SELECT * FROM Users u WHERE id = ? `, [userId]);
    let user = results && results.length > 0 ? results[0] : {};
    return user;
};

const updateUserById = async (email, city, name, userId) => {
    let [results, fields] = await connection.query(
        `UPDATE Users 
        SET email = ?, city = ?, name = ?
        WHERE id = ? ;`,
        [email, city, name, userId]
    );
    return results;
};

const deleteUserById = async (id) => {
    let [results, fields] = await connection.query(`DELETE FROM Users WHERE id = ? `, [id]);
    return results;
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById
};
