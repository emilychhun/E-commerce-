
// Dependencies
// =============================================================

const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./routes');
// Sets up the Express App
// =============================================================

const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static directory

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
});
