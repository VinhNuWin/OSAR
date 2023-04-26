require('dotenv').config();
const express = require('express');
const usersRoutes = require('./router/usersRoutes');
const incidentRoutes = require('./router/incidentRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./database/db');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true}));
app.use('/users', usersRoutes);
app.use('/incidents', incidentRoutes);

app.use((req,res, next) => {
    console.log(req.path, req.method)
    next()
})


app.listen(process.env.PORT, () => {
    console.log('API is listening on port', process.env.PORT);
});

