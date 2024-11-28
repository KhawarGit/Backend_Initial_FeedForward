// import { Router } from 'express';
// const Router = require('express').Router;
const express = require('express');
const { postAddGeneralUser, postLogin } = require('../controllers/user.controller.js');

const router = express.Router();

console.log(postAddGeneralUser);

router.route("/post").post(postAddGeneralUser);
router.route("/login").post(postLogin);


module.exports = router;