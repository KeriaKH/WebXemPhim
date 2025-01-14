const express = require('express');
const { getListAnime, getAnime } = require('../controllers/animeController');

const router=express.Router();

router.get('/getAnimeList',getListAnime)
router.get('/getAnime/:id',getAnime)

module.exports=router
