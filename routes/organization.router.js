const express = require('express');
const {postOrganizationRegister, getOrgInfo} = require('./../controllers/organization.controller.js');

const router = express.Router();

console.log(postOrganizationRegister);

router.route("/post").post(postOrganizationRegister);
router.get("/userOrgs", getOrgInfo);
// post("/post", postAddGeneralUser);


module.exports = router;