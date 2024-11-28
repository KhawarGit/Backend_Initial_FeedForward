const User = require('./../models/user.model.js');
const ApiError = require('./../utils/ApiError.js');
const ApiResponse = require('./../utils/ApiResponse.js');
const asyncHandler = require('./../utils/asyncHandler.js');
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
    
});



export {

};