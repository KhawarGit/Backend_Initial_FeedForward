const asyncHandler = require('./../utils/asyncHandler.js');
const ApiError = require('./../utils/ApiError.js');
const connectionString = require('./config.js');
const sql = require('msnodesqlv8')


// const Database_Query = asyncHandler (async ( query ) => {
//     sql.query(
//         connectionString,
//         query,
//         (err, rows) => {
//             console.log("Control here.")
//             if(err){ 
//                 console.error(err);
//                 throw new ApiError(
//                     500,
//                     "Internal server error! something went wrong when accessing database.",
//                     err
//                 );
//             } else{
//                 return rows;
//             }
//         }
//     )
// });

const Database_Query = async (query) => {
    return new Promise((resolve, reject) => {
        sql.query(connectionString, query, (err, result) => {
            if (err) {
                console.log(err);
                reject(new ApiError(500, "Internal Server Error when accessing database", err));
            } else {
                resolve(result);  // Return the query results
            }
        });
    });
};
module.exports = Database_Query;

// // const sql = require('mssql'); // Ensure this is imported

// const Database_Query = async (query) => {
//     return new Promise((resolve, reject) => { // Wrap in a Promise
//         sql.query(connectionString, query, (err, result) => {
//             if (err) {
//                 console.error("Database Error:", err);
//                 reject(new ApiError(500, "Database query failed.", err));
//             } else {
//                 resolve(result.recordset); // Resolve with query result
//             }
//         });
//     });
// };



// // Database_Write_And_Read_Query = asyncHandler (async (con_str, query) => {
// //     await sql.connect(
// //         con_str,
// //         query,
// //         (err, rows) => {
// //             if(err){ 
// //                 console.error(err);
// //                 throw new ApiError(
// //                     500,
// //                     "Internal server error! something went wrong when writing database.",
// //                     err
// //                 );
// //             } else{
// //                 Database_Read_Query
// //                 return rows;
// //             }
// //         }
// //     )
// // });

// module.exports = Database_Query;


// const mssql = require('mssql'); // Ensure you import your SQL library
// const ApiError = require('./../utils/ApiError.js');
// const connectionString = require('./config.js'); // Your connection config

// const Database_Query = async (query) => {
//     try {
//         const pool = await mssql.connect(connectionString); // Establish the connection
//         const result = await pool.request().query(query); // Run the query using a request object
//         return result.recordset; // Return the result set
//     } catch (err) {
//         console.error(err);
//         throw new ApiError(500, "Internal server error! Something went wrong when accessing the database.", err);
//     }
// };

// module.exports = Database_Query;
