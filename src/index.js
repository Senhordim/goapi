
// Initial config
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Json config
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

// middlewares
const { 
    validatePresencePersonFields,  
    interceptorRequest,
} = require('./app/middlewares')

// Routes
const { homeRoutes, personRoutes } = require('./routes');

app.use(interceptorRequest);
app.use('/person', validatePresencePersonFields, personRoutes);
app.use('/', homeRoutes);

// Server
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@goapi.a8xqp.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
    .then(() => {
        console.log('mongodb iniciado')
        app.listen(PORT, () => {
            console.log(`listening on port ${PORT}`);
        });
    })
    .catch((error) => console.log(error));
