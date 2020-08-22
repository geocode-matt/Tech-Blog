const express = require('express');
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', function(req, res, next) {
    console.log('working');
});

module.exports = router;