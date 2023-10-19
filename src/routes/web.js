const express = require('express');
const router = express.Router();
const {
    getHomepage,
    getAbc,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser
} = require('../controllers/homeController');

// router.get('/cuong', (req, res) => {
//     res.render('sample.ejs');
// });
router.get('', getHomepage);

// router.get('/abc', (req, res) => {
//     res.send('Hello---->World! & nodemon');
// });
router.get('/abc', getAbc);

router.get('/create', getCreatePage);
router.get('/update/:id', getUpdatePage);

router.post('/create-user', postCreateUser);
router.post('/update-user', postUpdateUser);

module.exports = router;
