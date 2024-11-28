// require('dotenv').config()
const dotenv = require('dotenv');
const app = require('./app.js');
const { connectionString } = require('./db/config.js');
const { PORT } = require('./constants.js');
const sql = require('msnodesqlv8');
// Importing Router middlewares
const UserRouter = require('./routes/user.router.js');
const OrgRouter = require('./routes/organization.router.js');

dotenv.config({
    path: './env'
});

// "immediately invoked function expression" (IIFE)
//check info about IIFE in ./db/config.js
//; is used in start of IIFE to command the translator that last command is ended , as now , usually people dont place semi-colon after commands in Javascript.

// read Query
// const query = "SELECT * FROM UserRole"
// sql.query(connectionString,
//   query, 
//   (err, rows) => {
//     if(err) console.log(err);
//     else console.log(rows);
//   }
// );

// write query
// const query1 = "INSERT INTO LINKTYPE(socialMedia) VALUES('Twitter')";
// sql.query(connectionString,
//   query1, 
//   (err, rows) => {
//     if(err) console.log(err);
//     else console.log(rows);
//   }
// );

//Configuring Router Middleware
app.use("/user", UserRouter);
app.use("/org", OrgRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})

