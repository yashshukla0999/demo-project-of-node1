const express = require('express');
// const path = require('path');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
// const Admin = require('./models/admin'); 
const adminRoute = require('./routes/adminRoter')
app.use(bodyParser.json({ extended: false }));
app.use(cors());
app.use(adminRoute)

sequelize
    .sync()
    .then((result) => {
        console.log('database connected');
        app.listen(8000);
    })
    .catch((err) => console.log(err));
