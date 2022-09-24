const express = require('express');
const connection = require('./config/connection');
const routes = require('./routes');
const PORT = process.env.PORT || 80;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

connection.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on ${PORT}`);
    });
})