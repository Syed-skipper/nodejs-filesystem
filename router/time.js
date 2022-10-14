const express = require('express');
const router = express.Router();
const createdTime = require("../module/timestamp")

router.post("/create", createdTime.createTime);
router.get('/read', createdTime.getTime)
module.exports = router;



