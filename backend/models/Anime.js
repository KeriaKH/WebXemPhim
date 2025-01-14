const mongoose = require('mongoose');

// Định nghĩa schema cho HocSinh
const AnimeSchema = new mongoose.Schema({
  Name: String,
  Img: String,
  BigImg:String,    
  Describe: String,
  Rating: Number,
  Studio: String, 
  Category: [String],
  Url:String,
  NumberChapter: Number,
});

// Tạo model từ schema
const Anime = mongoose.model('Anime', AnimeSchema, 'Anime');

module.exports = Anime;  // Export model để sử dụng ở nơi khác