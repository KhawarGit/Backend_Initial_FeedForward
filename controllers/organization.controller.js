const ApiError = require('./../utils/ApiError.js');
const ApiResponse = require('./../utils/ApiResponse.js');
const asyncHandler = require('./../utils/asyncHandler.js');
const { passwordHasher } = require('./../HelperFunctions/passwordHasher.helper.js');
const Database_Query = require('./../db/query.js');
const connectionString = require('./../db/config.js');
const sql = require('msnodesqlv8');

const postOrganizationRegister = asyncHandler ( async (req, res) => {
    const {
        org_name,
        org_email,
        cityId,
        country,
        contactNumber,
        postalCode,
        userId
    } = req.body;

    // validate the request body if it having all required fields.
    if ([
        org_name,
        org_email,
        cityId,
        country,
        contactNumber,
        postalCode
    ].some((field) => field?.trim() === "" || field === undefined)) {
        throw new ApiError("All Fields are required.");
    };

    let registerOrgQuery = `INSERT INTO Organization(organizationName, organizationEmail, cityId, contactNumber, postalCode, userId) VALUES('${org_name}', '${org_email}', ${parseInt(cityId)}, '${contactNumber}', '${postalCode}', ${parseInt(userId)})`;
    //execute query.
    console.log("Query here");
    await Database_Query(registerOrgQuery);

    //check successful creation.
    let org_creation_check_query = `select * from organization where organizationEmail = '${org_email}'`;
    let organizationRegistered = await Database_Query(org_creation_check_query);
    
    res.status(201).json(
        new ApiResponse(
            201,
            {
                organizationRegistered: organizationRegistered[0]
            }
        )
    )

});

const getOrgInfo = asyncHandler(async(req, res) => {
    const {userId} = req.body;
    let getQuery = `select id, organizationName, organizationEmail, contactNumber from Organization where userId = ${parseInt(userId)}`;

    result = await Database_Query(getQuery);
    res.status(200).json(
        new ApiResponse(
            200,
            {
                organizationInfo: (result == []) ? "No organization for this user are registered" : result 
            }
        )
    )

})


module.exports = {
    postOrganizationRegister,
    getOrgInfo

};
