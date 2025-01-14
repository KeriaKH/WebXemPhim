const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());    
app.use(bodyParser.json());

const animeRoutes=require('./routes/animeRoutes');
app.use('/Anime',animeRoutes)
const chapterRoutes=require('./routes/chapterRoutes');
app.use('/Chapter',chapterRoutes)

module.exports= app