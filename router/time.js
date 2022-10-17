const express = require('express');
const router = express.Router();
const createdTime = require("../module/timestamp");

router.get('/read', createdTime.getTime);
router.post("/create", createdTime.createTime);

module.exports = router;



