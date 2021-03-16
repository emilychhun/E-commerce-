
// Dependencies
// =============================================================

let express = require('express');
let sequelize = require('./config/connection');
let routes = require('./routes');
// Sets up the Express App
// =============================================================

let app = express();
let PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static directory

app.use(routes);

// sync sequelize models to the database, then turn on the server
//test
sequelize.sync({ force: false }).then(() => {
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
});
