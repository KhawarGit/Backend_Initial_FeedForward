const asyncHandler = require('./../utils/asyncHandler.js');
const ApiError = require('./../utils/ApiError.js');
const { connectionString } = require('./db/config.js');

Database_Query = asyncHandler (async ( query ) => {
    await sql.query(
        connectionString,
        query,
        (err, rows) => {
            if(err){ 
                console.error(err);
                throw new ApiError(
                    500,
                    "Internal server error! something went wrong when accessing database.",
                    err
                );
            } else{
                return rows;
            }
        }
    )
});


// Database_Write_And_Read_Query = asyncHandler (async (con_str, query) => {
//     await sql.connect(
//         con_str,
//         query,
//         (err, rows) => {
//             if(err){ 
//                 console.error(err);
//                 throw new ApiError(
//                     500,
//                     "Internal server error! something went wrong when writing database.",
//                     err
//                 );
//             } else{
//                 Database_Read_Query
//                 return rows;
//             }
//         }
//     )
// });

module.exports = Database_Query;