// import { Router } from 'express';
// const Router = require('express').Router;
const express = require('express');
const { postAddGeneralUser } = require('../controllers/user.controller.js');

const router = express.Router();

console.log(postAddGeneralUser);

router.route("/post").post(postAddGeneralUser);
// post("/post", postAddGeneralUser);


module.exports = router;