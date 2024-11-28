const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const ApiError = require('./../utils/ApiError.js');

const passwordHasher = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = bcrypt.hash(password, salt, 10);
        return hashedPassword;       
    } catch (error) {
        new ApiError(
            500,
            "Internal Server Error, unable to hash the information.",
            error
        )
    }

};

const passwordValidator = async (
    enteredPassword, 
    actualHashedPasswordFromDb
) => {
    try {
        return await bcrypt.compare(enteredPassword, actualHashedPasswordFromDb);

    } catch (error) {
        new ApiError(
            500,
            "Internal Server Error, error in validating the user.",
            error
        )
    }
}

module.exports = {
    passwordHasher,
    passwordValidator
}