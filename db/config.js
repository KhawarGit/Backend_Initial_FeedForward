// const sql = require("mssql/msnodesqlv8");

// var config = {
//     server: "DESKTOP-DKU3CTI\\SQLEXPRESS02",
//     database: "FeedForward_development",
//     driver: "msnodesqlv8",
//     user: "Khawar_feedforward_dev",
//     password: "IOASuLEtMwWlxkc",
//     options: {
//         trustedConnection: true
//     }
// };



// databaseConnector = async () => {
//     return new Promise(async(resolve, reject) => {
//       try {
//         sql.connect(config, function(err) {
//             if(err) console.log(err);
//             else console.log("Connection made successful.");
//         });
//         resolve();
//       } catch (error) {
//         console.log("MongoDB connection failed.");
//         reject();
//       }
//     })
// };
// module.exports = {
//     databaseConnector
// };
// // module.exports = sql;

const sql = require('msnodesqlv8');

const connectionString = `server=DESKTOP-DKU3CTI\\SQLEXPRESS02;Database=FeedForward_development;Trusted_Connection=Yes;Driver= {ODBC Driver 17 for Sql Server}`;

module.exports = {
  connectionString
}
