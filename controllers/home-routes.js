const express = require('express');
const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/', function(req, res, next) {
    console.log('working');
});

module.exports = router;