const express = require('express');
const router = express.Router();
const { getHomepage, getAbc, postCreateUser } = require('../controllers/homeController');

// router.get('/cuong', (req, res) => {
//     res.render('sample.ejs');
// });
router.get('', getHomepage);

// router.get('/abc', (req, res) => {
//     res.send('Hello---->World! & nodemon');
// });
router.get('/abc', getAbc);

router.post('/create-user', postCreateUser);

module.exports = router;
