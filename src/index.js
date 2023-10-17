require('dotenv').config(); //import dotenv
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');

console.log('>>>check env: ', process.env.PORT);

const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

//config req.body
app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

//config template engine, config static files
configViewEngine(app);

//khai báo route
app.use('', webRoutes);

//test connection

// simple query

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
});
