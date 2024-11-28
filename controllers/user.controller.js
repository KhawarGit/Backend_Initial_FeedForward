const User = require('./../models/user.model.js');
const ApiError = require('./../utils/ApiError.js');
const ApiResponse = require('./../utils/ApiResponse.js');
const asyncHandler = require('./../utils/asyncHandler.js');
const { passwordHasher, passwordValidator } = require('./../HelperFunctions/passwordHasher.helper.js');
const Database_Query = require('./../db/query.js');

// username and password cannot be null, those are required fields.


// registering general user.
// ALGO
// frontend provides : name(f m l) , email and password.
// i will general user name as first part of email, before @.
// then have to hash the password before saving it to database using bcrypt has with salt.
// then make INSERT query to the database.
// then query the user and sent back the id of user
const postAddGeneralUser = asyncHandler( async(req, res) => {
    const { name, email, password } = req.body;
    names_seperated = name.split(" ");

    // generate uername
    username = email.split("@")[0];

    // hash the password.
    hashedPass = await passwordHasher(password);

    // make db call.
    await Database_Query(`INSERT INTO [User](emailAddress, username, password, firstName, middleName, lastName) VALUES(${email}, ${username}, ${hashedPass}, ${names_seperated[0]}, ${names_seperated[1]}, ${names_seperated[2]})`);

    // check for User creation and send back the id of user.
    let createdUserId = await Database_Query(
        `Select id from [User] where emailAddress=${email}`
    );

    ApiResponse(
        201,
        { createdUserId }
    )
});



export {

};