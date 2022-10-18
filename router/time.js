const express = require('express');
const router = express.Router();
const createdTime = require("../module/timestamp");

router.get('/read', createdTime.getTime);
router.get("/create", createdTime.createTime);

module.exports = router;



