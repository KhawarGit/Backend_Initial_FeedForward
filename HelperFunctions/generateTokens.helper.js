const JWT = require('jsonwebtoken');
const ApiError = require('./../utils/ApiError.js');

const generateAccessAndRefreshTokens = async(userId, userRole, username, fullName, email) => {
    try {
        
        const accessToken = JWT.sign(
            {
                id: userId,
                role: userRole,
                username,
                fullName,
                email
            },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: process.env.ACCESS_TOKEN_EXPIRY
            }
        );
        const refreshToken = JWT.sign(
            {
                id: userId
            },
            process.env.REFRESH_TOKEN_SECRET,
            {
                expiresIn: process.env.REFRESH_TOKEN_EXPIRY
            }
        );
        return{
            accessToken,
            refreshToken
        }
    } catch (error) {
        throw new ApiError(
            500,
            'Internal Server Error, when creating tokens.',
            error
        )
    }
}

module.exports = generateAccessAndRefreshTokens;