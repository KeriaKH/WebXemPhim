const express = require('express');
const { getListChapter } = require('../controllers/chapterController');

const router=express.Router()

router.get("/getListChapter/:id",getListChapter)

module.exports=router