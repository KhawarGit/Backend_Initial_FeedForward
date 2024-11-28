// // const User = require('./../models/user.model.js');
// const ApiError = require('./../utils/ApiError.js');
// const ApiResponse = require('./../utils/ApiResponse.js');
// const asyncHandler = require('./../utils/asyncHandler.js');
// const { passwordHasher, passwordValidator } = require('./../HelperFunctions/passwordHasher.helper.js');
// const Database_Query = require('./../db/query.js');

// // username and password cannot be null, those are required fields.


// // registering general user.
// // ALGO
// // frontend provides : name(f m l) , email and password.
// // i will general user name as first part of email, before @.
// // then have to hash the password before saving it to database using bcrypt has with salt.
// // then make INSERT query to the database.
// // then query the user and sent back the id of user
// const postAddGeneralUser = asyncHandler( async(req, res) => {
//     const { name, email, password } = req.body;
//     names_seperated = name.split(" ");

//     // generate uername
//     username = email.split("@")[0];

//     // hash the password.
//     hashedPass = await passwordHasher(password);

//     // make db call.
//     await Database_Query(`INSERT INTO [User](emailAddress, username, password, firstName, middleName, lastName) VALUES(${email}, ${username}, ${hashedPass}, ${names_seperated[0]}, ${names_seperated[1]}, ${names_seperated[2]})`);

//     // check for User creation and send back the id of user.
//     let createdUserId = await Database_Query(
//         `Select id from [User] where emailAddress=${email}`
//     );
//     res.status(201).json(
//         ApiResponse(
//             201,
//             { createdUserId }
//         )
//     );
// });

// const loginWithEmail = asyncHandler( async (req, res) => {

// });

// const VerifyUserMobilePhoneThroughOTP = asyncHandler(async(req, res) => {

// });



// exports = {
//     postAddGeneralUser,
//     loginWithEmail,
//     VerifyUserMobilePhoneThroughOTP
// };

// controllers/user.controller.js
const ApiError = require('./../utils/ApiError.js');
const ApiResponse = require('./../utils/ApiResponse.js');
const asyncHandler = require('./../utils/asyncHandler.js');
const { passwordHasher } = require('./../HelperFunctions/passwordHasher.helper.js');
const Database_Query = require('./../db/query.js');
const connectionString = require('./../db/config.js');
const sql = require('msnodesqlv8');

// Registering general user
const postAddGeneralUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    // Split the name into parts
    const names_separated = name.split(" ");
    const username = email.split("@")[0];  // Generate username from email
    const hashedPass = await passwordHasher(password);

    console.log("No error")
    // Make database call to insert new user
    write_query = `INSERT INTO [User](emailAddress, username, password, firstName, middleName, lastName) VALUES('${email}', '${username}', '${hashedPass}', '${names_separated[0]}', '${names_separated[1] || ''}', '${names_separated[2] || ''}')`;

    // sql.query(
    //     connectionString,
    //     write_query,
    //     async (err, rows) => {
    //         if (err) {
    //             new ApiError(
    //                 500,
    //                 "Inernal Server Error when writing on database",
    //                 err
    //             )
    //         } else{
    //             console.log("success");
    //         }
    //     }
    // );

    await Database_Query(write_query);

    // Retrieve and send back the new user's ID
    let createdUser = `SELECT id FROM [User] WHERE emailAddress = '${email}'`;
    let createdUserDb = await Database_Query(createdUser);
    // sql.query(
    //     connectionString,
    //     createdUser,
    //     async(err, rows) => {
    //         if (err) {
    //             new ApiError(
    //                 500,
    //                 "Inernal Server Error when writing on database",
    //                 err
    //             )
    //         } else{
    //             console.log(rows)
    //             createdUserDb = rows;
    //         }
    //     }
    // );
    console.log("created user is ",createdUserDb)
    res.status(201).json(new ApiResponse(201, { createdUserId: createdUserDb[0].id }));
});

module.exports = {
    postAddGeneralUser,  // Ensure this is being exported
};
